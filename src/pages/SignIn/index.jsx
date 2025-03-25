import { Link } from "react-router-dom";

import { Container, Form, Brand } from "./styles";
import { Section } from "../../components/Section";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import brand from "../../assets/brand.svg";

export function SignIn() {
  return (
    <Container>
      <Button title="Entrar" />
      <Brand>
        <img src={brand} alt="Logo" />
      </Brand>

      <Form>
        <h2>Faça seu login</h2>

        <Section title="Email">
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </Section>

        <Section title="Senha">
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </Section>

        <Button title="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
