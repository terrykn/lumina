"use client";

import React from "react";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import * as Ri from "react-icons/ri";
import * as Io5 from "react-icons/io5";
import * as Md from "react-icons/md";
import * as Hi2 from "react-icons/hi2";
import * as Tb from "react-icons/tb";
import * as Lu from "react-icons/lu";
import * as Ai from "react-icons/ai";

const libraries: Record<string, any> = {
  fa: Fa,
  si: Si,
  ri: Ri,
  io: Io5,
  md: Md,
  hi: Hi2,
  tb: Tb,
  lu: Lu,
  ai: Ai,
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export function IconRenderer({ name, className }: IconRendererProps) {
  if (!name) return null;

  // Try 2-character prefix first
  let prefix = name.substring(0, 2).toLowerCase();
  let library = libraries[prefix];

  // If not found, try 3-character prefix (for some sets)
  if (!library && name.length > 3) {
    const prefix3 = name.substring(0, 3).toLowerCase();
    library = libraries[prefix3];
    if (library) prefix = prefix3;
  }

  if (!library) {
    console.warn(`Icon library for prefix "${prefix}" not found.`);
    return null;
  }

  const Icon = library[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in library "${prefix}".`);
    return null;
  }

  return <Icon className={className} />;
}
