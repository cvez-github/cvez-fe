import style from "./style.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import appStrings from "../../utils/strings";

export default function Logo() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <div className={style.logoContainer} onClick={handleLogoClick}>
      <img className={style.logo} src={logo} alt={appStrings.appName} />
      <h3>{appStrings.appName}</h3>
    </div>
  );
}
