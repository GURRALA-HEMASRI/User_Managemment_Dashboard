import { APP_TITLE } from "../utils/constants";

function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__content">
        <h1 className="dashboard-header__title">
          {APP_TITLE}
        </h1>
      </div>
    </header>
  );
}

export default Header;