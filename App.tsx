import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Selamat datang di Aplikasi Penjualan Tas Online</Text>
        <TextInput placeholder="Cari produk..." />
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://img.ws.mms.shopee.co.id/id-11134207-7r98x-luyb586xymuf00' }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/96/MTA-136640092/no-brand_no-brand_full01.jpg' }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/1/8daea222-669f-4b24-9cad-1450d862a721.png' }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/11/18/c9b335bb-eb2d-4632-9dde-c966c6dd6efa.jpg' }} />
        <Button title="Beli Sekarang" onPress={() => alert('Produk telah ditambahkan ke keranjang belanja')} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text>Latihan Props</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Button title="+" onPress={increment} />
          <View style={{ width: 10 }} /> {/* Spacer to add some space between buttons */}
          <Button title="-" onPress={decrement} />
        </View>
        <Text style={{ marginTop: 10 }}>{count}</Text>
      </View>
    </ScrollView>
  );
}