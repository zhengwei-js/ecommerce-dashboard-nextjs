"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import useCartStore from "@/stores/cartStore";
import { CartItemsType, ShippingFormInputs } from "@/types";
import { ArrowRight, Trash } from "lucide-react";
import Image from "next/image";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Information" },
  { id: 3, title: "Payment Details" },
  { id: 4, title: "Review Order" },
];

// const cartItems: CartItemsType = [
//   {
//     id: 1,
//     name: "Adidas CoreFit T-Shirt",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 39.9,
//     sizes: ["s", "m", "l", "xl", "xxl"],
//     colors: ["gray", "purple", "green"],
//     images: {
//       gray: "/products/1g.png",
//       purple: "/products/1p.png",
//       green: "/products/1gr.png",
//     },
//     quantity: 2,
//     selectedSize: "m",
//     selectedColor: "gray",
//   },
//   {
//     id: 2,
//     name: "Puma Ultra Warm Zip",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//     quantity: 1,
//     selectedSize: "l",
//     selectedColor: "green",
//   },
// ];

const CartPage = () => {
  const searhParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const activeStep = parseInt(searhParams.get("step") || "1");

  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-12">
      <h1>Your Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              activeStep === step.id ? "border-gray-800" : "border-gray-400"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                activeStep === step.id ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-1">
        <div className="w-full lg:w-1/2 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              <div
                className="flex items-center justify-between"
                key={item.id + item.selectedSize + item.selectedColor}
              >
                <div className="flex gap-8">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity : {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size : {item.selectedSize.toUpperCase()}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color : {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item)}>
                  <Trash className="w-4 h-4 text-red-600 hover:text-red-800 transition cursor-pointer " />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm">Please fill in the shipping Form</p>
          )}
        </div>
        <div className="w-full lg:w-1/3 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Discount (10%)</p>
              <p className="font-semibold text-red-600">-$ 10</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping Fee</p>
              <p className="font-semibold">$ 10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>

              <p className="font-semibold">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-900 transition"
              onClick={() => router.push("/cart?step=2", { scroll: false })}
            >
              Continue
              <ArrowRight className="w-3 h-3 inline-block ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
