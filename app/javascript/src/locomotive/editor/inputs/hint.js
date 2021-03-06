import React from 'react';

const HintInput = ({ label, setting, getValue, handleChange }) => (
  <div className="editor-input editor-input-hint">
    <label className="editor-input--label">
      {label || setting.label}
    </label>
  </div>
)

export default HintInput;
