
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.scss';

const LoginLayout = ({ children }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitBtnClick = () => {
    if (name === '') {
      console.log('name should not null')
    }
    if (password === '') {
      console.log('password should not null')
    }
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'context-type': 'application/json'
      },
      body: JSON.stringify({
        user: name,
        password
      })
    }).then(resp => resp.json()).then((resp) => {
      if (resp.isValudUser) {

        localStorage.setItem('user', JSON.stringify({
          name,
          time: Date.now()
        }))
        localStorage.setItem('isLogin', true);
        router.push('/')
      } else {
        alert('failed')
      }
    })
  }
  return (

    <main>
      <h2> The knowledge project</h2>

      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>User Name</label>
          <input
            type='text'
            id='name'
            autoComplete="off"
            onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='pwd'>Password</label>
          <input type='password' id='pwd' autoComplete="off" onChange={(event) => setPassword(event.target.value)} />
        </div>
      </div>
      <div className='form-actions'>
        <button onClick={onSubmitBtnClick}>Submit</button>
      </div>

    </main>);

}

export default LoginLayout;

