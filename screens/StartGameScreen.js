import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import Colors from "../util/colors";

export default function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInpuitHandler(enteredNumber){
        setEnteredNumber(enteredNumber);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = +enteredNumber;

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number netween 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }

        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                autoCorrect={false} 
                autoCapitalize="none" 
                keyboardType="number-pad" 
                maxLength={2}
                onChangeText={numberInpuitHandler}
                value={enteredNumber}
            />
           <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton> 
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});