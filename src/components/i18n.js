// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				// English translations here
			},
		},
		ar: {
			translation: {
				// Arabic translations here
			},
		},
	},
	lng: "ar", // Default language
	fallbackLng: "en", // Fallback language
	interpolation: {
		escapeValue: false, // React already escapes values
	},
});

export default i18n;
