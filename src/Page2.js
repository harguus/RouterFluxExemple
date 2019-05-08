import React, { Component } from 'react';
import { Container, Content, Button, Title, Footer, FooterTab, Body, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Page2 extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Button
                        success
                        block
                        onPress={() => Actions.page1()}
                    >
                        <Title>Página 2</Title>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab>
                        <Body>
                            <Text>Exemplo</Text>
                        </Body>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}