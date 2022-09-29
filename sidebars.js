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
  introSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'introduction',
      },
      items: ['introduction/features', 'introduction/roadmap'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started',
      },
      items: ['getting-started/quick-start','getting-started/playground', 'getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'concepts',
      },
      items: ['concepts/architecture', 'concepts/cloudevents', 'concepts/eventbus',
        'concepts/subscription', 'concepts/dead-letter', 'concepts/connector'],
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
          label: 'Producing',
          items: ['how-to/producing/using-sdk', 'how-to/producing/send-delay-event'],
        },
        {
          type: 'category',
          label: 'Consuming',
          items: ['how-to/consuming/using-sdk'],
        },
        'how-to/managing-eventbus',
        'how-to/managing-subscription',
        'how-to/managing-dlq',
        'how-to/vsctl',
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
              'connectors/source/mysql'
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
            'connectors/sink/mysql'
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
