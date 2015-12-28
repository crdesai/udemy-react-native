var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  render: function(){
    return <View>
      <View>{/* Timer and Buttons */}
        <View>{/* Timer */}
          <Text>
            00 : 00 : 00
          </Text>
        </View>
        <View>{/* Buttons */}
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View>{/* Lap Value sections */}
        <Text>
          Lap Values
        </Text>
      </View>
    </View>
  },
  startStopButton: function(){
    return <View>
        <Text>
          Start
        </Text>
      </View>
  },
  lapButton: function(){
    return <View>
        <Text>
          Lap
        </Text>
      </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    // Timer and Buttons
    flex: 1
  },
  footer: {
    // Lap value List
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);