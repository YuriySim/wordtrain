import React from 'react';
import {HandySvg} from 'handy-svg';

import cl from './Video.module.css';

const Button = ({iconOn, iconOff, classNm, toggle, title, size}: any) => {
  return (
    <button
      className={classNm}
      title={title}
      onClick={toggle}
    >
      {iconOn &&
        <HandySvg
          src={iconOn}
          className={cl.btnIconOn}
          width={size}
          height={size}
        />
      }

      {iconOff &&
        <HandySvg
          src={iconOff}
          className={cl.btnIconOff}
          width={size}
          height={size}
        />
      }
    </button>
  );
};

export default Button;