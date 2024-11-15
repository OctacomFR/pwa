import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AppNavbar } from "../components/app-navbar";
import { Providers } from "../components/providers";
import { PwaUpdatePrompt } from "../components/pwa-update-prompt";

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <AppNavbar>
      <Outlet />
      <TanStackRouterDevtools />
      <PwaUpdatePrompt />
      </AppNavbar>
    </Providers>
  ),
});
