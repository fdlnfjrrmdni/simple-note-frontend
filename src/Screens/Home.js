import React, { Component } from 'react';
import { StyleSheet, TextInput, 
        TouchableOpacity, StatusBar, 
        ScrollView, FlatList, 
        Modal,  } from 'react-native';
import { Fab, View, 
        Text, Container, 
        Header, Title, 
        Icon, Thumbnail } from 'native-base';

class Home extends Component {

    toNote = () => {
      const { navigation } = this.props;
      navigation.navigate('Note');
    }

    toAddNote = () => {
      const { navigation } = this.props;
      navigation.navigate('AddNote');
    }

    toggleDrawer = () => {
      const { navigation } = this.props;
      navigation.toggleDrawer();
    }

    state = { modalVisible: false, }; 

    setModal(visible) { 
      this.setState({ modalVisible: visible }); 
    }

    render() {
        return (
            <Container>

                <StatusBar hidden />

                {/* ============== Header ============== */}
                <Header style={styles.header} 
                androidStatusBarColor='#fff' 
                iosBarStyle='dark-content'>
                    <View>
                        <TouchableOpacity style={{marginLeft: 10}} 
                        onPress={this.toggleDrawer}>
                            <Thumbnail small 
                            source={{ uri: 'https://cdn.moneysmart.id/wp-content/uploads/2019/03/08124226/Untitled-design-2.jpeg' }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Title style={styles.title}>NOTE APP</Title>
                    </View>
                    <View>
                        <TouchableOpacity style={{marginRight: 15}} 
                        transparent 
                        onPress={() => { this.setModal(true) }}>
                            <Icon name='funnel' />  
                        </TouchableOpacity>
                    </View>
                </Header>

                {/* ============== Sort Dropdown ============== */}
                <Modal transparent 
                animationType="none" 
                visible={this.state.modalVisible} 
                onRequestClose={() => { }}>
                    <TouchableOpacity style={{height: '100%'}}
                    onPress={() => { this.setModal(!this.state.modalVisible); }} >    
                        <View style={{ paddingRight: 15, paddingLeft: 200, paddingTop: 50 }}>
                            <View style={styles.modal}>
                                <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} >
                                    <Text style={{padding: 10}}>ASCENDING</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} >
                                    <Text style={{padding: 10}}>DESCENDING</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </TouchableOpacity>
                </Modal>

                {/* ============== Search ============== */}
                <View style={styles.searchBar}>
                  <TextInput style={{marginLeft: 10,marginRight: 25}} 
                  placeholder="Search..." />
                </View>

                {/* ============== Content ============== */}
                <ScrollView>
                    <View style={styles.content}>
                        <FlatList
                            data={[{
                              date: '24 Jun',
                              title: 'Lifecycle',
                              category: 'Learn',
                              note: 'ComponentDidMount, ComponentWillUnmount',
                              color: '#2FC2DF'
                            }, {
                              date: '23 Jun',
                              title: 'Hooks',
                              category: 'Learn',
                              note: 'UseState, UseEffect, UseConteks, UseStyles, UseReducer, UseRef',
                              color: '#2FC2DF'
                            }, {
                              date: '24 Jun',
                              title: 'Daily Standup',
                              category: 'Work',
                              note: 'Yeserday I\'m learn about react native, Today I will start make application',
                              color: '#C0EB6A'
                            }, {
                              date: '24 Jun',
                              title: 'Macbook',
                              category: 'Wishlist',
                              note: 'I have to buy a Macbook this year',
                              color: '#FAD06C'
                            }, {
                              date: '24 Jun',
                              title: 'Daily Standup',
                              category: 'Work',
                              note: 'Yeserday I\'m learn about react native, Today I will start make application',
                              color: '#C0EB6A'
                            }, {
                              date: '24 Jun',
                              title: 'Today',
                              category: 'Personal',
                              note: 'Install react native, Learn about React Native, Make simple app',
                              color: '#FF92A9'
                            }, {
                              date: '28 Jul',
                              title: 'Today',
                              category: 'Personal',
                              note: 'Install react native, Learn about React Native, Make simple app',
                              color: '#FF92A9'
                            }]}

                            renderItem={({item}) =>
                                <View style={{marginRight: 30}}>
                                    <TouchableOpacity style={{
                                        width: 138,
                                        height: 138,
                                        borderRadius: 7,
                                        backgroundColor: item.color,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                          width: 0,
                                          height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 5,
                                        padding: 12,
                                        marginBottom: 27
                                    }} backgroundColor='#red' onPress={this.toNote}>
                                        <Text style={styles.cardDate}>{item.date}</Text>
                                        <Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
                                        <Text numberOfLines={1} style={styles.cardCategory}>{item.category}</Text>
                                        <Text numberOfLines={4} style={styles.cardContent}>{item.note}</Text>
                                    </TouchableOpacity>
                                </View>
                            }

                            numColumns={2}
                        />
                    </View>
                </ScrollView>

                {/* ============== Fab Add Note ============== */}
                <Fab style={styles.fab}
                onPress={this.toAddNote}>
                    <Icon style={styles.fabIcon}
                    name='add' />
                </Fab>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
  // Dropdown Sort using Modal
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
  },
  content: {
    marginLeft: 27,
    justifyContent: 'space-between',
    paddingTop: 120
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
  },
  searchBar: {
    zIndex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderBottomColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginTop: 85,
    alignSelf:'center',
    height: 45,
    width: 307,
    position: 'absolute',
    borderRadius: 20
            },
  card: {
    width: 138,
    height: 138,
    borderRadius: 7,
    backgroundColor: '#2FC2DF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 12,
    marginBottom: 30
  },
  cardDate: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '800'
  },
  cardCategory: {
    color: '#fff',
    fontSize: 13
  },  
  cardTitle: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 18
  },
  cardContent: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500'
  },
  fab: { backgroundColor: '#fff', marginBottom: 20 },
  fabIcon: { color: '#000' }
});

export default Home;