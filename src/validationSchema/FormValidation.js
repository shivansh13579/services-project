import { object, string, number } from "yup";

export const formSchema = object({
  name: string().required(),
  price: number().required(),
  description: string().required(),
});
