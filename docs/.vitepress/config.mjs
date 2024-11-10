import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Types of Classification Tasks - Machine Learning",
  description: "An article about the types of classification tasks in Machine Learning.",
  base: "/types_of_classification_tasks_machine_learning/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/types_of_classification_tasks_machine_learning' }
    ]
  }
})
