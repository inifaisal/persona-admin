import { OverviewChart } from '@/components/blocks/chart/overview-chart'
import { SampleChart } from '@/components/blocks/chart/sample-chart'
import { PaymentOverviewTable } from '@/components/blocks/table/payment-overview-table'
import { UsersTable } from '@/components/blocks/table/users-table'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Terminal, AlertTriangle } from 'lucide-react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
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
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="grid p-4 gap-4">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            Some service still work in progress.
          </AlertDescription>
        </Alert>
        <OverviewChart />
        <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-3'>
          <PaymentOverviewTable />
          <SampleChart />
        </div>
        <div className='grid'>
        <UsersTable />
        </div>
      </div>
    </>
  )
}
