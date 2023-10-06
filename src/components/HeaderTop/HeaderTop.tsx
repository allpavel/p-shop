"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/NavigationMenu/NavigationMenu";
import { CityPicker } from "../CityPicker/CItyPicker";

export function HeaderTop() {
  return (
    <NavigationMenu>
      <CityPicker />
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
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ещё</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li>
                {" "}
                <Link href={"bonuses"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Бонусная программа
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"companies"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Для юр. лиц
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
