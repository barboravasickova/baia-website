import AboutMeSection from "@/components/AboutMeSection";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function ProductDesignAboutPage() {
  return (
    <main className="page">
      <LanguageSwitch
        locale="cz"
        showBrandTrail
        brandTrailCurrentLabel="O mně"
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
      />
      <AboutMeSection />
    </main>
  );
}
