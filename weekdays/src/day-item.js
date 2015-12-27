// Import the libraries we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

var DayItem = React.createClass({
	render: function() {
		return <Text style={this.generateStyles()}>
			{this.props.day}
		</Text>
	},
	generateStyles: function(){
		return {
			color: this.color(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},
	color: function(){
		var opacity = 1 / this.props.daysUntil;
		return 'rgba(0,0,255, ' + opacity + ')';
	},
	fontWeight: function(){
		var weight = 7 - this.props.daysUntil;
		return (weight * 100).toString();
	},
	fontSize: function() {
		return 60 - 6* this.props.daysUntil;
	},
	lineHeight: function(){
		return 70 - 4 * this.props.daysUntil;
	}
});

module.exports = DayItem;
