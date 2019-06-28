import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, Title, 
    Icon, Button, Input, Textarea, Thumbnail, Content, Item, Picker, Form } from 'native-base';

class AddNote extends Component {
    toHome = () => {
        const { navigation } = this.props;
        navigation.navigate('Home');
    }

    constructor(props) {
        super(props);
        this.state = {
        selected2: undefined
        };
    }
    onValueChange2(value: string) {
        this.setState({
        selected2: value
        });
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#fff' iosBarStyle='dark-content'>
                    <View>
                        <TouchableOpacity style={{ marginLeft: 15 }} transparent onPress={this.toHome}>
                            <Icon name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Title style={styles.title}>ADD NOTE</Title>
                    </View>
                    <View>
                        <TouchableOpacity style={{ marginRight: 15 }} transparent>
                            <Icon name='checkmark-circle-outline' style={{ color: '#3DB39E' }} />
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content>
                    <Form>
                        <View style={styles.input}>
                            <Input placeholder='ADD TITLE ...' placeholderTextColor='#c4c4c4' style={styles.inputTitle} />
                            <Textarea rowSpan={9} placeholder='ADD DESCRIPTION ...' placeholderTextColor='#c4c4c4' style={styles.inputDescription} />
                        </View>
                        
                        <View style={styles.categoryBar}>
                            <Text style={{fontWeight: '600', marginBottom: 10}}>CATEGORY</Text>
                            <Item picker style={styles.picker}>
                                <Picker
                                    mode="dropdown"
                                    icon={<Icon name="arrow-dropdown-circle" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="ADD CATEGORY" value="key0" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                            </Item>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 20, marginTop: 40
    },
    inputTitle: {
        fontSize: 24, 
        fontWeight: '400', 
        marginLeft: 5
    },
    inputDescription: {
        fontSize: 24, 
        fontWeight: '400'
    },
    categoryBar: {
        padding: 30, 
        width: 250
    },
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        alignSelf: 'center'
    },
    picker: {
        backgroundColor: '#fff',
        paddingLeft: 15,
        borderBottomColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default AddNote;