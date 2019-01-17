import React from 'react';
import converter from 'hex2dec';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  FlatList,
  WebView
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  colors = ['#F0FFF0', '#DCFCF6', '#F1ECFA', '#E8D6D7'];

  state = {
    data: [
		  {url: "https://qa.cbgrus.website.epsilon.com/v1/welcome.htm", name: "CitiGR QA 1"},		  
		  {url: "https://qa.cbgrus.website.epsilon.com/v2/welcome.htm", name: "CitiGR QA 2"},		  
		  {url: "https://uat.cbgrus.uatglobalrewards.com/v1/welcome.htm", name: "CitiGR UAT 1"},		  
		  {url: "https://uat.cbgrus.uatglobalrewards.com/v2/welcome.htm", name: "CitiGR UAT 2"},		  
		  {url: "https://pat.cbgrus.uatglobalrewards.com/welcome.htm", name: "CitiGR PAT"},		  
		  {url: "https://prduat.cbgrus.uatglobalrewards.com/welcome.htm", name: "CitiGR Prod UAT"},		  
		  {url: "https://www.citirewards.com/", name: "CitiGR Prod"},		  
		  {url: "https://catalog.uat.cbgrus.uatglobalrewards.com/apple-gr/pages/login.jsp", name: "Apple UAT"},		  
		  {url: "https://catalog.pat.cbgrus.uatglobalrewards.com/apple-gr/pages/login.jsp", name: "Apple PAT"},		  
	]
  }

  render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('./assets/images/bridge2logoLong.png')
                  : require('./assets/images/bridge2logoLong.png')
              }
              style={styles.welcomeImage}
            />
          </View>

		  <FlatList style={styles.scroll}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
          <View style={[styles.row, { backgroundColor: this.newColor( index ) }]}>
		  	<TouchableHighlight underlayColor="#FF0000" activeOpacity={0.2} onPress={() => this.openURL( item.url )} >
          		<Text numberOfLines={1} style={styles.itemText}>{item.name}</Text>
		  	</TouchableHighlight>
          </View>
          )}
          />
          {this._maybeRenderDevelopmentModeWarning()}
      </View>
    );
  }

  doColor = ( e ) => {
    var dec = converter.hexToDec( this.colors[0].slice(1) );
    decNum = parseInt( dec ) - e * 8000;
    var hex = converter.decToHex( decNum.toString(), { prefix: true } ).toString().replace('0x', '#').toUpperCase();
    //console.log( this.colors[0] + "=>" + dec + "=>" + decNum + "=>" + hex  );
	return hex;
  }

  newColor = ( i ) => { 
	//return this.colors[ i % this.colors.length];
	return this.doColor( i );
  }

  _maybeRenderDevelopmentModeWarning() {
      return (

		<ScrollView style={styles.scroll}>			  
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          CitiGR QA 1
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          CitiGR QA 2
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          CitiGR UAT 1
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          CitiGR UAT 2
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
        CitiGR PAT
        </Text>
       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
       CitiGR Prod UAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          CitiGR Prod
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple UAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>

		</ScrollView>
      );
  }

  _handleLearnMorePress = () => {
    Linking.openURL("https://catalog.pat.cbgrus.uatglobalrewards.com/apple-gr/pages/login.jsp")
  }

  openURL = ( url ) => {
    Linking.openURL( url )
  }

}

const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    flex: 1,
    height: 800,
    backgroundColor: '#000',
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 310,
    height: 70,
    resizeMode: 'contain',
    marginTop: 25,
    
  },
  getStartedContainer: {
    alignItems: 'center',
    flex: 1,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 18,
    color: '#2e78b7',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 8,
    marginBottom: 8,
  },
});
