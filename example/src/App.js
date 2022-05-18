import React from 'react'

import { Modal } from 'p14-react-modal-fred_dou'
import 'p14-react-modal-fred_dou/dist/index.css'

const App = () => {
  function alertExample() {
    alert('This button is working !')
  }
  return (
    <Modal text='This is a modal' textBtn='Button' functionBtn={alertExample} />
  )
}

export default App
