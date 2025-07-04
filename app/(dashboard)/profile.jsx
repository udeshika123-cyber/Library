import { Image, StyleSheet, Text } from "react-native";
import { useUser } from "../../hooks/useUser";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

import profileimage from "../../assets/img/coverimage.webp";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView style={styles.container}>
      <Image source={profileimage} style={styles.coverImage} />
      <ThemedText title={true} style={styles.heading}>
        {user.email}
      </ThemedText>
      <Spacer />
      <ThemedText style={{ fontSize: 30, fontWeight: "bold", color: "purple" }}>
        "Time to start reading some books..."
      </ThemedText>
      <Spacer />
      <ThemedButton onPress={logout} style={styles.button}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
