function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className="container-fluid">
        <p className="header">All User Data</p>
       {ctx.users.map((user) => {
          return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* KEY => buggy */}
              <td key={user.password}>{user.password}</td>
            </tr>
          </tbody>
        </table>
         )
        })}
      </div>
    </>
  );
}
