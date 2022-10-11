import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "家", icon: "home", link: "/" },
  { text: "道", icon: "creative", link: "/dao/" },
  { text: "器", icon: "tool", link: "/tool/" },
  { 
    text: "链", 
    icon: "link",
    children: [
      { text: "vue@3", link: "https://cn.vuejs.org/" },
      { text: "vuepress@2", link: "https://v2.vuepress.vuejs.org/zh/" },
      { text: "vuepress-theme-hope@2", link: "https://vuepress-theme-hope.github.io/v2/zh/" },
    ]
  },
]);
