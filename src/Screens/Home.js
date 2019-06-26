import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, Title, Icon, Button, Thumbnail, Content} from 'native-base';

export default class App extends Component {

static navigationOptions = {
    header: null
};

handleNavigate = () => {
  const { navigation } = this.props;
  navigation.navigate('Note');
}

render() {
    return (
        <Container>
          <View>
            <StatusBar backgroundColor='white' barStyle='light-' />
          </View>
          <Header style={styles.header}>
            <View>
              <TouchableOpacity transparent>
                <Thumbnail small source={{ uri: 'https://cdn.moneysmart.id/wp-content/uploads/2019/03/08124226/Untitled-design-2.jpeg' }} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenter}>
              <Title style={styles.title}> NOTE APP </Title>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity transparent>
                <Icon name='funnel' />  
              </TouchableOpacity>
            </View>
          </Header>

          <TouchableOpacity style={styles.search}>
            <TextInput style={styles.searchBar} placeholder="Search..." />
          </TouchableOpacity>

          <Content style={styles.content}>
            <TouchableOpacity style={styles.card} onPress={this.handleNavigate}>
              <Text>27 Jul</Text>
              <Text>Title</Text>
              <Text>Content</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text>27 Jul</Text>
              <Text>Title</Text>
              <Text>Content</Text>
            </TouchableOpacity>
          </Content>

          <Fab style={styles.fab}>
            <Icon style={styles.fabIcon} name='add' />
          </Fab>

        </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
    display: 'flex'

  },
  header: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLeft: {alignContent: 'center'},
  // headerCenter: { marginLeft: 80 },
  // headerRight: {marginRight:12},
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
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  searchBar: {
    borderRadius: 100,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomColor: 'transparent',
    
    fontFamily: 'Open Sans',
    fontSize: 14
  },
  card: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
    width: 130,
    height: 130,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10
  },
  fab: { backgroundColor: '#fff' },
  fabIcon: { color: '#000' }
});