import { useState } from 'react';
import { Text, View, ScrollView, Switch, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Offer from '@/components/offer';

const DATA = [
  {
    orderId: 1,
    km: 8,
    user: 'Restaurante Macaxeira',
    price: 15,
    from: 'R. Joaquim Barbosa Silva, 2-234 - COHAB Massangano',
    to: 'R. Seis, 40, João de Deus',
    message: 'vou precisar que você volte no estabelecimento para pegar a maquineta',
    estimatedTime: '15min',
    needBag: true,
    destinations: 5,
  },
  {
    orderId: 2,
    km: 2,
    user: 'Pizzaria do Zé',
    price: 5.7,
    from: 'R. Antônio de Souza, 123 - João de Deus',
    to: 'R. Vinte e Cinco, 255-9 - João de Deus',
    estimatedTime: '10min',
    destinations: 3,
  },
  {
    orderId: 3,
    km: 5,
    user: 'Restaurante da Maria',
    price: 10,
    from: 'R. Vinte e Cinco, 255-9 - João de Deus',
    to: 'R. Cel. Amorim, 217 - Centro',
    estimatedTime: '12min',
    destinations: 4,
  },
  {
    orderId: 4,
    km: 3,
    user: 'Pizzaria Bella Napoli',
    price: 7.5,
    from: 'R. Vinte e Cinco, 255-9 - João de Deus',
    to: 'R. Cel. Amorim, 217 - Centro',
    estimatedTime: '12min',
    destinations: 4,
  },
];

export default function Routes({ navigation }: { navigation: any }) {
  const [isActivated, setActivated] = useState(true);

  StatusBar.setBarStyle('dark-content', true);

  return (
    <SafeAreaView>
      <View className={styles.header}>
        <Text className={styles.header__title}>Ofertas</Text>
        <View className={styles.header__right}>
          <Text className={isActivated ? 'text-green-500 mr-2' : 'text-gray-500 mr-2'}>
            {isActivated ? 'Online' : 'Offline'}
          </Text>
          <Switch value={isActivated} onValueChange={setActivated} />
        </View>
      </View>
      {isActivated ? (
        <ScrollView
          className={styles.container}
          contentContainerStyle={{ paddingBottom: 75 }}
          showsVerticalScrollIndicator={false}>
          {DATA.map((offer) => (
            <View key={offer.orderId}>
              <Offer
                key={offer.orderId}
                onPress={() => {
                  navigation.navigate('Details', { orderId: offer.orderId });
                }}
                km={offer.km}
                user={offer.user}
                price={offer.price}
                from={offer.from}
                to={offer.to}
                message={offer.message}
                estimatedTime={offer.estimatedTime}
                needBag={offer.needBag}
                destinations={offer.destinations}
              />
              <View className="border-t border-gray-200 mt-4 mb-4" />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text className={styles.offline}>Ative o modo online para ver as ofertas</Text>
      )}
    </SafeAreaView>
  );
}

const styles = {
  header: 'content-around p-4 flex-row justify-between items-center',
  header__title: 'text-2xl font-bold',
  header__right: 'flex-row items-center space-x-2',
  offline: 'text-center text-white bg-red-500 p-2',
  container: 'w-full h-full',
};
