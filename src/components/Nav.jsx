import React from 'react'
import ListaComponentes from './ListaComponentes'





const Nav = () => {

  const title= "Welcome to Hooks";
  const card="esto es un producto";

  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TiendaGeek</a>
    <img src="./assets/images/geek.jpg" alt="probando imagen" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            {/* <li><a class="dropdown-divider"></li> */}
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

<div className='container'>
  <div className='row'>
    <div className='column-6'>
 <ListaComponentes titulo={title} card={card}></ListaComponentes>
 </div>
 </div>
 </div>
    </div>
  )
}

export default Nav