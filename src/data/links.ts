import type { ComponentType } from "react";
import { Gamepad2, Mail, type LucideProps } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export type SocialLink = {
  label: string;
  sublabel: string;
  href: string;
  icon: ComponentType<LucideProps>;
  external: boolean;
};

export const itchUrl = "https://jerrybenjaminn.itch.io/";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    sublabel: "github.com/JerryBenjaminn",
    href: "https://github.com/JerryBenjaminn",
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    sublabel: "jerry-nordman",
    href: "https://www.linkedin.com/in/jerry-nordman-82a801227/",
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "itch.io",
    sublabel: "jerrybenjaminn.itch.io",
    href: itchUrl,
    icon: Gamepad2,
    external: true,
  },
  {
    label: "Email",
    sublabel: "nordmanjerry@gmail.com",
    href: "mailto:nordmanjerry@gmail.com",
    icon: Mail,
    external: false,
  },
];
