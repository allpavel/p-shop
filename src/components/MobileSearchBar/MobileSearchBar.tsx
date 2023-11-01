"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
import { Button } from "../ui/Button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover/Popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/Form/Form";
import { Input } from "../ui/Input/Input";

const formSchema = z.object({
  search: z.string().min(2).max(100),
});
export function MobileSearchBar() {
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
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="search"
          type="submit"
          className="block md:hidden"
        >
          <MdSearch />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex md:hidden h-14 grow"
          >
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
                </FormItem>
              )}
            />
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
