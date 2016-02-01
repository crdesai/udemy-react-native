/**
 * Created by chintan.
 */
var React = require('react-native');

var {
    View,
    Text,
    TextInput,
    StyleSheet
    } = React;

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
    getInitialState() {
        return {
            username: '',
            password: '',
            errorMessage:''
        };
    },
    render(){
        return (
            <View style={styles.container}>
                <Text>Sign In</Text>
                <Text style={styles.label}>Username: </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={this.onUsernameChangeHandler}
                    />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={this.onPasswordChangeHandler}
                    />
                <Text style={styles.errorLabel}>{this.state.errorMessage}</Text>
                <Button text={'Sign In'} onPress={this.onPressHandler} />
                <Button
                    text={'Need an Account?'}
                    onPress={this.signupPressHandler}
                    />
            </View>
        );
    },

    signupPressHandler(){
        this.props.navigator.push({name: 'signup'});
    },

    onPressHandler(){
        console.log('Press Handler called');
        Parse.User.logIn(this.state.username, this.state.password,{
            success: (user) => {
                console.log(user);
                this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}])
            },
            error: (data, error) => { this.setState({errorMessage: error.message}); }
        });
    },
    onUsernameChangeHandler(text) {
        this.setState({username: text});
    },
    onPasswordChangeHandler(text) {
        this.setState({password: text});
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    },
    errorLabel: {
        color: 'red'
    }
});