// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		port: 8899,
	},
  ssr: true,
	app: {
		head: {
      title: 'Components-Example',
      charset: 'utf-8',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover' },
      ]
    },
	},
	devtools: { enabled: true },
	routeRules: {
		// prerender index route by default
		'/': { prerender: true },
	},
	components: [
		{
			path: '~/components/',
			extensions: ['.vue'],
			pathPrefix: false,
		},
	],
	modules: ['@nuxtjs/i18n', '@unocss/nuxt'],
	css: ['@/assets/less/App.less', '@/assets/less/normalize.less'],
	vite: {
		resolve: {
			alias: {
				'~@': '/assets/',
			},
		},
	},
});
