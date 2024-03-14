import style from "./style.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/Search";
import appStrings from "../../utils/strings";
import {
  Card,
  Space,
  Typography,
  Flex,
  Button,
  Table,
  Tag,
  Modal,
  Radio,
  Popconfirm,
  Spin,
} from "antd";
import {
  DeleteOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { getCVs } from "../../apis/cvs";
import { getJDs } from "../../apis/jds";
import { matchingCV } from "../../apis/match";

function formatCVData(data) {
  /**
   * CV object:
   * {
   *  id: string,
   *  name: string,
   *  path: string,
   *  url: string,
   *  extraction: {...}
   * }
   */
  return data.map((item) => ({
    key: item.id,
    name: item.name,
    score: null,
  }));
}

function formatJDData(data) {
  /**
   * JD object:
   * {
   *  id: string,
   *  title: string,
   *  content: string
   * }
   */
  return data.map((item) => ({
    key: item.id,
    title: item.title,
    content: item.content.slice(0, 100) + "...",
  }));
}

export default function MatcherPage() {
  const navigate = useNavigate();
  const [isCVLoading, setIsCVLoading] = useState(true);
  const [isJDLoading, setIsJDLoading] = useState(true);
  const [isMatching, setIsMatching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cvs, setCvs] = useState([]);
  const [jds, setJds] = useState([]);
  const [selectedJD, setSelectedJD] = useState(0);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleModalOk() {
    setIsModalOpen(false);
  }

  function handleChangeJD(e) {
    setSelectedJD(e.target.value);
  }

  function handleMatchCV() {
    matchingCV(jds[selectedJD].key).then((data) => {
      const newCvs = cvs.map((cv) => {
        const score = Object.keys(data).includes(cv.key) ? data[cv.key] : null;
        if (score) {
          return {
            ...cv,
            score: score,
          };
        }
        return cv;
      });
      setCvs(newCvs);
      setIsMatching(false);
      setIsCVLoading(false);
    });
  }

  function handleNavigateToCVDetail(id) {
    navigate(`/cv/${id}`);
  }

  useEffect(() => {
    // Fetch cvs from the server
    getCVs().then((data) => {
      setCvs(formatCVData(data));
      setIsCVLoading(false);
    });
    // Fetch jds from the server
    getJDs().then((data) => {
      setJds(formatJDData(data));
      setIsJDLoading(false);
    });
  }, []);

  const columns = [
    {
      title: appStrings.language.matchPage.tableCVName,
      dataIndex: "name",
      key: "name",
    },
    {
      title: appStrings.language.matchPage.tableMatchScore,
      dataIndex: "score",
      key: "score",
      sorter: (a, b) => a.score - b.score,
      render: (score) => {
        if (score === null) {
          return <Tag color="gray"></Tag>;
        }
        score = (score * 100).toFixed(2);
        if (score < 50.0) {
          return <Tag color="red">{score}%</Tag>;
        }
        return <Tag color="green">{score}%</Tag>;
      },
    },
    {
      title: appStrings.language.matchPage.tableAction,
      key: "action",
      render: (cv) => (
        <Space>
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handleNavigateToCVDetail(cv.key)}
          ></Button>
          <Popconfirm
            title={appStrings.language.matchPage.deleteConfirm}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <Button danger type="text" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className={style.wrapper}>
        <SearchBox />
        <Space className={style.container} direction="vertical" size={20}>
          <Spin spinning={isJDLoading}>
            <Card>
              <Flex justify="space-between" align="center">
                <Space direction="vertical" size={1}>
                  <Typography.Text strong>
                    {jds[selectedJD] ? jds[selectedJD].title : null}
                  </Typography.Text>
                  <Typography.Text>
                    {jds[selectedJD] ? jds[selectedJD].content : null}
                  </Typography.Text>
                </Space>
                <Button type="primary" onClick={handleOpenModal}>
                  {appStrings.language.matchPage.selectJDBtn}
                </Button>
              </Flex>
            </Card>
          </Spin>
          <Button
            type="primary"
            size="large"
            style={{
              width: "100%",
            }}
            loading={isMatching}
            onClick={() => {
              setIsMatching(true);
              setIsCVLoading(true);
              handleMatchCV();
            }}
          >
            {appStrings.language.matchPage.startMatchBtn}
          </Button>
          <Spin spinning={isCVLoading}>
            <Table columns={columns} dataSource={cvs} pagination />
          </Spin>
        </Space>
      </div>
      <Modal
        title={appStrings.language.matchPage.selectJDBtn}
        open={isModalOpen}
        onCancel={handleModalClose}
        onOk={handleModalOk}
      >
        <Radio.Group
          className={style.modalRadio}
          value={selectedJD}
          onChange={handleChangeJD}
        >
          <Space direction="vertical" className={style.modalRadio}>
            {jds.map((jd, index) => (
              <Radio key={index} value={index} className={style.modalRadio}>
                <Card className={style.radioContent}>
                  <Space direction="vertical" size={1}>
                    <Typography.Text strong>{jd.title}</Typography.Text>
                    <Typography.Text>{jd.content}</Typography.Text>
                  </Space>
                </Card>
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Modal>
    </>
  );
}
