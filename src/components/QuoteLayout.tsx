"use client";
import { useEffect, useState, useMemo } from "react";
import QuoteFilter from "./QuoteFilter";
import QuoteList from "./QuoteList";
import Chart from "./Chart";
import data from "@/data/dataQuote";

type VoteMap = {
  [id: number]: { like: number; dislike: number };
};

export default function QuoteLayout() {
  const [votes, setVotes] = useState<VoteMap>({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "like" | "dislike">("all");
  const [sortOption, setSortOption] = useState<
    "default" | "like" | "dislike" | "name"
  >("default");

  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const storedVotes = localStorage.getItem("votes");
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVoteChange = (
    id: number,
    vote: { like: number; dislike: number }
  ) => {
    setVotes((prev) => ({ ...prev, [id]: vote }));
  };

  const filteredQuotes = useMemo(() => {
    return data.filter((quote) => {
      const contentMatch = quote.content
        .toLowerCase()
        .includes(search.toLowerCase());
      const vote = votes[quote.id] || { like: 0, dislike: 0 };
      const voteMatch =
        filter === "all" ||
        (filter === "like" && vote.like > 0) ||
        (filter === "dislike" && vote.dislike > 0);
      return contentMatch && voteMatch;
    });
  }, [search, filter, votes]);

  const sortedData = useMemo(() => {
    const data = [...filteredQuotes];
    switch (sortOption) {
      case "like":
        return data.sort(
          (a, b) => (votes[b.id]?.like || 0) - (votes[a.id]?.like || 0)
        );
      case "dislike":
        return data.sort(
          (a, b) => (votes[b.id]?.dislike || 0) - (votes[a.id]?.dislike || 0)
        );
      case "name":
        return data.sort((a, b) => a.content.localeCompare(b.content));
      default:
        return data;
    }
  }, [filteredQuotes, sortOption, votes]);

  const visibleData = sortedData.slice(0, visibleCount);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <QuoteFilter
        search={search}
        filter={filter}
        sort={sortOption}
        onSearchChange={setSearch}
        onSortChange={setSortOption}
      />
      <QuoteList
        data={visibleData}
        votes={votes}
        onVoteChange={handleVoteChange}
      />

      {visibleCount < sortedData.length && (
        <div className="text-center ">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="btn btn-outline  bg-slate-50 rounded-xl shadow text-gray-600"
          >
            Load More
          </button>
        </div>
      )}

      <Chart
        data={visibleData.map((q) => ({
          name: q.content,
          up: votes[q.id]?.like || 0,
          down: votes[q.id]?.dislike || 0,
        }))}
      />
    </div>
  );
}
