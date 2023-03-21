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
      type: 'category',
      label: 'Home',
      type: 'doc',
      id: 'home',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/what-is-vanus', 'getting-started/vanus-cloud', 'getting-started/vanus-open-source'
        , 'getting-started/cloud-vs-os'
      ],
    },
    {
      type: 'category',
      label: 'Vanus Cloud',
      items: ['vanus-cloud/core-concepts'],
    },
    {
      type: 'category',
      label: 'Vanus Open Source',
      items: ['vanus-open-source/quick-start','vanus-open-source/installation',
        {
          type: 'category',
          label: 'How to',
          link: {
            type: 'doc',
            id: 'how-to',
          },
          items: [
            {
              type: 'category',
              label: 'Produce',
              items: ['how-to/produce/using-sdk', 'how-to/produce/send-delay-event'],
            },
            {
              type: 'category',
              label: 'Consume',
              items: ['how-to/consume/using-sdk'],
            },
            'how-to/manage-eventbus',
            {
              type: 'category',
              label: 'Manage subscriptions',
              link: {
                type: 'doc',
                id: 'how-to/manage-subscription',
              },
              items: [
                'how-to/manage-subscription/filters',
                'how-to/manage-subscription/transformer',
                {
                  type: 'category',
                  label: 'Function reference',
                  link: {
                    type: 'doc',
                    id: 'how-to/manage-subscription/function-reference',
                  },
                  items: [
                    'how-to/manage-subscription/function-reference/structure',
                    'how-to/manage-subscription/function-reference/string',
                    'how-to/manage-subscription/function-reference/date-time',
                    'how-to/manage-subscription/function-reference/mathematical',
                    'how-to/manage-subscription/function-reference/conditional',
                    'how-to/manage-subscription/function-reference/array'
                  ],
                },
              ],
            },
            'how-to/manage-dlq',
            'how-to/vsctl',
            'how-to/use-lambda',
            'how-to/use-gcloud-functions'
          ],
        },
        {
          type: 'category',
          label: 'Connectors',
          link: {
            type: 'doc',
            id: 'connectors',
          },
          items: [
            {
              type: 'category',
              label: 'Source',
              link: {
                type: 'doc',
                id: 'connectors/source',
              },
              items: [
                'connectors/source/source-alicloud-billing/README',
                'connectors/source/source-aws-billing/README',
                'connectors/source/source-aws-s3/README',
                'connectors/source/source-aws-sns/README',
                'connectors/source/source-aws-sqs/README',
                'connectors/source/source-github/README',
                'connectors/source/source-http/README',
                'connectors/source/source-kafka/README',
                'connectors/source/source-mongodb/README',
                'connectors/source/source-mysql/README',
                'connectors/source/source-postgres/README',
                'connectors/source/source-tencentcloud-cos/README'
              ],
            },
            {
              type: 'category',
              label: 'Sink',
              link: {
                type: 'doc',
                id: 'connectors/sink',
              },
              items: [
                'connectors/sink/sink-aws-s3/README',
                'connectors/sink/sink-display/README',
                'connectors/sink/sink-doris/README',
                'connectors/sink/sink-elasticsearch/README',
                'connectors/sink/sink-email/README',
                'connectors/sink/sink-feishu/README',
                'connectors/sink/sink-http/README',
                'connectors/sink/sink-k8s/README',
                'connectors/sink/sink-mongodb/README',
                'connectors/sink/sink-mysql/README',
                'connectors/sink/sink-slack/README',
                'connectors/sink/sink-tencentcloud-scf/README'
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      items: ['vanus-cloud/core-concepts'],
    },
    {
      type: 'category',
      label: 'Understand Vanus',
      items: ['introduction/architecture','introduction/concepts','introduction/features','introduction/use-cases'],
    },
    /*{
      type: 'category',
      label: 'How to',
      link: {
        type: 'doc',
        id: 'how-to',
      },
      items: [
        {
          type: 'category',
          label: 'Produce',
          items: ['how-to/produce/using-sdk', 'how-to/produce/send-delay-event'],
        },
        {
          type: 'category',
          label: 'Consume',
          items: ['how-to/consume/using-sdk'],
        },
        'how-to/manage-eventbus',
        {
          type: 'category',
          label: 'Manage subscriptions',
          link: {
            type: 'doc',
            id: 'how-to/manage-subscription',
          },
          items: [
              'how-to/manage-subscription/filters',
              'how-to/manage-subscription/transformer',
              {
                type: 'category',
                label: 'Function reference',
                link: {
                  type: 'doc',
                  id: 'how-to/manage-subscription/function-reference',
                },
                items: [
                    'how-to/manage-subscription/function-reference/structure',
                    'how-to/manage-subscription/function-reference/string',
                    'how-to/manage-subscription/function-reference/date-time',
                    'how-to/manage-subscription/function-reference/mathematical',
                    'how-to/manage-subscription/function-reference/conditional',
                    'how-to/manage-subscription/function-reference/array'
                ],
              },
          ],
        },
        'how-to/manage-dlq',
        'how-to/vsctl',
        'how-to/use-lambda',
        'how-to/use-gcloud-functions'
      ],
    },
    {
      type: 'category',
      label: 'Connectors',
      link: {
        type: 'doc',
        id: 'connectors',
      },
      items: [
        {
          type: 'category',
          label: 'Source',
          link: {
            type: 'doc',
            id: 'connectors/source',
          },
          items: [
            'connectors/source/source-alicloud-billing/README',
            'connectors/source/source-aws-billing/README',
            'connectors/source/source-aws-s3/README',
            'connectors/source/source-aws-sns/README',
            'connectors/source/source-aws-sqs/README',
            'connectors/source/source-github/README',
            'connectors/source/source-http/README',
            'connectors/source/source-kafka/README',
            'connectors/source/source-mongodb/README',
            'connectors/source/source-mysql/README',
            'connectors/source/source-postgres/README',
            'connectors/source/source-tencentcloud-cos/README'
          ],
        },
        {
          type: 'category',
          label: 'Sink',
          link: {
            type: 'doc',
            id: 'connectors/sink',
          },
          items: [
            'connectors/sink/sink-aws-s3/README',
            'connectors/sink/sink-display/README',
            'connectors/sink/sink-doris/README',
            'connectors/sink/sink-elasticsearch/README',
            'connectors/sink/sink-email/README',
            'connectors/sink/sink-feishu/README',
            'connectors/sink/sink-http/README',
            'connectors/sink/sink-k8s/README',
            'connectors/sink/sink-mongodb/README',
            'connectors/sink/sink-mysql/README',
            'connectors/sink/sink-slack/README',
            'connectors/sink/sink-tencentcloud-scf/README'
          ],
        },
      ],
    },*/
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/cloudevents'],
    },
  ],
};

module.exports = sidebars;
