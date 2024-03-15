import style from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Space,
  Card,
  Flex,
  Button,
  Spin,
  Modal,
  Input,
  Popover,
  Popconfirm,
} from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Spacer from "../../components/Spacer";
import SearchBox from "../../components/Search";
import appStrings from "../../utils/strings";
import {
  getQuestions,
  uploadQuestion,
  deleteQuestion,
} from "../../apis/questions";
import useAppState from "../../hooks/appState";
import { MessageContext } from "../../context/message";

function formatData(data) {
  /**
   * Question object:
   * {
   *  id: number,
   *  title: string,
   *  content: string
   *  extraction: {...}
   * }
   */
  return data.map((item) => ({
    key: item.id,
    questions: item.title,
    description: item.content.slice(0, 50) + "...",
  }));
}

export default function QuestionsPage() {
  const messageApi = useContext(MessageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const isQuestionUploading = useAppState((state) => state.isQuestionUploading);
  const setIsQuestionUploading = useAppState(
    (state) => state.setIsQuestionUploading
  );

  const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState("");
  const [newQuestionContent, setNewQuestionContent] = useState("");
  const [newQuestionAnswer, setNewQuestionAnswer] = useState("");

  function handleOpenNewQuestionModal() {
    setIsNewQuestionModalOpen(true);
  }

  function handleCloseNewQuestionModal() {
    setIsNewQuestionModalOpen(false);
  }

  function handleUploadQuestion() {
    if (!newQuestionTitle || !newQuestionContent || !newQuestionAnswer) {
      messageApi.error(appStrings.language.msg.emptyField);
      return;
    }
    setIsQuestionUploading(true);
    setIsNewQuestionModalOpen(false);
    uploadQuestion(newQuestionTitle, newQuestionContent, newQuestionAnswer)
      .then((data) => {
        setQuestions((prev) => [...prev, ...formatData([data])]);
        setIsQuestionUploading(false);
        messageApi.success(appStrings.language.msg.uploadQuestionSuccess);
      })
      .catch((error) => {
        console.error(error);
        setIsQuestionUploading(false);
        messageApi.error(appStrings.language.msg.uploadQuestionError);
      });
  }

  function handleDeleteQuestion(id) {
    deleteQuestion(id)
      .then((_) => {
        setQuestions((prev) => prev.filter((item) => item.key !== id));
        messageApi.success(appStrings.language.msg.deleteQuestionSuccess);
      })
      .catch((error) => {
        console.error(error);
        messageApi.error(appStrings.language.msg.deleteQuestionError);
      });
  }

  useEffect(() => {
    // fetch questions from the server
    getQuestions().then((data) => {
      setQuestions(formatData(data));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <SearchBox />
      <Space className={style.container} direction="vertical" size={20}>
        <Flex align="center" justify="space-between">
          <Typography.Title level={4}>
            {appStrings.language.questions.title}
          </Typography.Title>
          <Button
            type="primary"
            disabled={isQuestionUploading}
            onClick={handleOpenNewQuestionModal}
          >
            {appStrings.language.questions.btn}
          </Button>
        </Flex>
        {isLoading ? (
          <Flex justify="center">
            <Spin />
          </Flex>
        ) : (
          questions.map((questions, index) => (
            <Card key={index}>
              <Flex align="center" justify="space-between">
                <Flex justify="center" vertical>
                  <Typography.Title level={5}>
                    {questions.questions}
                  </Typography.Title>
                  <Space size={10}></Space>
                  <Typography.Text>{questions.description}</Typography.Text>
                </Flex>
                <Popover
                  trigger="click"
                  content={
                    <Flex vertical>
                      <Button
                        type="text"
                        icon={<EyeOutlined />}
                        onClick={() => {}}
                      >
                        {appStrings.language.components.btn.view}
                      </Button>
                      <Popconfirm
                        title={
                          appStrings.language.questions.confirmDeleteQuestion
                        }
                        onConfirm={() => handleDeleteQuestion(questions.key)}
                        icon={
                          <QuestionCircleOutlined style={{ color: "red" }} />
                        }
                      >
                        <Button type="text" danger icon={<DeleteOutlined />}>
                          {appStrings.language.components.btn.delete}
                        </Button>
                      </Popconfirm>
                    </Flex>
                  }
                >
                  <Button type="text" icon={<MoreOutlined />} />
                </Popover>
              </Flex>
            </Card>
          ))
        )}
      </Space>
      <Modal
        title={appStrings.language.questions.newQuestionModalTitle}
        open={isNewQuestionModalOpen}
        okText={appStrings.language.components.btn.add}
        cancelText={appStrings.language.components.btn.cancel}
        onCancel={handleCloseNewQuestionModal}
        onOk={handleUploadQuestion}
      >
        <Typography.Title level={5}>
          {appStrings.language.questions.newQuestionModalTextTitle}
        </Typography.Title>
        <Input
          value={newQuestionTitle}
          onChange={(e) => setNewQuestionTitle(e.target.value)}
        />
        <Spacer height={20} />
        <Typography.Title level={5}>
          {appStrings.language.questions.newQuestionModalTextContent}
        </Typography.Title>
        <Input.TextArea
          rows={10}
          value={newQuestionContent}
          onChange={(e) => setNewQuestionContent(e.target.value)}
        />
        <Typography.Title level={5}>
          {appStrings.language.questions.newQuestionModalTextAnswer}
        </Typography.Title>
        <Input.TextArea
          rows={5}
          value={newQuestionAnswer}
          onChange={(e) => setNewQuestionAnswer(e.target.value)}
        />
      </Modal>
    </div>
  );
}
