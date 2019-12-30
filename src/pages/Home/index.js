import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Divider } from 'semantic-ui-react';
import api from '../../services/api';

// Styled Components
import {
  Content,
  Card,
  Top,
  Title,
  CenterContent,
  Item,
  ItemLeft,
  ItemRight
} from '../../global/styles.global';
import {
  HomeContainer,
  Logo,
  TopContent,
  UserImage
} from './styles';

const Home = () => {
  const [user, setUser] = React.useState('');
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const storage = localStorage.getItem('users');

    if (storage !== null) {
      setUsers(JSON.parse(storage));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleInput = (e) => {
    setUser(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await api.get(`/users/${user}`);
      setUsers([...users, response.data]);
      localStorage.setItem('users', JSON.stringify([...users, response.data]));
      setUser('');
    } catch (error) {
      console.log(error.response);
    }
  }

  console.log('State: ', users);

  return (
    <Content>
      <HomeContainer>
        <Card>
          <Top>
            <Logo src="https://image.flaticon.com/icons/png/512/270/270798.png" />
            <TopContent>
              <Input
                placeholder='Buscar usúario...'
                onChange={handleInput}
                value={user}
                style={{
                  width: '50%'
                }}
              />
              <Button
                content="Buscar"
                color="blue"
                onClick={handleSubmit}
                style={{
                  marginLeft: 10
                }}
              />
            </TopContent>
          </Top>
          <Divider />
          <CenterContent>
            {users.map((item, key) => {
              console.log(item);
              return (
                <Item key={key}>
                  <ItemLeft>
                    <UserImage src={item.avatar_url} />
                    <Title>{item.login}</Title>
                  </ItemLeft>
                  <ItemRight>
                    <Link to={`/repositories/${item.login}`}>
                      <Button
                        content="Repositórios"
                        color="blue"
                      />
                    </Link>
                  </ItemRight>
                </Item>
              );
            })}
          </CenterContent>
        </Card>
      </HomeContainer>
    </Content>
  );
}

export default Home;
