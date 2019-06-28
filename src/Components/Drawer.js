import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, 
        ScrollView, FlatList, Modal } from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, 
        Title, Icon, Thumbnail, Content, ListItem, Item, Form, Input, Label } from 'native-base';

class Drawer extends Component {
    toScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    toggleDrawer = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    }

    state = { modalVisible: false, };
    setModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render(){
        return (
            <Container>
                <ScrollView>
                    <View style={{ alignItems: 'center', marginTop: 45 }}>
                        <Thumbnail style={{borderRadius:100 ,width: 100, height: 100}} source={{ uri: 'https://cdn.moneysmart.id/wp-content/uploads/2019/03/08124226/Untitled-design-2.jpeg' }} />
                    </View>
                    <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', textAlign: 'center', marginTop: 18 }}>Steve Jobs</Text>
                    <View style={{ marginTop: 70 }}>
                        <ListItem icon>
                            <Left>
                                <Icon name='ios-person' />
                            </Left>
                            <Body style={styles.body}>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }} onPress={this.toScreen('AddNote')}>Personal</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='paper' />
                            </Left>
                            <Body style={styles.body}>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }} onPress={this.toScreen('AddNote')}>Work</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='heart-empty' />
                            </Left>
                            <Body style={styles.body}>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }} onPress={this.toScreen('AddNote')}>Wishlist</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='add-circle'/>
                            </Left>
                            <Body style={styles.body}>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }} onPress={() => { this.setModal(true) }}>Add Category</Text>
                            </Body>
                        </ListItem>
                    </View>
                </ScrollView>

                <Modal transparent visible={this.state.modalVisible} onRequestClose={() => { }}>
                    <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} style={{ height: '100%', backgroundColor: '#aaaaaa70' }}>
                        <View style={{ padding: 60, paddingTop: 220 }}>
                            <View style={styles.modal}>
                                <Form>
                                    <Item last>
                                        <Input placeholderTextColor='#aaa' placeholder='Category Name' />
                                    </Item>
                                    <Item last>
                                        <Input placeholderTextColor='#aaa' placeholder='Image Url' />
                                    </Item>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <TouchableOpacity style={{marginRight: 7}} onPress={() => { this.setModal(!this.state.modalVisible); }}>
                                            <Text style={{ marginTop: 15, fontWeight: '500', fontSize: 20, textAlign: 'right' }}>Add</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }}>
                                            <Text style={{ marginTop: 15, fontSize: 20, textAlign: 'right', color: '#aaa' }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Form>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>

            </Container>
        )
    }
}

Drawer.protoType = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    body: {
        borderBottomColor: 'transparent'
    },
    modal: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 7
    }
});

export default Drawer;