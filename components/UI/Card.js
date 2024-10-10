import { StyleSheet, View } from "react-native";

import Colors from "../../util/colors";

export default function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});