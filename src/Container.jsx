import { useState } from "react";
import App from "./components/App";
import Modal from './components/Modal'
import './style.css'

export default function Container(){

    const [store, setStore] = useState({
        showModal: false,
        modalText:'placeHolder',
        jokeProps:{
            modalPunchline:'placeHolder',
            showJoke: false
        }
        
    })
    return(
    <>
    <App
     setStore={setStore}
     store={store}/>
    <Modal 
    store={store}
    setStore={setStore}
    />
    </>)
}