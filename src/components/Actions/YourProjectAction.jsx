import { Fragment } from "react";
import { Menu } from "@mantine/core";
import { IconTrash, IconShare } from "@tabler/icons-react";
import appStrings from "../../utils/strings";

export default function YourProjectAction() {
  return (
    <Fragment>
      <Menu.Item leftSection={<IconShare size="1rem" />}>
        {appStrings.language.btn.share}
      </Menu.Item>
      <Menu.Item c="red" leftSection={<IconTrash size="1rem" />}>
        {appStrings.language.btn.delete}
      </Menu.Item>
    </Fragment>
  );
}
