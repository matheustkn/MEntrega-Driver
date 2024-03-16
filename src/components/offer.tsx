import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { formatMoney } from '@/utils/currency';

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

type Props = {
  km: number;
  user: string;
  price: number;
  from: string;
  to: string;
  message?: string;
  estimatedTime: string;
  destinations?: number;
  needBag?: boolean;
  onPress?: () => void;
};

export default function Offer({
  km,
  user,
  price,
  from,
  to,
  message,
  estimatedTime,
  destinations,
  needBag,
  onPress,
}: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className={styles.container}>
        <View className={styles.header}>
          <Text className={styles.header__title}>
            (~{km}km) {user}
          </Text>
          <Text className={styles.payment}>{formatMoney(price)}</Text>
        </View>
        <View className={styles.route}>
          <View className={styles.route__info}>
            <View className={styles.route__icon}>
              <Icon name="circle-dot" />
            </View>
            <Text className={styles.route__title}>{from}</Text>
          </View>
          {destinations && (
            <View className={styles.destinations}>
              <MaterialCommunityIcon name="dots-vertical" size={13} color="black" />
              <Text className={styles.destinations__count}>+{destinations} endereços</Text>
            </View>
          )}
          <View className={styles.route__info}>
            <View className={styles.route__icon}>
              <Icon name="map-pin" />
            </View>
            <Text className={styles.route__title}>
              {to} <Text className="text-gray-500">- {estimatedTime}</Text>
            </Text>
          </View>
        </View>
        {message && (
          <View className={styles.message}>
            <View className={styles.message__icon}>
              <Icon name="message" />
            </View>
            <Text className={styles.message__box}>{message}</Text>
          </View>
        )}
        <View className={styles.tags}>
          {needBag && <Text className={styles.tags__text}>Precisa de bag</Text>}
        </View>
        <View className={styles.separator} />
        <View className={styles.details}>
          <Text className={styles.details__text}>Ver detalhes</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = {
  container: 'mx-4 bg-white rounded-lg shadow-md flex-column',
  header: 'flex-row items-center bg-yellow-300 p-2 rounded-t-lg justify-between',
  header__title: 'text-2l font-bold text-black',
  payment: 'text-black font-bold bg-white py-1 px-2 rounded-md',
  route: 'mt-2 justify-center',
  route__info: 'flex-row items-center',
  route__icon: 'w-8 flex justify-center items-center',
  route__title: 'pl-1 text-sm font-bold w-5/6',
  destinations: 'ml-2 text-gray-500 flex-row items-center',
  destinations__count: 'text-sm font-bold text-gray-500',
  message: 'mt-3 mb-2 flex-row',
  message__icon: 'w-8 flex items-center',
  message__box: 'ml-1 text-sm bg-gray-100 p-2 rounded-md w-5/6 max-h-20',
  tags: 'mb-2 flex-row items-center w-full flex-wrap',
  tags__text: 'ml-2 mt-2 text-sm font-bold text-white bg-red-600 p-1 px-2 rounded-md',
  separator: 'border-b-2 border-gray-100',
  details: 'py-2',
  details__text: 'mr-2 text-right text-blue-500 font-bold text-sm',
};
