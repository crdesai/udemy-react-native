/**
 * Created by chintan on 1/30/16.
 */
var React = require('react-native');

var {
    View,
    Text,
    TextInput,
    StyleSheet
    } = React;

var Button = require('../common/button');
var Parse = require('parse/react-native');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            errorMessage:''
        };
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
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
                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.confirmPassword}
                    onChangeText={this.onConfirmPasswordChangeHandler}
                    />
                <Text style={styles.errorLabel}>{this.state.errorMessage}</Text>
                <Button text={'Sign Up'} onPress={this.onPressHandler}/>
                <Button text={'I have an account..'} onPress={this.onSigninPressHandler}/>
            </View>
        )
    },
    onSigninPressHandler: function() {
      this.props.navigator.pop();
    },
    onPressHandler: function(){

        if(this.state.password !== this.state.confirmPassword) {
            return this.setState({errorMessage: "Please check your password"});
        }
        var user = new Parse.User();
        user.set("username", this.state.username);
        user.set("password", this.state.password);

        user.signUp(null, {
            success: (user) => {
                console.log(user);
                this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}])
            },
            error: (user, error) => {
                console.log(user, error);
                this.setState({errorMessage: error.message});
            }
        });
    },
    onUsernameChangeHandler: function(text) {
        this.setState({username: text});
    },
    onPasswordChangeHandler: function(text) {
        this.setState({password: text});
    },
    onConfirmPasswordChangeHandler: function(text) {
        this.setState({confirmPassword: text});
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