"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserValidationSchema,
  UserValidationSchemaType,
} from "@/lib/validations/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ChangeEvent, useState } from "react";

interface Props {
  user: {
    id: string;
    username: string | null;
    name: string | null;
    bio: string;
    image: string;
  };
}

const AccountProfile = ({ user }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm({
    resolver: zodResolver(UserValidationSchema),
    defaultValues: {
      profile_photo: user?.image || "",
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
    },
  });

  async function onSubmit(values: UserValidationSchemaType) {
    // TODO: Backend function that creates the user
  }

  function handleImage(
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void,
  ) {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="mt-5 flex flex-col items-center">
              <FormLabel>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    width={96}
                    height={96}
                    priority
                    className="aspect-square cursor-pointer rounded-full object-cover"
                    title="Upload your photo"
                  />
                ) : (
                  <Image
                    src=""
                    alt="profile photo"
                    width={96}
                    height={96}
                    priority
                    className="aspect-square cursor-pointer rounded-full object-cover"
                    title="Upload your photo"
                  />
                )}
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Upload a photo"
                  className="sr-only"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-quicksand text-sm leading-none text-zinc-800">
                Name
              </FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-quicksand text-sm leading-none text-zinc-800">
                Username
              </FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-quicksand text-sm leading-none text-zinc-800">
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Tell us a little bit about you!"
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-6 bg-blue-400 font-quicksand text-lg text-zinc-50 transition-colors hover:bg-blue-700"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
