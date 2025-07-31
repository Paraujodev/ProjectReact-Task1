import ImageModal from "../../assets/background-image-modal.jpg"
import './styleModal.scss'

export default function PageModal() {


    const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
        if (!isOpen) return null;

        return (
            <div className="modal-overlay">
                <div className="modal-container">
                    <h2>Confirmar Logout</h2>
                    <p>Você tem certeza que deseja sair?</p>
                    <div className="modal-buttons">
                        <button onClick={onConfirm} className="confirm-btn">Confirmar</button>
                        <button onClick={onClose} className="cancel-btn">Cancelar</button>
                    </div>
                </div>
            </div>
        );
    };

}