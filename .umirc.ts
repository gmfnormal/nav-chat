import { defineConfig } from "umi";
import { ROUTE } from './src/common/config/route.config'

export default defineConfig({
  routes: ROUTE,
  npmClient: 'pnpm',
});
