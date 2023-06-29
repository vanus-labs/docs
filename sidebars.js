/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  vanusDoc: [
    {
      type: "html",
      value: "<h2>Getting Started</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "getting-started/what-is-vanus",
    },
    {
      type: "doc",
      id: "getting-started/vanus-ai",
    },
    {
      type: "doc",
      id: "getting-started/vanus-connect",
    },
    {
      type: "doc",
      id: "getting-started/vanus-os",
    },
    {
      type: "doc",
      id: "getting-started/connect-vs-os",
    },
    {
      type: "category",
      label: "Understand Vanus Connect & OS",
      items: [
        "getting-started/understand-vanus-connect-os/architecture",
        "getting-started/understand-vanus-connect-os/concepts",
        "getting-started/understand-vanus-connect-os/features",
        "getting-started/understand-vanus-connect-os/use-cases",
        "getting-started/understand-vanus-connect-os/roadmap",
      ],
    },

    {
      type: "html",
      value: "<h2>Vanus AI</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "vanus-ai/what-is-vanus-ai",
    },
    {
      type: "doc",
      id: "vanus-ai/language-models",
    },
    {
      type: "doc",
      id: "vanus-ai/use-cases",
    },
    {
      type: "doc",
      id: "vanus-ai/features",
    },
    {
      type: "category",
      label: "How to",
      items: [
          "vanus-ai/how-to/create-AI-bot",
      ],
    },

    {
      type: "html",
      value: "<h2>Vanus Connect</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "vanus-connect/what-is-vanus-connect",
    },
    {
      type: "doc",
      id: "vanus-connect/use-cases",
    },
    {
      type: "category",
      label: "User Guides",
      items: [
            "user-guides/how-to-guides/get-webhook-url",
            "user-guides/how-to-guides/add-sections-in-slack-sink",
          ],
    },
    {
      type: "category",
      label: "Template Guides",
      link: {
        type: "doc",
        id: "user-guides/template-guides",
      },
      items: [
          "vanus-connect/template-guides/github-starred-feishu",
          "vanus-connect/template-guides/github-issue-created-feishu",
          "vanus-connect/template-guides/github-comment-feishu",
          "vanus-connect/template-guides/github-open-pr-feishu",
          "vanus-connect/template-guides/github-star-event-slack",
          "vanus-connect/template-guides/github-issue-event-slack",
          "vanus-connect/template-guides/github-comment-slack",
          "vanus-connect/template-guides/github-pull-request-opened-slack",
          "vanus-connect/template-guides/github-comment-discord",
          "vanus-connect/template-guides/github-open-issue-discord",
          "vanus-connect/template-guides/github-open-pr-discord",
          "vanus-connect/template-guides/github-star-discord",
          "vanus-connect/template-guides/github-issue-discord",
          "vanus-connect/template-guides/github-developer-360",
          "vanus-connect/template-guides/github-merge-pr-slack",
          "vanus-connect/template-guides/auth0-login-slack",
          "vanus-connect/template-guides/auth0-login-discord",
          "vanus-connect/template-guides/grafana-discord",
          "vanus-connect/template-guides/grafana-slack",
          "vanus-connect/template-guides/aws-bucket-discord",
      ],
    },
    {
      type: "category",
      label: "Connector Guides",
      items: [
        {
          type: "category",
          label: "Source",
          items: [
            "vanus-connect/connector-guides/source/auth0/setup",
            "vanus-connect/connector-guides/source/aws-billing/setup",
            "vanus-connect/connector-guides/source/aws-eventbridge/setup",
            "vanus-connect/connector-guides/source/aws-s3/setup",
            "vanus-connect/connector-guides/source/chatai/setup",
            "vanus-connect/connector-guides/source/chatgpt/setup",
            "vanus-connect/connector-guides/source/github/setup",
            "vanus-connect/connector-guides/source/grafana/setup",
            "vanus-connect/connector-guides/source/labeling/setup",
            "vanus-connect/connector-guides/source/schedule/setup",
            "vanus-connect/connector-guides/source/shopify/setup",
            "vanus-connect/connector-guides/source/stripe/setup",
            "vanus-connect/connector-guides/source/webhook/setup",
          ],
        },
        {
          type: "category",
          label: "Sink",
          items: [
            "vanus-connect/connector-guides/sink/aws-rds-mysql/setup",
            "vanus-connect/connector-guides/sink/aws-s3/setup",
            "vanus-connect/connector-guides/sink/dingtalk/setup",
            "vanus-connect/connector-guides/sink/discord/setup",
            "vanus-connect/connector-guides/sink/doris/setup",
            "vanus-connect/connector-guides/sink/elasticsearch/setup",
            "vanus-connect/connector-guides/sink/feishu/setup",
            "vanus-connect/connector-guides/sink/google-sheets/setup",
            "vanus-connect/connector-guides/sink/http/setup",
            "vanus-connect/connector-guides/sink/mongodb/setup",
            "vanus-connect/connector-guides/sink/mysql/setup",
            "vanus-connect/connector-guides/sink/slack/setup",
            "vanus-connect/connector-guides/sink/snowflake/setup",
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<h2>Vanus Open Source</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "vanus-os/what-is-vanus-os",
    },
    {
      type: "doc",
      id: "vanus-os/quick-start",
    },
    {
      type: "doc",
      id: "vanus-os/installation",
    },
    {
      type: "category",
      label: "How to",
      link: {
        type: "doc",
        id: "how-to",
      },
      items: [
        {
          type: "category",
          label: "Upgrade Vanus",
          items: [
            "how-to/maintain/upgrade/using-vanus-operator",
            "how-to/maintain/upgrade/using-vsctl",
          ],
        },
        {
          type: "category",
          label: "Produce",
          items: [
            "how-to/produce/using-sdk",
            "how-to/produce/send-delay-event",
          ],
        },
        {
          type: "category",
          label: "Consume",
          items: ["how-to/consume/using-sdk"],
        },
        "how-to/manage-eventbus",
        {
          type: "category",
          label: "Manage subscriptions",
          link: {
            type: "doc",
            id: "how-to/manage-subscription",
          },
          items: [
            "how-to/manage-subscription/filters",
            "how-to/manage-subscription/transformer",
            {
              type: "category",
              label: "Function reference",
              link: {
                type: "doc",
                id: "how-to/manage-subscription/function-reference",
              },
              items: [
                "how-to/manage-subscription/function-reference/structure",
                "how-to/manage-subscription/function-reference/string",
                "how-to/manage-subscription/function-reference/date-time",
                "how-to/manage-subscription/function-reference/mathematical",
                "how-to/manage-subscription/function-reference/conditional",
                "how-to/manage-subscription/function-reference/array",
              ],
            },
          ],
        },
        "how-to/manage-dlq",
        "how-to/vsctl",
        "how-to/use-lambda",
        "how-to/use-gcloud-functions",
      ],
    },
    {
      type: "category",
      label: "Connectors",
      link: {
        type: "doc",
        id: "connectors",
      },
      items: [
        {
          type: "category",
          label: "Source",
          link: {
            type: "doc",
            id: "connectors/source",
          },
          items: [
            "vanus-os/connectors/source/source-alicloud-billing/README",
            "vanus-os/connectors/source/source-aws-billing/README",
            "vanus-os/connectors/source/source-aws-s3/README",
            "vanus-os/connectors/source/source-aws-sns/README",
            "vanus-os/connectors/source/source-aws-sqs/README",
            "vanus-os/connectors/source/source-github/README",
            "vanus-os/connectors/source/source-http/README",
            "vanus-os/connectors/source/source-kafka/README",
            "vanus-os/connectors/source/source-mongodb/README",
            "vanus-os/connectors/source/source-mysql/README",
            "vanus-os/connectors/source/source-postgres/README",
            "vanus-os/connectors/source/source-tencentcloud-cos/README",
          ],
        },

        {
          type: "category",
          label: "Sink",
          link: {
            type: "doc",
            id: "connectors/sink",
          },
          items: [
            "vanus-os/connectors/sink/sink-aws-s3/README",
            "vanus-os/connectors/sink/sink-display/README",
            "vanus-os/connectors/sink/sink-doris/README",
            "vanus-os/connectors/sink/sink-elasticsearch/README",
            "vanus-os/connectors/sink/sink-email/README",
            "vanus-os/connectors/sink/sink-feishu/README",
            "vanus-os/connectors/sink/sink-http/README",
            "vanus-os/connectors/sink/sink-k8s/README",
            "vanus-os/connectors/sink/sink-mongodb/README",
            "vanus-os/connectors/sink/sink-mysql/README",
            "vanus-os/connectors/sink/sink-slack/README",
            "vanus-os/connectors/sink/sink-tencentcloud-scf/README",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
