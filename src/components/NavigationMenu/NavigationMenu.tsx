import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

const NavigationMenu = forwardRef<
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

const NavigationMenuList = forwardRef<
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

const NavigationMenuItem = NavigationMenuPrimitive.Item;

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export { NavigationMenu, NavigationMenuList, NavigationMenuItem };
