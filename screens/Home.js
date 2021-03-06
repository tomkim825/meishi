import React from 'react';
import { 
  ScrollView, 
  FlatList,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getCards } from '../redux/actions';
import { Pages } from 'react-native-pages';
import BusinessCards from '../components/BusinessCards'
import Buttons from '../components/Buttons';

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: { height: 15 },
  
  }
  
 
  componentDidMount(){
    
    this.props.dispatch(getCards());

  }

  render() {
    return (
    
      <View style={styles.container}>

      <Buttons/>
      
      <ScrollView>
      {this.props.cards.map(card => (
        
        <BusinessCards 
          id={card.id}
          key={card.id}
          name={card.name}
          email={card.email}
          phone={card.phone}
          photo={card.photoUrl}
          image={card.image}
          aboutMe={card.aboutMe}
          title={card.title}
          linkone={card.linkone}
          linkone={card.linktwo}
        />
      ))}
      </ScrollView>
     
      </View>
   
    );
  }
}

//here we request cards which is an array of users accounted for in our firebase database

function mapStateToProps(state) {
  return {
    cards: state.cards,
 
  };
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#232828',
  },
  card: {
    padding: 50,
    justifyContent: 'flex-end',
    flex: 1,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    margin: 5
  },
  button: {
	  borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#749F8D',
	  textAlign: 'center',
	  color: '#749F8D',
	  padding: 10,
	  margin: 5,
	  fontSize: 18,
	  fontWeight: 'bold',
  },
});
