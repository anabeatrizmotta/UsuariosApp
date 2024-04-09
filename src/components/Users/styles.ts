import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    flex: 1,
    // color: '#363F5F',
    color: '#FFF',
    fontSize: 18,
    marginLeft: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    width: 56,
    backgroundColor: '#E23C44',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  middle: {
    flex: 1,
    marginRight: 2,
    height: 80,
    backgroundColor: '#1F1E25',
    borderWidth: 1,
    borderColor: "#D2D5D9",
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  }
})

