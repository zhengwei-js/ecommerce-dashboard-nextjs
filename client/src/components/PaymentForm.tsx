import { PaymentFormInputs, PaymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });
  const router = useRouter();
  const handlePaymentFormSubmit: SubmitHandler<PaymentFormInputs> = (
    data
  ) => {};
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md"
      onSubmit={handleSubmit(handlePaymentFormSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name on card
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder="Ahmet Yavuz"
          {...register("cardHolder")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-600">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          {...register("cardNumber")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-600">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-600">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.cvv && (
          <p className="text-sm text-red-600">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
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
      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-700 text-white py-2 rounded cursor-pointer mt-4 transition"
      >
        Checkout
        <ShoppingCart className="inline-block ml-2 h-4 w-4" />
      </button>
    </form>
  );
};

export default PaymentForm;
