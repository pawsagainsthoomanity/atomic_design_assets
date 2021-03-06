const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Atomic Design',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/zhuonama/Documents/work2/Atomic Design/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Atomic Design',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/Users/zhuonama/Documents/work2/Atomic Design',
          templates:
            '/Users/zhuonama/Documents/work2/Atomic Design/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/zhuonama/Documents/work2/Atomic Design/package.json',
          docz: '/Users/zhuonama/Documents/work2/Atomic Design/.docz',
          cache: '/Users/zhuonama/Documents/work2/Atomic Design/.docz/.cache',
          app: '/Users/zhuonama/Documents/work2/Atomic Design/.docz/app',
          appPublic:
            '/Users/zhuonama/Documents/work2/Atomic Design/.docz/public',
          appNodeModules:
            '/Users/zhuonama/Documents/work2/Atomic Design/node_modules',
          appPackageJson:
            '/Users/zhuonama/Documents/work2/Atomic Design/package.json',
          appYarnLock:
            '/Users/zhuonama/Documents/work2/Atomic Design/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/zhuonama/Documents/work2/Atomic Design/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/zhuonama/Documents/work2/Atomic Design/gatsby-config.js',
          gatsbyBrowser:
            '/Users/zhuonama/Documents/work2/Atomic Design/gatsby-browser.js',
          gatsbyNode:
            '/Users/zhuonama/Documents/work2/Atomic Design/gatsby-node.js',
          gatsbySSR:
            '/Users/zhuonama/Documents/work2/Atomic Design/gatsby-ssr.js',
          importsJs:
            '/Users/zhuonama/Documents/work2/Atomic Design/.docz/app/imports.js',
          rootJs:
            '/Users/zhuonama/Documents/work2/Atomic Design/.docz/app/root.jsx',
          indexJs:
            '/Users/zhuonama/Documents/work2/Atomic Design/.docz/app/index.jsx',
          indexHtml:
            '/Users/zhuonama/Documents/work2/Atomic Design/.docz/app/index.html',
          db: '/Users/zhuonama/Documents/work2/Atomic Design/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
