import FLMLOGO from '@/assets/FLM.png';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">

          <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">

            <img src={FLMLOGO} className='w-20 h-20 m-3 p-4' />


          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `relative font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              Jobs
            </NavLink>
            <NavLink
              to="/applications"
              className={({ isActive }) =>
                `relative font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              My Applications
            </NavLink>
            <Button
              asChild
              className="gap-2 bg-gradient-to-r from-primary "
            >
              <NavLink to="/jobs">
                Explore Now <ArrowRight className="w-4 h-4" />
              </NavLink>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/40 bg-muted/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About FLM</h3>
              <p className="text-sm text-muted-foreground">
                Discover your next career opportunity with our growing company.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/applications" className="text-muted-foreground hover:text-primary transition-colors">
                    My Applications
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FLM Careers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};