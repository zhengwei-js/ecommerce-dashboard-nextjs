"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCart = ({ product }: { product: ProductType }) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductType((prev) => ({ ...prev, [type]: value }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productType.size,
      selectedColor: productType.color,
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productType.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      {/* Product Details */}
      <div className="p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-xs text-gray-500 line-clamp-3 mb-1">
          {" "}
          {product.description}
        </p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size:</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color:</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`p-[1.2px] w-4 h-4 cursor-pointer rounded-full border-2 ${
                    color === productType.color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full`}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-200 shadow-lg px-2 py-1 rounded-md text-xs hover:text-white hover:bg-black transition-all cursor-pointer flex items-center gap-1 ml-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
