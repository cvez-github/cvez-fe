import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import appStrings from "../../utils/strings";

export default function NotFoundPage() {
  const navigate = useNavigate();

  function handleBackHome() {
    navigate("/");
  }

  return (
    <Result
      status="404"
      title={appStrings.language.notFound.title}
      subTitle={appStrings.language.notFound.desc}
      extra={
        <Button type="primary" onClick={handleBackHome}>
          {appStrings.language.notFound.btn}
        </Button>
      }
    />
  );
}
