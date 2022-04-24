function NavBar(){
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-1">BADBANK</span>
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <a
                className="nav-link active"
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
                title="Create Account"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/login"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Login"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/deposit/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Deposit Money"
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
                title="Withdraw Money"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/balance/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Acount Balances"
              >
                Balance
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/alldata/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="All User/Accounts Data"
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