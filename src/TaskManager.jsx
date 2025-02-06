import { FaGoogle } from "react-icons/fa";

export default function TaskManager() {
  return (
    <div className="container">
      <div className="main-container">
        <form className="form">
          <div className="Header-Form">
            <h3>Create an Account</h3>
            <p>
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-Tik">
            <input type="checkbox" />
            <p>I agree to the terms and conditions</p>
          </div>
          <div className="Sugest-Form">
            <button>Create Account</button>
            <hr />
            <button>
              <FaGoogle /> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
