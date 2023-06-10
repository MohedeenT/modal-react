import { useState } from "react";
import App from "./components/App";
import Modal from './components/Modal'
import './style.css'

export default function Container(){

    const [store, setStore] = useState({
        showModal: false,
        modalText:'placeHolder'
    })
    return(
    <>
    <App
     store={store}
     setStore={setStore}/>
    <Modal store={store}/>
    </>)
}