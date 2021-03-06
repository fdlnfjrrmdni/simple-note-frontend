import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, TouchableOpacity, 
        ScrollView, Modal } from 'react-native';
import { View, Text, Container, 
        Left, Body, Icon, 
        Thumbnail, ListItem, Item, 
        Form, Input } from 'native-base';

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

                {/* ============ Drawer ============*/}
                <ScrollView>
                    <View style={styles.thumbnailBar}>
                        <Thumbnail style={styles.thumbnail} source={{ uri: 'https://cdn.moneysmart.id/wp-content/uploads/2019/03/08124226/Untitled-design-2.jpeg' }} />
                    </View>
                    <Text style={styles.name}>Steve Jobs</Text>
                    <View style={styles.menu}>
                        <ListItem icon>{/* ****** Person ****** */}
                            <Left><Icon name='ios-person' /></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={this.toScreen('AddNote')}>
                                    Personal
                                </Text>
                            </Body>
                        </ListItem>{/* ****** Work ****** */}
                        <ListItem icon>
                            <Left><Icon name='paper' /></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={this.toScreen('AddNote')}>
                                    Work
                                </Text>
                            </Body>
                        </ListItem>{/* ****** Wishlist ****** */}
                        <ListItem icon>
                            <Left><Icon name='heart-empty' /></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={this.toScreen('AddNote')}>
                                    Wishlist
                                </Text>
                            </Body>
                        </ListItem>{/* ****** Add Category ****** */}
                        <ListItem icon>
                            <Left><Icon name='add-circle'/></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={() => { this.setModal(true) }}>
                                    Add Category
                                </Text>
                            </Body>
                        </ListItem>
                    </View>
                </ScrollView>

                {/* ============ Add Category ============ */}
                <Modal transparent 
                visible={this.state.modalVisible} 
                onRequestClose={() => { }}>
                    <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} 
                    style={styles.back}>
                        <View style={styles.modalBar}>
                            <View style={styles.modal}>
                                <Form>
                                    <Item last>
                                        <Input placeholderTextColor='#aaa' 
                                        placeholder='Category Name' />
                                    </Item>
                                    <Item last>
                                        <Input placeholderTextColor='#aaa' 
                                        placeholder='Image Url' />
                                    </Item>
                                    <View style={styles.buttonBar}>
                                        <TouchableOpacity style={{marginRight: 7}} 
                                        onPress={() => { this.setModal(!this.state.modalVisible); }}>
                                            <Text style={styles.btnAdd}>
                                                Add
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }}>
                                            <Text style={styles.btnCancel}>
                                                Cancel
                                            </Text>
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
    back: {
        height: '100%',
        backgroundColor: '#aaaaaa70'
    },

    // ============ Modal Add Category ============
    modalBar: {             
        padding: 60, 
        paddingTop: 220 
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
    },
    buttonBar: { 
        flexDirection: 'row', 
        justifyContent: 'flex-end' 
    },
    btnAdd: { 
        marginTop: 15, 
        fontWeight: '500', 
        fontSize: 20, 
        textAlign: 'right' 
    },
    btnCancel: { 
        marginTop: 15, 
        fontSize: 20, 
        textAlign: 'right', 
        color: '#aaa' 
    },

    // ============ Drawer ============
    thumbnailBar: { 
        alignItems: 'center', 
        marginTop: 45 
    },
    thumbnail: { 
        borderRadius: 100, 
        width: 100, 
        height: 100 
    },
    name: { 
        fontSize: 22, 
        fontWeight: '600', 
        color: '#000', 
        textAlign: 'center', 
        marginTop: 18 
    },
    menu: { marginTop: 70 },
    body: { borderBottomColor: 'transparent' },
    textMenu: { 
        fontSize: 20, 
        fontWeight: '600', 
        color: '#000' 
    },
});

export default Drawer;