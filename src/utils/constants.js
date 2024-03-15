import appStrings from "./strings";

export const baseUrl = "https://mingdoan-cvez.hf.space";

export const apiUrls = {
  cvs: "/api/get/cv",
  cv: (id) => `/api/get/cv/${id}`,
  jds: "/api/get/jd",
  jd: (id) => `/api/get/jd/${id}`,
  questions: "/api/get/question",
  question: (id) => `/api/get/question/${id}`,
  matchCV: "/api/match/cv",
  matchQuestion: "/api/match/question",
  uploadCV: "/api/new/cv",
  uploadJD: "/api/new/jd",
  uploadQuestion: "/api/new/question",
  deleteCV: (id) => `/api/delete/cv/${id}`,
  deleteJD: (id) => `/api/delete/jd/${id}`,
  deleteQuestion: (id) => `/api/delete/question/${id}`,
  generateCV: "/api/generate/cv",
};

export const navItems = [
  {
    key: "/",
    label: appStrings.language.navbar.matcher,
  },
  {
    key: "/cv",
    label: appStrings.language.navbar.cvs,
  },
  {
    key: "/questions",
    label: appStrings.language.navbar.questions,
  },
];

export const themeOptions = ["light", "dark"];
