function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1 className="allData-head">
        All User Data:
        <br />
      </h1>
      <div className="container-data">
        <div className="row align-items-center">
        <div className="col">
          <div className="card">
        <div className="card-header">Name</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{ctx.name}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
        </div>
        <div className="col">
          <div className="card">
        <div className="card-header">Email</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{ctx.email}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
        </div>
        <div className="col">
        <div className="card">
        <div className="card-header">Password</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{ctx.password}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
        </div>
      </div>
      </div>
      
      <p>{JSON.stringify(ctx)}</p>
    </>
  );
}
