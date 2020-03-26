import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';

// Appコンポーネント
function App() {
  return (
    <div>
      <h1>Memo</h1>
      <AddForm />
      <hr />
      <table>
        <tbody>
          <tr>
            <FindForm />
            <DelForm />
          </tr>
        </tbody>
      </table>
      <Memo />
    </div>
  );
}

export default connect()(App);
