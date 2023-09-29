import React from 'react'
import axios from 'axios'; 
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const URI = "http://localhost:3001/tipocombustible"

const GestionCombustible = () => {
  const [tipoCombustible, setTipoCombustible] = useState([]); 

  useEffect (() => {
    getTipoCombustibles()
  }, [])

  //mostrar tipo combustibles
  const getTipoCombustibles = async () => {
    axios.get((req, res) => {

    })
  }

  //Eliminar tipo combustibles
  const deleteTipoCombustible = async () => {
    axios.delete((req, res) => {

    })
  }

  return (
    <div>
      
    </div>
  )
}

export default GestionCombustible