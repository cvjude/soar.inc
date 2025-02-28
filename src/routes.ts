import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('./layout/dashboard.tsx', [
    index('./pages/dashboard.tsx'),
    route('settings', './pages/settings.tsx'),
    route('*?', './pages/catchall.tsx'),
  ]),
  route('*?', 'catchall.tsx'),
] satisfies RouteConfig;
