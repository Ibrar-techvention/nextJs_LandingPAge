/* eslint-disable security/detect-object-injection */
import SectionAr from "./SectionAr";
import SectionEn from "./SectionEn";

export default function AboutUs() {
    const lang = "en";
    const languageComponents: any = {
        en: <SectionEn />,
        ar: <SectionAr />,
    };
    return languageComponents[lang];
}
