import React from 'react'
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports';
import { logoutSuccess } from '../Redux/Auth/action';

// import { logoutFailure, logoutLoading, logoutSuccess } from '../redux/action';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = ()=>{
   
    dispatch(logoutSuccess())
    
  }
  return (
    <div className={styles.nav}>
      <Link to='/' className={styles.page}><h3>Home</h3></Link>
      <Link to='/login' className={styles.page}><h3>Login</h3> </Link>
      <Link to='/register' className={styles.page}><h3>Register</h3> </Link> 
      <h3 className={styles.page} onClick={logout}>Logout</h3>
    </div>
  )
}
