import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { Platform } from "react-native";

import colors from "../config/colors";

function Card({ title, subTitle, imageURL }) {
  return (
    <View style={styles.shadow}>
      <View style={styles.card}>
        <Image style={styles.image} uri={imageURL} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      android: {
        overflow: "hidden",
      },
      ios: {
        overflow: "visible",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowRadius: 10,
      },
    }),
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 25,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: colors.primary,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    padding: 20,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -20 }],
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
    padding: 15,
  },
  title: {
    textAlign: "center",
    transform: [{ rotate: "-45deg" }],
    color: colors.white,
  },
});

export default Card;
