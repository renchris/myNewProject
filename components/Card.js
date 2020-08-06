import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";

function Card({ title, subTitle, imageURL }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} uri={imageURL} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: colors.primary,
    shadowOffset: { width: 10, height: 50 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
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
