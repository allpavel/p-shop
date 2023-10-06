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
} from "@/components/ui/NavigationMenu/NavigationMenu";
import { MdPhoneInTalk } from "react-icons/md";
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
                <Link href={"bonuses"} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} mb-1`}
                  >
                    Бонусная программа
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
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
      <NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <MdPhoneInTalk className="text-yellow-500 h-5 w-5 me-1" />{" "}
          <a href="tel:+7(3452)59-49-45">+7 (3452) 59-49-45</a>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${navigationMenuTriggerStyle()} text-yellow-400 cursor-pointer`}
        >
          Заказать звонок
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
