import { Typography } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import appStrings from "../../utils/strings";

export default function UploadButton({ loading, title }) {
  return (
    <button
      style={{ border: 0, background: "none", width: "100%" }}
      type="button"
    >
      <Typography.Text>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>
          {title || appStrings.language.components.btn.upload}
        </div>
      </Typography.Text>
    </button>
  );
}
