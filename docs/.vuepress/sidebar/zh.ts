import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: '道',
      icon: 'creative',
      prefix: 'dao/',
      collapsable: true,
      children: 'structure',
    },
  ]
});