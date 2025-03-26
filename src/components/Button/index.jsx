import { TbReceipt } from "react-icons/tb";

import { useMediaQuery } from 'react-responsive';

import { Container } from "./styles";

export function Button({ title, loading = false, isCustomer, ...rest }) {

  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <Container type="button" disable={loading} {...rest}>


      {isCustomer && <TbReceipt size={32} />}
      {loading ? "Carregando..." : title}
      {isCustomer && <span>{isDesktop ? `(${rest.orderCount})` : rest.orderCount}</span>}


    </Container>
  );
}
