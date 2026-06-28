import {
  APP_SUBTITLE,
  APP_TITLE,
} from "../utils/constants";

function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__content">
        <div>
          <h1 className="dashboard-header__title">
            {APP_TITLE}
          </h1>

          <p className="dashboard-header__subtitle">
            {APP_SUBTITLE}
          </p>
        </div>

        <div className="dashboard-header__badge">
          React + Vite
        </div>
      </div>
    </header>
  );
}

export default Header;