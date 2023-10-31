import z from "zod";

const activitySchema = z
  .object({
    activity_image: z.string({
      invalid_type_error: "url image must be an string",
      required_error: "url image  is required",
    }),
    title: z.string({
      invalid_type_error: "title must be a string",
      required_error: "title is required",
    }),
    act_description: z.string({
      invalid_type_error: "activity description must be a string",
      required_error: "activity description is required",
    }),
    price: z.number({
      invalid_type_error: "price must be a number",
      required_error: "price is required",
    }),
    bookingDate: z.string({
      invalid_type_error: "booking date must be a string",
      required_error: "opinion is required",
    }),
    opinion: z.string({
      invalid_type_error: "opinion must be a string",
      required_error: "opinion is required",
    }),
    stock: z.number({
      invalid_type_error: "stock must be a number",
      required_error: "price is required",
    }),
  })
  .strict();

export function validateActivity(object) {
  return activitySchema.safeParse(object);
}
