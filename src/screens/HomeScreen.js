import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { 
  BackHandler, 
  ActivityIndicator, 
  StyleSheet,   
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    this.WEBVIEW_REF.current.goBack();
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color='#009b88'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  render() {
    return (
<SafeAreaView style={styles.flexContainer}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={this.handleBackButton}>
    <Text style={styles.button}>{`<`}</Text>
          </TouchableOpacity>
          <Text style={styles.button}>Tracking Premium</Text>
          <Text style={styles.button}></Text>
        </View>
        <WebView
          source={{ uri:'https://trackingpremium.net/multitrack/web/login' }}
          style={{ 
            marginLeft: 5,
            marginRight:5
          }} 
          renderLoading={this.LoadingIndicatorView}
          startInLoadingState={true}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
       
</SafeAreaView>      
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  },
  button: {
    color: 'black',
    fontSize: 15
  }
});

export default HomeScreen;

// import React from "react";
// import { StyleSheet } from "react-native";
// import { WebView } from 'react-native-webview';

// const HomeScreen = () => {
//   return (
//     <WebView
//       source={{
//         uri: 'https://trackingpremium.net/multitrack/web/login'
//       }}
//       style={{ 
//         marginLeft: 5,
//         marginRight:5
//      }} />
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30
//   }
// });

// export default HomeScreen;
