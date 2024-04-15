import React, { createContext, useState } from 'react';
import { retrieveLanguage }               from '../helpers/storage';
const { Provider, Consumer }              = createContext();

const ContextStore = ({ comp, apollocon, axioscon }) => {

  const defaultLanguage = 'es-MX';
  const serviceApollo   = new apollocon('DEVELOP');
  const serviceAxios    = new axioscon('DEVELOP');

  const [conApollo,         setConApollo]              = useState(serviceApollo);
  const [conAxios,          setConAxios]               = useState(serviceAxios);

  const [modal, setModal]                              = useState({
    showModal:  false,
    closeModal: null,
    component:  null,
    customCss:  null,
    size:       'xl',
    backdrop:   null,
  });

  const contextValues = {
    modal,
    setModal,
    conApollo, 
    conAxios
  }

  return <Provider value={contextValues}>{comp}</Provider>
}

const WrapperConsumer = (Component) => {
  return (props) => (
    <Consumer>
      {(context) => <Component {...props} context={context} />}
    </Consumer>
  )
}

export default WrapperConsumer
export { ContextStore, Consumer }
