import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput, View, Text, StyleSheet, Button} from 'react-native'
import Result from "./Result"
import axios from "axios";

export default class Searching extends React.Component {
    state={
        text:'',
        isDone: true,
        charlist: []
    };
    Processtext = async() => {
        const { data } = await axios.get(`https://xivapi.com/character/search?name=${this.state.text}`);
        this.setState({isDone:false, searchname:this.state.text, charlist:Object.values(data.Results)});
    };
    render(){
        const {isDone, searchname, charlist} = this.state;

        return isDone ? (<LinearGradient
        colors={["#000000","#434343"]}
        style={styles.container}>
            <View style={styles.UpperView}>
                <Text style={styles.UpperText}>누구를 찾으십니까?</Text>
                <Text style={styles.VanishText}>찾는 중 입니다...</Text>
            </View>
            <TextInput style={styles.SearchingView}
            onChangeText={text => this.setState({text})}
            value={this.state.text}></TextInput>
            <View style={styles.UnderView}>
                <View style={styles.btncontainer}>
                    <Button touchSoundDisabled="false" color="black" title="검색" onPress= {() => this.Processtext()}/>
                </View>
                <View style={styles.btnnoncontainer}>
                </View>
            </View>
        </LinearGradient>) : <Result searchname={searchname} isDone={isDone} charlist={charlist}/>;
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    UpperView: {
        flex: 4,
        // backgroundColor: "red"
        justifyContent: "center",
        alignItems: "center",
    },
    UpperText: {
        color: "white",
        fontSize: 40,
        marginTop:100,
        display: "flex"
    },
    VanishText:{
        color: "yellow",
        fontSize: 40,
        marginTop:100,
        display: "none"
    },
    SearchingView: {
        flex:1,
        backgroundColor: "white",
        borderBottomWidth:1,
        borderTopWidth:1,
        width: 350,
        height: 100,
        justifyContent: "center",
        alignSelf: "center"

    },
    UnderView: {
        flex:7,
        alignItems: "center",

    },
    btncontainer: {
        flex:1,
        alignSelf: "flex-end",
        backgroundColor: "yellow",
        marginTop: 30,
        marginRight: 15,
        paddingHorizontal: 25,
        paddingVertical:10
    },
    btnnoncontainer: {
        flex:9
    }
})