import style from "./style.module.css";
import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import appStrings from "../../utils/strings";

export default function SearchBox({ msg }) {
  return (
    <div className={style.container}>
      <Typography.Text>
        <SearchOutlined />
      </Typography.Text>
      <Input
        placeholder={appStrings.language.components.search.placeholder}
        variant="borderless"
      />
    </div>
  );
}
