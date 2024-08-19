const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

// const isDev = process.env.NODE_ENV === "development";
// const baseUrl = isDev ? "/" : "/";

// const organizationName = "Consensys";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Optimism Java",
  // tagline:
  //"An EVM-equivalent network, scaling the Ethereum experience. Secured with a zero-knowledge rollup to Ethereum, built on lattice-based cryptography, and powered by Consensys.",
  url: "https://optimism-java.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/logo.png",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Optimism Java", // Usually your GitHub org/user name.
  projectName: "optimism-java.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages", // Github Pages deploying branch

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Set a base path separate from default /docs
          editUrl:
            "https://github.com/optimism-java/optimism-java.github.io/tree/main/",
          path: "docs",
          routeBasePath: "/",
          // @ts-ignore
          // eslint-disable-next-line global-require
          remarkPlugins: [require("remark-docusaurus-tabs")],
          remarkPlugins: [math],
          rehypePlugins: [katex],
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Docs",
        logo: {
          alt: "Optimism",
          src: "img/logo.png",
          srcDark: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "hildr-docs/index",
            position: "left",
            label: "Hildr",
          },
          {
            type: "doc",
            docId: "op-besu-docs/index",
            position: "left",
            label: "Op-Besu",
          },
          {
            type: "doc",
            docId: "super-proof-docs/index",
            position: "left",
            label: "Super-proof",
          },
          {
            href: "https://discord.gg/qHK3Vj4j",
            className: "header-discord-link",
            position: "right",
          },
          {
            href: "https://github.com/optimism-java",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "homepage",
                href: "https://optimism-java.github.io/",
              },
              // {
              //   label: "Dispute Game mainnet block explorer",
              //   href: "https://todo.build",
              // },
              // {
              //   label: "Dispute Game Sepolia block explorer",
              //   href: "https://sepolia.todo.build",
              // },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join our Discord",
                href: "https://discord.gg/qHK3Vj4j",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "Contribute to our documentation",
                href: "https://github.com/optimism-java/optimism-java.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Optimism Java.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "solidity",
          "toml",
          "bash",
          "json",
          "typescript",
          "javascript",
          "python",
        ],
      },
      metadata: [{ name: "twitter:card", content: "summary_large_image" }],
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-PY7JFNPXNH",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-TB58STH",
      },
    ],
    // [
    //   "@docusaurus/plugin-client-redirects",{}
    // ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
      },
    ],
  ],
  headTags: [
    {
      tagName: "script",
      attributes: {},
      innerHTML: `window.lightningjs||function(n){function e(e,t){var i,r,a,o,d,l;return t&&(t+=(/\\?/.test(t)?"&":"?")+"lv=1"),n[e]||(i=window,r=document,a=e,o=r.location.protocol,d="load",l=0,function(){n[a]=function(){var t=arguments,r=this,o=++l,d=r&&r!=i&&r.id||0;function s(){return s.id=o,n[a].apply(s,arguments)}return(e.s=e.s||[]).push([o,d,t]),s.then=function(n,t,i){var r=e.fh[o]=e.fh[o]||[],a=e.eh[o]=e.eh[o]||[],d=e.ph[o]=e.ph[o]||[];return n&&r.push(n),t&&a.push(t),i&&d.push(i),s},s};var e=n[a]._={};function s(){e.P(d),e.w=1,n[a]("_load")}e.fh={},e.eh={},e.ph={},e.l=t?t.replace(/^\\\/\\\//,("https:"==o?o:"http:")+"//"):t,e.p={0:+new Date},e.P=function(n){e.p[n]=new Date-e.p[0]},e.w&&s(),i.addEventListener?i.addEventListener(d,s,!1):i.attachEvent("onload",s);var c=function(){function n(){return["<!DOCTYPE ",o,"><",o,"><head></head><",t,"><",i,' src="',e.l,'"></',i,"></",t,"></",o,">"].join("")}var t="body",i="script",o="html",d=r[t];if(!d)return setTimeout(c,100);e.P(1);var l,s=r.createElement("div"),h=s.appendChild(r.createElement("div")),u=r.createElement("iframe");s.style.display="none",d.insertBefore(s,d.firstChild).id="lightningjs-"+a,u.frameBorder="0",u.id="lightningjs-frame-"+a,/MSIE[ ]+6/.test(navigator.userAgent)&&(u.src="javascript:false"),u.allowTransparency="true",h.appendChild(u);try{u.contentWindow.document.open()}catch(n){e.domain=r.domain,l="javascript:var d=document.open();d.domain='"+r.domain+"';",u.src=l+"void(0);"}try{var p=u.contentWindow.document;p.write(n()),p.close()}catch(e){u.src=l+'d.write("'+n().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}e.P(2)};e.l&&c()}()),n[e].lv="1",n[e]}var t=window.lightningjs=e("lightningjs");t.require=e,t.modules=n}({}),window.usabilla_live=lightningjs.require("usabilla_live","//w.usabilla.com/28fb46af8693.js");`,
    },
  ],
};

module.exports = config;
