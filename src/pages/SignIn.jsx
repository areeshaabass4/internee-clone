import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="signin-wrapper">
      {/* Left side with full image */}
      <div className="signin-left">
        <img className="signin-bg" src="/images/signin.png" alt="Welcome" />
        <div className="signin-overlay">
          <h2>Welcome to Internee.pk</h2>
          <p>We help tech enthusiasts and professionals.</p>
        </div>
      </div>

      {/* Right side form */}
      <div className="signin-right">
        <div className="signin-card">
          <h2>Sign in to Internee.pk</h2>
          <p className="subtitle">Welcome back! Please sign in to continue</p>

          <div className="social-signin">
            <button className="btn-social google">
              <img src="/images/google.png" alt="Google" />
              Continue with Google
            </button>
          </div>

          <div className="divider"><span>or</span></div>

          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter your email address" required />
            </div>
            <button type="submit" className="btn btn-primary full-width">
              Continue →
            </button>
          </form>

          <div className="signin-footer">
            <p>
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
