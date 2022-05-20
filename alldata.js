function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className="container-fluid">
        <p className="header">All User Data</p>
        <p>raw data below...</p>
        <p>{JSON.stringify(ctx)}</p>
        <div className="row align-items-center">
          <div className="col">
            <div className="card">
              <div className="card-header">Name</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Where User NAME should show... but doesnt{ctx.users.name}
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">Email</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Where User EMAIL should show... but doesnt
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">Password</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Where User PASSWORD should show... but doesnt
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
