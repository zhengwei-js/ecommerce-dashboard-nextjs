"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import path from "path";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathName}/?${params.toString()}`, { scroll: false });
  };

  const selectedCategory = searchParams.get("category") || "all";
  console.log(selectedCategory);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2 bg-gray-100 p-2 mb-4 rounded-lg text-sm">
      {categories.map((category) => (
        <div
          key={category.slug}
          className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-200 cursor-pointer justify-center ${
            category.slug === selectedCategory ? "bg-white font-semibold" : ""
          }`}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          <span className="text-sm font-medium">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
