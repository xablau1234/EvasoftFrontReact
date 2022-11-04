import React from 'react';
import '../styles/style_cat.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


export default function ConsultCat({options}) {

  //Select: 

const [marca, setMarca] = useState();
const [values, setValues] = useState();

  const handleChangesValues = (event) => {
    setValues((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value}))
  }


const handleSubmit = (event) => {
  event.preventDefault();
}

  //filtro
  const [busca, setBusca] = useState('');
  
  //Paginação
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Show Table

  const [showtable, setShowTable] = useState('');

  const handleShowTable = (e) => {
    const getMarca = e.target.value;
    setShowTable(getMarca);
    setMarca({value: e.target.value});
  }
  const [showinput, setShowInput] = useState('');
  const handleShowInput = (e) => {
  const getMarca = e.target.value;
  setShowInput(getMarca);
  setMarca({value: e.target.value});
}
  

  const mapSerie = options.Catalogo.map((v) => v.SERIE)


  return (
    
    <div id="div_total" className='flex flex-col'>
        <h1 className='text-4xl mt-10 mb-10 text-center'>
            Consulta de Catálogo</h1>
    <div className="flex flex-row justify-between">
        <div id='divForm' className=" flex flex-col items-center">
        <form  onSubmit={handleSubmit} className="flex flex-col items-center ml-11">
            <div className="flex flex-col justify-center">
            {
                  showinput === 'TOYOTA' && (
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
          
            <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='marca'
          onChange={(e) => {
            (handleShowInput(e)),
            (handleChangesValues(e))
          }}
          >
          <option value=''>Marca</option>
          {options.marca.map((option, i) => 
          (
          <option className='text-black' key={i} value={option.id}>
              {option.MARCA}
            </option> 
            
          )
          )}  

          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='modelo'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option value=''>Modelo</option>
          {options.modelo.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MODELO}
            </option>
          )
          )}  
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='ano'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option>Ano</option>
          {options.ano.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.ANO}
            </option>
          )
          )}  
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='motor'
          onChange={(e) => 
            {
              (handleShowTable(e)),
              (handleChangesValues(e))
            }}
          >
          <option>Motor</option>
          {options.motor.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MOTOR}
            </option>
          )
          )}  
          </select>

          </div>

          </form>
        

        <Link to='/' 
        className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        >Menu Inicial</Link>
        </div>

        <div id="divConsulta" className=" border-2 border-black">
            <div id='divPesquisa' className="border-2 border-black ">

            <input
            id='pesquisa'
            type="text" 
            onChange={e => setBusca(e.target.value)}
            className="focus:outline-none"
            placeholder="Digite o nome do componente, sistema ou código"
            />
            </div>
                {
                  showtable && (
                    <div>
                <TableContainer component={Paper}>
                <Table stickyHeader sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                  <TableCell align='center'>Código</TableCell>
                  <TableCell align='center'>Componente</TableCell>
                  <TableCell align='center'>Sistema</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                  {options.Catalogo.filter((v) => 
                      {if(values.marca === 'HYSTER'){
                        return v;
                      }else if(
                        v.MARCA.toUpperCase().includes(values.marca) &&
                        v.MODELO.toUpperCase().includes(values.modelo) &&
                        v.ANO.toString().toUpperCase().includes(values.ano) &&
                        v.MOTOR.toUpperCase().includes(values.motor) ||
                        mapSerie.includes(values.serie)
                        ){
                        return v;
                      }} 
                        )
                        .filter(val => {
                        if(
                            val.CODIGO.toString().toLowerCase().includes(busca.toLowerCase()) ||
                            val.COMPONENTE.toLowerCase().includes(busca.toLowerCase()) ||
                            val.SISTEMA.toLowerCase().includes(busca.toLowerCase())
                        ){
                            return val;
                        }
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((m, i) => (
                        <TableRow key={i}>
                            <TableCell align='center'>{m.CODIGO}</TableCell>
                            <TableCell align='center'>{m.COMPONENTE}</TableCell>
                            <TableCell align='center'>{m.SISTEMA}</TableCell>
                        </TableRow>
                    ))}

            </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[8, 10, 25, 50, 100]}
            component="div"
            count={options['Catalogo'].length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
                  )
                }
                 
      </div>
     
                      
              
        </div>
    
    </div>
  );
}