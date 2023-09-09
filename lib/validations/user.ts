import * as z from "zod";

export const UserValidationSchema = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, {
      message: "Name must contain at least 3 caracters.",
    })
    .max(30, {
      message: "Name must not exceed 30 caracters.",
    }),
  username: z
    .string()
    .min(3, {
      message: "Username must contain at least 3 caracters.",
    })
    .max(20, {
      message: "Username must not exceed 20 caracters.",
    }),
  bio: z
    .string()
    .min(3, {
      message: "Bio must contain at least 3 caracters.",
    })
    .max(300, {
      message: "Bio must not exceed 300 caracters.",
    }),
});

export type UserValidationSchemaType = z.infer<typeof UserValidationSchema>;
