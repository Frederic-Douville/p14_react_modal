# p14-react-modal-fred_dou

> This is a react modal component

[![NPM](https://img.shields.io/npm/v/p14-react-modal-fred_dou.svg)](https://www.npmjs.com/package/p14-react-modal-fred_dou) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save p14-react-modal-fred_dou
```

## Usage

```jsx
import React, { Component } from 'react'

import Modal from 'p14-react-modal-fred_dou'
import 'modal.css'

class Example extends Component {
  render() {
    function onClickTypeFunction(event){
      alert('This is an onclick event alert !')
    }
    return (
      <Modal
        text='some text on the modal'
        textBtn='some text on the button'
        functionBtn={onClickTypeFunction}
      />
    )
  }
}

//Classnames of the modal must be include on a css files
.modal-bg{
  'classname of the modal background'
}
.modal-ctn{
  'classname of the modal container'
}
.modal-msg{
  'classname of the modal text'
}
.modal-btn{
  'classname of the modal button'
}

```

## License

MIT © [Frederic-Douville](https://github.com/Frederic-Douville)
