import React from "react";
import {View, Text, Image} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";

const Movie = ({title, year, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            <Image source={poster}
                style={{width: 400, height: 500}} />
            <Text>
                Movie:
                {title} {year}
                <FontAwesome6 name={icon_name} size={40} color={icon_color} />

            </Text>

        </View>
    );
};

export default Movie;