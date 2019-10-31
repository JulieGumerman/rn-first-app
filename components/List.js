import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import data from "../data.js";

const List = () => {


    return (
       <FlatList 
        keyExtractor={pooch => pooch.id}
        data={data} 
        renderItem={({item}) => {
            return <Text>{item.name}</Text>
        }}/>
    );
}

export default List;