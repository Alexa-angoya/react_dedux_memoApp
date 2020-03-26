import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';

function DelForm(props) {
  const [state, setState] = useState({ number: '' });
  const input = {
    fontSize: '12pt',
    color: '#006',
    padding: '1px',
    margin: '5px 0px'
  };
  const btn = {
    fontSize: '10pt',
    color: '#006',
    padding: '2px 10px'
  };

  function doChange(e) {
    setState({
      number: e.target.value
    });
  }

  function doAction(e) {
    e.preventDefault();
    let action = deleteMemo(state.number);
    props.dispatch(action);
    setState({
      number: 0
    });
  }

  let n = 0;
  let items = props.data.map(value => (
    <option key={n} value={n++}>
      {value.message.substring(0, 10)}
    </option>
  ));
  return (
    <div>
      <form onSubmit={doAction}>
        <select onChange={doChange} defaultValue="-1" style={input}>
          {items}
        </select>
        <input type="submit" style={btn} value="Del" />
      </form>
    </div>
  );
}
export default connect(state => state)(DelForm);
