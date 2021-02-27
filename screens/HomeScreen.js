import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Icon, Text } from "react-native";

import FormButton from "../components/Forms/FormButton";
import useStatusBar from '../hooks/useStatusBar';
import { logout, firebase, x3 } from '../components/Firebase/firebase';

export default function HomeScreen() {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.bigman}>
      <View style={styles.container}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
      <View style={styles.add}>
        <TouchableOpacity
          hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            backgroundColor: "#fff",
            borderRadius: 50,
          }}
          onPress={() => {console.log(x3)}}
        >
          <Text style={{ fontSize: 30, fontFamily: "Arial", color: "#008080" }}>
            {" "}
            +{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection:"column-reverse",
    marginBottom: -12,
    alignContent:"flex-end",
  },
  bigman:{
    flex: 3,
  },
  add:{
    alignSelf:"flex-end",
    marginEnd:30,
    marginBottom:25,
  }
});
  