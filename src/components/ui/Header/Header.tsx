import { NavLink } from "react-router";

export const Header = () => {
    return <header>
            <nav>
              <NavLink to="/" className="nav-link" end>Все котики</NavLink>
              <NavLink to="/favorites" className="nav-link" end>Любимые котики</NavLink>
            </nav>
          </header>    
} 