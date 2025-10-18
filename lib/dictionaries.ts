import fr from "../messages/fr.json";
import en from "../messages/en.json";
import { Locale } from "./i18n";

export async function getDictionary(locale: Locale) {
  return locale === "fr" ? fr : en;
}
