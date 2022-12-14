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
      label: 'Introduction',
      items: ['introduction/what-is-vanus', 'introduction/features', 'introduction/roadmap',
        'introduction/concepts', 'introduction/architecture', ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started',
      },
      items: ['getting-started/quick-start', 'getting-started/installation'],
    },
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
          label: 'Manage subscriptions',
          items: [
              'how-to/manage-subscription',
              'how-to/manage-subscription/filters',
              'how-to/manage-subscription/function-reference',
              'how-to/manage-subscription/transformer'
                 ],
        },

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
        'how-to/manage-subscription',
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
              'connectors/source/mysql',
              'connectors/source/s3',
            'connectors/source/sns',
            'connectors/source/http',
            'connectors/source/github',
            'connectors/source/sqs'
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
            'connectors/sink/mysql',
            'connectors/sink/s3'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/cloudevents'],
    },
  ],
};

module.exports = sidebars;
