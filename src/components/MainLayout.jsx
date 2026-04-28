import { NavLink, Outlet } from 'react-router-dom'

function getNavItems(basePath) {
  return [
    { label: 'Home', to: `${basePath}/home` },
    { label: 'About', to: `${basePath}/about` },
    { label: 'My Work', to: `${basePath}/work` },
    { label: 'Contact Me', to: `${basePath}/contact` },
  ]
}

function MainLayout({ basePath }) {
  const navItems = getNavItems(basePath)

  return (
    <div className="site-shell">
      <header className="main-header">
        <div className="brand">Jude Rifai</div>
        <nav className="main-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
