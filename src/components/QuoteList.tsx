"use client";

import QuoteCard from "./QuoteCard";

type Props = {
  data: {
    id: number;
    content: string;
  }[];
  votes: {
    [id: number]: { like: number; dislike: number };
  };
  onVoteChange: (id: number, vote: { like: number; dislike: number }) => void;
};

export default function QuoteList({ data, votes, onVoteChange }: Props) {
  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <QuoteCard
          key={item.id}
          id={item.id}
          content={item.content}
          like={votes[item.id]?.like || 0}
          dislike={votes[item.id]?.dislike || 0}
          onVoteChange={onVoteChange}
        />
      ))}
    </ul>
  );
}
