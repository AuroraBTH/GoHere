import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, ActivityIndicator, TextInput, Button, Platform, TouchableHighlight } from 'react-native';
import Colors from '../../constants/Colors';
import { Icon } from 'expo';

export default class CurrencyStructure extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            firstValue: '1',
            secondValue: '1',
            sekValue: 0,
            sum: 0,
            currencyDate: 2000,
            currentCurrency: "SEK",
            baseCurr: "",
        }
    }

    componentDidMount() {
        return fetch('https://api.exchangeratesapi.io/latest?base=EUR')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataEur: responseJson,
                        currencyDate: responseJson.date,
                        firstValue: responseJson.rates.SEK,
                        baseCurr: responseJson.base,
                    });
            }).then(() => {
                fetch('https://api.exchangeratesapi.io/latest?base=SEK')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSek: responseJson,
                    });
            })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    calculateSum = () => {
      const { firstValue, secondValue } = this.state;

        this.setState({
            sum: Number(firstValue) * Number(secondValue)
        });
    }

    changeCurrency = () => {
        const { currencyDate } = this.state;

        if (this.state.currentCurrency === "EUR") {
            this.setState({
                currentCurrency: "SEK"
            })
        } else if (this.state.currentCurrency === "SEK") {
            this.setState({
                currentCurrency: "EUR"
            })
        }

        if (this.state.currentCurrency === "EUR") {
            this.setState({
                baseCurr: this.state.dataEur.base,
                currencyDate: this.state.dataEur.date,
                firstValue: this.state.dataEur.rates.SEK
            })
        } else if (this.state.currentCurrency === "SEK") {
            this.setState({
                baseCurr: this.state.dataSek.base,
                currencyDate: this.state.dataSek.date,
                firstValue: this.state.dataSek.rates.EUR
            })
        }
    }

    render() {
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 200}}>
              <ActivityIndicator/>
            </View>
          )
        }

        return (
            <View style={styles.currencyScreenContainer}>
                <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
                    <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 10}}>Currency Converter</Text>
                </View>
                <Text style={styles.currencyDate}>
                    Currency date {this.state.currencyDate}
                </Text>

                <Text style={styles.currencyText}>
                    From: {this.state.baseCurr}
                    {"\n"}
                    To: {this.state.currentCurrency} ({this.state.firstValue})
                </Text>

                <TextInput
                    keyboardType={"number-pad"}
                    style={[styles.currencyInput, styles.currencySum]}
                    placeholder="1"
                    onChangeText={(secondValue) => this.setState({secondValue})}
                    returnKeyType="done"
                />

                <TouchableHighlight
                    style={{width: 40, alignSelf: 'center'}}
                    onPress={this.changeCurrency}
                    underlayColor={Colors.tintColor}
                    >
                    <Icon.Ionicons
                        name={Platform.OS === 'ios' ? 'ios-repeat' : 'md-repeat'}
                        size={40}
                        style={{textAlign: 'center'}}
                    />
                </TouchableHighlight>

                <TextInput
                    style={[styles.currencyInput, {backgroundColor: '#f1f1f1'}]}
                    placeholder={`${this.state.sum} ${this.state.currentCurrency}`}
                    placeholderTextColor='black'
                    editable={false}
                />

                <TouchableHighlight style={styles.buttons}>
                    <Button
                        onPress={this.calculateSum}
                        title="Convert"
                        color={Colors.stone}
                        accessibilityLabel="Convert currency"
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    currencyScreenContainer: {
        flex: 1,
        margin: 10,
    },
    currencyDate: {
        marginTop: 10,
        marginBottom: 10,
    },
    currencyText: {
        fontSize: 18,
        marginBottom: 10,
    },
    currencyInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 5,
        marginTop: Platform.OS === 'ios' ? 0 : 10,
        marginBottom: Platform.OS === 'ios' ? 0 : 10,
    },
    currencySum: {
        marginBottom: Platform.OS === 'ios' ? 10 : 10,
    },
    buttons: {
        width: 150,
        alignSelf: 'center',
        marginTop: 10,
    },
});
