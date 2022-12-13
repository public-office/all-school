import { EssayItem } from './Essay'



export function EssayList({ essays }) {

  return (
    <section>
      {essays && essays.map(essay => (
        <EssayItem
          key={essay.id}
          title={essay.essayTitle}
          url={essay.essayURL}
          image={essay.mainImage}
          author={essay.essayAuthor}
          tagline={essay.essayTagline}
          pdf={essay.essayPDF}
          text={essay.essayText}
        />
      ))}
    </section>
  );
}