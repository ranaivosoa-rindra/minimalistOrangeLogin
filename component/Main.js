import { Dimensions, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-elements/dist/icons/Icon';
import { LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

export default function Main(){
    const [activeTab, setActiveTab] = useState('Login');

    function switchTab(){
        if(activeTab === "Login"){
            setActiveTab("Register");
        }else{
            setActiveTab("Login")
        }
    }

    function Login(){
        const [loginPassword, setLoginPassword] = useState(true);

        return(
        <View>
            <View style = {styles.inputsContainer}>
                <View style = {styles.inputsView}>
                    <Icon
                        name = "envelope"
                        type = "font-awesome"
                        size = {26}
                        color = {"#fff"}
                        style = {{paddingTop: 10}}
                    />
                    <View style = {styles.singleInput}>
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor={"#EFCDC6"}
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            autoCapitalize={'none'}
                            style = {styles.tInput}
                        />
                    </View>
                </View>
                <View style = {styles.line}></View>
                <View style = {[styles.inputsView, {marginTop: 15}]}>
                    <Icon
                        name = "key"
                        type = "font-awesome"
                        size = {26}
                        color = {"#fff"}
                        style = {{paddingTop: 10}}
                    />
                    <View style = {styles.singleInput}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={"#EFCDC6"}
                            secureTextEntry = {loginPassword}
                            textContentType='password'
                            autoCapitalize={'none'}
                            style = {styles.tInput}
                        />                        
                    </View>
                    <TouchableOpacity
                        onPress={() => {setLoginPassword(!loginPassword)}}
                        style = {{position: "absolute", right:0}}
                    >
                        <Icon
                            name = "eye"
                            type = "font-awesome"
                            size = {26}
                            color = {"#fff"}
                            style = {{paddingTop: 10}}
                        />
                    </TouchableOpacity>
                </View>
                <View style = {styles.line}></View>
            </View>
            <View style = {styles.buttonView}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress={() => {console.log("Login button pressed")}}
                >
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.forgotPassView}>
                <TouchableOpacity
                    onPress={() => {console.log("Forgot password text clicked!")}}
                >
                    <Text style = {styles.forgotPassText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.bubbles}>
                <TouchableOpacity
                    style = {styles.bubble}
                    onPress={() => console.log("Google account")}
                >
                    <Icon
                        name = "google"
                        type = "font-awesome"
                        size = {25}
                        color = {"#F16529"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.bubble}
                    onPress={() => console.log("Facebook account")}
                >
                    <Icon
                        name = "facebook"
                        type = "font-awesome"
                        size = {25}
                        color = {"#F16529"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.bubble}
                    onPress={() => console.log("Apple account")}
                >
                    <Icon
                        name = "apple"
                        type = "font-awesome"
                        size = {25}
                        color = {"#F16529"}
                    />
                </TouchableOpacity>
            </View>
        </View>
        );
    }

    function Register(){
        const [registerPassword, setRegisterPassword] = useState(true)
        return(
            <View style = {styles.reg}>
                {/* <Text>
                    Hello Register
                </Text> */}
                <View style = {styles.inputsContainer}>
                    <View style = {styles.inputsView}>
                        <Icon
                            name = "user"
                            type = 'font-awesome'
                            size = {25}
                            color = {"#fff"}
                            style = {{paddingTop: 10}}
                        />
                        <View style = {styles.singleInput}>
                            <TextInput
                                placeholder='Full Name'
                                keyboardType='default'
                                placeholderTextColor={"#EFCDC6"}
                                style = {styles.tInput}
                            />
                        </View>
                    </View>
                    <View style = {styles.line}></View>
                    <View style = {[styles.inputsView, {marginTop: 10}]}>
                        <Icon
                            name = "envelope"
                            type = 'font-awesome'
                            size = {20}
                            color = {"#fff"}
                            style = {{paddingTop: 13}}
                        />
                        <View style = {styles.singleInput}>
                            <TextInput
                                placeholder='Email'
                                textContentType='emailAddress'
                                autoCapitalize={'none'}
                                placeholderTextColor={"#EFCDC6"}
                                style = {styles.tInput}
                            />
                        </View>
                    </View>
                    <View style = {styles.line}></View>
                    <View style = {[styles.inputsView, {marginTop: 10}]}>
                        <Icon
                            name = "phone"
                            type = 'font-awesome'
                            size = {25}
                            color = {"#fff"}
                            style = {{paddingTop: 10}}
                        />
                        <View style = {styles.singleInput}>
                            <TextInput
                                placeholder='Phone'
                                keyboardType='numeric'
                                placeholderTextColor={"#EFCDC6"}
                                style = {styles.tInput}
                            />
                        </View>
                    </View>
                    <View style = {styles.line}></View>
                    <View style = {[styles.inputsView, {marginTop: 10}]}>
                        <Icon
                            name = "key"
                            type = 'font-awesome'
                            size = {25}
                            color = {"#fff"}
                            style = {{paddingTop: 10}}
                        />
                        <View style = {styles.singleInput}>
                            <TextInput
                                placeholder='Password'
                                secureTextEntry = {registerPassword}
                                textContentType='password'
                                placeholderTextColor={"#EFCDC6"}
                                style = {styles.tInput}
                            />
                        </View>
                        <TouchableOpacity
                            style = {{position: "absolute", right: 0}}
                            onPress={() => {setRegisterPassword(!registerPassword)}}
                        >
                            <Icon
                                name = 'eye'
                                type = "font-awesome"
                                size = {25}
                                color = {'#fff'}
                                style = {{paddingTop: 10}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.line}></View>
                </View>
                <View style = {styles.buttonView}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={() => {console.log("Register button pressed")}}
                    >
                        <Text style = {styles.buttonText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.otherRegistration}>
                    <View style = {styles.otherRegView}>
                        <Text style = {styles.otherRegText}>
                            Or Register With
                        </Text>
                    </View>
                    <View style = {styles.regBubbles}>
                    <TouchableOpacity
                            style = {styles.bubble}
                            onPress={() => console.log("Registering with google")}
                        >
                            <Icon
                                name = 'google'
                                type = 'font-awesome'
                                size = {25}
                                color = {"#F16529"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.bubble}
                            onPress={() => console.log("Registering with facebook")}
                        >
                            <Icon
                                name = 'facebook'
                                type = 'font-awesome'
                                size = {25}
                                color = {"#F16529"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.bubble}
                            onPress={() => console.log("Registering with apple")}
                        >
                            <Icon
                                name = 'apple'
                                type = 'font-awesome'
                                size = {25}
                                color = {"#F16529"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return(
        <LinearGradient
            colors={["#E54E26","#EF6129"]}
            style = {styles.linearGradient}
        >
        <TouchableWithoutFeedback
            onPress={() => {Keyboard.dismiss()}}
        >
            <View style={styles.container}>
                {/* <Text>Hello app!</Text>
                <Icon
                    name = 'envelope'
                    type = 'font-awesome'
                    size = {30}
                /> */}
                <View style = {styles.allContainer}>
                    <View style = {styles.welcomeText}>
                        <Text style = {styles.wbText}>
                            {activeTab === "Login"? "Welcome Back":"Register Now"}
                        </Text>
                    </View>
                    <View style = {styles.containerAllInputs}>
                        <View style = {styles.logRegText}>
                            <TouchableOpacity
                                style = {{
                                    borderBottomWidth: activeTab == "Login"? 4:0,
                                    borderBottomColor: "#fff",
                                    paddingHorizontal: 3,
                                    marginRight: 5
                                }}
                                onPress={() => {switchTab()}}
                            >
                                <Text style = {styles.lrText}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {{
                                    borderBottomWidth: activeTab == "Register"? 4:0,
                                    borderBottomColor: "#fff",
                                    paddingHorizontal: 3,
                                    marginRight: 5
                                }}
                                onPress={() => {switchTab()}}
                            >
                                <Text style = {styles.lrText}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {activeTab === "Login"? <Login/> : <Register/> }
                </View>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
            </View>
        </TouchableWithoutFeedback>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight
    },
    linearGradient: {
        position:"absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    allContainer: {
        height: "80%",
        // backgroundColor: "#fff"
    },
    welcomeText: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wbText: {
        color: "#fff",
        fontWeight: 'normal',
        fontSize: 40,
    },
    containerAllInputs: {
        marginTop: 20
    },
    logRegText: {
        flexDirection: "row",
        marginLeft: 15
    },
    lrText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginRight: 20,
        marginLeft: 15
    },
    inputsContainer: {
        marginTop: 20,
        marginHorizontal: 18
    },
    inputsView: {
        flexDirection: "row",
        paddingLeft: 2,
    },
    tInput: {
        paddingVertical: 10,
        fontSize: 20,
        color: "#fff"
    },
    singleInput: {
        marginLeft: 13
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#fff"
    },
    buttonView: {
        marginTop: 13,
    },
    button: {
        backgroundColor: "#FAFAFA",
        marginHorizontal: 18,
        paddingVertical: 14,
        alignItems: "center",
        shadowColor: "#171717",
        shadowRadius: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        elevation: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#E65731"
    },
    forgotPassView: {
        marginTop: 25,
        alignItems: "flex-end"
    },
    forgotPassText: {
        paddingRight: 18,
        fontSize: 23,
        fontWeight: "bold",
        color: "#fff"
    },
    bubbles: {
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 102
    },
    bubble: {
        height: 50,
        width: 50,
        borderRadius: 1000,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    otherRegistration: {
        marginTop: 40,
        marginLeft: 15
    },
    otherRegView: {
        marginBottom: 17
    },  
    otherRegText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    regBubbles: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 190
    }
  });