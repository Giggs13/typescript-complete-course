import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Home } from "./components/home";

ReactDOM.render(<Home name='Andrej' age={32}/>, document.getElementById('app'));