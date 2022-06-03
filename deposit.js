function Deposit(){
  // const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const ctx = React.useContext(UserContext);

  function depositCash() {
    let amount = document.getElementById('deposit').value;
    console.log(amount);
    let balance = 100;
    if (amount > 0) {
      let deposit = amount + balance;
      console.log(deposit);
      return deposit;
    } return;
  }

  return (
    <>
    <div className="container-fluid">
      <div className="header">Deposit</div>
        <Card
      bgcolor="grey"
      txtcolor="black"
      status={status}
      body={
        <>
          <label htmlFor="balance">Balance</label>
          <div>
            {ctx.users.map(user => {
              return (
              <p id="bal-num" key={user.balance}>{user.balance}</p>
              )
            })}
          </div>
          <input type="number" className="form-control" id="deposit" min="0" placeholder="Deposit Amount" />
          <br/>
          <button className=" btn btn-light" onClick={depositCash}>Add $$$</button>
        </>
      }
    />
    </div>
    </>
  );
}
