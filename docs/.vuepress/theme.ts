import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({

  /* 基本选项 */

  // 部署到哪里
  hostname: "https://docs.1369.ml",

  repo: "quinlan-l/info-repo-site",

  author: {
    name: 'quinlan-l',
    url: 'https://github.com/quinlan-l',
  },

  docsDir: "docs",

  /* 外观选项 */

  // 纯净模式
  pure: true,

  darkmode: "toggle",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,

  iconAssets: "iconfont",

  backToTop: true,

  logo: "/logo.svg",

  // 导航、标题、文章属性
  breadcrumb: true,
  breadcrumbIcon: true,
  titleIcon: true,
  pageInfo: [
    // "Author", "Date", 
    "Original", "Category", "Tag", 
    "Word", "ReadingTime", "PageView"
  ],

  // 源文件
  editLink: true,
  docsBranch: "mst",

  /* 多语言选项 */

  locales: {
    // 默认是中文
    "/": {

      //布局选项
      navbar: zhNavbar,
      sidebar: zhSidebar,
  
      // 源文件
      metaLocales: {
        editLink: "编辑此页",
      },

      // 页脚
      displayFooter: true,
      footer: "Copyright © 2022-2022 <a href='https://github.com/quinlan-l'>Quinlan</a> All Rights Reserved.",
      copyright: false,
      
      // 博客选项
      blog: {
        name: "quinlan-l",
        avatar: "/logo.svg",
        description: "无业游民",
        timeline: "我为时间留下足迹，时间证明我存在过。",
        intro: "https://github.com/quinlan-l",
        medias: {
          Github: "https://github.com/quinlan-l"
        },
        articleInfo: ["Date", "PageView", "Category", "Tag", "ReadingTime"]
      },
    },
  },

  // 加密文档
  encrypt: {
    config: {
      "/tool/bookmark": ["passwd"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
  },
});
