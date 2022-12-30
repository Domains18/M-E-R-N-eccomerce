import React from 'react'

function SignUp() {
  return (
    <section className='align'>
        <div className="grid align__item">
            <div className="register">
            <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>
            <h2>Sign Up</h2>
            <form>
                <div className="form__field">
                    <input type="text" placeholder='email'/>
                </div>
                <div className="form__field">
                    <input type="password" name="" id=""  placeholder='Password'/>
                </div>
            </form>
            <p>Already have an Account? <a href="#">LogIn</a></p>
            </div>
        </div>
    </section>
  )
}

export default SignUp