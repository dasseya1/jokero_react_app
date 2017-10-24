import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'

const App = () => <div>
    <Route path="/" exact component={HomePage} />
    Hello World!
    </div>;

export default App;