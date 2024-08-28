
import Link from "next/link";
import './login.scss';

const LoginLayout = ({ children }) => {
  debugger;
  return (

    <main>
      <h2> The knowledge project</h2>
      <form>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' />
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' />
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    </main>);

}

export default LoginLayout;

