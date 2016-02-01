/**
 * Created by chintan on 1/27/16.
 */
var React = require('react-native');
var {
    Navigator,
    StyleSheet
    } = React;
var Parse = require('parse/react-native');

var SignIn = require('./authentication/signin');
var SignUp = require('./authentication/signup');
var Tweets = require('./tweets/tweets');

var ROUTES = {
    signin: SignIn,
    signup: SignUp,
    tweets: Tweets
};

module.exports = React.createClass({
    componentWillMount: function(){
        Parse.initialize("nBXNb3p6r8GznkcWHKmhphs6vD7Gdt98G2bEBYSx", "P7NyGJ88WwYVz5tJtTOy86ghq2UIsGcqmjggAkJY");
    },
    renderScene: function(route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator} />;
    },
    render: function() {
        return (
           <Navigator
            style={styles.container}
            initialRoute={{name: 'signin'}}
            renderScene={this.renderScene}
            configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
            />
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex : 1
    }
});