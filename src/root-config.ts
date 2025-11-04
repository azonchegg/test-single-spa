import { registerApplication, start } from 'single-spa';

function setupNavigation() {
  const nav = document.getElementById('navigation');
  if (!nav) return;

  const apps = [
    { name: 'app1', label: 'Реклама товаров' },
    { name: 'app2', label: 'Акции магазина' },
    { name: 'app3', label: 'Внешняя реклама' },
  ];

  apps.forEach(app => {
    const link = document.createElement('a');
    link.href = `#/${app.name}`;
    link.textContent = app.label;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = `#/${app.name}`;
      updateActiveLink();
    });
    nav.appendChild(link);
  });

  if (!window.location.hash) {
    window.location.hash = '#/app1';
  }

  window.addEventListener('hashchange', updateActiveLink);
  updateActiveLink();
}

function updateActiveLink() {
  const nav = document.getElementById('navigation');
  if (!nav) return;
  
  const links = nav.querySelectorAll('a');
  const currentHash = window.location.hash;
  
  links.forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.head.appendChild(script);
  });
}

function getAppFromWindow(appName: string) {
  const app = (window as any)[appName];
  if (!app) {
    throw new Error(`${appName} not found on window object`);
  }

  if (app.default && typeof app.default.bootstrap === 'function') {
    return app.default;
  }

  if (typeof app.bootstrap === 'function') {
    return app;
  }
  throw new Error(`${appName} does not export valid lifecycle functions`);
}

async function dynamicImport(url: string): Promise<any> {
  const module = await import(/* @vite-ignore */ url);
  return module.default || module;
}

registerApplication({
  name: 'app1',
  app: async () => {
    if (import.meta.env.DEV) {
      return await dynamicImport('http://localhost:9001/src/main.ts');
    } else {
      await loadScript('http://localhost:9001/dist/app1.js');
      return getAppFromWindow('app1');
    }
  },
  activeWhen: (location) => location.hash.startsWith('#/app1'),
});

registerApplication({
  name: 'app2',
  app: async () => {
    if (import.meta.env.DEV) {
      return await dynamicImport('http://localhost:9002/src/main.ts');
    } else {
      await loadScript('http://localhost:9002/dist/app2.js');
      return getAppFromWindow('app2');
    }
  },
  activeWhen: (location) => location.hash.startsWith('#/app2'),
});

registerApplication({
  name: 'app3',
  app: async () => {
    if (import.meta.env.DEV) {
      return await dynamicImport('http://localhost:9003/src/main.ts');
    } else {
      await loadScript('http://localhost:9003/dist/app3.js');
      return getAppFromWindow('app3');
    }
  },
  activeWhen: (location) => location.hash.startsWith('#/app3'),
});

start({
  urlRerouteOnly: true,
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupNavigation);
} else {
  setupNavigation();
}

