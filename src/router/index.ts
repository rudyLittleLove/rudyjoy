import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/home/404.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/baseInfo',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/baseInfo',
        name: 'baseInfo',
        component: () => import('@/views/home/baseInfo.vue')
      },
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/views/blogs/blogs.vue')
      },
      {
        path: '/games',
        name: 'games',
        redirect: '/games/dragonQuestMonster',
        component: () => import('@/views/games/games.vue'),
        children: [
          {
            path: '/games/dragonQuestMonster',
            name: 'dragonQuestMonster',
            component: () => import('@/views/games/components/dragonQuestMonster.vue')
          },
          {
            path: '/games/dragonQuestProp',
            name: 'dragonQuestProp',
            component: () => import('@/views/games/components/dragonQuestProp.vue')
          },
          {
            path: '/games/XuanYuanSwordStashes',
            name: 'XuanYuanSwordStashes',
            component: () => import('@/views/games/components/xuan-yuan-sword-stashes.vue')
          },
          {
            path: '/games/XuanYuanSwordDevilPot',
            name: 'XuanYuanSwordDevilPot',
            component: () => import('@/views/games/components/xuan-yuan-sword-devil-pot.vue')
          }
        ]
      }
    ]
    // children: [
    //   {
    //     path: '/baseInfo',
    //     name: 'baseInfo',
    //     component: () => import('@/views/home/baseInfo.vue')
    //   },
    //   {
    //     path: '/blogs',
    //     name: 'blogs',
    //     component: () => import('@/views/blogs/blogs.vue')
    //   },
    //   {
    //     path: '/games',
    //     name: 'games',
    //     redirect: '/games/dragonQuestMonster',
    //     component: () => import('@/views/games/games.vue'),
    //     children: [
    //       {
    //         path: '/games/dragonQuestMonster',
    //         name: 'dragonQuestMonster',
    //         component: () => import('@/views/dragonQuestMonster.vue')
    //       },
    //       {
    //         path: '/games/dragonQuestProp',
    //         name: 'dragonQuestProp',
    //         component: () => import('@/views/dragonQuestProp.vue')
    //       },
    //       {
    //         path: '/games/XuanYuanSwordStashes',
    //         name: 'XuanYuanSwordStashes',
    //         component: () => import('@/views/games/components/xuan-yuan-sword-stashes.vue')
    //       },
    //       {
    //         path: '/games/XuanYuanSwordDevilPot',
    //         name: 'XuanYuanSwordDevilPot',
    //         component: () => import('@/views/games/components/xuan-yuan-sword-devil-pot.vue')
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: '/coordinates',
    name: 'coordinates',
    component: () => import('@/views/coordinates/Index.vue')
  },
  {
    path: '/getImageColor',
    name: 'getImageColor',
    component: () => import('@/views/getImageColor/index.vue')
  },
  {
    path: '/gitCommands',
    name: 'gitCommands',
    component: () => import('@/views/gitCommands.vue')
  },
  {
    path: '/dishes',
    name: 'dishes',
    component: () => import('@/views/dishes/index.vue')
  },
  {
    path: '/drawRect',
    name: 'drawRect',
    component: () => import('@/views/drawRect/index.vue')
  },
  {
    path: '/compressImage',
    name: 'compressImage',
    component: () => import('@/views/compressImage/index.vue')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('@/views/render/index.vue')
  },
  // {
  //   path: '/workspace',
  //   name: 'workspace',
  //   component: () => import('@/views/workspace/index.vue')
  // },
  {
    path: '/topology',
    name: 'topology',
    component: () => import('@/views/topology/index.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router

/*
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '404',
      component: () => import('@/views/home/404.vue')
    },
    {
      path: '/',
      name: 'index',
      redirect: '/baseInfo',
      component: Home,
      children: [
        {
          path: '/baseInfo',
          name: 'baseInfo',
          component: () => import('@/views/home/baseInfo.vue')
        },
        {
          path: '/blogs',
          name: 'blogs',
          component: () => import('@/views/blogs/blogs.vue')
        },
        {
          path: '/games',
          name: 'games',
          redirect: '/games/dragonQuestMonster',
          component: () => import('@/views/games/games.vue'),
          children: [
            {
              path: '/games/dragonQuestMonster',
              name: 'dragonQuestMonster',
              component: () => import('@/views/dragonQuestMonster.vue')
            },
            {
              path: '/games/dragonQuestProp',
              name: 'dragonQuestProp',
              component: () => import('@/views/dragonQuestProp.vue')
            },
            {
              path: '/games/XuanYuanSwordStashes',
              name: 'XuanYuanSwordStashes',
              component: () => import('@/views/games/components/xuan-yuan-sword-stashes.vue')
            },
            {
              path: '/games/XuanYuanSwordDevilPot',
              name: 'XuanYuanSwordDevilPot',
              component: () => import('@/views/games/components/xuan-yuan-sword-devil-pot.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/gitCommands',
      name: 'gitCommands',
      component: () => import('@/views/gitCommands.vue')
    },
    {
      path: '/rectRandom',
      name: 'rectRandom',
      component: () => import('@/views/rectRandom.vue')
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: () => import('@/views/dishes/index.vue')
    },
    {
      path: '/render',
      name: 'render',
      component: () => import('@/views/render/index.vue')
    },
    {
      path: '/getImageColor',
      name: 'getImageColor',
      component: () => import('@/views/getImageColor/index.vue')
    },
    {
      path: '/flipPage',
      name: 'flipPage',
      component: () => import('@/views/flipPage/index.vue')
    },
    {
      path: '/drawRect',
      name: 'drawRect',
      component: () => import('@/views/drawRect/index.vue')
    },
    {
      path: '/compressImage',
      name: 'compressImage',
      component: () => import('@/views/compressImage/index.vue')
    },
    {
      path: '/xyz',
      name: 'xyz',
      component: () => import('@/views/xyz/Index.vue')
    },
    {
      path: '/xyz',
      name: 'xyz',
      component: () => import('@/views/xyz/Index.vue')
    },
    {
      path: '/yukangma',
      name: 'yukangma',
      component: () => import('@/views/yukangma/Index.vue')
    }
  ]
}) */
