import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, 
        StatusBar, ScrollView, 
        FlatList, Modal } from 'react-native';
import { View, Text, Container } from 'native-base';

import Fabs from '../Components/Fabs';
import Search from '../Components/Search';
import DummyNotes from '../Assets/DummyData/Notes';
import Cards from '../Components/Cards';
import Headers from '../Components/Headers';

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
                <Headers
                  thumbnail
                  leftPress={this.toggleDrawer}
                  title='NOTE APP'
                  rightPress={() => {this.setModal(true)}}
                  iconRight='funnel'
                  iconRightColor='#000'
                />

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
                <Search />

                {/* ============== Content ============== */}
                <ScrollView>
                    <View style={styles.content}>
                        <FlatList
                            data={ DummyNotes }
                            numColumns={2}
                            renderItem={({item}) =>
                                <Cards 
                                press={this.toNote} 
                                date={item.date} 
                                title={item.title} 
                                category={item.category} 
                                content={item.note} />
                            }
                        />
                    </View>
                </ScrollView>

                {/* ============== Fab Add Note ============== */}
                <Fabs press={this.toAddNote}/>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
  modal: {
    elevation: 7,
    backgroundColor: '#fff',
    padding: 15,
  },
  content: {
    marginLeft: 27,
    justifyContent: 'space-between',
    paddingTop: 120
  }
});

export default Home;