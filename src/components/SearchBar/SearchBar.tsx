"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-14 grow">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="grow">
              <FormLabel className="border-0 h-px -m-px overflow-hidden p-0 w-px absolute">
                Поиск
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Поиск товаров"
                  {...field}
                  className="border-r-transparent rounded-e-none shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="icon"
          variant="search"
          type="submit"
          className="min-h-full"
        >
          <MdSearch />
        </Button>
      </form>
    </Form>
  );
}
