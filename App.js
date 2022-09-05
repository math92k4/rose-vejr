import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, ImageBackground, Text, Image } from "react-native";
import LoadResult from "./src/LoadResult";
import * as Location from "expo-location";
// import { StatusBar } from "expo-status-bar";
import { getStatusBarHeight } from "react-native-status-bar-height";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import normalize from "./src/NormalizeSizes";

export default function App() {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [statusGranted, setStatusGranted] = useState(null);
  const [awaitingLocation, setAwaitingLocation] = useState(true);

  let url = "https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=" + latitude + "&lon=" + longitude;

  const [fontsLoaded] = useFonts({
    "Glegoo-Regular": require("./assets/fonts/Glegoo-Regular.ttf"),
    "Glegoo-Bold": require("./assets/fonts/Glegoo-Bold.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setStatusGranted(false);
        setAwaitingLocation(false);
      } else {
        // let location = await Location.getCurrentPositionAsync({});
        // setLatitude(location.coords.latitude);
        // setLongitude(location.coords.longitude);
        // setStatusGranted(true);
        // setAwaitingLocation(false);

        Location.installWebGeolocationPolyfill();
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(JSON.stringify(position.coords.latitude));
            setLongitude(JSON.stringify(position.coords.longitude));
            setStatusGranted(true);
            setAwaitingLocation(false);
          },
          { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        );
      }
    })();
  }, []);

  function content() {
    if (awaitingLocation) {
      return <ActivityIndicator />;
    } else if (!awaitingLocation && !statusGranted) {
      return (
        <>
          <View style={styles.noLocAcces}>
            <Text style={styles.paragraph}>Vi har ikke adgang til din lokation</Text>
            <Text style={styles.paragraph}>Rose-udsigten vises for København</Text>
          </View>
          <LoadResult url="https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=55.676098&lon=12.568337" />
        </>
      );
    } else {
      return <LoadResult url={url} />;
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.lineH}></View>
          <View style={styles.lineH}></View>
        </View>
        <View style={styles.bg}>
          {content()}
          <View style={styles.linesBg}>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
            <View style={styles.lineV}></View>
          </View>
        </View>
      </View>
    );
  }
}

const HEADER_HEIGHT = getStatusBarHeight(true) + 10;

const BROWN = "#40210A";
const RED = "#E5C0BA";
const WHITE = "#F2EBE5";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RED,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: RED,
    justifyContent: "flex-end",
  },
  lineH: {
    backgroundColor: BROWN,
    width: "100%",
    height: normalize(1),
    marginTop: normalize(2),
    opacity: 0.7,
  },

  noLocAcces: {
    position: "absolute",
    top: 10,
  },

  paragraph: {
    fontFamily: "Glegoo-Regular",
    color: "#ffffff",
  },

  bg: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },

  linesBg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  lineV: {
    height: "100%",
    width: normalize(1),
    backgroundColor: BROWN,
    marginLeft: normalize(15),
    opacity: 0.7,
  },
});
