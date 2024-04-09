import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 40
  },
  eventName: {
    fontSize: 26,
    color: '#FDFCFE',
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    fontSize: 16,
    color: '#FFF'
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    borderRadius: 10,
    marginRight: 4,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#D2D5D9",
  },
  inputSelect: {
    color: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    height: 56,
    borderRadius: 5,
    backgroundColor: '#BF4E63',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 36,
    marginBottom: 22,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center'
  },
  buttonTotal: {
    height: 56,
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "#D2D5D9",
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  star: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  line: {
    flex: 1,
    height: 0.6,
    backgroundColor: '#FFF',
    marginLeft: 90
  },
  lineDetail: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#FFF',
  position: 'absolute',
  marginLeft: 165
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 5
  }
})