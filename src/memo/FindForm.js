import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

function FindForm(props) {
  const [state, setState] = useState({ message: '', find: '' });

  const input = {
    fontSize: '14pt',
    color: '#006',
    padding: '0px'
  };
  const btn = {
    fontSize: '12pt',
    color: '#006',
    padding: '1px 10px'
  };

  function doChange(e) {
    setState({
      find: e.target.value
    });
  }

  function doAction(e) {
    e.preventDefault();
    let action = findMemo(state.find);
    props.dispatch(action);
  }

  return (
    <form onSubmit={doAction}>
      <input
        type="text"
        size="10"
        onChange={doChange}
        style={input}
        value={state.message}
      />
      <input type="submit" style={btn} value="Find" />
    </form>
  );
}
export default connect(state => state)(FindForm);
