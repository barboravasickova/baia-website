import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import IllustrationPageFooter from "@/components/IllustrationPageFooter";

const illustrationFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

export default function IllustrationAboutPage() {
  return (
    <main className={`page illustration-page ${illustrationFont.className}`} aria-label="O mně">
      <nav id="top-navigation" className="top-nav" aria-label="Hlavní navigace">
        <div className="top-nav-brand-trail" aria-label="Navigační cesta">
          <Link href="/" className="top-nav-brand-badge" aria-label="Domů">
            B
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/" className="top-nav-brand-link">
            Illustration
          </Link>
          <span aria-hidden="true">/</span>
          <span className="top-nav-brand-link-current">O mně</span>
        </div>
        <div className="top-nav-links" aria-label="Sekce stránky">
          <Link href="/#illustrations">Ilustrace</Link>
          <Link href="/o-mne">O mně</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </nav>

      <section className="illustration-about illustration-subpage" aria-labelledby="illustration-about-heading">
        <h1 id="illustration-about-heading">Barbora Vašíčková - BAIA</h1>

        <p>
          Kreslení mě provází odjakživa, ale od roku 2022 se do světa ilustrací nořím naplno. Nejraději vytvářím
          hravé světy plné organických textur, drobných radostí a psích parťáků.
        </p>

        <p>
          V současné době se zaměřuji primárně na volnou tvorbu a digitální produktový design. Baví mě propojovat
          oba tyto světy – přenášet lidské teplo a ilustraci do digitálního prostředí a zároveň využívat
          analytické myšlení při tvorbě vizuálních konceptů. Ráda skáču mezi technikami, a tak se z mých digitálních
          kreseb v minulosti staly velké malby na zdi, knižní ilustrace nebo designové produkty.
        </p>

        <p>
          Mám velkou radost z projektů, které mám za sebou. Moje ilustrace doprovázejí knihu Čínou nahoru i dolů od
          Kateřiny Stibalové, pomáhaly vytvářet identitu rodinné biovýroby Archa Jiříkova a tvořila jsem vizuální
          prvky pro výcvikové středisko Psí Park.
        </p>

        <p>
          Chcete do svého digitálního projektu vnést trochu ilustrační hravosti, nebo spolu vytvořit něco nového?
          Napište mi{" "}
          <a className="illustration-about-link" href="mailto:vasickovabara@gmail.com">
            e-mail
          </a>{" "}
          nebo mě chyťte na{" "}
          <a
            className="illustration-about-link"
            href="https://www.facebook.com/baia.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebooku
          </a>
          .
        </p>

        <p className="illustration-about-signature">
          Díky za návštěvu mého skicáku a užijte si to tu,
          <br />
          Bára
        </p>
      </section>

      <IllustrationPageFooter />
    </main>
  );
}
