import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, ActivityIndicator, View } from "react-native";
import PickWeather from "./WeatherPicker";
import getTempType from "./tempPicker";
import normalize from "./NormalizeSizes";

const LoadResult = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [rain, setRain] = useState();
  const [wind, setWind] = useState();
  const [weatherId, setWeatherId] = useState();
  const url = props.url;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setTemp(json.properties.timeseries[0].data.instant.details.air_temperature);
        setWind(json.properties.timeseries[0].data.instant.details.wind_speed);
        setRain(json.properties.timeseries[0].data.next_1_hours.details.precipitation_amount);
        setWeatherId(json.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  });

  function getWine(wine) {
    if (wine == "rose") {
      const result = {
        heading: "Det er rosé-vejr",
        wineName: "Margalh Rosé",
        wineDesc: "Sydfransk og charmerende",
        winePrice: "89,00 DKK",
      };
      return result;
    }
    if (wine == "red") {
      const result = {
        heading: "Det er rødvins-vejr",
        wineName: "Tempranillo 2019",
        wineDesc: "Spansk, fræk og øko",
        winePrice: "89,00 DKK",
      };
      return result;
    }
    if (wine == "hvid") {
      const result = {
        heading: "Det er hvidvins-vejr",
        wineName: "Verdejo 2019",
        wineDesc: "Spansk, fræk og øko",
        winePrice: "89,00 DKK",
      };
      return result;
    } else {
      const result = {
        heading: "Det er champagne-vejr",
        wineName: "Rue de Sorbier NV",
        wineDesc: "Fransk og fortryldende",
        winePrice: "349,00 DKK",
      };
      return result;
    }
  }

  const GetWineImage = (props) => {
    if (props.wine == "rose") {
      return <Image style={styles.wineImg} source={require("../assets/rose.png")} />;
    } else if (props.wine == "red") {
      return <Image style={styles.wineImg} source={require("../assets/red.png")} />;
    } else if (props.wine == "hvid") {
      return <Image style={styles.wineImg} source={require("../assets/hvid.png")} />;
    } else {
      return <Image style={styles.wineImg} source={require("../assets/champagne.png")} />;
    }
  };

  function isItRoséWeather() {
    console.log(isLoading);
    const data = PickWeather(weatherId);
    const tempType = getTempType(temp);
    const wineData = getWine(data.wine[tempType]);

    return (
      <View style={styles.mainContent}>
        <View style={styles.headingContainer}>
          <View style={styles.outline}>
            <Text style={styles.heading}>{wineData.heading}</Text>
          </View>
        </View>

        <View style={styles.logoWrapper}>
          <View style={styles.logoContainer}>
            <View style={styles.logoOutline}>
              <Image style={styles.logo} source={{ uri: "https://nrkno.github.io/yr-weather-symbols/png/100/" + data.imgId + ".png" }} />
              <Text style={styles.logoTxt}>{temp}°</Text>
            </View>
          </View>

          <View style={styles.logoContainer}>
            <View style={styles.logoOutline}>
              <Image style={styles.logo} source={require("../assets/umbrella.png")} />
              <Text style={styles.logoTxt}>{rain} mm</Text>
            </View>
          </View>

          <View style={styles.logoContainer}>
            <View style={styles.logoOutline}>
              <Image style={styles.logo} source={require("../assets/wind.png")} />
              <Text style={styles.logoTxt}>{wind} m/s</Text>
            </View>
          </View>
        </View>

        <View style={styles.descContainer}>
          <View style={styles.outline}>
            <Text style={styles.heading2}>Prognosen</Text>
            <Text style={styles.paragraph}>{data.desc[tempType]}</Text>
          </View>
        </View>

        <View style={styles.wineContainer}>
          <View style={styles.wineOutline}>
            <Text style={styles.paragraph}>Vi anbefaler</Text>
            <Text style={styles.heading2}>{wineData.wineName}</Text>
            <GetWineImage wine={data.wine[tempType]} />
            <Text style={styles.paragraph}>{wineData.wineDesc}</Text>
            <Text style={styles.winePrice}>{wineData.winePrice}</Text>
          </View>
        </View>
      </View>
    );
  }

  return isLoading ? <ActivityIndicator /> : isItRoséWeather();
};

const BROWN = "#40210A";
const RED = "#E5C0BA";
const WHITE = "#F2EBE5";

const styles = StyleSheet.create({
  mainContent: {
    width: "92%",
  },
  headingContainer: {
    marginBottom: normalize(6),
    padding: normalize(2),
    backgroundColor: WHITE,
    marginHorizontal: normalize(3),
  },
  heading: {
    fontSize: normalize(20),
    marginVertical: normalize(3),
    color: BROWN,
    width: "100%",
    textAlign: "center",
    fontFamily: "Glegoo-Bold",
  },

  paragraph: {
    color: BROWN,
    fontFamily: "Glegoo-Regular",
    lineHeight: normalize(18),
  },

  winePrice: {
    color: BROWN,
    fontFamily: "Glegoo-Bold",
    fontSize: normalize(16),
  },

  wineImg: {
    width: "60%",
    height: undefined,
    aspectRatio: 1 / 1,
    marginBottom: normalize(7),
  },

  logoWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  logoContainer: {
    flex: 1,
    height: undefined,
    aspectRatio: 1 / 1,
    backgroundColor: WHITE,
    marginHorizontal: normalize(3),
    padding: normalize(2),
  },

  logoOutline: {
    width: "100%",
    height: "100%",
    borderWidth: normalize(1),
    borderColor: BROWN,
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: "70%",
    height: undefined,
    aspectRatio: 1 / 1,
  },

  logoTxt: {
    marginBottom: "10%",
    fontSize: normalize(15),
    color: BROWN,
    fontFamily: "Glegoo-Bold",
  },

  descContainer: {
    marginHorizontal: normalize(3),
    marginVertical: normalize(6),
    padding: normalize(2),
    backgroundColor: WHITE,
  },

  outline: {
    width: "100%",
    borderWidth: normalize(1),
    borderColor: BROWN,
    padding: normalize(10),
  },

  heading2: {
    color: BROWN,
    fontSize: normalize(17),
    marginBottom: 0,
    fontFamily: "Glegoo-Bold",
    lineHeight: normalize(23),
  },

  wineContainer: {
    padding: normalize(2),
    marginHorizontal: normalize(3),
    backgroundColor: WHITE,
  },
  wineOutline: {
    width: "100%",
    borderWidth: normalize(1),
    borderColor: BROWN,
    padding: normalize(10),
    alignItems: "center",
  },
});

export default LoadResult;
