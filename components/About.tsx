import Link from "next/link";

type AboutProps = {
  title: string;
  text: string[];
};

export default function About({ title, text }: AboutProps) {
  if (title === "O mně") {
    return (
      <section id="about" className="about-clean-section">
        <div className="about-clean-inner">
          <h2 className="about-clean-lead">Ahoj, jsem Bára.</h2>

          <p className="about-clean-text">
            Baví mě věci zjednodušovat. Nejvíc mi dává smysl práce, při které se mi podaří digitální
            produkt "učesat" tak, aby mu lidé rozuměli a zbytečně u něj netápali. Moje role je vlastně
            odstraňovat bariéry, které uživatele brzdí nebo matou.
          </p>

          <h3 className="about-clean-subheading">Jak o designu přemýšlím:</h3>
          <ul className="about-clean-list">
            <li className="about-clean-list-item">
              <p className="about-clean-list-title">Navigace bez hádání</p>
              <p className="about-clean-text">
                Rozhraní stavím tak, aby člověk přirozeně věděl, co má udělat dál. Dobrý design je pro mě
                ten, který uživatel nemusí luštit.
              </p>
            </li>
            <li className="about-clean-list-item">
              <p className="about-clean-list-title">Pořádek a souvislosti</p>
              <p className="about-clean-text">
                Ráda hledám řád v hromadě informací. Skládám si dílky k sobě, dokud celá logika produktu
                nepůsobí přirozeně.
              </p>
            </li>
            <li className="about-clean-list-item">
              <p className="about-clean-list-title">Vizuál jako pomocník</p>
              <p className="about-clean-text">
                Estetika je pro mě důležitá, ale beru ji hlavně jako způsob, jak věci zpřehlednit a
                zpříjemnit jejich používání.
              </p>
            </li>
          </ul>

          <p className="about-clean-text">
            Ve volném čase tvořím pod jménem BAIA, kde kreslím ilustrace a věnuji se autorské tvorbě. Je to
            pro mě skvělý protipól k analytickému UX - učí mě to hlídat si vizuální detail a nezapomínat na
            to, že design má být i radost používat.
          </p>

          <Link href="/illustration" className="about-clean-link">
            Když zrovna neřeším UX, najdete mě u barev pod značkou BAIA →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="content-section">
      <h2 className="content-section-title">{title}</h2>
      {text.map((paragraph) => (
        <p key={paragraph} className="content-section-text">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
