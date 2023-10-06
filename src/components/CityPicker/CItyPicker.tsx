"use client";

import { useState } from "react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/Select/Select";
import { MdOutlineLocationOn } from "react-icons/md";

export function CityPicker() {
  const [value, setValue] = useState("Новый Уренгой");
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="justify-start me-14">
        <MdOutlineLocationOn className="text-yellow-500 h-5 w-5" />
        <SelectValue>{value}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Выбрать город:</SelectLabel>
          <SelectItem value="Новый Уренгой">Новый Уренгой</SelectItem>
          <SelectSeparator />
          <SelectItem value="Москва">Москва</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
