export type Project = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  role: string;
  shortDesc: string;
  longDesc: string;
  thumbnail: string;
  media: string[];
  playUrl?: string;
  downloadUrl?: string;
  repoUrl?: string;
  youtubeUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "cubbys-blocks",
    title: "Cubby's Blocks",
    year: 2026,
    tags: ["Unity", "C#", "Mobile"],
    role: "Solo Developer",
    shortDesc: "A mobile puzzle game featuring Cubby the cube, currently in internal testing.",
    longDesc: "Cubby's Blocks is a mobile puzzle game built in Unity 6 for Android, featuring 30 hand-crafted levels across three worlds. Currently in internal testing ahead of public release.",
    thumbnail: "/projects/cubbysblocks-1.png",
    media: ["/projects/Cubby_Main.png", "/projects/Cubby_Level_1.png", "/projects/Cubby_Level_2.png"],
    repoUrl: "https://github.com/JerryBenjaminn/Blockavist",
    featured: true,
  },
  {
    slug: "cryptvania",
    title: "Cryptvania",
    year: 2025,
    tags: ["Unity", "C#"],
    role: "Solo Developer",
    shortDesc: "Hollow Knight inspired metroidvania with ability unlocks and fast paced combat.",
    longDesc: "Cryptvania is a Metroidvania with a single handcrafted level and boss battle. Features Hollow Knight-inspired combat mechanics, ability unlocks, and pixel art visuals. Built solo in Unity with C#.",
    thumbnail: "/projects/cryptvania.png",
    media: ["/projects/cryptvania.png"],
    repoUrl: "https://github.com/JerryBenjaminn/Metroidvania",
    featured: true,
  },
  {
    slug: "hopper-popper",
    title: "Hopper Popper",
    year: 2026,
    tags: ["Unity", "C#", "Photon Fusion 2", "Multiplayer"],
    role: "Lead Game Designer & Programmer",
    shortDesc: "A chaotic online party brawler where cute animals fight for dominance. Jump on your friends, gain points and be the best Hopper Popper!",
    longDesc: "Hopper Popper is a chaotic online multiplayer party brawler built with Unity and Photon Fusion 2. Players control cute animals competing for dominance in fast-paced matches. Developed as a team project with a focus on multiplayer systems and game design.",
    thumbnail: "/projects/hopperpopper.png",
    media: ["/projects/hopperpopper.png"],
    playUrl: "https://roskapanda.itch.io/hopperpopper",
    youtubeUrl: "https://www.youtube.com/watch?v=sRcJjxYwO-o",
    featured: true,
  },
];
