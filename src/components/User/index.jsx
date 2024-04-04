import { Avatar } from "@mantine/core";
import useGlobalState from "../../context/global";

export default function User() {
  const user = useGlobalState((state) => state.user);
  return <Avatar src={user?.avatar}/>;
}
