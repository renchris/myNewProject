import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

function ListingsScreen(props) {
  const getListingsApi = useApi(listingsApi.getListings);

  const [refreshed, setRefreshed] = useState(null);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const randomizeData = () => {
    const data = getListingsApi.data;
    recursion(data, 0);
    setRefreshed((refreshed + 1) % 2);
  };

  const recursion = (data, count) => {
    const remainingSelections = data.length - 1 - count;

    if (remainingSelections == 0) return;

    const randomSelection = Math.floor(Math.random() * remainingSelections);

    const temp = data[remainingSelections];
    data[remainingSelections] = data[randomSelection];
    data[randomSelection] = temp;

    setImmediate(() => recursion(data, count + 1));
  };

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <Text style={styles.header}>Photo List App</Text>
      <FlatList
        contentContainerStyle={{ padding: 50 }}
        horizontal
        data={getListingsApi.data}
        extraData={refreshed}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"Item #" + item.id}
            imageURL={item.url}
          />
        )}
      />
      <AppButton title="Randomize" onPress={randomizeData} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  header: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
    paddingTop: 40,
  },
});

export default ListingsScreen;
