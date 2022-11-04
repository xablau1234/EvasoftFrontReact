import {Link} from 'react-router-dom'

function Login(){
    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center'>
      <h1 className='text-5xl mt-10'>Login</h1>
      <span className='mt-6'>Acesse sua conta para continuar</span>

      <div className='mt-6 border-black'>
      <form className="register-form">
      <label className="block text-md" htmlFor="email">EMAIL</label>
      <input className="border-2 border-gray-400 my-2 w-7xl px-5 py-1 text-gray-300" 
      type="text"
      placeholder="email@email.com.br"/>
      <label className='block text-md'>PASSWORD</label>
      <input className="border-2 border-gray-400 my-2 w-7xl px-5 py-1 text-gray-300"
      type="password" 
      id="password" 
      placeholder="****" 
       />
      <div className='flex flex-col items-center'>
      <Link className=" mt-6 block text-md text-500"
      to='/'>PRIMEIRO ACESSO</Link>
      <Link className=" mt-6 block text-md text-500"
      to='/esqueceu_senha'>ESQUECEU A SENHA?</Link>
      <Link to='/menu' className='my-8 block w-7xl px-20 py-3 text-sm bg-black text-white hover:bg-gray-800'>
        Login</Link>
      </div>

        </form>
      </div>
      
      </div>
    )
}

export default Login;