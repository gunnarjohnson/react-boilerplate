import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

const ReactComponent = (props) => (
  <div className="react-component">
    <FontAwesomeIcon className="react-component__icon" icon={faReact} />
    <h1 className="react-component__title">{props.title}</h1>
    <p className="react-component__content">{props.subtitle}</p>
  </div>
);

ReactComponent.defaultProps = {
  title: 'React Boilerplate',
  subtitle: "Start building"
};

export default ReactComponent;