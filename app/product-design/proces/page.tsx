import LanguageSwitch from "@/components/LanguageSwitch";
import MyProcess from "@/components/MyProcess";

export default function ProductDesignProcessPage() {
  return (
    <main className="page">
      <LanguageSwitch
        locale="cz"
        showBrandTrail
        brandTrailCurrentLabel="Proces"
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
      />
      <MyProcess />
    </main>
  );
}
