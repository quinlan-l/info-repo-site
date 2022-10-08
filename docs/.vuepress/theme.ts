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
        editLink: "在 GitHub 上编辑此页",
      },

      // 页脚
      displayFooter: false,
      footer: "默认页脚",
      
      // 博客选项
      blog: {
        name: "quinlan-l",
        avatar: "/logo.svg",
        description: "无业游民",
        timeline: "to do means no do",
        intro: "https://github.com/quinlan-l",
        medias: {
          Github: "https://github.com/quinlan-l"
        },
      },
    },
    // "/en/": {
    //   // navbar
    //   navbar: enNavbar,

    //   // sidebar
    //   sidebar: enSidebar,

    //   footer: "Default footer",

    //   displayFooter: true,

    //   blog: {
    //     description: "A FrontEnd programmer",
    //     intro: "/en/intro.html",
    //   },

    //   metaLocales: {
    //     editLink: "Edit this page on GitHub",
    //   },
    // },
  },

  // 加密文档
  encrypt: {
    config: {
      "/bookmark": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // Disable features you don't want here
    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   chart: true,
    //   codetabs: true,
    //   container: true,
    //   demo: true,
    //   echarts: true,
    //   flowchart: true,
    //   gfm: true,
    //   imageSize: true,
    //   include: true,
    //   katex: true,
    //   lazyLoad: true,
    //   mark: true,
    //   mermaid: true,
    //   playground: {
    //     presets: ["ts", "vue"],
    //   },
    //   presentation: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },
    //   stylize: [
    //     {
    //       matcher: "Recommanded",
    //       replacer: ({ tag }) => {
    //         if (tag === "em")
    //           return {
    //             tag: "Badge",
    //             attrs: { type: "tip" },
    //             content: "Recommanded",
    //           };
    //       },
    //     },
    //   ],
    //   sub: true,
    //   sup: true,
    //   tabs: true,
    //   vpre: true,
    //   vuePlayground: true,
    // },

    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
