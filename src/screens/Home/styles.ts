import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 24,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mt: {
    marginTop: 50
  },
  eventName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventTitle: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    height: 54,
    backgroundColor: '#1f1e21',
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    color: '#fff',
    flex: 1,
  },
  button: {
    backgroundColor: 'purple',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    marginTop: 36,
    marginBottom: 32,
  },
  listEmptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6b6b6b',
  },
  buttonReset: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 4,
  },
  buttonTextReset: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})