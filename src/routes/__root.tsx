import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AppSidebar } from '../components/blocks/app-sidebar'
import { SidebarInset, SidebarProvider } from '../components/ui/sidebar'

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Outlet />
        </SidebarInset>
        <TanStackRouterDevtools />
      </SidebarProvider>
    </>
  ),
})