import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, Title, 
    Icon, Button, Input, Textarea, Thumbnail, Content, Item, Picker, Form } from 'native-base';

class EditNote extends Component{
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
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
                        <TouchableOpacity style={{marginLeft: 15}} transparent onPress={this.goBack}>
                            <Icon name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Title style={styles.title}>EDIT NOTE</Title>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.goBack} style={{marginRight: 15}} transparent>
                            <Icon name='checkmark-circle-outline' style={{color:'#3DB39E'}}/>
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content>
                    <Form>
                        <View style={styles.input}>
                            <Input value='Daily Standup' placeholder='ADD TITLE ...' placeholderTextColor='#c4c4c4' style={styles.inputTitle} />
                            <Textarea value="Yeserday I'm learn about react native, Today I will start make application" rowSpan={9} placeholder='ADD DESCRIPTION ...' placeholderTextColor='#c4c4c4' style={styles.inputDescription} />
                        </View>

                        <View style={styles.categoryBar}>
                            <Text style={styles.categoryText}>CATEGORY</Text>
                            <Item picker style={styles.picker}>
                                <Picker
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Work" value="1" selected />
                                    <Picker.Item label="Learn" value="2" />
                                    <Picker.Item label="Personal" value="3" />
                                    <Picker.Item label="Wishlist" value="4" />
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
    categoryText: {
        fontWeight: '600',
        marginBottom: 10
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
    },
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
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