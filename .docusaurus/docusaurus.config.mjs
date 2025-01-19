/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Aircomponents",
  "tagline": "Lightweight Web Components",
  "favicon": "img/favicon.ico",
  "url": "https://SisyphusZheng.github.io",
  "baseUrl": "/zh-Hans/",
  "trailingSlash": false,
  "organizationName": "SisyphusZheng",
  "projectName": "Aircomponents-docs",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "zh-Hans"
    ],
    "localeConfigs": {
      "en": {
        "htmlLang": "en-GB",
        "direction": "ltr"
      },
      "zh-Hans": {
        "direction": "ltr",
        "htmlLang": "zh-Hans"
      }
    },
    "path": "i18n"
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.js",
          "editUrl": "https://github.com/aircomponents/UI"
        },
        "blog": {
          "showReadingTime": true,
          "feedOptions": {
            "type": [
              "rss",
              "atom"
            ],
            "xslt": true
          },
          "editUrl": "https://github.com/aircomponents/UI",
          "onInlineTags": "warn",
          "onInlineAuthors": "warn",
          "onUntruncatedBlogPosts": "warn"
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        },
        "sitemap": {
          "lastmod": "date",
          "changefreq": "weekly",
          "priority": 0.5,
          "ignorePatterns": [
            "/tags/**"
          ],
          "filename": "sitemap.xml"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        "hashed": true,
        "language": [
          "en",
          "zh"
        ]
      }
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        "debug": true,
        "offlineModeActivationStrategies": [
          "appInstalled",
          "standalone",
          "queryString"
        ],
        "pwaHead": [
          {
            "tagName": "link",
            "rel": "icon",
            "href": "./static/img/favicon.ico"
          },
          {
            "tagName": "link",
            "rel": "manifest",
            "href": "/manifest.json"
          },
          {
            "tagName": "meta",
            "name": "theme-color",
            "content": "rgb(0, 0, 0)"
          }
        ]
      }
    ]
  ],
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "themeConfig": {
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": true
      },
      "versionPersistence": "localStorage"
    },
    "image": "img/air-components-board.png",
    "navbar": {
      "title": "空气组件",
      "logo": {
        "alt": "空气组件",
        "src": "img/logo-RColor.svg"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "docs"
        },
        {
          "to": "/blog",
          "label": "博客",
          "position": "left"
        },
        {
          "href": "https://github.com/SisyphusZheng/aircomponents",
          "label": "GitHub",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "left",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "文档",
          "items": [
            {
              "label": "快速开始",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "社区",
          "items": [
            {
              "label": "GitHub 讨论",
              "href": "https://github.com/SisyphusZheng/aircomponents/discussions"
            }
          ]
        },
        {
          "title": "更多",
          "items": [
            {
              "label": "博客",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/SisyphusZheng/aircomponents"
            }
          ]
        }
      ],
      "copyright": "版权所有 © 2025 Aircomponents."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "baseUrlIssueBanner": true,
  "future": {
    "experimental_faster": {
      "swcJsLoader": false,
      "swcJsMinimizer": false,
      "swcHtmlMinimizer": false,
      "lightningCssMinimizer": false,
      "mdxCrossCompilerCache": false,
      "rspackBundler": false
    },
    "experimental_storage": {
      "type": "localStorage",
      "namespace": false
    },
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
};
