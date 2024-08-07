import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";

export default function About() {
  const t = useTranslations("AboutPage");
  return (
    <div className="bg-blue-50 dark:bg-blue-900 grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg overflow-hidden items-center">
      <div className="p-8">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl ">
          {t("Section.title")}
        </h2>
        <p className="py-6">{t("Section.description")}</p>
        <Button>
          <Link
            href="https://www.youtube.com/@JBWEBDEVELOPER"
            className="flex items-center"
          >
            <BsYoutube className="mr-2 w-8 h-8 text-red-500" />
            {t("Section.subscribe")}
          </Link>
        </Button>
      </div>
      <div className="">
        <Image
          src={"/jb.jpg"}
          alt="image of a man"
          width={826}
          height={541}
          className=""
        />
      </div>
    </div>
  );
}
