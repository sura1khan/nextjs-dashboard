import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
    <div className='flex-grow flex flex-col md:overflow-y-auto'>
    <header className="w-full bg-gray-100 border-b p-4 flex items-center justify-center">
          <h1 className="text-lg font-semibold">Dashboard</h1>
    
        </header>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </div>
  );
}