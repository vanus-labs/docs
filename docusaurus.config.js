// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// 链接
const url_github = "https://github.com/vanus-labs/vanus";
const url_slack =
  "https://join.slack.com/t/vanusworkspace/shared_invite/zt-1jilbbfo2-NxiFG0VOo8ABGCCNaeNfcA";
const url_twitter = "https://twitter.com/vanus_ai";
const url_vanus = "https://vanus.ai";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "An open-source, cloud-native, Serverless message queue for building EDA applications with Ease.",
  tagline: "How to use Vanus",
  url: "https://docs.vanus.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "source", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/linkall-labs/vanus-connect/main/connectors/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "content/connectors/source/", // the base directory to output to.
        documents: [
          "source-alicloud-billing/README.md",
          "source-aws-billing/README.md",
          "source-aws-sns/README.md",
          "source-aws-sqs/README.md",
          "source-github/README.md",
          "source-http/README.md",
          "source-kafka/README.md",
          "source-mongodb/README.md",
          "source-mysql/README.md",
          "source-postgres/README.md",
          "source-aws-s3/README.md",
          "source-tencentcloud-cos/README.md",
        ], // the file names to download
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "sink", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/linkall-labs/vanus-connect/main/connectors/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "content/connectors/sink/", // the base directory to output to.
        documents: [
          "sink-aws-s3/README.md",
          "sink-display/README.md",
          "sink-doris/README.md",
          "sink-elasticsearch/README.md",
          "sink-email/README.md",
          "sink-feishu/README.md",
          "sink-http/README.md",
          "sink-k8s/README.md",
          "sink-mongodb/README.md",
          "sink-mysql/README.md",
          "sink-slack/README.md",
          "sink-tencentcloud-scf/README.md",
        ], // the file names to download
      },
    ],
  ],
  scripts: [
    // Object format.
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "linkall.com",
    },
    { src: "https://code.createjs.com/1.0.0/createjs.min.js" },
    { src: "/js/product-animation.js" },
  ],
  onBrokenMarkdownLinks: "warn",
  favicon: "img/vanus-favicon.svg",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "linkall-labs", // Usually your GitHub org/user name.
  projectName: "vanus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "content",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vanus-labs/docs/edit/main",
        },
        googleAnalytics: {
          trackingID: "G-TJL6X2XKQP",
          anonymizeIP: true,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "NL3TWIITE6",
        apiKey: "fa8450ef71ea4c0887cf399af0d4eef0",
        indexName: "vanus-docs",
        contextualSearch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Vanus",
        logo: {
          alt: "vanus logo",
          src: "img/vanus-logo.svg",
          href: url_vanus,
        },

        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "introduction/what-is-vanus",
            position: "left",
            label: "Docs",
          },
          {
            href: url_github,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
          {
            href: url_slack,
            position: "right",
            className: "header-slack-link",
            "aria-label": "Slack",
          },
          {
            href: url_twitter,
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "GitHub",
            href: url_github,
          },
          {
            label: "Slack",
            href: url_slack,
          },
          {
            label: "Twitter",
            href: url_twitter,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Linkall Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
