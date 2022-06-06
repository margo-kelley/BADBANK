function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  
  const ctx = React.useContext(UserContext);

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance });
    setShow(false);
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: Must enter " + label);
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }

  function SubmitButton() {
    if(name && email && password) {
      return (
      <button
      type="submit"
      className="btn btn-light"
      onClick={handleCreate}>Create Account</button>
    )} else {
      return (
        <button type="submit"
        className="btn btn-light"
        onClick={handleCreate}
        disabled>
          Create Account
        </button>
      );
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setBalance(0);
    setShow(true);
    setDisable(true);
  }

  return (
  <div className="container-fluid">
    <h1 className="header">Create New Account</h1>
    <Card
      bgcolor="grey"
      txtcolor="black"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            Balance
            <br/>
            <input
            type="number"
            className="form-control"
            id="balance"
            value={balance}
            onChange={(e) => setBalance(e.currentTarget.value)}
            />
            <br/>
            <SubmitButton/>
          </>
        ) : (
          <>
            <h2 className="success-head">Success! Welcome to BADBANK, we're glad to have you.</h2>
            <p>You will recieve a confirmation email within the next hour. Please give 24 hours for your new account balance to update. Thank you for choosing BADBANK.</p>
            <p className="p">Be sure to check out our other types of accounts to get all your finance needs in one place.</p>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  </div>
  );
}