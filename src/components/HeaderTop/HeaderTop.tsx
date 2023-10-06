"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// export function HeaderTop() {
//   return (
//     <div>
//       <div>
//         <label htmlFor="city" className="visuallyhidden">
//           Выбрать город:
//         </label>
//         <select id="city" name="city">
//           <option>Новый Уренгой</option>
//           <option>Москва</option>
//           <option>Санкт-Петербург</option>
//         </select>
//       </div>
//       <nav>
//         <Link href={"about"}>О нас</Link>
//         <Link href={"dostavka"}>Доставка и оплата</Link>
//         <Link href={"faq"}>Вопросы и ответы</Link>
//         <Link href={"feedback"}>Отзывы</Link>
//         <Link href={"articles"}>Статьи</Link>
//         <Link href={"contacts"}>Контакты</Link>
//         <button>Ещё</button>
//       </nav>
//       <div>
//         <a href="tel:+7(3452)59-49-45">+7 (3452) 59-49-45</a>
//         <button>Заказать звонок</button>
//       </div>
//     </div>
//   );
// }
