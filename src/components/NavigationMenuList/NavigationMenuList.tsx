import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={(cn(), className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
});

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
