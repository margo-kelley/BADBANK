function NavBar(){
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-1">BADBANK</span>
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Weclome Page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/CreateAccount/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Create An Account"
              >
                Create Account
              </a>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/deposit/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Deposit Cash"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/Withdraw/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Withdraw Cash"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/alldata/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="All User Data"
              >
                All Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}