var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  render: function(){
    return <View style={styles.container}>

      <View style={[styles.header, this.border('yellow')]}>{/* Timer and Buttons */}
        <View style={[styles.timerWrapper, this.border('red')]}>{/* Timer */}
          <Text>
            00 : 00 : 00
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>{/* Buttons */}
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>{/* Lap Value sections */}
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
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
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
  },
  timerWrapper: {
    flex: 5, // take 5/8th of available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3, // take 3/8th of available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);