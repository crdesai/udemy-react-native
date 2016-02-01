var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
    } = React;
var Parse = require('parse/react-native');

module.exports= React.createClass({
    getInitialState() {
        return {
            user: null
        }
    },
    componentWillMount() {
        Parse.User.currentAsync()
            .then((user) => {this.setState({user: user});});
    },
    render() {
        if(!this.state.user) {
            return <Text> Loading ... </Text>;
        }
        return (
            <View style={styles.container}>
                <Text>Welcome Back {this.state.user.get('username')}!!</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});