import { Gauge, type LucideIcon, MessagesSquare } from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type Navigation = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export const siteConfig = {
  title: "RURAL HEALTH TEAM DASHBOARD",
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
    href: "",
  },
    {
    icon: MessagesSquare,
    name: "Appointments",
    href: "/ticket",
  },
      {
    icon: MessagesSquare,
    name: "lab",
    href: "",
  },
        {
    icon: MessagesSquare,
    name: "Upload",
    href: "",
  },
          {
    icon: MessagesSquare,
    name: "Reports",
    href: "",
  },
            {
    icon: MessagesSquare,
    name: "Analysis",
    href: "",
  },
];
