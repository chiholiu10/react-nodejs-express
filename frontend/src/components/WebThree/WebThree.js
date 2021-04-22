import { useState } from 'react';
import axios from 'axios';
import {
  ContainerInnerBlock,
  Form,
  Input
} from './WebThree.styles';
import {
  WebStyle,
  Container,
  Content,
  Heading,
  Button,
  ContentDataBlock,
  ContentDataText
} from '../../styles/General.styles';


export const WebThree = () => {
  const [customer, getCusomter] = useState();
  const [milk, getMilk] = useState();
  const [skins, getSkins] = useState();
  const [shopOrder, setShopOrder] = useState([]);
  let disableButton = (customer && milk && skins) === undefined;

  const submitForm = async (id) => {
    const data = {
      "customer": customer,
      "order": {
        "milk": milk,
        "skins": skins
      }
    }
    try {
      const response = await axios.post("http://localhost:5000/web-shop/order/14", data, { headers: { "Content-Type": "application/json" } });
      setShopOrder(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  const getInput = (variable, value) => {
    if (variable === "customer") getCusomter(value);
    if (variable === "milk") getMilk(value);
    if (variable === "skins") getSkins(value);
  }
  return (
    <WebStyle>
      <Heading>Web-3</Heading>
      <Container>
        <ContainerInnerBlock>
          <Form onSubmit={(e) => {
            e.preventDefault();
            submitForm(14)
          }}>
            <Input
              placeholder="Customer"
              type="text"
              onChange={e => getInput('customer', e.target.value)}
            />
            <Input
              placeholder="Milk"
              type="number"
              onChange={e => getInput('milk', e.target.value)}
            />
            <Input
              placeholder="Skin"
              type="number"
              onChange={e => getInput('skins', e.target.value)}
            />
            <Button type="submit" disabled={disableButton}>Send</Button>
          </Form>
          <Content>
            {
              shopOrder.map((order, index) => (
                <ContentDataBlock key={index}>
                  {order.milk !== undefined ? <ContentDataText>Milk: {order.milk}</ContentDataText> : ""}
                  {order.skins !== undefined ? <ContentDataText>Skins: {order.skins}</ContentDataText> : ""}
                </ContentDataBlock>
              ))
            }
          </Content>
        </ContainerInnerBlock>
      </Container>
    </WebStyle>
  )
}