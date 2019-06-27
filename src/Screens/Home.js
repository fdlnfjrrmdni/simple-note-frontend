import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, 
          ScrollView, FlatList, Modal, Button } from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, 
          Title, Icon, Thumbnail, Content } from 'native-base';

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
          <Header style={styles.header} androidStatusBarColor='#fff' iosBarStyle='dark-content'>
            <View>
              <TouchableOpacity style={{marginLeft: 10}} onPress={this.toggleDrawer}>
                <Thumbnail small source={{ uri: 'https://cdn.moneysmart.id/wp-content/uploads/2019/03/08124226/Untitled-design-2.jpeg' }} />
              </TouchableOpacity>
            </View>
            <View>
              <Title style={styles.title}>NOTE APP</Title>
            </View>
            <View>
              <TouchableOpacity style={{marginRight: 15}} transparent onPress={() => { this.setModal(true) }}>
                <Icon name='funnel' />  
              </TouchableOpacity>
            </View>
          </Header>

          <Modal transparent animationType="none" visible={this.state.modalVisible} onRequestClose={() => { }}>
            <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} style={{height: '100%'}}>    
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

          <TouchableOpacity style={styles.search}>
            <TextInput style={styles.searchBar} placeholder="Search..." />
          </TouchableOpacity>

          <FlatList
            data={[{
              date: '27 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount lialkhs akshakjs ajshkan ajshalk kjhskjfh kjshfkjsd kjsdh jdhfjslkjhiuwf lakjsfhkjbsd sdhkljsdfkjhaf ksjdchkjdhkahdj kajsdfjbdc lakjdckjnkxlkhskjdfbbak lakfksdb'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }]}
            renderItem={({item}) =>
              <View style={styles.content}> 
              <TouchableOpacity style={styles.card} onPress={this.toNote}>
                <Text style={styles.cardDate}>{item.date}</Text>
                <Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.cardCategory}>{item.category}</Text>
                <Text numberOfLines={3} style={styles.cardContent}>{item.note}</Text>
              </TouchableOpacity>
              </View>
            }
            numColumns={2}
          />

          <Fab style={styles.fab} onPress={this.toAddNote}>
            <Icon style={styles.fabIcon} name='add' />
          </Fab>

        </Container>
    );
  }
}

const styles = StyleSheet.create({
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
    // flexDirection: 'row',
    // flex: 1,
    // flexWrap: 'wrap',
    marginLeft: 27,
    // marginRight: 25,
    justifyContent: 'space-between'
  },
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
  },
  search: {
    height: 45,
    margin: 25,
    marginBottom: 35,
    borderRadius: 19,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  searchBar: {
    borderRadius: 19,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomColor: 'transparent',
    fontFamily: 'Open Sans',
    fontSize: 14
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
    marginBottom: 30,
    // marginRight: 25
  },
  cardDate: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12
  },
  cardCategory: {
    color: '#fff'
  },  
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  cardContent: {
    color: '#fff'
  },
  fab: { backgroundColor: '#fff' },
  fabIcon: { color: '#000' }
});

export default Home;