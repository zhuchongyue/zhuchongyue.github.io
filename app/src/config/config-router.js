
export function configRouter (router) {
	router.map({
		'/': {
			name: 'home',
			component(resolve) {
				require(['../components/Home/Home.vue'],resolve)
			}
		},
		'/html5': {
			name: 'html5',
			component(resolve) {
				require(['../components/Html5/Html5.vue'],resolve);
			}
		},
		'/rotate': {
			name:'rotate',
			component(resolve) {
				require(['../components/Rotate/Rotate.vue'],resolve);
			}
		},
		'/linebreak': {
			name: 'linebreak',
			component(resolve) {
				require(['../components/Css3/LineBreak.vue'],resolve);
			}
		}
	})
}