function Withdraw() {
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(100);
  const [disable, setDisable] = React.useState(true);
  const ctx = React.useContext(UserContext);

  // validate withdraw amount
  const validate = (amount) => {
    if (!amount) {
      setStatus("Please enter an amount");
      setDisable(true);
      return false;
    }
    if (amount > balance) {
      setStatus("Withdraw cannot exceed balance");
      setDisable(true);
      return false;
    }
    return true;
  };

  // add valid number to balance + update
  const withdrawCash = (amount) => {
    if (!validate(amount)) return;
    let newBalance = Number(balance) - Number(amount);
    console.log(newBalance);
    setBalance(newBalance);
    setStatus("Success");
    ctx.users.push(newBalance);

    //reset input, clear success message
    setWithdraw("");
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">Withdraw</div>
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
                id="withdraw"
                placeholder="Withdraw Amount"
                min="0"
                value={withdraw}
                onChange={(e) => setWithdraw(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className=" btn btn-light"
                onClick={() => withdrawCash(withdraw)}
              >
                Get Cash
              </button>
            </>
          }
        />
      </div>
    </>
  );
}
