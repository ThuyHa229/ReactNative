import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
  const array = ["Mango", "Xoài", "Home", "Nhà", "City", "Thành phố","Banana","Chuối"];
  const [now, setNow] = useState(0);
  const [a, setA] = useState(true);

  const additionalWords = [...array];

  const [updateword, setUpdateword] = useState(additionalWords);

  const changetext = () => {
    if (a) {
      setNow(now + 1);
    } else {
      setNow(now - 1);
    }
    setA(!a);
  };
  const goback = () => {
    if (now % 2 == 0 && now != 0) {
      setNow(now - 2);
    } else if (now == 1) {
      setNow(now - 1);
    } else if (now > 3 || now == 3) {
      setNow(now - 3);
    } else if (now == 0) {
      setNow(0);
    }
    if (a == false) {
      setA(true);
    }
  };
  const next = () => {
    if (now % 2 == 1) {
      setNow(now + 1);
    } else if (now % 2 == 0 && now != updateword.length - 2) {
      setNow(now + 2);
    } else if (now == updateword.length - 2) {
      setNow(updateword.length - 2);
    } else if (now == updateword.length - 1) {
      setNow(updateword.length - 2);
    }
    if (a == false) {
      setA(true);
    }
  };
  const Reset = () => {
    setUpdateword(array);
  };

  const Delete = () => {
    if (updateword.length > 2) {
      const updatedArray = [...updateword.slice(0, -2)];
      setUpdateword(updatedArray);
      setNow(updatedArray.length - 2);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Play({updateword.length / 2} cards)</Text>
      </View>
      <View style={styles.viewcontent}>
        <Text style={styles.text2} onPress={changetext}>
          {updateword[now]}
        </Text>
      </View>
      <View style={styles.viewtbn}>
        <View style={styles.view1}>
          <Text style={styles.text1} onPress={goback}>
            Previous
          </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1} onPress={next}>
            Next
          </Text>
        </View>
      </View>
      <View style={styles.view3} onTouchStart={Delete}>
        <Text style={styles.text4}>Remove From Deck</Text>
      </View>
      <View style={styles.view4} onTouchStart={Reset}>
        <Text style={styles.text4}>Reset Deck</Text>
      </View>
      <View style={styles.viewicon}>
        <View style={styles.icon}>
          <Ionicons name="play-circle-outline" size={30} color="gray" />
          <Text>Play</Text>
        </View>
        <View style={styles.icon2}>
          <Ionicons name="cog-outline" size={30} color="gray" />
          <Text>Setting</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: 80,
  },
  text: {
    color: "black",
    fontSize: 18,
    marginTop: 50,
  },
  viewcontent: {
    display: "flex",
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 15,
    height: 450,
    width: 460,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3366",
  },
  text1: {
    fontSize: 16,
    color: "#FF4040",
  },
  text2: {
    color: "white",
    fontSize: 90,
  },
  text4: {
    fontSize: 21,
    color: "#FF4040",
  },
  viewtbn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view1: {
    marginTop: 20,
    marginLeft: 30,
    borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 2,
    width: 100,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    marginTop: 20,
    marginRight: 35,
    borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 2,
    width: 100,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    marginTop: 30,
    marginLeft: 25,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 7,
    width: "90%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  view4: {
    marginTop: 20,
    marginLeft: 25,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 7,
    width: "90%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  viewicon: {
    marginTop: 25,
    height: "100%",
    backgroundColor: "#F8F8FF",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 15,
    marginLeft: 100,
  },
  icon2: {
    marginTop: 15,
    marginRight: 100,
  },
});

export default Home;
