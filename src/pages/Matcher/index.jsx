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
  Spin,
  Row,
  Col,
  Statistic,
  Skeleton,
  List,
} from "antd";
import Spacer from "../../components/Spacer";
import { OpenAIOutlined, EyeOutlined } from "@ant-design/icons";
import { getCVs } from "../../apis/cvs";
import { getJDs } from "../../apis/jds";
import { matchingCV } from "../../apis/match";
import { generateCV } from "../../apis/generate";
import { roundNumber } from "../../utils/utils";

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
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [generateContent, setGenerateContent] = useState({
    cvId: "",
    jdId: "",
    data: {},
  });
  const [isGenerateLoading, setIsGenerateLoading] = useState(true);

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

  function handleGenerateMatch(cvId) {
    setIsGenerateModalOpen(true);
    if (
      generateContent.cvId === cvId &&
      generateContent.jdId === jds[selectedJD].key
    ) {
      return;
    }
    setIsGenerateLoading(true);
    generateCV(cvId, jds[selectedJD].key).then((data) => {
      console.log(data);
      setGenerateContent((_) => ({ cvId, jdId: jds[selectedJD].key, data }));
      setIsGenerateLoading(false);
    });
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
          <Button
            type="text"
            icon={<OpenAIOutlined />}
            style={{ color: "#727BDE" }}
            disabled={!cv.score}
            onClick={() => handleGenerateMatch(cv.key)}
          />
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
      <Modal
        open={isGenerateModalOpen}
        title={appStrings.language.matchPage.generateMatchTitle}
        onCancel={() => setIsGenerateModalOpen(false)}
        footer={[]}
      >
        <Skeleton loading={isGenerateLoading} active>
          <Row gutter={20}>
            {generateContent.data["score"]
              ? Object.keys(generateContent.data["score"]).map((key) => (
                  <Col span={6}>
                    <Statistic
                      title={key}
                      value={roundNumber(generateContent.data["score"][key])}
                      suffix="%"
                    />
                  </Col>
                ))
              : null}
          </Row>
          <Spacer height={20} />
          {generateContent.data["summarize"] ? (
            <>
              <Typography.Title level={5}>
                {appStrings.language.matchPage.generateMatchJDSummary}
              </Typography.Title>
              <Typography.Text>
                {generateContent.data["summarize"]["JDSummarization"]}
              </Typography.Text>
              <Typography.Title level={5}>
                {appStrings.language.matchPage.generateMatchJDRequirements}
              </Typography.Title>
              <List
                size="small"
                bordered
                dataSource={generateContent.data["summarize"]["JDRequirements"]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Spacer height={20} />
              <Typography.Title level={5}>
                {appStrings.language.matchPage.generateMatchCVSummary}
              </Typography.Title>
              <Typography.Text>
                {generateContent.data["summarize"]["CVSummarization"]}
              </Typography.Text>
              <Typography.Title level={5}>
                {appStrings.language.matchPage.generateMatchCVFulfillment}
              </Typography.Title>
              <List
                size="small"
                bordered
                dataSource={generateContent.data["summarize"]["CVFulfillments"]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </>
          ) : null}
        </Skeleton>
      </Modal>
    </>
  );
}
