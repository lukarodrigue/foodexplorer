import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { Container, Form, Image, Category } from "./styles";

import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { Input } from '../../components/Input';
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { FoodItem } from '../../components/FoodItem';

export function New({ isNew, isAdmin }) {

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container>

            {!isDesktop &&
                <Menu isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            }

            <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main>
                <Form>
                    <header>
                        <ButtonText>
                            <RxCaretLeft />
                            voltar
                        </ButtonText>

                        <h1>{isNew ? "Adicionar prato" : "Editar prato"}</h1>

                    </header>

                    <div>
                        <Section title="Imagem do prato">
                            <Image className="image">
                                <label htmlFor="image">
                                    <FiUpload size={24} />
                                    <span>Selecione imagem</span>

                                    <input
                                        id="image"
                                        type="file"
                                    />
                                </label>
                            </Image>
                        </Section>

                        <Section title="Nome">
                            <Input className="name"
                                placeholder={isNew ? "Ex.: Salada Ceasar" : "Salada Ceasar"}
                                type="text"
                            />
                        </Section>

                        <Section title="Categoria">
                            <Category className="category">
                                <label htmlFor="category">
                                    <select id="category">
                                        <option value="meal">Refeição</option>
                                        <option value="dessert">Sobremesa</option>
                                        <option value="beverage">Bebida</option>
                                    </select>

                                    <RiArrowDownSLine size={24} />
                                </label>
                            </Category>
                        </Section>
                    </div>

                    <div>
                        <Section title="Ingredientes">
                            <div className="tags">
                                <FoodItem value="Pão Naan" />
                                <FoodItem isNew placeholder="Adicionar" />
                            </div>
                        </Section>

                        <Section title="Preço">
                            <Input className="price"
                                placeholder="R$ 00,00"
                                type="number"
                            />
                        </Section>
                    </div>
                    <Section title="Descrição">
                        <Textarea placeholder={isNew ?
                            "Fale brevemente sobre o prato, seus ingredientes e composição" :
                            "A Salada César é uma opção refrescante para o verão."}
                        />
                    </Section>

                    <div className="buttons">
                        {!isNew && <Button title="Excluir prato" className="delete" />}
                        <Button title="Salvar alterações" className="save" disabled />
                    </div>
                </Form>
            </main>

            <Footer />
        </Container>
    );
}