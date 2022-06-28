function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className="container-fluid">
        <p className="header">All User Data</p>
       {ctx.users.map((user) => {
          return (
            <div className="card">
              <ul className="list-group list-group-flush">
                <li key={user} className="list-group-item">
                  Name: {user.name}, Email: {user.email}, Password: {user.password}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
