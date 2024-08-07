import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";

export default function SiteHeader() {
  const t = useTranslations("Layout");
  const keys = ["courseProgram", "bootcamp", "community", "aboutUs"];
  return (
    <div>
      <header className="flex items-center justify-between max-w-6xl mx-auto py-4">
        <Link className="font-semibold" href={"/"}>
          {t("Config.logo")}
        </Link>
        <nav className="flex items-center justify-between gap-8">
          {keys.map((key: any, i: number) => {
            return (
              <Link key={i} href={t(`Navigation.${key}.href`)}>
                {t(`Navigation.${key}.title`)}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center space-x-3">
          <ModeToggle />
          <LocaleSwitcher />
          <Button>
            <Link href="https://coding-school-typescript.vercel.app/courses/next">
              {t("Config.cta")}
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
