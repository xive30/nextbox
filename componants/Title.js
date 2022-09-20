import React from 'react'
import Styles from '../styles/Title.module.css'

export default function Title(props) {
  return (
    <div>
      <div>WelCome <span className={ Styles.titleName }>{props.name}</span> to the Next_box</div>
      <h1 className={Styles.titleName}>NextBox</h1>
      {/* <p>Coucou les amis, je suis Contant.</p> */}
    </div>

  )
}
