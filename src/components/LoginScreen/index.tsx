import useLoginScreen from "../../hooks/useLoginModal";

export default function LoginScreen() {
  const { formState, onChangeInputs, login, resetForm } = useLoginScreen();

  return (
    <div
      className="d-flex flex-column rounded border border-1 p-3 shadow bg-white"
      style={{ minWidth: "350px" }}
    >
      <p className="fw-bolder fs-4">Login</p>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              value={formState.email}
              name="email"
              onChange={onChangeInputs}
              style={{ background: "rgb(245, 245, 245 )" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword"
              name="password"
              value={formState.password}
              onChange={onChangeInputs}
              style={{ background: "rgb(245, 245, 245 )" }}
            />
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between">
        <button
          style={{ fontSize: "16px" }}
          className="btn btn-secondary"
          onClick={resetForm}
        >
          Cancel
        </button>
        <button
          style={{ fontSize: "16px" }}
          className="btn btn-primary"
          onClick={() => login()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
