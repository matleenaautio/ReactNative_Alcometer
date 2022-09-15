import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, Switch, View, Pressable } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input';
import { BasicTheme, DarkTheme } from './style/Styles';

export default function App() {

  //Calculation
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [bloodAlcohol, setBloodAlchol] = useState(0);

  //Alert
  const [ok, setOk] = useState(false);

  //Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDark, setDark] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const theme = isDark ? DarkTheme : BasicTheme;

  //Radio buttons
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const showAlert = () => {
    Alert.alert(
      "Hox!",
      "Syötä paino",
      [
        {
          text: "Ok",
          onPress: () => setOk(true)
        },
        {
          text: "Cancel",
          onPress: () => setOk(false)
        }
      ]
    );
  }

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * hours;

    if (weight === '') {
      showAlert();
    } else {
      if (gender === 'male') {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
    }  
      if (result > 0) {
        setBloodAlchol(result);
      } else {
        setBloodAlchol(0);
      }
    }

  return (
    <ScrollView style={theme.bc}>
      <View style={theme.container}>
        <View style={theme.toggleSwitch}>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            onChange={() => setDark (prev => !prev)}
            thumbColor={'#0A1334' }
            trackColor={{ true: '#FFFAFA' }}>
          </Switch>
        </View>
        <Text style={theme.header}>Alcometer</Text>
        <Text style={theme.subtitle}>Weight</Text>
        <TextInput
          style={theme.input}
          onChangeText={text => setWeight(text)}
          keyboardType={'number-pad'}
        />
        <View>
          <Text style={theme.subtitle}>Bottles</Text>
          <NumericInput 
            onChange={v => setBottles(v)}
            value={bottles}
            totalWidth={370}
            totalHeight={50}
            step={1}
            rounded
            rightButtonBackgroundColor={'#2D4356'}
            leftButtonBackgroundColor={'#2D4356'}
            borderColor={'#2D4356'}
            textColor={'#0A1334'}
            iconStyle={{color: '#FFFAFA'}}
          />
          <Text style={theme.subtitle}>Hours</Text>
          <NumericInput 
            onChange={v => setHours(v)}
            value={hours}
            totalWidth={370}
            totalHeight={50}
            step={1}
            rounded
            rightButtonBackgroundColor={'#2D4356'}
            leftButtonBackgroundColor={'#2D4356'}
            borderColor={'#2D4356'}
            textColor={'#0A1334'}
            iconStyle={{color: '#FFFAFA'}}
          />
        </View>
        <View>
          <RadioForm
            style={theme.radio}
            buttonColor={'#2D4356'}
            buttonSize={20}
            radio_props={genders}
            onPress={(value) => {setGender(value)}}>
          </RadioForm>
        </View>
        <View>
          <Text style={theme.result}>{bloodAlcohol.toFixed(2)}</Text>
          <Pressable style={theme.button} onPress={calculate}>
            <Text style={theme.text}>CALCULATE</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}


