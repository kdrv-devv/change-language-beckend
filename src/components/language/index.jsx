import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Eng } from "../../locale/eng";
import { Ru } from "../../locale/rus";
import { Uz } from "../../locale/uzb";

i18next.use(initReactI18next).init({
    resources:{
        eng:{translation:Eng},
        rus:{translation:Ru},
        uzb:{translation:Uz}
    },
    lng:localStorage.getItem("lang") || 'eng',
    fallbackLng:"eng"
  })
  