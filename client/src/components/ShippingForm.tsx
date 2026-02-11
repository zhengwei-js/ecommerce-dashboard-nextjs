import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });
  const router = useRouter();
  const handleShipppingFormSubmit: SubmitHandler<ShippingFormInputs> = (
    data
  ) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md"
      onSubmit={handleSubmit(handleShipppingFormSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Ahmet Yavuz"
          {...register("name")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="adana@gmail.com"
          {...register("email")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          placeholder="+1 (555) 123-4567"
          {...register("phone")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.phone && (
          <p className="text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="123 Main St"
          {...register("address")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.address && (
          <p className="text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Anytown"
          {...register("city")}
          className="border-b border-gray-300 py-2 outline-none text-sm"
        />
        {errors.city && (
          <p className="text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-700 text-white py-2 rounded cursor-pointer mt-4 transition"
      >
        Continue to Payment
        <ArrowRight className="w-4 h-4 inline-block ml-2" />
      </button>
    </form>
  );
};

export default ShippingForm;
