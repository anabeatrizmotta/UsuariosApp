import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: '#FFF',
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 5,
  },
  button: {
    width: 56,
    height: 80,
    backgroundColor: '#B74956',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  middle: {
    flex: 1,
    marginRight: 2,
    height: 80,
    backgroundColor: '#1F1E25',
    borderWidth: 1,
    borderColor: "#D2D5D9",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  }
})

