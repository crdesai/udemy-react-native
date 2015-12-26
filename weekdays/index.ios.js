// Import the libraries we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

// Create a React component
var Weekdays = React.createClass({
  render: function() {
  	return <View style={styles.container}>
  		<Text>
  			Days of the week:
  		</Text>
  		{this.renderDay()}
  	</View>
  },
  renderDay: function() {
  	return DAYS.map(function(day) {
  		return <DayItem day={day} key={day}/>
  	});
  }
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

// Show the react component on the screen
AppRegistry.registerComponent("weekdays", function() {
	return Weekdays;
});
