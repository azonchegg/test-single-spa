import { registerApplication, start } from 'single-spa'

registerApplication({
  name: '@org/my-mfe',
  app: () => System.import('@org/my-mfe'),
  activeWhen: ['/'],
})

start({ urlRerouteOnly: true });
