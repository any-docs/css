import {defineConfig, loadEnv} from 'vitepress'
import {items as CSSSidebarItems} from "./sidebars/css";

// https://vitepress.dev/reference/site-config
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    srcDir: "content",

    title: "AnyDocs CSS",
    description: "AnyDocs CSS aggregates the world's most important developer documentation into one sleek, unified interface.",
    head: [
      ['link', {rel: 'icon', href: '/images/icon-512.png'}]
    ],
    themeConfig: {
      siteTitle: 'AnyDocs',
      logo: '/images/icon-512.png',
      logoLink: env.VITE_MAIN_URL,
      search: {
        provider: 'local'
      },
      editLink: {
        pattern: 'https://github.com/any-docs/css/edit/main/content/:path',
        text: 'Edit this page on GitHub'
      },
      nav: [
        {
          text: 'Docs',
          items: [
            {
              text: 'Javascript',
              link: '/javascript/index',
            },
            {
              text: 'HTML',
              link: '/html/index',
            },
            {
              text: 'PHP',
              link: '/php/introduction',
            },
            {
              text: 'Rust',
              link: '/rust'
            },
            {
              text: 'Zig',
              link: '/zig'
            }
          ]
        },
      ],
      sidebar: {
        '/': CSSSidebarItems,
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/any-docs/anydocs' }
      ],
      footer: {
        copyright: 'Copyright © 2025'
      }
    },
    ignoreDeadLinks: true,
    vite: {
      server: {
        port: env.VITE_CSS_PORT as unknown as number,
        strictPort: true
      }
    },
    cleanUrls: false
  })
}
