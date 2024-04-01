import { Fragment } from "react";
import { Menu } from "@mantine/core";
import { IconRestore, IconTrash } from "@tabler/icons-react";
import appStrings from "../../utils/strings";

export default function DeleteProjectAction() {
  return (
    <Fragment>
      <Menu.Item leftSection={<IconRestore size="1rem" />}>
        {appStrings.language.btn.restore}
      </Menu.Item>
      <Menu.Item leftSection={<IconTrash size="1rem" />} c="red">
        {appStrings.language.trash.deletePermanently}
      </Menu.Item>
    </Fragment>
  );
}
