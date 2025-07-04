import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

interface Group {
  id: string;
  name: string;
}

interface Props {
  groups: Group[];
  onAddExpense: (group: Group) => void;
}

export default function GroupsScreen({ groups, onAddExpense }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Button title="Nuova spesa" onPress={() => onAddExpense(item)} />
          </View>
        )}
      />
    </View>
  );
}
