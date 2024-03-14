import style from "./style.module.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MoreOutlined,
  CloudUploadOutlined,
  PlusOutlined,
  EyeOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Typography,
  Space,
  Upload,
  Spin,
  Card,
  Button,
  Row,
  Col,
  Flex,
  Popover,
  Popconfirm,
  Modal,
  Input,
} from "antd";
import SearchBox from "../../components/Search";
import appStrings from "../../utils/strings";
import { MessageContext } from "../../context/message";
import { deleteCV, getCVs, uploadCV } from "../../apis/cvs";
import { deleteJD, getJDs, uploadJD } from "../../apis/jds";
import { formatCVData, formatJDData } from "../../utils/utils";
import Spacer from "../../components/Spacer";
import useAppState from "../../hooks/appState";

export default function CVPage() {
  const navigate = useNavigate();
  const [isCVsLoading, setIsCVsLoading] = useState(true);
  const [cvs, setCvs] = useState([]);
  const [isJDsLoading, setIsJDsLoading] = useState(true);
  const [jds, setJds] = useState([]);
  const [isNewJDModalOpen, setIsNewJDModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const messageApi = useContext(MessageContext);
  const isCVUploading = useAppState((state) => state.isCVUploading);
  const setIsCVUploading = useAppState((state) => state.setIsCVUploading);
  const isJDUploading = useAppState((state) => state.isJDUploading);
  const setIsJDUploading = useAppState((state) => state.setIsJDUploading);

  // Form data state
  const [newJDTitle, setNewJDTitle] = useState("");
  const [newJDContent, setNewJDContent] = useState("");

  function checkUploadFileTypes(file) {
    const isPDF = file.type === "application/pdf";
    const isDOCX =
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (!isPDF && !isDOCX) {
      messageApi.error(appStrings.language.msg.uploadError);
    }
    return isPDF || isDOCX || Upload.LIST_IGNORE;
  }

  function handleOpenNewJDModal() {
    setIsNewJDModalOpen(true);
  }

  function handleCloseNewJDModal() {
    setIsNewJDModalOpen(false);
  }

  function handleUploadJD() {
    if (!newJDTitle || !newJDContent) {
      messageApi.error(appStrings.language.msg.emptyField);
      return;
    }
    setIsJDUploading(true);
    setIsNewJDModalOpen(false);
    uploadJD(newJDTitle, newJDContent)
      .then((data) => {
        setJds((prev) => [...prev, ...formatJDData([data])]);
        setIsJDUploading(false);
        messageApi.success(appStrings.language.msg.uploadJDSuccess);
      })
      .catch((error) => {
        console.error(error);
        messageApi.error(appStrings.language.msg.uploadJDError);
        setIsJDUploading(false);
      });
  }

  function handleSelectFile(file) {
    setSelectedFiles((_) => file.fileList);
  }

  function handleUploadFile() {
    setIsCVUploading(true);
    uploadCV(selectedFiles[0].originFileObj)
      .then((data) => {
        setCvs((prev) => [...prev, ...formatCVData([data])]);
        setIsCVUploading(false);
        messageApi.success(appStrings.language.msg.uploadCVSuccess);
        setSelectedFiles((_) => []);
      })
      .catch((error) => {
        console.error(error);
        setIsCVUploading(false);
        messageApi.error(appStrings.language.msg.uploadCVError);
        setSelectedFiles((_) => []);
      });
  }

  function handleNavigateToCVDetail(id) {
    navigate(`/cv/${id}`);
  }

  function handleDeleteCV(id) {
    deleteCV(id)
      .then((_) => {
        setCvs((prev) => prev.filter((cv) => cv.key !== id));
        messageApi.success(appStrings.language.msg.deleteCVSuccess);
      })
      .catch((error) => {
        console.error(error);
        messageApi.error(appStrings.language.msg.deleteCVError);
      });
  }

  function handleDeleteJD(id) {
    deleteJD(id)
      .then((data) => {
        setJds((prev) => prev.filter((jd) => jd.key !== id));
        messageApi.success(appStrings.language.msg.deleteJDSuccess);
      })
      .catch((error) => {
        console.error(error);
        messageApi.error(appStrings.language.msg.deleteJDError);
      });
  }

  useEffect(() => {
    // Fetch CVs
    getCVs().then((data) => {
      setCvs(formatCVData(data));
      setIsCVsLoading(false);
    });
    // Fetch JDs
    getJDs().then((data) => {
      setJds(formatJDData(data));
      setIsJDsLoading(false);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <SearchBox />
      <Space className={style.container} direction="vertical" size={20}>
        <Spin spinning={isCVsLoading}>
          <Flex align="center" justify="space-between">
            <Typography.Title level={3}>
              {appStrings.language.cvs.cv}
            </Typography.Title>
            <Upload
              accept=".pdf,.docx"
              beforeUpload={checkUploadFileTypes}
              fileList={[]}
              onChange={handleSelectFile}
              customRequest={() => handleUploadFile()}
            >
              <Button
                type="primary"
                icon={<CloudUploadOutlined />}
                disabled={isCVUploading}
              >
                {appStrings.language.components.btn.upload}
              </Button>
            </Upload>
          </Flex>
          <Row gutter={20}>
            {cvs.map((cv) => (
              <Col span={6}>
                <Card
                  title={cv.name}
                  extra={
                    <Popover
                      trigger="click"
                      content={
                        <Flex vertical>
                          <Button
                            type="text"
                            icon={<EyeOutlined />}
                            onClick={() => handleNavigateToCVDetail(cv.key)}
                          >
                            {appStrings.language.components.btn.view}
                          </Button>
                          <Popconfirm
                            title={appStrings.language.cvs.confirmDeleteCV}
                            onConfirm={() => handleDeleteCV(cv.key)}
                            icon={
                              <QuestionCircleOutlined
                                style={{ color: "red" }}
                              />
                            }
                          >
                            <Button
                              type="text"
                              danger
                              icon={<DeleteOutlined />}
                            >
                              {appStrings.language.components.btn.delete}
                            </Button>
                          </Popconfirm>
                        </Flex>
                      }
                    >
                      <Button type="text" icon={<MoreOutlined />} />
                    </Popover>
                  }
                ></Card>
                <Spacer height={20} />
              </Col>
            ))}
          </Row>
        </Spin>
        <Spin spinning={isJDsLoading}>
          <Flex align="center" justify="space-between">
            <Typography.Title level={3}>
              {appStrings.language.cvs.jd}
            </Typography.Title>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              disabled={isJDUploading}
              onClick={handleOpenNewJDModal}
            >
              {appStrings.language.components.btn.new}
            </Button>
          </Flex>
          <Row gutter={20}>
            {jds.map((jd) => (
              <Col span={6}>
                <Card
                  title={jd.title}
                  extra={
                    <Popover
                      trigger="click"
                      content={
                        <Flex vertical>
                          <Button type="text" icon={<EyeOutlined />}>
                            {appStrings.language.components.btn.view}
                          </Button>
                          <Popconfirm
                            title={appStrings.language.cvs.confirmDeleteJD}
                            onConfirm={() => handleDeleteJD(jd.key)}
                            icon={
                              <QuestionCircleOutlined
                                style={{ color: "red" }}
                              />
                            }
                          >
                            <Button
                              type="text"
                              danger
                              icon={<DeleteOutlined />}
                            >
                              {appStrings.language.components.btn.delete}
                            </Button>
                          </Popconfirm>
                        </Flex>
                      }
                    >
                      <Button type="text" icon={<MoreOutlined />} />
                    </Popover>
                  }
                >
                  <Typography.Text>{jd.content}</Typography.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Spin>
      </Space>
      <Modal
        title={appStrings.language.cvs.newJDModalTitle}
        open={isNewJDModalOpen}
        okText={appStrings.language.components.btn.add}
        cancelText={appStrings.language.components.btn.cancel}
        onCancel={handleCloseNewJDModal}
        onOk={handleUploadJD}
      >
        <Typography.Title level={5}>
          {appStrings.language.cvs.newJDModalTextTitle}
        </Typography.Title>
        <Input
          value={newJDTitle}
          onChange={(e) => setNewJDTitle(e.target.value)}
        />
        <Spacer height={20} />
        <Typography.Title level={5}>
          {appStrings.language.cvs.newJDModalTextContent}
        </Typography.Title>
        <Input.TextArea
          rows={10}
          value={newJDContent}
          onChange={(e) => setNewJDContent(e.target.value)}
        />
      </Modal>
    </div>
  );
}
