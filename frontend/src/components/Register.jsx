import React from 'react'

function Register() {
  return (
    <>
        <form>
            <div className="header">
                <h2>Create your account</h2>
                <p>or sign up below using:</p>
                <button>google</button>
                <button>facebook</button>
            </div>
            <div className="input--areas">
                <div className="input--area">
                    <label htmlFor="">full names</label>
                    <input type="text" />
                </div>
                <div className="input--area">
                    <label htmlFor="">email</label>
                    <input type="email" />
                </div>
                <div className="input--area">
                    <label htmlFor="">username</label>
                    <input type="text" />
                </div>
                <div className="input--area">
                    <label htmlFor="">password</label>
                    <input type="password" />
                </div>
                <button type='submit'>register</button>
            </div>
        </form>
    </>
  )
}

export default Register