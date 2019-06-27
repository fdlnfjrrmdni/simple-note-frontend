import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, Title, Icon, Button, Thumbnail, Content } from 'native-base';

class EditNote extends Component{
    toHome = () => {
        const { navigation } = this.props;
        navigation.navigate('Home');
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#fff' iosBarStyle='dark-content'>
                    <View>
                        <TouchableOpacity style={{marginLeft: 15}} transparent onPress={this.toHome}>
                            <Icon name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Title style={styles.title}>EDIT NOTE</Title>
                    </View>
                    <View>
                        <TouchableOpacity style={{marginRight: 15}} transparent>
                            <Icon name='checkmark-circle-outline' style={{color:'#3DB39E'}}/>
                        </TouchableOpacity>
                    </View>
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        alignSelf: 'center'
    }
});

export default EditNote;