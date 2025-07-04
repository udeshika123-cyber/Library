import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView.jsx";
import ThemedLogo from "../components/ThemedLogo.jsx";
import Spacer from "../components/Spacer.jsx";
import ThemedText from "../components/ThemedText.jsx";
import { ImageBackground } from "react-native";
import { useBooks } from "../hooks/useBooks";

const transparentBg = require("../assets/img/transparentbg.webp");

const Home = () => {
  const { likedBooks } = useBooks();
  return (
    <ThemedView style={styles.container}>
      <ImageBackground
        source={transparentBg}
        style={styles.coverImage}
        imageStyle={{ opacity: 0.3 }}
        resizeMode="cover"
      >
        {/* Everything you want on top of the background goes inside here */}
        <ThemedLogo />
        <Spacer height={20} />
        <View style={styles.overlay}>
          <ThemedText style={styles.title} title={true}>
            Hello Everyone nice to meet you
          </ThemedText>
          <Spacer height={10} />
          <ThemedText
            style={{ color: "purple", fontSize: 23, fontWeight: "bold" }}
          >
            Reading list item
          </ThemedText>
          <Spacer />
          <Link href="/login" style={styles.link}>
            <ThemedText style={{ color: "#fff" }}>Login</ThemedText>
          </Link>
          <Link href="/reg" style={styles.link}>
            <ThemedText style={{ color: "#fff" }}>Register</ThemedText>
          </Link>
          <Link href="/profile" style={styles.link}>
            <ThemedText style={{ color: "#fff" }}>Profile</ThemedText>
          </Link>

          {/* <Text>❤️ You have {likedBooks.length} favorite books!</Text> */}
        </View>
      </ImageBackground>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    flex: 1,
    width: "100%",
    height: 1100,
    justifyContent: "center", // vertically center overlay content
    alignItems: "center", // horizontally center overlay content
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)", // optional, for better text visibility
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    fontSize: 20,
    color: "black",
  },
});
export default Home;
