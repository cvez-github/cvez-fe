const english = {
  home: {
    title: "Home",
    welcome: "Welcome ",
    createBtn: "Create new project",
    recentProjects: "Recent Projects",
    sharedProjects: "Shared Projects",
  },
  yourProject: {
    title: "Projects",
    heading: "Your Projects",
    createBtn: "Create new project",
    searchPlaceholder: "Search project",
  },
  sharedProjects: {
    title: "Shared",
    heading: "Shared Projects",
    searchPlaceholder: "Search project",
  },
  trash: {
    title: "Trash",
    heading: "Deleted Projects",
    deletePermanently: "Delete Permanently",
  },
  setting: {
    title: "Setting",
  },
  btn: {
    view: "View",
    share: "Share",
    delete: "Delete",
    restore: "Restore",
  },
};

const vietnamese = {
  home: {
    title: "Trang chủ",
    welcome: "Chào mừng ",
    createBtn: "Tạo dự án mới",
    recentProjects: "Dự án gần đây",
    sharedProjects: "Dự án đã chia sẻ",
  },
  yourProject: {
    title: "Dự án",
    heading: "Dự án của bạn",
    createBtn: "Tạo dự án mới",
    searchPlaceholder: "Tìm kiếm dự án",
  },
  sharedProjects: {
    title: "Chia sẻ",
    heading: "Dự án đã chia sẻ",
    searchPlaceholder: "Tìm kiếm dự án",
  },
  trash: {
    title: "Thùng rác",
    heading: "Dự án đã xóa",
    deletePermanently: "Xóa vĩnh viễn",
  },
  setting: {
    title: "Cài đặt",
  },
  btn: {
    view: "Xem",
    share: "Chia sẻ",
    delete: "Xóa",
    restore: "Khôi phục",
  },
};

function getLanguageStrings(language) {
  switch (language) {
    case "en":
      return english;
    case "vi":
      return vietnamese;
    default:
      return english;
  }
}

const appStrings = {
  appName: "CVEZ",
  language: getLanguageStrings(localStorage.getItem("language") || "vi"),
};

export default appStrings;
