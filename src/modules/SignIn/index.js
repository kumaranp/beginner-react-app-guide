import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';


function SignIn(props) {
	
  const Authenticate = (e) => {
        e.preventDefault();
        return props.history.push("/dashboard")
  }
	
  return (
    <Fragment>
			<div >
				<form onSubmit={Authenticate}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
				<div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
				</div>
            </form>
			</div>
    </Fragment>
  );
};

export default withRouter(SignIn);