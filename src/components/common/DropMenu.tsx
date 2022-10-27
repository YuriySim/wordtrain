import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLogout } from '../../firebase';

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const DropMenu = ({...props}) => {
  const logout = useLogout()

  return (
    <div className={ "dropmenu"  + (!props.click ? " hidden" : "") }>
      {/* <div className="absolute w-[20px] h-[20px] bg-white rotate-45 right-[15px] top-[-8px]"></div> */}
      <div className="dropmenu-user-name">
        { typeof(props.userName) === "string" && capitalize(props.userName) }
      </div>

      <NavLink
        to="/profile"
        className="dropmenu-link"
      >
        <span>Profile</span>
      </NavLink>

      <NavLink
        to="/login"
        className="dropmenu-link"
        onClick={ logout }
      >
        <span>Log Out</span>
      </NavLink>
    </div>
  )
}

export default DropMenu;