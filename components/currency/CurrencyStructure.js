import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, ActivityIndicator, TextInput, Button } from 'react-native';
import Colors from '../../constants/Colors';

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
                <Text>
                    Currency date {this.state.currencyDate}
                </Text>

                <Text>
                    From: {this.state.baseCurr}
                    {"\n"}
                    To: {this.state.currentCurrency} ({this.state.firstValue})
                </Text>

                <Button
                  onPress={this.changeCurrency}
                  title="Flip currency"
                  color={Colors.stone}
                  accessibilityLabel="Flip currency"
                />

                <TextInput
                    keyboardType={"number-pad"}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="1"
                    onChangeText={(secondValue) => this.setState({secondValue})}
                    returnKeyType="done"
                />

                <Button
                  onPress={this.calculateSum}
                  title="Convert"
                  color={Colors.stone}
                  accessibilityLabel="Convert currency"
                />

                <Text>{`Sum ${this.state.sum}`}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    currencyScreenContainer: {
        flex: 1,
    }
});
