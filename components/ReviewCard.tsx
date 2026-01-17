import GoogleIcon from "@/public/icons/google.svg";
import Image from "next/image";

type ReviewCardProps = {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
  color: string;
};

export function ReviewCard({
  name,
  date,
  rating,
  text,
  avatar,
  color,
}: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="header">
        <div className={`avatar  bg-black!`}>
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <span>{name.charAt(0)}</span>
          )}
        </div>

        <div>
          <strong>{name}</strong>
          <span className="date">{date}</span>
          <div className="stars">{"★".repeat(rating)}</div>
        </div>
      </div>

      <p className="content">{text}</p>

      <div className="flex flex-row gap-x-2 items-center">
        <Image src={GoogleIcon} className="size-4" alt="" />
        <a
          href="#"
          className="google-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google
        </a>
      </div>
    </article>
  );
}
