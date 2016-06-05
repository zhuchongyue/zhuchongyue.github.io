
export function configRouter (router) {
	router.map({
		'/': {
			name: 'home',
			component(resolve) {
				require(['../components/Home/Home.vue'],resolve)
			}
		},
		'/html5': {
			name: '/html5',
			component(resolve) {
				require(['../components/Html5/Html5.vue'],resolve);
			}
		}
	})
}