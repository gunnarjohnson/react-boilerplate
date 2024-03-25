import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

const ReactComponent = ({ subtitle, title }) => (
  <div className="react-component">
    <FontAwesomeIcon
      className="react-component__icon"
      icon={faReact}
    />
    <h1 className="react-component__title">{title}</h1>
    <p className="react-component__content">{subtitle}</p>
  </div>
);

ReactComponent.defaultProps = {
  subtitle: 'Start building',
  title: 'React Boilerplate',
};

ReactComponent.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default ReactComponent;
