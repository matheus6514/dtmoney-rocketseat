import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalPros {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalPros){
    return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <Container>
        <h2>cadastrar</h2>

        <input
            placeholder="titulo"
        />

        <input
            type="number"
            placeholder="valor"
        />

        <input
            placeholder="categoria"
        />

        <button type="submit">
            Cadastrar
        </button>
        </Container>
    </Modal>
    );
}