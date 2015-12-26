// Import the libraries we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

var DayItem = React.createClass({
	render: function() {
		return <Text style={styles.day}>
			{this.props.day}
		</Text>
	}
});

var styles = StyleSheet.create({
	day: {
		color: '#0000ff',
		fontSize: 18
	}
});

module.exports = DayItem;
