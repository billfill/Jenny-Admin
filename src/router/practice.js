import Layout from '@/layout'
export default {
  path: '/practice',
  component: Layout,
  meta: {
    title: 'JennyPractice'
  },
  children: [
    {
      path: 'curBoard',
      component: () => import('@/views/practice/cutBoard'),
      meta: {
        title: '切版練習'
      }
    },
    {
      path: 'tryAjax',
      component: () => import('@/views/practice/tryAjax'),
      meta: {
        title: 'Ajax練習'
      }
    },
    {
      path: 'useElement',
      component: () => import('@/views/practice/useElement'),
      meta: {
        title: '使用Element-ui'
      }
    }
  ]
}
