import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Sidebar configuration for 2004Scape documentation
 */
const sidebars: SidebarsConfig = {
  // Main sidebar with organized sections
  Sidebar: [
    'intro',
    {
      type: 'category',
      label: 'Server Development',
      collapsed: false,
      items: [
        'server/overview',
        {
          type: 'category',
          label: 'Architecture',
          collapsed: true,
          items: [
            'server/architecture/overview',
            'server/architecture/components',
            'server/architecture/data-flow',
            'server/architecture/deployment',
          ],
        },
        {
          type: 'category',
          label: 'Core Concepts',
          collapsed: true,
          items: [
            'server/core-concepts/runescript',
            'server/core-concepts/game-engine',
            'server/core-concepts/network-protocol',
            'server/core-concepts/database-models',
          ],
        },
        {
          type: 'category',
          label: 'Components',
          collapsed: true,
          items: [
            'server/components/world-system',
            'server/components/server-components',
            'server/components/content-systems',
            'server/components/cache-management',
          ],
        },
        {
          type: 'category',
          label: 'RuneScript',
          collapsed: true,
          items: [
            'server/runescript/introduction',
          ],
        },
                {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'server/api/engine-api',
            'server/api/runescript-api',
            'server/api/database-api',
            'server/api/network-api',
          ],
        },
      ],
    },
    'style-guide',
  ],
};

export default sidebars;
