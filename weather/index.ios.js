var React = require('react-native');
var {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} = React;

var Api = require('./src/api');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  },
  render: function() {

    return <View style={styles.container}>
        <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.handleOnRegionChangeComplete}
        style={styles.map}>
        </MapView>
        <View style={styles.weatherDetails}>
          <Text style={styles.text}>{this.state.city}</Text>
          <Text style={styles.text}>{this.state.temperature}</Text>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
      </View>
  },
  handleOnRegionChangeComplete: function(region) {
    //console.log(region);
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {
          console.log(data);
          this.setState(data);
        });
  }
});

var styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
      },
      map: {
        flex: 2,
        marginTop: 30
      },
      weatherDetails:{
        flex: 1,
        alignItems: 'center'
      },
      text: {
        fontSize: 30
      }
    });

AppRegistry.registerComponent('weather', () => Weather);