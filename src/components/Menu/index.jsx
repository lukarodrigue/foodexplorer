import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Search } from "../Search";
import { ButtonText } from "../ButtonText";

export function Menu({ isAdmin, isMenuOpen, setIsMenuOpen, setSearch }) {
    return (
        <Container isMenuOpen={isMenuOpen}>
            <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main>
                <Search setSearch={setSearch} />

                {isAdmin &&
                    <ButtonText>
                        Novo prato
                    </ButtonText>
                }

                <ButtonText>
                    Sair
                </ButtonText>
            </main>
        </Container>
    );
}