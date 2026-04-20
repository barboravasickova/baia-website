import Link from "next/link";
import type { Locale } from "@/data/projects";

type LanguageSwitchProps = {
  locale: Locale;
  labels: {
    cz: string;
    en: string;
  };
};

export default function LanguageSwitch({ locale, labels }: LanguageSwitchProps) {
  return (
    <div className="language-switch">
      <Link href="/cz" className={locale === "cz" ? "active" : ""}>
        {labels.cz}
      </Link>
      <Link href="/en" className={locale === "en" ? "active" : ""}>
        {labels.en}
      </Link>
    </div>
  );
}
