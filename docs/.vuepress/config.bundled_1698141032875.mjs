// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
var config_default = defineConfig4CustomTheme({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316",
      description: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316"
    }
  },
  base: "/code-standard-spec/",
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/index.md" },
      {
        text: "\u7F16\u7801\u89C4\u8303",
        items: [
          { text: "HTML \u7F16\u7801\u89C4\u8303", link: "/coding/html.md" },
          { text: "CSS \u7F16\u7801\u89C4\u8303", link: "/coding/css.md" },
          { text: "JavaScript \u7F16\u7801\u89C4\u8303", link: "/coding/javascript.md" },
          { text: "Typescript \u7F16\u7801\u89C4\u8303", link: "/coding/typescript.md" },
          { text: "Node \u7F16\u7801\u89C4\u8303", link: "/coding/node.md" }
        ]
      },
      {
        text: "\u5DE5\u7A0B\u89C4\u8303",
        items: [
          { text: "Git \u89C4\u8303", link: "/engineering/git.md" },
          { text: "\u6587\u6863\u89C4\u8303", link: "/engineering/doc.md" },
          { text: "CHANGELOG \u89C4\u8303", link: "/engineering/changelog.md" }
        ]
      },
      {
        text: "NPM\u5305",
        items: [
          { text: "code-eslint-config", link: "/npm/eslint.md" },
          { text: "code-stylelint-config", link: "/npm/stylelint.md" },
          { text: "code-commitlint-config", link: "/npm/commitlint.md" },
          { text: "code-markdownlint-config", link: "/npm/markdownlint.md" },
          { text: "code-eslint-plugin", link: "/npm/eslint-plugin.md" }
        ]
      },
      {
        text: "\u811A\u624B\u67B6",
        items: [{ text: "code-lint", link: "/cli/encode-fe-lint.md" }]
      }
    ],
    sidebar: [
      {
        title: "\u7F16\u7801\u89C4\u8303",
        children: [
          {
            title: "HTML \u7F16\u7801\u89C4\u8303",
            path: "/coding/html.md"
          },
          {
            title: "CSS \u7F16\u7801\u89C4\u8303",
            path: "/coding/css.md"
          },
          {
            title: "JavaScript \u7F16\u7801\u89C4\u8303",
            path: "/coding/javascript.md"
          },
          {
            title: "Typescript \u7F16\u7801\u89C4\u8303",
            path: "/coding/typescript.md"
          },
          {
            title: "Node \u7F16\u7801\u89C4\u8303",
            path: "/coding/node.md"
          }
        ]
      },
      {
        title: "\u5DE5\u7A0B\u89C4\u8303",
        children: [
          {
            title: "Git \u89C4\u8303",
            path: "/engineering/git.md"
          },
          {
            title: "\u6587\u6863\u89C4\u8303",
            path: "/engineering/doc.md"
          },
          {
            title: "CHANGELOG \u89C4\u8303",
            path: "/engineering/changelog.md"
          }
        ]
      },
      {
        title: "NPM\u5305",
        children: [
          { title: "code-eslint-config", path: "/npm/eslint.md" },
          { title: "code-stylelint-config", path: "/npm/stylelint.md" },
          { title: "code-commitlint-config", path: "/npm/commitlint.md" },
          { title: "code-markdownlint-config", path: "/npm/markdownlint.md" },
          { title: "code-eslint-plugin", path: "/npm/eslint-plugin.md" }
        ]
      },
      {
        title: "\u811A\u624B\u67B6",
        children: [{ title: "code-lint", path: "/cli/encode-fe-lint.md" }]
      }
    ],
    logo: "/img/logo.png",
    repo: "xiuping-1/spec",
    searchMaxSuggestions: 10,
    docsDir: "docs",
    footer: {
      createYear: 2023,
      copyrightInfo: 'encode studio | <a href="https://github.com/xiuping-1/code-standard-spec" target="_blank">github</a>'
    },
    extendFrontmatter: {
      author: {
        name: "xiuping-1",
        link: "https://github.com/xiuping-1/code-standard-spec"
      }
    }
  },
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316"
      }
    ]
  ],
  plugins: [
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ]
  ],
  extraWatchFiles: [".vuepress/config.ts"]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUsIFVzZXJQbHVnaW5zIH0gZnJvbSAndnVlcHJlc3MvY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSh7XHJcbiAgbG9jYWxlczoge1xyXG4gICAgJy8nOiB7XHJcbiAgICAgIGxhbmc6ICd6aC1DTicsXHJcbiAgICAgIHRpdGxlOiAnXHU1MjREXHU3QUVGXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzXHU1REU1XHU3QTBCXHU1MzE2JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdcdTUyNERcdTdBRUZcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDNcdTVERTVcdTdBMEJcdTUzMTYnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhc2U6ICcvY29kZS1zdGFuZGFyZC1zcGVjLycsXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnL2luZGV4Lm1kJyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ0hUTUwgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJywgbGluazogJy9jb2RpbmcvaHRtbC5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0NTUyBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2NvZGluZy9jc3MubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdKYXZhU2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL2phdmFzY3JpcHQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdUeXBlc2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL3R5cGVzY3JpcHQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdOb2RlIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL25vZGUubWQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTVERTVcdTdBMEJcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdHaXQgXHU4OUM0XHU4MzAzJywgbGluazogJy9lbmdpbmVlcmluZy9naXQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTY1ODdcdTY4NjNcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2VuZ2luZWVyaW5nL2RvYy5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0NIQU5HRUxPRyBcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2VuZ2luZWVyaW5nL2NoYW5nZWxvZy5tZCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ05QTVx1NTMwNScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ2NvZGUtZXNsaW50LWNvbmZpZycsIGxpbms6ICcvbnBtL2VzbGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ2NvZGUtc3R5bGVsaW50LWNvbmZpZycsIGxpbms6ICcvbnBtL3N0eWxlbGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ2NvZGUtY29tbWl0bGludC1jb25maWcnLCBsaW5rOiAnL25wbS9jb21taXRsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnY29kZS1tYXJrZG93bmxpbnQtY29uZmlnJywgbGluazogJy9ucG0vbWFya2Rvd25saW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnY29kZS1lc2xpbnQtcGx1Z2luJywgbGluazogJy9ucG0vZXNsaW50LXBsdWdpbi5tZCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1ODExQVx1NjI0Qlx1NjdCNicsXHJcbiAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICdjb2RlLWxpbnQnLCBsaW5rOiAnL2NsaS9lbmNvZGUtZmUtbGludC5tZCcgfV0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2lkZWJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSFRNTCBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2NvZGluZy9odG1sLm1kJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ1NTIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvY29kaW5nL2Nzcy5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0phdmFTY3JpcHQgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2RpbmcvamF2YXNjcmlwdC5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1R5cGVzY3JpcHQgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2RpbmcvdHlwZXNjcmlwdC5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05vZGUgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2Rpbmcvbm9kZS5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1x1NURFNVx1N0EwQlx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHaXQgXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9lbmdpbmVlcmluZy9naXQubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdcdTY1ODdcdTY4NjNcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2VuZ2luZWVyaW5nL2RvYy5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NIQU5HRUxPRyBcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2VuZ2luZWVyaW5nL2NoYW5nZWxvZy5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ05QTVx1NTMwNScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGl0bGU6ICdjb2RlLWVzbGludC1jb25maWcnLCBwYXRoOiAnL25wbS9lc2xpbnQubWQnIH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiAnY29kZS1zdHlsZWxpbnQtY29uZmlnJywgcGF0aDogJy9ucG0vc3R5bGVsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogJ2NvZGUtY29tbWl0bGludC1jb25maWcnLCBwYXRoOiAnL25wbS9jb21taXRsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogJ2NvZGUtbWFya2Rvd25saW50LWNvbmZpZycsIHBhdGg6ICcvbnBtL21hcmtkb3dubGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGl0bGU6ICdjb2RlLWVzbGludC1wbHVnaW4nLCBwYXRoOiAnL25wbS9lc2xpbnQtcGx1Z2luLm1kJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1x1ODExQVx1NjI0Qlx1NjdCNicsXHJcbiAgICAgICAgY2hpbGRyZW46IFt7IHRpdGxlOiAnY29kZS1saW50JywgcGF0aDogJy9jbGkvZW5jb2RlLWZlLWxpbnQubWQnIH1dLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxvZ286ICcvaW1nL2xvZ28ucG5nJyxcclxuICAgIHJlcG86ICd4aXVwaW5nLTEvc3BlYycsXHJcbiAgICBzZWFyY2hNYXhTdWdnZXN0aW9uczogMTAsXHJcbiAgICBkb2NzRGlyOiAnZG9jcycsXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgY3JlYXRlWWVhcjogMjAyMyxcclxuICAgICAgY29weXJpZ2h0SW5mbzpcclxuICAgICAgICAnZW5jb2RlIHN0dWRpbyB8IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veGl1cGluZy0xL2NvZGUtc3RhbmRhcmQtc3BlY1wiIHRhcmdldD1cIl9ibGFua1wiPmdpdGh1YjwvYT4nLFxyXG4gICAgfSxcclxuXHJcbiAgICBleHRlbmRGcm9udG1hdHRlcjoge1xyXG4gICAgICBhdXRob3I6IHtcclxuICAgICAgICBuYW1lOiAneGl1cGluZy0xJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3hpdXBpbmctMS9jb2RlLXN0YW5kYXJkLXNwZWMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBoZWFkOiBbXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ltZy9sb2dvLnBuZycgfV0sXHJcbiAgICBbXHJcbiAgICAgICdtZXRhJyxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdrZXl3b3JkcycsXHJcbiAgICAgICAgY29udGVudDogJ1x1NTI0RFx1N0FFRlx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwM1x1NURFNVx1N0EwQlx1NTMxNicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIF0sXHJcblxyXG4gIHBsdWdpbnM6IDxVc2VyUGx1Z2lucz5bXHJcbiAgICBbXHJcbiAgICAgICdvbmUtY2xpY2stY29weScsXHJcbiAgICAgIHtcclxuICAgICAgICBjb3B5U2VsZWN0b3I6IFsnZGl2W2NsYXNzKj1cImxhbmd1YWdlLVwiXSBwcmUnLCAnZGl2W2NsYXNzKj1cImFzaWRlLWNvZGVcIl0gYXNpZGUnXSxcclxuICAgICAgICBjb3B5TWVzc2FnZTogJ1x1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RicsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgc2hvd0luTW9iaWxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAndnVlcHJlc3MtcGx1Z2luLXpvb21pbmcnLFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICcudGhlbWUtdmRvaW5nLWNvbnRlbnQgaW1nOm5vdCgubm8tem9vbSknLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNiknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIF0sXHJcbiAgZXh0cmFXYXRjaEZpbGVzOiBbJy52dWVwcmVzcy9jb25maWcudHMnXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUVBLElBQU8saUJBQVEseUJBQXlCO0FBQUEsRUFDdEMsU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUdqQixNQUFN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
