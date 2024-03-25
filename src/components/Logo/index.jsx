import logo from "../../assets/logo512.png";
import logow from "../../assets/logow512.png";
import useGlobalState from "../../context/global";

export default function Logo({ size = 40 }) {
  const theme = useGlobalState((state) => state.theme);

  return (
    <img
      src={theme === "dark" ? logow : logo}
      alt="logo"
      style={{ width: size, height: size }}
    />
  );
}
