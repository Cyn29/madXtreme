import z from "zod";

const adminSchema = z
  .object({
    email: z
      .string({
        invalid_type_error: "email must contain @",

        required_error: "email is required",
      })
      .email(),
    admin_password: z.string({
      invalid_type_error: "password must be a string",

      required_error: "password is required",
    }),
  })
  .strict();

export function validateAdmin(object) {
  return adminSchema.safeParse(object);
}
