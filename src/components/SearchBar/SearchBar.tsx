"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form/Form";
import { Input } from "../ui/Input/Input";
import { Button } from "../ui/Button/Button";

const formSchema = z.object({
  search: z.string().min(2).max(100),
});

export function SearchBar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); // eslint-disable-line
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="border-0 h-px -m-px overflow-hidden p-0 w-px absolute">
                Поиск
              </FormLabel>
              <FormControl>
                <Input placeholder="Поиск товаров" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Поиск</Button>
      </form>
    </Form>
  );
}
