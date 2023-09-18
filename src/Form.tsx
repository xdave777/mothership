import React from 'react';

function Form() {
  return (
    <div className="App">
        <form method="POST" action="http://localhost:3001/mothership/rest/users">
            <div>
            <label>First Name</label>
                <input id='name' name='firstname' type='text' />
            </div>
            <div>
            <label>Last Name</label>
                <input name='lastname' type='text' />
            </div>
            <div>
            <label>Email</label>
                <input name='email' type='text' />
            </div>
            <div>
                <div>
                    <label>Role</label>
                    <ol>
                    <li><label>Player</label><input name='role' type='radio' value='Player' /></li>
                    <li><label>Customer</label><input name='role' type='radio' value='Customer' /></li>
                    <li><label>Staff</label><input name='role' type='radio' value='Staff' /></li>
                    <li><label>Admin</label><input name='role' type='radio' value='Admin' /></li>
                    </ol>
                </div>
            </div>
                <input type='submit' value='Submit' />
        </form>
    </div>
  );
}

export default Form;
