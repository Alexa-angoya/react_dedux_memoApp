import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

function AddForm(props) {
  const [state, setState] = useState({ message: '' });
  const input = {
    fontSize: '16pt',
    color: '#006',
    padding: '1px',
    margin: '5px 0px'
  };
  const btn = {
    fontSize: '14pt',
    color: '#006',
    padding: '2px 10px'
  };

  function doChange(e) {
    setState({
      message: e.target.value
    });
  }

  function doAction(e) {
    e.preventDefault();
    let action = addMemo(state.message);
    props.dispatch(action);
    setState({
      message: ''
    });
  }

  return (
    <div>
      <p>{props.message}</p>
      <form onSubmit={doAction}>
        <input
          type="text"
          size="40"
          onChange={doChange}
          style={input}
          value={state.message}
          required
        />
        <input type="submit" style={btn} value="Add" />
      </form>
    </div>
  );
}
export default connect(state => state)(AddForm);
