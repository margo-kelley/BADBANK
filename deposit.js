function Deposit() {
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const [balance, setBalance] = React.useState(100);
  const [disable, setDisable] = React.useState(true);
  const ctx = React.useContext(UserContext);

  // validate deposit amount
  const validate = (amount) => {
    if (!amount) {
      setStatus("Please enter an amount");
      setDisable(true);
      return false;
    }
    if(!Number(amount)) {
      setStatus("Please enter a valid number");
      setDisable(true);
      return false;
    }
    if (amount < 0) {
      setStatus("Cannot deposit a negative amount");
      setDisable(true);
      return false;
    }
    return true;
  };

  // add valid number to balance + update
  const depositCash = (amount) => {
    if (!validate(amount)) return;
    let newBalance = Number(balance) + Number(amount);
    console.log(newBalance);
    setBalance(newBalance);
    setStatus("Success");
    ctx.users.push(newBalance);

    //reset input, clear success message
    setDeposit("");
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

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
              <h4>Account Balance: ${balance}</h4>
              <br />
              <input
                type="number"
                className="form-control"
                id="deposit"
                placeholder="Deposit Amount"
                value={deposit}
                onChange={(e) => setDeposit(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className=" btn btn-light"
                onClick={() => depositCash(deposit)}
              >
                Add Cash
              </button>
            </>
          }
        />
      </div>
    </>
  );
}
