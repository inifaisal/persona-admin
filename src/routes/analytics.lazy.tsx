import { AnalyticsMainChart } from '@/components/blocks/chart/analytics-main-chart'
import { AnalyticsUsersChart } from '@/components/blocks/chart/analytics-users-chart'
import { ThemeSwitcher } from '@/components/blocks/theme-switcher'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/analytics')({
  component: Analytics,
})

function Analytics() {
  return <>
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='px-4'>
        <ThemeSwitcher />
      </div>
    </header>
    <div className="grid p-4 gap-4">
      <AnalyticsMainChart />
      <div>
        <AnalyticsUsersChart />
      </div>
    </div>
  </>
}
