import { ReviewCard } from "./ReviewCard";

export function ReviewsRow() {
  return (
    <div className="reviews-row">
      <ReviewCard
        name="Johan Marien"
        date="4 months ago"
        rating={4}
        color="#6c5ce7"
        text="Helemaal tevreden over ons dak. Goede samenwerking en alles volgens afspraak."
      />

      <ReviewCard
        name="De winter Kris"
        date="4 months ago"
        rating={5}
        color="#c2175b"
        text="Wij zijn heel tevreden met de werken die ze aan het dak van onze hangaar hebben uitgevoerd."
      />

      <ReviewCard
        name="Robert Leonard"
        date="5 years ago"
        rating={5}
        color="#c2175b"
        text="Goed gelegen in industrie."
      />

      <ReviewCard
        name="Jan Courtois"
        date="9 years ago"
        rating={5}
        color="#0289d1"
        text="Deze schrijnwerker heeft voor mij twee opdrachten uitgevoerd. Telkens correct en degelijk afgewerkt."
      />
      <ReviewCard
        name="Caroline Gabay"
        date="4 months ago"
        rating={5}
        color="#c2175b"
        text="Cette personne a travaillé pour moi et je suis vraiment super contente du résultat !!!! À recommander"
      />
    </div>
  );
}
