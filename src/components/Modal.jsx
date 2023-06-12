import _ from "lodash"
import '../style.css'

const Modal = ({store, setStore})=>{
  const newStore = _.cloneDeep(store) // deep copy of store object to avoid mutating the original one
    return (
      <>
      <div 
      className='modal'
      style={{display: store.showModal ? 'block':'none'}}
      >
    <div className='background'></div>
      <div className="modal-container"><div className='header'>
        <h2
        style={{textAlign: 'left'}}>{store.title}</h2>
        <button
          onClick={()=>{
            _.set(newStore, 'showModal', false)
            setStore(newStore)
          }}
        >x</button>
      </div>
        <p>{store.modalText}</p>
        <button
          id="btn-punch" //id to target it with css so the button is on theme
          onClick={()=>{
            _.set(newStore, 'jokeProps.showJoke', true)
            setStore(newStore)
          }}
          style={{display: store.jokeProps.showJoke ? 'none': 'block'}} // make button go away once clicked
        >
          click to show punchline</button>
        <p
        style={{display:store.jokeProps.showJoke ? 'block': 'none'}}>
          {store.jokeProps.modalPunchline}</p>
    </div>
  </div>
  </>)
}
export default Modal