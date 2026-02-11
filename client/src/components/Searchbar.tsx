import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 shadow-sm">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        id="search"
        placeholder="Search..."
        className="text-sm outline-none "
      />
    </div>
  );
};

export default Searchbar;
