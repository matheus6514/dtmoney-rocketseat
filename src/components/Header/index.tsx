import  logoImg  from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionMoal: () => void;
}

export function Header({ onOpenNewTransactionMoal}: HeaderProps ) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTransactionMoal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}