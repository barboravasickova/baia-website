type AboutProps = {
  title: string;
  text: string[];
};

export default function About({ title, text }: AboutProps) {
  return (
    <section>
      <h2>{title}</h2>
      {text.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
