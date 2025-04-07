"use client"
import {HeroUIProvider} from "@heroui/react";
import {useRouter} from "next/router";

export function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>
    {children}
  </HeroUIProvider>;
}
