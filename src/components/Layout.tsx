import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MobileTabBar } from './MobileTabBar';
import { usePageAnimation } from '@/hooks/usePageAnimation';

export function Layout() {
  usePageAnimation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="hidden md:block"><Navbar /></div>
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <MobileTabBar />
    </div>
  );
}
