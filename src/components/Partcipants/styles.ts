import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    marginBottom: 10,
    overflow: 'hidden',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    width: 250
  },
  delete: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#550514',
    width: 100,
    textAlign: 'center',
    padding: 15,
    borderRadius: 4,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  }
})