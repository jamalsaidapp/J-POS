import MainLayout from "layouts/MainLayout.vue";
import App from "src/App.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '',
        component: () => import('pages/home/index.vue'),
        name: 'home',
        meta: {
            pageTitle: 'Accueil'
        }
      },
      { path: '/planning',
        component: () => import('pages/planinng/index.vue'),
        name: 'planning',
        meta: {
          pageTitle: 'Planning'
        }
      }
    ]
  },
  {
    path: '/login',
    component: App,
    children: [
      { path: '', component: () => import('pages/auth/login.vue'), name: 'login', }
    ]
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/auth/404.vue')
  }
]

export default routes
