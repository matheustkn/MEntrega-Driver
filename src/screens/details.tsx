import { MaterialIcons, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { formatMoney } from '@/utils/currency';

function MaterialIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  size?: number;
  color?: string;
}) {
  return <MaterialIcons {...props} />;
}

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome6>['name'];
  size?: number;
  color?: string;
}) {
  return <FontAwesome6 {...props} />;
}

function MaterialCommunityIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  size?: number;
  color?: string;
}) {
  return <MaterialCommunityIcons {...props} />;
}

const DATA = {
  km: 3,
  user: 'João',
  price: 10,
  tax: 1,
  from: 'Rua A, 123, João de Deus',
  to: 'Rua B, 456, João de Deus',
  message: 'Olá, tudo bem?',
  estimatedTime: '15 min',
  destinations: [
    { address: 'Rua A, Ouro Preto' },
    { address: 'Rua Joaquim Nabuco, Centro' },
    { address: 'Rua B, 456, João de Deus' },
    { address: 'Rua C, 789, Jardim Amazonas' },
    { address: 'Rua D, 1011, Quati' },
  ],
  needBag: true,
};

export default function Details({ route }: { route: any }) {
  const navigation = useNavigation();
  const { orderId } = route.params;

  return (
    <View>
      <View className={styles.container}>
        <View className={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcon name="arrow-back" size={32} />
          </TouchableOpacity>
        </View>
        <View className={styles.content}>
          <View className={styles.routes}>
            <Text className="text-2xl font-bold mb-2">Rotas</Text>
            <View className={styles.divider} />
            <View className={styles.routes__info}>
              <View className={styles.routes__address}>
                <View className={styles.routes__icon}>
                  <Icon name="circle-dot" size={11} />
                </View>
                <Text>{DATA.from}</Text>
              </View>
              {DATA.destinations.map((destination, index) => (
                <View key={index} className={styles.routes__address}>
                  <View className={styles.routes__icon}>
                    {index === DATA.destinations.length - 1 ? (
                      <MaterialCommunityIcon name="map-marker" size={20} />
                    ) : (
                      <MaterialCommunityIcon name="dots-vertical" size={20} />
                    )}
                  </View>
                  <Text>{destination.address}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className={styles.payment}>
            <Text className="text-2xm font-bold mb-2">Pagamento</Text>
            <View className={styles.divider} />
            <View className={styles.payment__info}>
              <Text>Valor da corrida</Text>
              <Text className="font-bold">{formatMoney(DATA.price)}</Text>
            </View>
            <View className={styles.payment__info}>
              <Text>Taxa do aplicativo</Text>
              <Text>{formatMoney(-DATA.tax)}</Text>
            </View>
            <View className={styles.payment__info}>
              <Text>Total</Text>
              <Text className="text-green-500 font-bold">{formatMoney(DATA.price - DATA.tax)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: 'bg-yellow-400 w-full h-full',
  header: 'w-full h-15 mt-10 flex-row justify-between items-center px-4',
  content: 'm-3 p-4',
  divider: 'w-full h-1 bg-gray-100',
  routes: 'text-2xl font-bold bg-white rounded-lg p-4 mb-4',
  routes__info: 'mt-2 text-lg flex-column',
  routes__address: 'flex-row items-center mb-2',
  routes__icon: 'w-8 flex justify-center items-center',
  payment: 'text-2xl font-bold bg-white rounded-lg p-4',
  payment__info: 'mt-2 text-lg flex-row justify-between',
};
