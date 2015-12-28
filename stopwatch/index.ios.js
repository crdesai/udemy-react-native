var React = require('react-native');
var FormatTime = require('minutes-seconds-milliseconds');
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null,
      timerRunning: false
    }
  },
  render: function(){
    return <View style={styles.container}>

      <View style={styles.header}>{/* Timer and Buttons */}
        <View style={styles.timerWrapper}>{/* Timer */}
          <Text style={styles.timer}>
            {FormatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>{/* Buttons */}
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={styles.footer}>{/* Lap Value sections */}
        <Text>
          Lap Values
        </Text>
      </View>
    </View>
  },
  startStopButton: function(){

    var style = this.state.running ? styles.stopButton : styles.startButton;
    return <TouchableHighlight 
          underlayColor="gray"
          onPress={this.handleStartPress}
          style={[styles.button, style]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
  },
  lapButton: function(){
    return <View style={styles.button}>
        <Text>
          Lap
        </Text>
      </View>
  },
  handleStartPress: function() {

    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({
        running: false
      });

      return false;
    }
    var startTime = new Date();

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
      });
    }, 30);
    
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);