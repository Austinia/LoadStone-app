import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export default function Loading(){
    return (
        <LinearGradient
        colors={["#000000","#434343"]}
        style={styles.LinearGradient}>
            <Text style={styles.text}>로드스톤 통신 확인중...</Text>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
LinearGradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
},
text: {
    color: "white",
    fontSize:50
}
})
