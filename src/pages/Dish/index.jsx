import { RxCaretLeft } from "react-icons/rx";

import { Container, Content } from "./styles";

import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Tag } from '../../components/Tag';
import { NumberPicker } from "../../components/NumberPicker";
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';

export function Dish({ isAdmin }) {

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleEdit() {
        navigate(`/edit/${params.id}`);
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }

        fetchDish();
    }, []);
    return (
        <Container>

            {!isDesktop &&
                <Menu
                    isAdmin={isAdmin}
                    isDisabled={true}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
            }

            <Header
                isAdmin={isAdmin}
                isDisabled={true}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            {
                data &&
                <main>
                    <div>
                        <header>
                            <ButtonText onClick={handleBack}>
                                <RxCaretLeft />
                                voltar
                            </ButtonText>
                        </header>

                        <Content>
                            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />

                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>

                                {
                                    data.ingredients &&
                                    <section>
                                        {
                                            data.ingredients.map(ingredient => (
                                                <Tag
                                                    key={String(ingredient.id)}
                                                    title={ingredient.name}
                                                />
                                            ))
                                        }
                                    </section>
                                }

                                <div className="buttons">
                                    {isAdmin ?
                                        <Button
                                            title="Editar prato"
                                            className="edit"
                                            onClick={handleEdit}
                                        /> :
                                        <>
                                            <NumberPicker />
                                            <Button
                                                title={isDesktop ? `incluir ∙ R$ ${data.price}` : `pedir ∙ R$ ${data.price}`}
                                                className="include"
                                                isCustomer={!isDesktop}
                                            />
                                        </>
                                    }
                                </div>
                            </div>
                        </Content>
                    </div>
                </main>
            }
            <Footer />
        </Container >
    );
};