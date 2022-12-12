/* eslint-disable */
import { lazy } from 'react';
import { DEFAULT_PATHS } from 'config.js';

const dashboard = lazy(() => import('views/dashboard/Dashboard'));
const products = {
  list: lazy(() => import('views/configure/add_device/AddDevice')),
  detail: lazy(() => import('views/configure/parameters/Parameters')),
};

const shipping = lazy(() => import('views/device_info/DeviceInfo'));

const alert_history = lazy(() => import('views/alert_history/AlertHistory'));
const area_list = lazy(() => import('views/area_list/AreaList'));
const edit_device = lazy(() => import('views/edit_device/EditPage'));

const settings = {
  home: lazy(() => import('views/device_list/DeviceList')),
};

const Invoice = lazy(() => import('views/Invoice/Invoice'));

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboard`,
    },
    {
      path: `${appRoot}/dashboard`,
      component: dashboard,
      label: 'menu.dashboard',
      icon: 'shop',
    },

    {
      path: `${appRoot}/products`,
      exact: true,
      redirect: true,
      to: `${appRoot}/configure/list`,
      label: 'menu.configure',
      icon: 'spinner',
      subs: [
        { path: '/list', label: 'menu.add_device', component: products.list },
        { path: '/detail', label: 'menu.parameters', component: products.detail },
      ],
    },

    {
      path: `${appRoot}/device-information`,
      component: shipping,
    },

    {
      path: `${appRoot}/alert-history`,
      component: alert_history,
      label: 'menu.alert_history',
      icon: 'bell',
    },

    {
      path: `${appRoot}/area_list`,
      component: area_list,
      label: 'menu.area_list',
      icon: 'bell',
    },

    {
      path: `${appRoot}/edit_device`,
      component: edit_device,
      // label: 'menu.edit_device',
      icon: 'bell',
    },

    {
      path: `${appRoot}/device-list`,
      component: settings.home,
      label: 'menu.device',
      icon: 'list',
      subs: [{ path: '/general', component: settings.general, hideInMenu: true }],
    },

    {
      path: `${appRoot}/Invoice`,
      component: Invoice,
      label: 'menu.invoice',
      icon: 'invoice',
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
