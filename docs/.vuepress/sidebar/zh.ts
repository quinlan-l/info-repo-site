import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/dao/": [
    {
      text: "暂存",
      icon: "folder",
      prefix: "000-stage/",
      collapsable: true,
      children: 'structure',
    },
    {
      text: "工作",
      icon: "folder",
      prefix: "100-work/",
      collapsable: true,
      children: 'structure',
    },
    {
      text: "学习",
      icon: "folder",
      prefix: "200-study/",
      collapsable: true,
      children: 'structure',
    },
    {
      text: "哲学",
      icon: "folder",
      prefix: "300-philosophy/",
      collapsable: true,
      children: 'structure',
    },
    {
      text: "历史",
      icon: "folder",
      prefix: "400-history/",
      collapsable: true,
      children: 'structure',
    },
    {
      text: "科学",
      icon: "folder",
      prefix: "500-science/",
      collapsable: true,
      children: 'structure',
    },
    {
      text: "社会",
      icon: "folder",
      prefix: "600-society/",
      collapsable: true,
      children: 'structure',
    },
  ]
});