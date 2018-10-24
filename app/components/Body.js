import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as actionCreatores from './../actions';
import { connect } from 'react-redux';

class Body extends Component {
  componentDidMount(){
    {this.props.dispat()}
    {this.props.githubdata()}
  }
  
  render() {
    if(!this.props.githupdata){
      return <Text> loading </Text> ;
    }
    
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit</Text>        
      <Image source={{uri: this.props.githupdata['data']['avatar_url']}} style={{width: 40, height: 40}} />
    </View>
    );
  }
}

function mapStateToProps( state ){
  return{
    dataTest : state.datatest,
    githupdata: state.dataGit
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default connect ( mapStateToProps, actionCreatores )( Body ) ;