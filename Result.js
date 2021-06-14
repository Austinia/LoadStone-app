import React from "react";
import {StyleSheet, View, FlatList, Text, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Result({searchname, charlist}){
    const renderItem = ({item}) => (
        <View style={styles.flatstrec}>
            <Image style={styles.tinylogo} source={{url:item.Avatar}}></Image>
            <View style={styles.flatview}>
                <Text style={styles.flattext}>{item.Name}</Text>
                <View style={styles.flatstrec}>
                    <Text style={styles.small1}>{item.Server}</Text>
                    <Text style={styles.small2}>{item.Lang}</Text>
                </View>
            </View>
        </View>

    )
    return (
        <LinearGradient
        colors={["#000000","#434343"]}
        style={styles.container}>
                <FlatList style={styles.Flatlist} data={charlist} renderItem={renderItem} keyExtractor={item => item.ID} />
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    Text: {
        flex:1,
        color: "white",
        alignItems: "center",
        fontSize: 50,
        marginTop: 100,
    },
    Flatlist: {
        flex:1,
        width:350,
        backgroundColor: "black",
        marginBottom: 50,
        marginTop:50
    },
    flattext: {
        color: "white",
        paddingLeft: 20,
        fontStyle: "italic",
        fontSize: 20,
        fontWeight: "400"
    },
    tinylogo: {
        width:100,
        height:100
    },
    flatstrec: {
        flex:1,
        flexDirection: "row"
    },
    flatview: {
        flex:1,
        flexDirection: "column"
    },
    small1: {
        flex:2,
        color: "white",
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 13

    },
    small2: {
        flex:1,
        color: "white",
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 20
    }

})