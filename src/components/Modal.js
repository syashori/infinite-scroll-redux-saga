import './Modal.css'

const Modal = (props) => {

    const toggleModal = () =>{
        props.toggleModal()
    }
  return (
    <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
            <img src={props.image} alt={props.image} className='foto-modal' onClick={toggleModal}/>
        </div>
    </div>
  )
}

export default Modal