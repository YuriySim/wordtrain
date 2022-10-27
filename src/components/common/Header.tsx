import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { auth, useGetUserData } from '../../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import DropMenu from './DropMenu'
import { store } from '../../store';
import { addUserInfo } from '../../store/actions/actionsUser';

const Header = ({...props}) => {
  // interface IUser {
  //   authProvider: string
  //   email: string
  //   uid: string
  //   name: string
  // }

  const [userName, setUserName] = useState('');
  const [clickMenu, setClickMenu] = useState(false)
  const [user] = useAuthState(auth);
  var getUserData = useGetUserData(user?.uid)

  const prom = new Promise((resolve, reject) => {
    var data = getUserData()

    resolve(data)
  })

  prom.then((data: any) => {
    var dataUser = {...data}
    setUserName(dataUser?.name)

    store.dispatch(addUserInfo(data))
  })

  useEffect(() => {
    if(userName) console.log(userName)
  }, [userName])

  return (
    <header className="header">
      <NavLink to="/" className="menu-link-logo">
        <span>WordTrain</span>
      </NavLink>

      <div className="header-wrapper">
        <NavLink to="/" className={ ({isActive}) => "menu-link mr-4" + (isActive ? " isActive" : "") }>
          <span>Home</span>
          <span className="line"></span>
        </NavLink>

        {user
        ?
        <>
          <NavLink to="/dictionary" className={ ({isActive}) => "menu-link mr-4" + (isActive ? " isActive" : "") }>
            <span>Dictionary</span>
            <span className="line"></span>
          </NavLink>

          <NavLink to="/training" className={ ({isActive}) => "menu-link mr-4" + (isActive ? " isActive" : "") }>
            <span>Traning</span>
            <span className="line"></span>
          </NavLink>

          <div
            className="profile-circle"
            onClick={() => setClickMenu(!clickMenu)}
          >
            { typeof(userName) === "string" && userName[0].toUpperCase() }
          </div>

          <DropMenu
            userName={ userName }
            click={ clickMenu }
          />
        </>
        :
        <>
          <NavLink to="/login" className={ ({isActive}) => "menu-link mr-4" + (isActive ? " isActive" : "") }>
            <span>Log in</span>
            <span className="line"></span>
          </NavLink>

          <NavLink to="/registration" className={ ({isActive}) => "menu-link" + (isActive ? " isActive" : "") }>
            <span>Sign up</span>
            <span className="line"></span>
          </NavLink>
        </>
        }
      </div>
    </header>
  )
}

export default Header;