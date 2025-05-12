import { Gauge, type LucideIcon, MessagesSquare } from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type Navigation = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export const siteConfig = {
  title: "VisActor Next Template",
  description: "Template for VisActor and Next.js",
};

export const navigations: Navigation[] = [
  {
    icon: Gauge,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: MessagesSquare,
    name: "Patients",
    href: "/ticket",
  },
    {
    icon: MessagesSquare,
    name: "Appointments",
    href: "/ticket",
  },
      {
    icon: MessagesSquare,
    name: "lab",
    href: "/ticket",
  },
        {
    icon: MessagesSquare,
    name: "Reports",
    href: "/ticket",
  },
];
