import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { styles } from './styles';
import { Users } from '../../components/Users';
import RNPickerSelect from 'react-native-picker-select';

type Props = {
  id: string;
  name: string;
  email: string;
  city: string;
};

export function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [users, setUsers] = useState<Props[]>([]);
  const [filterCity, setFilterCity] = useState<string | null>(null);

  function handleAddNewUser() {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      city.trim() === ''
    ) {
      return Alert.alert(
        'Usuário',
        'Favor preencha todos os campos',
      );
    }

    const existingUser = users.find(
      (user) => user.email === email,
    );
    if (existingUser) {
      return Alert.alert(
        'Usuário',
        'Email já cadastrado',
      );
    }

    const data = {
      id: String(new Date().getTime()),
      name,
      email,
      city,
    };

    setUsers([...users, data]);
    setName('');
    setEmail('');
    setCity('');
  }

  function handleRemoveUser(id: string) {
    Alert.alert('Remover', 'Remover o usuário', [
      {
        text: 'Sim',
        onPress: () =>
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== id),
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleShowTotals() {
    const totalUsers = users.length;
    const totalVR = users.filter(
      (user) => user.city === 'VR',
    ).length;
    const totalBM_PH = users.filter(
      (user) => user.city === 'BM' || user.city === 'PH',
    ).length;
    const totalNotBP = users.filter(
      (user) =>
        user.city !== 'BP' && user.city !== '',
    ).length;

    console.log('Total de usuários cadastrados:', totalUsers);
    console.log('Total de usuários que moram em VR:', totalVR);
    console.log('Total de usuários que moram em BM e PH:', totalBM_PH);
    console.log('Total de usuários que não moram em BP:', totalNotBP);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Cadastro de Usuários
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do usuário"
          placeholderTextColor="#6B6B6B"
          autoCapitalize="words"
          value={name}
          onChangeText={(value) => setName(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email do usuário"
          placeholderTextColor="#6B6B6B"
          autoCapitalize="none"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setCity(value)}
            items={[
              { label: 'VR', value: 'VR' },
              { label: 'BM', value: 'BM' },
              { label: 'BP', value: 'BP' },
              { label: 'RJ', value: 'RJ' },
              { label: 'SP', value: 'SP' },
              { label: 'PH', value: 'PH' },
            ]}
            style={{
              inputAndroid: styles.input,
              inputIOS: styles.input,
            }}
            value={city}
            placeholder={{
              label: 'Selecione a cidade',
              value: null,
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddNewUser}>
          <Text style={styles.buttonText}>Incluir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleShowTotals}>
        <Text style={styles.buttonText}>Total</Text>
      </TouchableOpacity>

      <FlatList
        data={filterCity ? users.filter((user) => user.city === filterCity) : users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Users
            data={item}
            onRemove={() => handleRemoveUser(item.id)}
          />
        )}
      />
    </View>
  );
}
