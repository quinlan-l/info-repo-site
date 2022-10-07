import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: '门道',
      icon: 'creative',
      prefix: 'dao/',
      collapsable: true,
      children: 'structure',
    },
  ]
});