const Modal = ({store})=>{
    return (

  <div className="modal-content" style={store ? {display: 'block'}:{display: 'none'}}>
    <h2
     style={{textAlign: 'left'}}>Welcome!</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi eos, corrupti animi repellat aliquam, deleniti facere quidem itaque eligendi?</p>
  </div>)
}
export default Modal