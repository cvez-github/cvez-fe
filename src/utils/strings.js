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
    heading: "Setting",
    requiredRestart: "Required restart to apply changes",
    general: {
      title: "General",
      language: "Language",
      theme: "Theme",
    },
  },
  position: {
    title: "Positions",
    heading: "Positions",
    createBtn: "Create new position",
    searchPlaceholder: "Search position",
    activePosition: "Active position",
    closedPosition: "Closed position",
  },
  insight: {
    title: "Insights",
  },
  positionGeneral: {
    title: "General",
    heading: "General",
  },
  cv: {
    title: "CV",
    heading: "CV",
  },
  jd: {
    title: "JD",
    heading: "JD",
  },
  questions: {
    title: "Questions",
    heading: "Questions",
  },
  btn: {
    view: "View",
    share: "Share",
    delete: "Delete",
    restore: "Restore",
    return: "Return",
  },
  utils: {
    notFound: {
      title: "Not Found",
      message: "The page you are looking for does not exist",
    },
  },
  createProject: {
    title: "Create new project",
    heading: "Create Project",
    projectName: "Project Name",
    projectAlias: "Project Alias",
    projectDescription: "Project Description",
    cancel: "Cancel",
    create: "Create new project",
  },  
  createPosition: {
    title: "Create new position",
    heading: "Create Position",
    positionName: "Position Name",
    positionAlias: "Position Alias",
    positionDescription: "Position Description",
    cancel: "Cancel",
    create: "Create",
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
    heading: "Cài đặt",
    requiredRestart: "Yêu cầu khởi động lại để áp dụng thay đổi",
    general: {
      title: "Chung",
      language: "Ngôn ngữ",
      theme: "Giao diện",
    },
  },
  position: {
    title: "Vị trí",
    heading: "Vị trí",
    createBtn: "Tạo vị trí mới",
    searchPlaceholder: "Tìm kiếm vị trí",
    activePosition: "Vị trí đang hoạt động",
    closedPosition: "Vị trí đã đóng",
  },
  insight: {
    title: "Thống kê",
  },
  positionGeneral: {
    title: "Tổng quan",
    heading: "Tổng quan",
  },
  cv: {
    title: "CV",
    heading: "CV",
  },
  jd: {
    title: "JD",
    heading: "JD",
  },
  questions: {
    title: "Câu hỏi",
    heading: "Câu hỏi",
  },
  btn: {
    view: "Xem",
    share: "Chia sẻ",
    delete: "Xóa",
    restore: "Khôi phục",
    return: "Quay lại",
  },
  utils: {
    notFound: {
      title: "Không tìm thấy trang",
      message: "Trang bạn đang tìm không tồn tại",
    },
  },
  createProject: {
    title: "Tạo dự án mới",
    heading: "Tạo dự án",
    projectName: "Tên dự án",
    projectAlias: "Tên viết tắt",
    projectDescription: "Mô tả dự án",
    cancel: "Hủy",
    create: "Tạo dự án mới",
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
  language: getLanguageStrings(localStorage.getItem("language") || "en"),
};

export default appStrings;
