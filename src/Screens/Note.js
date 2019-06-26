import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { Container, Header } from 'native-base';

export default class App extends Component{
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container>
                <Text>This is Note</Text>
            </Container>
        );
    }
}