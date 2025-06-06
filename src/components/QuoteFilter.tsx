type Props = {
  search: string;
  filter: "all" | "like" | "dislike";
  sort: "default" | "like" | "dislike" | "name";
  onSearchChange: (val: string) => void;

  onSortChange: (val: "default" | "like" | "dislike" | "name") => void;
};

export default function QuoteFilter({
  search,
  sort,
  onSearchChange,

  onSortChange,
}: Props) {
  return (
    <div className="flex gap-4">
      <input
        className="input input-bordered w-full h-10 border-1 rounded-xl bg-white text-gray-700"
        placeholder="Search name..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="select select-bordered border-1 rounded-xl h-10 bg-white text-gray-700"
        value={sort}
        onChange={(e) => onSortChange(e.target.value as any)}
      >
        <option value="default">🔀 Default</option>
        <option value="like">🔥 Most Likes</option>
        <option value="dislike">👎 Most Dislikes</option>
        <option value="name">🔤 Name A-Z</option>
      </select>
    </div>
  );
}
