// Modified by AI on 07/30/2026. Edit #1.
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

// Modified by AI on 07/30/2026. Edit #1.
const navItems = [
  { path: '/users', label: 'Users' },
  { path: '/activities', label: 'Activities' },
  { path: '/teams', label: 'Teams' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
]

// Modified by AI on 07/30/2026. Edit #1.
function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Octofit Tracker</p>
          <h1>Training Console</h1>
        </div>
        <nav className="app-nav" aria-label="Octofit sections">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {!codespaceName && (
        <div className="env-warning" role="status">
          VITE_CODESPACE_NAME is unset. API calls will use http://localhost:8000/api/.
        </div>
      )}

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
