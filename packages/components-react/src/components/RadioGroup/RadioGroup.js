import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from './../RadioButton/RadioButton';

const RadioGroup = ({ buttons, onChange }) => (
  <div>
    {
      buttons.map((button, index) => (
        <RadioButton
          {...button}
          id={`radio_${index}`}
          onChange={onChange}
        />
      ))
    }
  </div>
);

RadioGroup.propTypes = {
  buttons: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroup;
