import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface Props {
  onSave: (description: string, amount: number) => void;
}

export default function AddExpenseScreen({ onSave }: Props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="Descrizione"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 12, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Importo"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ marginBottom: 12, borderWidth: 1, padding: 8 }}
      />
      <Button title="Salva" onPress={() => onSave(description, parseFloat(amount))} />
    </View>
  );
}
