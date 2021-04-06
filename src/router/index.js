

/**  */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
      {
        path: '/formulario',
        name: 'formulario',
        component: () => import(/* webpackChunkName: "formulario" */ '../views/formulario.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home_productos" */ '../views/home.vue')
      },

      {
        path: '/productos',
        name: 'productos',
        component: () => import(/* webpackChunkName: "productos" */ '../views/viewsUser/productos.vue')
      },
      {
        path: '/clases_fry',
        name: 'clases_fry',
       
        component: () => import(/* webpackChunkName: "administrador" */ '../views/clases_fry.vue'),
      },
      {
        path: '/',
        name: 'clase',
       
        component: () => import(/* webpackChunkName: "clase" */ '../views/clase.vue'),
          children: [
            {
              path: '/',
              redirect: 'unimag'
            },
            {
              path: 'unimag',
              name: 'unimag',
              component: () => import(/* webpackChunkName: "unimag" */ '../views/viewsClase/unimag.vue'),
            },
        ]
      },
      {
        path: '/redistribucion',
        name: 'redistribucion',
        component: () => import(/* webpackChunkName: "unimag" */ '../views/viewsClase/redistribucion.vue'),
      },
      {
        path: '/administrador',
        name: 'administrador',
       
        component: () => import(/* webpackChunkName: "administrador" */ '../views/administrador.vue'),
          children: [
            {
              path: '/administrador',
              redirect: 'inicio'
            },
            {
              path: 'inicio',
              name: 'inicio',
              component: () => import(/* webpackChunkName: "inicio" */ '../views/viewsAdministrador/inicio.vue'),
            },
            {
              path: 'productos',
              name: 'productos',
              component: () => import(/* webpackChunkName: "productos" */ '../views/viewsAdministrador/productos.vue'),
            },
            {
              path: 'areas',
              name: 'areas',
              component: () => import(/* webpackChunkName: "areas" */ '../views/viewsAdministrador/areas.vue'),
            },
            {
              path: 'ventas',
              name: 'ventas',
              component: () => import(/* webpackChunkName: "ventas" */ '../views/viewsAdministrador/ventas.vue'),
            },
            {
              path: 'locales',
              name: 'locales',
              component: () => import(/* webpackChunkName: "locales" */ '../views/viewsAdministrador/locales.vue'),
            },

        ]
      },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
        scrollBehavior (to, from, savedPosition) {
          console.log(to,from,savedPosition)
          
      },
     
  })
  
  export default router