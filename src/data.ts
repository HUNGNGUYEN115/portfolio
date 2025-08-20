import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "NGUYEN TIEN HUNG",
  role: "GAME PROGAMMER",
  introduction: "A PASSIONATE GAME PROGRAMMER, SPECIALIZING IN C# AND UNITY. I LOVE TO LEARN AND CHALLENGE MYSELF IN THE FIELD OF GAME DEVELOPMENT",
  description: "TELL_ABOUT_YOURSELFHi, I’m Hung, a game programmer with a strong passion for creating interactive and engaging experiences. My expertise lies in C# and Unity, where I develop gameplay systems, UI/UX features, and immersive mechanics.I also have knowledge of Python, SQL, MongoDB, and web technologies, which enables me to integrate data-driven solutions into games. I enjoy problem-solving, optimizing performance, and collaborating in team environments. Currently, I’m expanding my skills by learning Unreal Engine and C++.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/HUNGNGUYEN115",
    itchIO: "https://hungnguyen115.itch.io/",
    linkedIn: "https://www.linkedin.com/in/h%C6%B0ng-nguy%E1%BB%85n-a41043250/",
  }
};

export const games: Game[] = [
  {
    name: "SUPER PENGUIN",
    description: "My first personal top-down game where the player(penguin) shooting the wolfs.",
    
    myrole: ["main programmer, sound music"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
     
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://youtu.be/WRkOAlLJh30", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    myrole: ["we"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];