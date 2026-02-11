"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide";
import { MinusIcon, Plus, PlusIcon, ShoppingCartIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const handleQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    });
    toast.success("Product added to cart!");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              onClick={() => handleTypeChange("size", size)}
              className={`cursor-pointer border-1 p-[2px] ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={color}
              onClick={() => handleTypeChange("color", color)}
              className={`cursor-pointer border-1 p-[2px] ${
                selectedColor === color ? "border-gray-300" : "border-white"
              }`}
            >
              <div
                className={`w-6 h-6`}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange("decrement")}
            disabled={quantity === 1}
          >
            <MinusIcon className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("increment")}>
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2 w-full justify-center shadow-lg cursor-pointer"
      >
        <PlusIcon className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="border border-gray-800 text-gray-800 px-4 py-2 flex items-center gap-2 w-full justify-center shadow-lg cursor-pointer">
        <ShoppingCartIcon className="w-4 h-4" />
        Buy this Item
      </button>
    </div>
  );
};

export default ProductInteraction;
