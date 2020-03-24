import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '~/components/Repository';
import {Container, Title, Form, Input, Submit, List} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositórios..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'name',
            description: 'description',
            stars: 123,
            forks: 123,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Repository data={item}></Repository>}></List>
    </Container>
  );
}
