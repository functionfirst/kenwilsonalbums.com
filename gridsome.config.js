const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind('./tailwind.js'),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
	css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
	siteName: 'Ken Wilson Folk Singer and Artist',
	// siteUrl: 'https://www.gridsome.org',
	// siteDescription: 'Gridsome is a blazing-fast static site generator...',
	titleTemplate: `%s`,
	
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'BlogPost',
				route: '/blog/:slug'
			}
		}
	]
}
