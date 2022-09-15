import { StyleSheet } from "react-native";

/*
    #0A1334 fonts
    #14202E switch
    #2D4356 buttons
    #89AAC3 bc
*/

export const BasicTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  bc: {
      backgroundColor: '#FFFAFA',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#2D4356'
  },
  header: {
      fontSize: 30,
      color: '#0A1334',
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 20,
  },
  input: {
      backgroundColor: '#D3D3D3',
      fontSize: 20,
      padding: 12,
      borderRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.50,
    color: '#FFFAFA',
  },
  subtitle: {
      fontSize: 20,
      color: '#0A1334',
      marginTop: 20,
      marginBottom: 10
  },
  toggleSwitch: {
      marginTop: 30,
  }, 
  radio: {
      marginTop: 20,
  }, 
  result: {
      fontSize: 30,
      color: '#0A1334',
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 30
  }
});

export const DarkTheme = StyleSheet.create({
  container: {
    ...BasicTheme.container
  },
  bc: {
      backgroundColor: '#89AAC3',
  },
  button: {
    ...BasicTheme.button
  },
  header: {
      ...BasicTheme.header
  },
  input: {
      ...BasicTheme.input,
      backgroundColor: '#FFFAFA'
  },
  text: {
    ...BasicTheme.text
  },
  subtitle: {
      ...BasicTheme.subtitle
  },
  toggleSwitch: {
    ...BasicTheme.toggleSwitch
  }, 
  radio: {
    ...BasicTheme.radio
  }, 
  result: {
      ...BasicTheme.result
  }
});


