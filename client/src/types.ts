import { email, z } from "zod";

export type ProductType = {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters long")
    .max(15, "Phone number must be at most 15 characters long")
    .regex(
      /^[0-9+\-\s()]+$/,
      "Phone number can only contain numbers, spaces, and special characters like +, -, (, )"
    ),
  address: z
    .string()
    .min(1, "Address is required")
    .max(100, "Address must be at most 100 characters long"),
  city: z.string().min(1, "City is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
export const PaymentFormSchema = z.object({
  cardHolder: z
    .string()
    .min(2, "Card Holder must be at least 2 characters long"),
  cardNumber: z
    .string()
    .min(16, "Card Number must be 16 characters long")
    .max(16, "Card Number must be 16 characters long")
    .regex(/^[0-9]+$/, "Card Number can only contain numbers"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiration Date must be in MM/YY format"
    ),
  cvv: z
    .string()
    .min(3, "CVV must be at least 3 characters long")
    .max(4, "CVV must be at most 4 characters long")
    .regex(/^[0-9]+$/, "CVV can only contain numbers"),
  address: z
    .string()
    .min(1, "Address is required")
    .max(100, "Address must be at most 100 characters long"),
  city: z.string().min(1, "City is required"),
});

export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};

export type CartStore = CartStoreStateType & CartStoreActionsType;
