function NavBar(){
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <span className="navbar-brand mb-1 h1">BADBANK</span>
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/Withdraw/">
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">
                Balance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">
                All Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}