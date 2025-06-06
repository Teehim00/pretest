"use client";
import { BiLike, BiDislike } from "react-icons/bi";

type QuoteCardProps = {
  id: number;
  content: string;
  like: number;
  dislike: number;
  onVoteChange: (id: number, vote: { like: number; dislike: number }) => void;
};

export default function QuoteCard({
  id,
  content,
  like,
  dislike,
  onVoteChange,
}: QuoteCardProps) {
  const handleVote = (type: "up" | "down") => {
    const newLike = like + (type === "up" ? 1 : 0);
    const newDislike = dislike + (type === "down" ? 1 : 0);
    onVoteChange(id, { like: newLike, dislike: newDislike });
  };

  return (
    <li className="list-row flex items-center justify-between gap-5 p-5 bg-slate-50 rounded-xl shadow">
      <div className="flex items-center gap-5 ">
        <div>
          <div className="text-xl uppercase font-semibold opacity-60 text-black ">
            {content}
          </div>
        </div>
      </div>

      <div className="flex gap-5 ">
        <button
          className="btn btn-square btn-ghost flex items-center gap-1 hover:text-green-600 active:scale-90 transition-transform duration-150"
          onClick={() => handleVote("up")}
        >
          <BiLike className="size-[1.5em] text-blue-500" />
          <span className="text-2xl text-blue-500">{like}</span>
        </button>
        <button
          className="btn btn-square btn-ghost flex items-center gap-1 hover:text-red-600 active:scale-90 transition-transform duration-150"
          onClick={() => handleVote("down")}
        >
          <BiDislike className="size-[1.5em] text-red-600" />
          <span className="text-2xl text-red-600">{dislike}</span>
        </button>
      </div>
    </li>
  );
}
