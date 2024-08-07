import { cn } from "@/lib/utils";
import React from "react";
import { FaShoppingCart, FaRocket, FaTools, FaBook } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function WhyUs() {
  const t = useTranslations("HomePage");
  const obj = {
    "real-world": FaShoppingCart,
    advanced: FaRocket,
    "hands-on": FaTools,
    comprehensive: FaBook,
  };
  const courseHighlights = [
    {
      title: "Real-World Applications",
      description:
        "Students build a production-ready application that includes Ecommerce, Point of Sale, and Inventory Management systems.",
      iconColor: "bg-purple-900",
      icon: FaShoppingCart,
    },
    {
      title: "Advanced Yet Accessible",
      description:
        "The course tackles advanced concepts explained step-by-step, making it suitable for all skill levels.",
      iconColor: "bg-pink-900",
      icon: FaRocket,
    },
    {
      title: "Hands-On Learning",
      description:
        "Emphasizes practical, project-based learning rather than just theoretical knowledge.",
      iconColor: "bg-orange-900",
      icon: FaTools,
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Covers fullstack development with Next.js, TypeScript, Prisma, and MongoDB, ensuring a thorough understanding of modern web development.",
      iconColor: "bg-teal-900",
      icon: FaBook,
    },
  ];

  return (
    <div className="min-h-screen py-40 max-w-6xl mx-auto">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance text-center py-4">
        {t("WhyUs.title")}
      </h2>
      <div className="py-8">
        <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
          {Object.entries(obj).map(([key, value], i) => {
            const Icon = value;
            return (
              <div
                key={i}
                className="rounded-md shadow p-4 flex  gap-4 dark:border-slate-600 dark:border dark:bg-slate-700"
              >
                <div
                  className={cn(
                    "bg-purple-800 w-16 h-16 rounded-lg text-gray-50 flex items-center justify-center flex-shrink-0"
                  )}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {t(`WhyUs.points.${key}.title`)}
                  </h2>
                  <p className="pt-3">{t(`WhyUs.points.${key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button size={"lg"}>
          <Link href="https://coding-school-typescript.vercel.app/courses/next">
            {t("WhyUs.enrollNow")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
