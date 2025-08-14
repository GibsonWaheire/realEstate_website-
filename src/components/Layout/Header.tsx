import * as React from "react"
import { Link, NavLink } from "react-router-dom"
import { Home as HomeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center size-8 rounded-full bg-luxury-light text-luxury-navy">
            <HomeIcon className="size-4" />
          </span>
          <span className="text-lg font-semibold text-luxury-navy">Luxury Estates</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "text-sm text-foreground/80 transition-colors hover:text-foreground",
                isActive && "text-luxury-gold"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              cn(
                "text-sm text-foreground/80 transition-colors hover:text-foreground",
                isActive && "text-luxury-gold"
              )
            }
          >
            Properties
          </NavLink>
          <NavLink
            to="/agents"
            className={({ isActive }) =>
              cn(
                "text-sm text-foreground/80 transition-colors hover:text-foreground",
                isActive && "text-luxury-gold"
              )
            }
          >
            Agents
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "text-sm text-foreground/80 transition-colors hover:text-foreground",
                isActive && "text-luxury-gold"
              )
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "text-sm text-foreground/80 transition-colors hover:text-foreground",
                isActive && "text-luxury-gold"
              )
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:block">
          <Link
            to="/properties"
            className="rounded-md bg-gradient-gold px-4 py-2 text-sm font-medium text-luxury-navy shadow hover:bg-luxury-gold-dark"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}


