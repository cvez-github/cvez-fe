const english = {
  navbar: {
    matcher: "Matcher",
    cvs: "CVs",
    questions: "Questions",
  },
  notFound: {
    title: "Page not found",
    desc: "Sorry, the page you visited does not exist.",
    btn: "Back to home",
  },
};

const vietnamese = {
  navbar: {
    matcher: "Tìm kiếm ứng viên",
    cvs: "CVs",
    questions: "Câu hỏi",
  },
  notFound: {
    title: "Không tìm thấy trang",
    desc: "Xin lỗi, trang bạn truy cập không tồn tại.",
    btn: "Quay lại trang chủ",
  },
};

function getLanguage() {
  const language = navigator.language.split("-")[0];
  if (language === "vi") {
    return vietnamese;
  }
  return english;
}

const appStrings = {
  appName: "CV Matcher",
  language: getLanguage(),
};

export default appStrings;
