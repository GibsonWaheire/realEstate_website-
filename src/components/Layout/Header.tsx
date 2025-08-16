import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Search, Users, Phone, Info, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Properties', href: '/properties', icon: Search },
    { name: 'Agents', href: '/agents', icon: Users },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
              <Home className="h-5 w-5 text-slate-900" />
            </div>
            <span className="font-serif text-xl font-semibold text-slate-900">
              Luxury Estates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={
                  isActive(item.href)
                    ? 'text-amber-500'
                    : 'text-slate-700 transition-colors hover:text-amber-500'
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="gold"
              className="rounded-full px-6 py-3 text-sm md:text-base shadow-lg focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            >
              <Link to="/get-started">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white/90 backdrop-blur-md">
            <nav className="space-y-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ' +
                    (isActive(item.href)
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-slate-700 hover:bg-amber-50 hover:text-amber-600')
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <div className="border-t px-4 pt-4">
                <Button
                  asChild
                  variant="gold"
                  className="w-full rounded-full px-6 py-3 text-sm shadow-lg focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                >
                  <Link to="/get-started">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


