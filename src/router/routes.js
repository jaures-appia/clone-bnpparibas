
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'devenir-client', name: 'devenirClient', component: () => import('pages/CreateAccount.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'mon-compte', name: 'dashbord', component: () => import('pages/Dashbord.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
