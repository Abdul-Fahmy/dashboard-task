import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          StoreSetting: "Store setting",
          setting: {
            item1: "Maintenance mode",
            item2: "item2",
            item3: "item3",
            item4: "item4",
            item5: "item5",
            item6: "item6",
            item7: "item7",
            item8: "item8",
            item9: "item9",
            item10: "item10",
            item11: "item11",
            item12: "item12",
            item13: "item13",
            item14: "item14",
            item15: "item15",
            item16: "item16",
            item17: "item17",
            description1:' Maintenance mode',
            description2:'description',
            description3:'description',
            description4:'description',
            description5:'description',
            description6:'description',
            description7:'description',
            description8:'description',
            description9:'description',
            description10:'description',
            description11:'description',
            description12:'description',
            description13:'description',
            description14:'description',
            description15:'description',
            description16:'description',
            description17:'description',
          },
          ModalTitle: 'Maintenance Mode',
          enableMode:'Enable Maintenance Mode',
          disableMode: 'Disable Maintenance Mode',
          descriptionMode:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dictaesse tempora magnam fugit corrupti.',
          labelTitle:'Title',
          descriptionLabel:'Description',
          saveBtn:'Save'
        },
        
      },
      ar: {
        translation: {
          StoreSetting: "اعدادات المتجر",
          setting: {
            item1: "وضع الصيانه",
            item2: "عنصر٢",
            item3: "عنصر٣",
            item4: "عنصر٤",
            item5: "عنصر٥",
            item6: "عنصر٦",
            item7: "عنصر٧",
            item8: "عنصر٨",
            item9: "عنصر٩",
            item10: "عنصر١٠",
            item11: "عنصر١١",
            item12: "عنصر١٢",
            item13: "عنصر١٣",
            item14: "عنصر١٤",
            item15: "عنصر١٥",
            item16: "عنصر١٦",
            item17: "عنصر١٧",
            description1:'اغلاق المتجر بشكل مؤقت',
            description2:'وصف',
            description3:'وصف',
            description4:'وصف',
            description5:'وصف',
            description6:'وصف',
            description7:'وصف',
            description8:'وصف',
            description9:'وصف',
            description10:'وصف',
            description11:'وصف',
            description12:'وصف',
            description13:'وصف',
            description14:'وصف',
            description15:'وصف',
            description16:'وصف',
            description17:'وصف',
          },
          ModalTitle: 'وضع الصيانة',
          enableMode:'تفعيل وضع الصيانة',
          disableMode: 'الغاء وضع الصيانه',
          descriptionMode:'بعد تفعيل وضع الصيانة ستتمكن لوحدك من الدخول للمتجر والعمل على تجهيزه، بينما العملاء ستظهر لهم صفحة الصيانة. للاطلاع عليها قم بالدخول على متجرك من متصفح آخر أو بتسجيل الخروج من لوحة التحكم',
          labelTitle:'عنوان',
          descriptionLabel:'وصف الصيانه',
          saveBtn:'حفظ'
        },
      },
    },
  });

export default i18n;
