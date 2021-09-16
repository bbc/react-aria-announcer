import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const hiddenStyling = {
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
};

const MessageA = ({ message, className }) => (
  <div className={`messageA AM-hidden ${className}`} >
    {message}
  </div>
);

const MessageB = ({ message, className }) => (
  <div className={`messageB AM-hidden ${className}`} >
    {message}
  </div>
);

const HiddenMessages = (props) => {
  const { message, timeStamp, manner, className } = props;

  const [isMessageA, setIsMessageA] = useState(false);

  useEffect(() => {
    setIsMessageA(!isMessageA);
  }, [timeStamp]);

  return (
    <div
      aria-live={manner}
      // aria-relevant="all"
      aria-atomic
      className={`AM-hidden ${className}`}
      style={hiddenStyling}
    >
      {isMessageA
        ? <MessageA message={message} manner={manner} className={className} />
        : <MessageB message={message} manner={manner} className={className} />
      }
    </div>
  );
};

HiddenMessages.proptypes = {
  message: PropTypes.string,
  timeStamp: PropTypes.instanceOf(Date),
  manner: PropTypes.string,
  className: PropTypes.string,
};

HiddenMessages.defaultProps = {
  manner: 'polite',
  className: '',
};

export {
  HiddenMessages,
};
