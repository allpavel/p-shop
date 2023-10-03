import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={(cn(), className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
});

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
