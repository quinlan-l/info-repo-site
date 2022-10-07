import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  
  base: "/info-repo-vuepress/",

  dest: "./dist",

  port: 3000,

  locales: {
    "/": {
      lang: "zh-CN",
      title: "一闪亮晶",
      description: "一闪一闪亮晶晶",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
  },

  theme,

  // 预拉取页面所需的所有文件
  shouldPrefetch: false,
});
