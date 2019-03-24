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
				path: 'News/*.md',
				typeName: 'NewsPost',
				route: '/News/:slug'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'albums/*.md',
				typeName: 'AlbumPost',
				route: '/albums/:slug'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'art/*.md',
				typeName: 'ArtPost',
				route: '/art/:slug'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'gigs/*.md',
				typeName: 'GigsPost',
				route: '/gigs/:slug'
			}
		}
	]
}
