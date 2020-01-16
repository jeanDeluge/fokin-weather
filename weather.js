import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
     
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title : ["rainy"],
      subtitle : ["prepare your umbrella"]
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
      iconName: "",
      gradient: []
    },
    Haze: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Just don't go outside."
    }
  };
export default function Weather({temp , condition}){
    return (
                <LinearGradient colors={weatherOptions[condition].gradient} style={style.container}>
                    <StatusBar barStyle="dark-content" />
                    <View style ={style.halfContainer}>
                        <MaterialCommunityIcons size={95} name={weatherOptions[condition].iconName} color="white" />
                        <Text style={style.temp}>{temp}˚</Text>
                    </View>
                    <View style={{...style.halfContainer, ...style.textContainer}}>
                        <Text style={style.title}>{weatherOptions[condition].title}</Text>
                        <Text style={style.subtitle}>{weatherOptions[condition].subtitle}</Text>
                    </View>
                </LinearGradient>
            
     );
}
Weather.propTypes ={
    temp: PropTypes.number.isRequired,
     condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const style = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:"center",
        alignItems:"center"
    },
    halfContainer:{
        flex :1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp : {
        fontSize: 50,
        color: "white"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight:"300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});