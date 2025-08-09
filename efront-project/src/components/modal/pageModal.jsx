import ImageModal from "../../assets/background-image-modal.jpg"
import './styleModal.scss';

export default function PageModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-btn" onClick={onClose} aria-label="Fechar modal">
                    &times;
                </button>

                <h2>Confirmar Logout</h2>
                <p>Você tem certeza que deseja sair?</p>
                <div className="modal-buttons">                    
                    <button onClick={onClose} className="cancel-btn">Cancelar</button>
                    <button onClick={onConfirm} className="confirm-btn">Confirmar</button>
                </div>
            </div>
        </div>
    );
}