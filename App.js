import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'

export default ProductsList = () => {
  const products = [
    {
      id: 1,
      name: 'Loacation 1',
      price: 'Built in 1937',
      images:[
        'https://www.bootdey.com/image/280x280/FF00FF/000000',
        'https://www.bootdey.com/image/280x280/EE82EE/000000',
        'https://www.bootdey.com/image/280x280/008080/000000',
        'https://www.bootdey.com/image/280x280/00FF7F/000000',
        'https://www.bootdey.com/image/280x280/87CEEB/000000',
        'https://www.bootdey.com/image/280x280/2E8B57/000000',
        'https://www.bootdey.com/image/280x280/FF00FF/000000',
      ]
    },
    {
      id: 2,
      name: 'Location 2',
      price: 'Built in 1972',
      images:[
        'https://www.bootdey.com/image/280x280/FF6347/000000',
        'https://www.bootdey.com/image/280x280/FF6347/000000',
        'https://www.bootdey.com/image/280x280/FF6347/000000',
        'https://www.bootdey.com/image/280x280/FF6347/000000',
        'https://www.bootdey.com/image/280x280/FF6347/000000',
        'https://www.bootdey.com/image/280x280/FF6347/000000',
        'https://www.bootdey.com/image/280x280/FF00FF/000000',
      ]
    },
    {
      id: 3,
      name: 'Location 3',
      price: 'Built in 1968',
      images:[
        'https://www.bootdey.com/image/280x280/FF00FF/000000',
        'https://www.bootdey.com/image/280x280/EE82EE/000000',
        'https://www.bootdey.com/image/280x280/008080/000000',
        'https://www.bootdey.com/image/280x280/00FF7F/000000',
        'https://www.bootdey.com/image/280x280/87CEEB/000000',
        'https://www.bootdey.com/image/280x280/2E8B57/000000',
        'https://www.bootdey.com/image/280x280/FF00FF/000000',
      ]
    },
  ]

  const handlePress = () => {}

  return (
    <FlatList
      data={products}
      renderItem={({ item:product }) => (
        <View style={styles.card} onPress={handlePress}>
          <View style={styles.cardContent}>
            <ScrollView horizontal style={styles.imagesContent}>
            {product.images.map((image, index) => (
              <TouchableOpacity onPress={() => {}} key={`${product.id}_${index}`}>
                <Image style={styles.productImage} source={{ uri: image }} />
              </TouchableOpacity>
            ))}
            </ScrollView>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>More Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#B0C4DE',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    backgroundColor: '#ededed',
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
})

