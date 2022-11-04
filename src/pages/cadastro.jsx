import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Axios from  'axios'


export default function CadastroEquip({options}) {

  const [showhide, setShowHide] = useState('');

  const handleShowHide = (e) => {
    const getMarca = e.target.value;
    setShowHide(getMarca);
    setMarca({value: e.target.value});
  }


  const [marca, setMarca] = useState();

  const [values, setValues] = useState();

  const handleChangesValues = (event) => {
    setValues((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value}))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:5000/api/cadastro' , {
      marca: values.marca,
      modelo: values.modelo,
      ano: values.ano,
      motor: values.motor,
      serie: values.serie
    }).then((response) => {
      console.log(response)
    })
  }
  //juntar todas as functions para enviar para back 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/cadastro_finalizado')

  }

  

  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center'>

        <h1 className='text-4xl mt-10 mb-10'>Cadastro de Equipamentos</h1>
        <div className="flex flex-col justify-center items-center">
          
        <form  onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col justify-center">

            {
                  showhide === 'TOYOTA' && (
                    <input 
                  id='serie'
                  name='serie'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nº de série'
                  onChange={handleChangesValues}
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newMarca' && (
                    <input 
                  id='serie'
                  name='marca'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  onChange={handleChangesValues}
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newModelo' && (
                    <input 
                  id=''
                  name='modelo'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  onChange={handleChangesValues}
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newAno' && (
                    <input 
                  id='serie'
                  name='ano'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  onChange={handleChangesValues}
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newMotor' && (
                    <input 
                  id='serie'
                  name='motor'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  onChange={handleChangesValues}
                  //carregar json antes da validação/cadastro
                />
                  )
                }

          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='marca'
          onChange={(e) => {
            (handleShowHide(e)),
            (handleChangesValues(e))
          }}
          >
          <option value=''>Marca</option>
          {options.marca.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MARCA}
            </option> 
          
          )
          )}  
          <option value='newMarca'>Adicionar +</option>

          </select>


          <select
          className="my-4 border-2 border-gray-300 px-10 py-3 text-md text-black text-center"
          onChange={(e) => {
            (handleShowHide(e)),
            (handleChangesValues(e))
          }}
          name='modelo'
          required
          >
          <option value=''>Modelo</option>
          {options.modelo.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MODELO}
            </option>

            
          )
          )}  
          <option value='newModelo'>Adicionar +</option>

          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          onChange={(e) => {
            (handleShowHide(e)),
            (handleChangesValues(e))
          }}
          name='ano'
          required
          >
          <option value=''>Ano</option>
          {options.ano.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.ANO}
            </option>
          )
          )} 
          <option value='newAno'>Adicionar +</option>

          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          onChange={(e) => {
            (handleShowHide(e)),
            (handleChangesValues(e))
          }}
          name='motor'
          required
          >
          <option value=''>Motor</option>
          {options.motor.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MOTOR}
            </option>
          )
          )} 
          <option value='newMotor'>Adicionar +</option>

          </select>

          </div>

          <button
        className='my-4 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        type='submit'
        onClick={() => handleClickButton()}
        >Cadastrar</button>

          </form>
        

        

        <Link to='/' 
        className='my-2 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        
        >Menu Inicial</Link>

        </div>
    </div>
  );
}