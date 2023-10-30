"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/NavigationMenu/NavigationMenu";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu/DropdownMenu";

export function MobileNavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          className="cursor-pointer"
        >
          {isOpen ? (
            <MdClose aria-hidden="true" focusable="false" />
          ) : (
            <MdMenu aria-hidden="true" focusable="false" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild>
        <NavigationMenu>
          <NavigationMenuList className="flex-col">
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"about"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О нас
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"about"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О нас
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"dostavka"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Доставка и оплата
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"faq"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Вопросы и ответы
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"feedback"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Отзывы
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"articles"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Статьи
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavigationMenuItem>
                <Link href={"contacts"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Контакты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </DropdownMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
