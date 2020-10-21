import React from "react";
import Map from "../../components/map";
import { View, StyleSheet, Text} from "react-native";


const Main = () => {
    return <View style={styles.container}>
                <Map />
            </View>
};

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomMenu: {
        height: 50,
        width: 380,
        backgroundColor: '#377DFC',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    }
  });