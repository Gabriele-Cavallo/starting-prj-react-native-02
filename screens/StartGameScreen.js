import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";

import { useState } from "react";

import Colors from "../util/colors";
import Title from "../components/UI/Title";
import InstructionText from "../components/UI/InstructionText";

export default function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width,height } = useWindowDimensions();

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

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
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
            </Card>
        </View>
    );
};

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: "center"
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