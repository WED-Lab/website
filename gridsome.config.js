// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'WEDLab',
    siteUrl: 'https://www.gridsome.org',
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },

    // Favicon setup
    icon: {
      favicon: './src/assets/images/icon/favicon.png',
      touchicon: './src/assets/images/icon/apple-touch-icon.png'
    },

    // Plugin setup
    plugins: [

      // Access content from the local file system to display the publications
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'data/publications/publications.json',
          typeName: 'Publications'
        }
      },

      // Access content from the local file system to display the people section
      {
        use: '@gridsome/vue-remark',
        options: {
          typeName: 'People', // Required
          baseDir: './data/people', // Where .md files are located
          pathPrefix: '/people', // Add route prefix. Optional
          template: './src/templates/People.vue' // Optional
        }
      },

      // Access content from the local file system to display the people section
      {
        use: '@gridsome/vue-remark',
        options: {
          typeName: 'Project', // Required
          baseDir: './data/projects', // Where .md files are located
          pathPrefix: '/projects', // Add route prefix. Optional
          template: './src/templates/Project.vue' // Optional
        }
      },

    ]
}
