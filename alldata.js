function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className="container-fluid">
        <p className="header">All User Data</p>
        {ctx.users.map(user =>{
          return (
            <div className="row align-items-center">
              <div className="col">
                <div className="card" id="allData-card">
                  <div className="card-header">USER NAME</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{user.name}</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card" id="allData-card">
                  <div className="card-header">USER EMAIL</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{user.email}</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card" id="allData-card">
                  <div className="card-header">USER PASSWORD</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{user.password}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
