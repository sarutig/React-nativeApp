import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [productName, setProductName] = useState('');
  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    setProductList(products => [...products, productName]);
  };

  const addProductTitle = (productTitle) => {
    setProductName(productTitle);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Product title"
          style={styles.inputs}
          onChangeText={addProductTitle}
          value={productName}
        />
        <Button style={styles.addButton} title="Add title" onPress={addProduct} />
      </View>
      <View>
        {productList.map((item) => <Text style={styles.itemList} key={item}>{item}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  inputs: {
    marginVertical:10,
    marginHorizontal:10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  itemList: {
    marginVertical:10,
    marginHorizontal:10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  addButton: {
    marginVertical:10,
    marginHorizontal:10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  }
});