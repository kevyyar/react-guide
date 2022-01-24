import React from 'react';
import './Estilos.css'
import modulesStyles from './Estilos.module.css'

const Estilos = () => {

  // styling
  const myStyles = {
    backgroundColor: 'orange',
    borderRadius: '10px',
    textAlign: 'center'
  }

  return <section className='styles'>
    <h1>Styles in React</h1>
    <h3 className='bg-react'>Styles from external CSS</h3>
    <h3 style={{backgroundColor: 'dodgerblue', borderRadius: '10px', textAlign: 'center'}}>Inline CSS styles</h3>
    <h3 style={myStyles}>Variable CSS styles</h3>
    <h3 style={myStyles}>Normalize CSS by <code>@import-normalize in 'index.css'</code> </h3>
    <h3 className={modulesStyles.success}>CSS Styles with Modules (success)</h3>
    <h3 className={modulesStyles.error}>CSS Styles with Modules (error)</h3>
  </section>
};

export default Estilos;
