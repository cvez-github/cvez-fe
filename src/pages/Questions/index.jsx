import style from "./style.module.css";
import { useState, useEffect } from "react";
import SearchBox from "../../components/Search";
import { Typography, Space, Card, Flex, Button, Spin } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import appStrings from "../../utils/strings";
import { getQuestions } from "../../apis/questions";
import useAppState from "../../hooks/appState";

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
    id: item.id,
    questions: item.title,
    description: item.content.slice(0, 50) + "...",
  }));
}

export default function QuestionsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const isQuestionUploading = useAppState((state) => state.isQuestionUploading);

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
          <Button type="primary" disabled={isQuestionUploading}>
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
                <Button type="text" icon={<MoreOutlined />}></Button>
              </Flex>
            </Card>
          ))
        )}
      </Space>
    </div>
  );
}
