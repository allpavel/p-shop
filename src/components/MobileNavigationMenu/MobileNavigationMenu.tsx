"use client";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/NavigationMenu/NavigationMenu";
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
      <DropdownMenuContent className="h-screen w-screen flex flex-col items-center gap-4">
        <DropdownMenuItem
          className={`${navigationMenuTriggerStyle()} w-1/2`}
          asChild
        >
          <Link href={"/"}>Главная</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${navigationMenuTriggerStyle()} w-1/2`}
          asChild
        >
          <Link href={"/"}>О нас</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${navigationMenuTriggerStyle()} w-1/2`}
          asChild
        >
          <Link href={"/"}>Доставка и оплата</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${navigationMenuTriggerStyle()} w-1/2`}
          asChild
        >
          <Link href={"/"}>Вопросы и ответы</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${navigationMenuTriggerStyle()} w-1/2`}
          asChild
        >
          <Link href={"/"}>Отзывы</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${navigationMenuTriggerStyle()} w-1/2`}
          asChild
        >
          <Link href={"/"}>Статьи</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
