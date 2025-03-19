import { RxCaretLeft } from "react-icons/rx";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";


export function Dish() {
    return (
        <Container>

            <ButtonText>
                <RxCaretLeft />
                Voltar
            </ButtonText>



            <Header />
            <Tag title="alface" />
            <Tag title="cebola" />
            <Footer />

        </Container>
    );
}