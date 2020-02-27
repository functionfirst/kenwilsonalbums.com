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
	siteDescription: 'Ken Wilson is a traditional folk singer and artist based in the North East of England. This is his website.',
	titleTemplate: `%s`,

	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				resolveAbsolutePaths: true,
				path: 'news/*.md',
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
				route: '/gigs/:title'
			}
		}
	]
}
