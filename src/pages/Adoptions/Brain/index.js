import React from 'react';
import Main from '../UI/main'
import { Provider} from './context'
const Adoptions = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  );
};

export default Adoptions;