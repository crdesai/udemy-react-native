// Import the libraries we need
var React = require('react-native');
var Moment = require('moment');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');


// Create a React component
var Weekdays = React.createClass({
  render: function() {
  	return <View style={styles.container}>
  		
  		{this.renderDay()}
  	</View>
  },
  renderDay: function() {
  	var dayItems = [];
  	for(var i=0; i<7; i++) {
  		var day = Moment().add(i, 'days').format('dddd');
  		dayItems.push([
  			<DayItem day={day} key={day} daysUntil={i} />
  		]);
  	}
  	return dayItems;
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
