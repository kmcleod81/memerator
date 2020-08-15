import React from 'react';

export default function MemeForm(props) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setState({
      ...props.state,
      [name]: value,
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="line1">First Line</label>
        <input
          type="text"
          value={props.state.line1Text}
          className="form-control"
          name="line1Text"
          id="line1"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="line2">Second Line</label>
        <input
          type="text"
          value={props.state.line2Text}
          className="form-control"
          name="line2Text"
          id="line2"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
