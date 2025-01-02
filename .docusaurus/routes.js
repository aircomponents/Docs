import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'ca3'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/authors/zhizheng',
    component: ComponentCreator('/en/blog/authors/zhizheng', 'aba'),
    exact: true
  },
  {
    path: '/en/blog/trying',
    component: ComponentCreator('/en/blog/trying', '921'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '117'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '0a4'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '202'),
            routes: [
              {
                path: '/en/docs/basic-components/button',
                component: ComponentCreator('/en/docs/basic-components/button', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/基础组件',
                component: ComponentCreator('/en/docs/category/基础组件', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
