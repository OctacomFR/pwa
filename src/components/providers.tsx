"use client";

import { useRouter } from "@tanstack/react-router";
import { RouterProvider } from "react-aria-components";
import { ThemeProvider } from "./theme-provider";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["navigate"]>
    >;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RouterProvider
      navigate={(to, routerOptions) =>
        router.navigate({
          to,
          ...routerOptions,
        })
      }
    >
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  );
}
