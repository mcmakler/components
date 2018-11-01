import React from 'react';
import PropTypes from 'prop-types';
import './RadioGroup.scss';

import RadioButton from './../RadioButton/RadioButton';

const RadioGroup = ({ id, buttons, onChange }) => (
  <div className="radio_group">
    {
      buttons.map((button, index) => (
        <RadioButton
          {...button}
          key={button.value}
          id={`radio_${id}_${index}`}
          name={`radio_${id}`}
          onChange={onChange}
        />
      ))
    }
  </div>
);

RadioGroup.propTypes = {
  buttons: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

RadioGroup.defaultProps = {
  id: '0',
};

export default RadioGroup;
