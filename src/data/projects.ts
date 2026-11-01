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
  embedUrl?: string;     // Web build in /public/games/, played on the project page
  embedSizeMb?: number;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "we-are-all-equal",
    title: "We Are All Equal",
    year: 2026,
    tags: ["Unity", "C#", "Yarn Spinner", "Narrative", "Detective"],
    role: "Solo Developer",
    shortDesc: "A dark noir detective game. A raven undertaker reads the bodies of the dead to find out who killed them, and who profits.",
    longDesc: "We Are All Equal is a narrative detective game set in New Accord, a city where every animal is equal on paper. You play Edgar, a raven undertaker who buries the dead the authorities would rather forget. Examine bodies under a lamp, test samples on a chemical bench, link clues in your book and decide what goes into the city register. Every choice and every careless mistake carries over into the following cases and the city's election. Cases 1 and 2 are playable; Case 3 is in development. Built in Unity 6 with Yarn Spinner dialogue. Contains dark themes: death, the slaughter and exploitation of animals, and violence.",
    thumbnail: "/projects/waae-title.jpg",
    media: [
      "/projects/waae-title.jpg",
      "/projects/waae-office.jpg",
      "/projects/waae-map.jpg",
      "/projects/waae-workbench.jpg",
      "/projects/waae-bench.jpg",
      "/projects/waae-diner.jpg",
    ],
    embedUrl: "/games/we-are-all-equal/index.html",
    embedSizeMb: 44,
    featured: true,
  },
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
    slug: "wavekeep",
    title: "Wavekeep",
    year: 2026,
    tags: ["Tower Defence", "Wave Defence"],
    role: "Solo Developer",
    shortDesc: "Hold the line against hordes of enemies. Experiment with different hero combinations and see how they interact with each other.",
    longDesc: "Wavekeep is a wave defence game where the player holds the keep against waves of enemies. Players can upgrade and combine different abilities, each combination altering the gameplay. Mix and match heroes to unlock powerful apex abilities that decimate enemies in a flash!",
    thumbnail: "/projects/WaveDual.png",
    media: ["/projects/WavekeepCards.png", "/projects/WavekeepHub.png", "/projects/WaveThunder.png"],
    repoUrl: "https://github.com/JerryBenjaminn/Wavekeep",
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
];
