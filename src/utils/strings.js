import english from "../language/english";
import vietnamese from "../language/vietnamese";
import japanese from "../language/japanese";
import korean from "../language/korean";
import chinese from "../language/chinese";
import hindi from "../language/hindi";
import france from "../language/france";

function getLanguageStrings(language) {
  switch (language) {
    case "en":
      return english;
    case "vi":
      return vietnamese;
    case "ja":
      return japanese;
    case "ko":
      return korean;
    case "zh":
      return chinese;
    case "hi":
      return hindi;
    case "fr":
      return france;
    default:
      return english;
  }
}

const appStrings = {
  appName: "CVEZ",
  language: getLanguageStrings(localStorage.getItem("language") || "en"),
};

export default appStrings;
