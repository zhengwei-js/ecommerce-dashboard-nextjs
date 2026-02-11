import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return {
    title: `${product.name} | EcomGitHub`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | EcomGitHub`,
      description: product.shortDescription,
      images: [
        {
          url: product.images.gray,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      title: `${product.name} | EcomGitHub`,
      description: product.shortDescription,
      images: [product.images.gray],
    },
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;
  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-7/12">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-lg text-gray-600">{product.shortDescription}</p>
        <p className="text-xl font-medium">${product.price.toFixed(2)}</p>
        <ProductInteraction
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
        <div className="flex items-center gap-4">
          <Image
            src="/klarna.png"
            alt="Klarna"
            width={50}
            height={25}
            className="object-contain"
          />
          <Image
            src="/cards.png"
            alt="Credit Cards"
            width={50}
            height={25}
            className="object-contain"
          />
          <Image
            src="/stripe.png"
            alt="Stripe"
            width={50}
            height={25}
            className="object-contain"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking the button above, you agree to our Terms and Conditions
          and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
