import style from "./style.module.css";
import { useState, useEffect } from "react";
import {
  Space,
  Typography,
  Descriptions,
  Spin,
  Button,
  Collapse,
  Flex,
  InputNumber,
} from "antd";
import { useLocation } from "react-router-dom";
import SearchBox from "../../components/Search";
import Spacer from "../../components/Spacer";
import appStrings from "../../utils/strings";
import { getCVById } from "../../apis/cvs";
import { getQuestions } from "../../apis/questions";
import { matchingQuestion } from "../../apis/match";

function formatQuesions(data) {
  return data.map((item) => ({
    key: item.id,
    label: item.title,
    children: (
      <Flex vertical>
        <Typography.Text>{item.content}</Typography.Text>
        <Spacer height={10} />
        <Typography.Text italic>{item.answer}</Typography.Text>
      </Flex>
    ),
    score: item.score ? item.score : 0,
  }));
}

export default function CVDetailPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [isLoading, setIsLoading] = useState(true);
  const [cv, setCV] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isQuestionFetching, setIsQuestionFetching] = useState(false);
  const [limit, setLimit] = useState(10);

  function handleFetchQuestions() {
    setIsQuestionFetching(true);
    getQuestions().then((questions) => {
      matchingQuestion(id).then((data) => {
        const newQuestions = questions.map((question) => {
          const score = Object.keys(data).includes(question.id)
            ? data[question.id]
            : null;
          return {
            ...question,
            score: score ? score : 0,
          };
        });
        // Sort by score descending
        newQuestions.sort((a, b) => b.score - a.score);
        // Split by limit
        newQuestions.splice(limit);
        setQuestions(formatQuesions(newQuestions));
        setIsQuestionFetching(false);
      });
    });
  }

  useEffect(() => {
    setIsLoading(true);
    getCVById(id).then((data) => {
      setCV(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <SearchBox />
      <Space className={style.container} direction="vertical" size={20}>
        <Spin spinning={isLoading}>
          <Descriptions title={cv.name}>
            <Descriptions.Item label={appStrings.language.cvDetail.path}>
              {cv.path}
            </Descriptions.Item>
            <Descriptions.Item label={appStrings.language.cvDetail.url}>
              {cv.url}
            </Descriptions.Item>
          </Descriptions>
          <Flex>
            <InputNumber
              placeholder={appStrings.language.cvDetail.questionLimit}
              min={1}
              defaultValue={limit}
              onChange={(value) => setLimit(value)}
            />
            <Spacer width={20} />
            <Button
              type="primary"
              size="large"
              style={{
                width: "100%",
              }}
              loading={isQuestionFetching}
              onClick={handleFetchQuestions}
            >
              {appStrings.language.cvDetail.getQuestions}
            </Button>
          </Flex>
          <Spacer height={20} />
          {questions.length !== 0 ? <Collapse items={questions} /> : null}
        </Spin>
      </Space>
    </div>
  );
}
