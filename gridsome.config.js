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
				resolveAbsolutePaths: true,
				path: 'News/*.md',
				typeName: 'NewsPost',
				route: '/news/:slug'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				resolveAbsolutePaths: true,
				path: 'albums/*.md',
				typeName: 'AlbumPost',
				route: '/albums/:slug'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				resolveAbsolutePaths: true,
				path: 'art/*.md',
				typeName: 'ArtPost',
				route: '/art/:slug'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				resolveAbsolutePaths: true,
				path: 'gigs/*.md',
				typeName: 'GigsPost',
				route: '/gigs/:slug'
			}
		}
	]
}
