import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "NGUYEN TIEN HUNG",
  role: "GAME PROGAMMER",
  introduction: "A PASSIONATE GAME PROGRAMMER, SPECIALIZING IN C# AND UNITY. I LOVE TO LEARN AND CHALLENGE MYSELF IN THE FIELD OF GAME DEVELOPMENT",
  description: "Hi, I’m Hung, a game programmer with a strong passion for creating interactive and engaging experiences. My expertise lies in C# and Unity, where I develop gameplay systems, UI/UX features, and immersive mechanics.I also have knowledge of Python, SQL, MongoDB, and web technologies, which enables me to integrate data-driven solutions into games. I enjoy problem-solving, optimizing performance, and collaborating in team environments. Currently, I’m expanding my skills by learning Unreal Engine and C++.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/NGUYENTIENHUNG_CV.pdf`,
  links: {
    github: "https://github.com/HUNGNGUYEN115",
    itchIO: "https://hungnguyen115.itch.io/",
    linkedIn: "https://www.linkedin.com/in/hung-nguyen-a41043250/",
  }
};

export const games: Game[] = [
  {
    name: "SUPER PENGUIN",
    description: "My first personal top-down game where the player(penguin) shooting the wolfs.",
    
    roles: ["main programmer, audio implementer, game tester."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
     
      { source: LinkImageSource.ItchIo, url: "https://hungnguyen115.itch.io/super-peguin" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/WRkOAlLJh30", type: MediaType.YouTube },
      
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "BIO QUIZ",
    description: "A card memory game featuring biology knowledge, developed as a serious game for biology students (Group Project).",
    roles: ["UX/UI designer, game mechanics designer, audio implementer, menu system implementer, game tester."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      
      { source: LinkImageSource.ItchIo, url: "https://hungnguyen115.itch.io/bio-quiz" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_5.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/DJ-7mcgdDIs", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_6.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_7.png", type: MediaType.Image },
      
    ],
  },
  {
    name: "MUSH ROOM PICKER",
    description: "Serious educational VR game (Group Project) where players collect and identify mushrooms using an AI system.",
    
    roles: ["UX/ UI designer, inventory system desinger, game tester, audio implementer, VR interactions programmer ,video editor."],
    platforms: [Platform.Windows, Platform.Oculus],
    engine: GameEngine.Unity,
    links: [
     
      { source: LinkImageSource.ItchIo, url: "https://hungnguyen115.itch.io/mushroom-picker" },
      { source: LinkImageSource.Github, url: "https://github.com/heredos/Mushroom-Picker" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_8.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/cqqJ4pGVWbo", type: MediaType.YouTube },
      
      { source: "/images/games/GAME_NAME/Screenshot_9.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_10.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_11.png", type: MediaType.Image },
    ],
  },
  {
    name: "ICT SHOWROOM PHYSICS SIMULATION",
    description: "Serious game (Group Project) designed for entertainment purposes in an ICT showroom where player can interact with various physics-based particles.",
    
    roles: [" Programmer – Implemented ZED camera integration, developed particle systems, game tester, video editer."],
    platforms: [Platform.Windows, Platform.Zedcamera],
    engine: GameEngine.Unity,
    links: [
     
      
      
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_12.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/vrTSB2BhkH8", type: MediaType.YouTube },
      
      { source: "/images/games/GAME_NAME/Screenshot_13.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_14.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_15.png", type: MediaType.Image },
    ],
  },
  {
    name: "THE VEIL OF SORCERY",
    description: "“An open-world game (Group Project) where the player can attack enemies, talk to spirits, and buy new items at the store.”",
    
    roles: [" Menu design, , game tester, audio implementer ,video editer."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
     
      { source: LinkImageSource.ItchIo, url: "https://hungnguyen115.itch.io/the-veil-of-sercery" },
      
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_17.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/xQIHTu1hMp0", type: MediaType.YouTube },
      
      { source: "/images/games/GAME_NAME/Screenshot_16.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_18.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_19.png", type: MediaType.Image },
    ],
  }
];