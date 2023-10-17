"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "../ui/DropdownMenu/DropdownMenu";
import { DropdownMenuTrigger } from "../ui/DropdownMenu/DropdownMenu";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/NavigationMenu/NavigationMenu";
import Link from "next/link";

export const Temp2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger onClick={handleMenuClick}>
        {isOpen ? <MdOutlineClose /> : <MdMenu />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <NavigationMenu className="pt-2 flex-col">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"about"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  О нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"dostavka"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Доставка и оплата
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"faq"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Вопросы и ответы
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"feedback"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Отзывы
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"articles"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Статьи
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"contacts"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
