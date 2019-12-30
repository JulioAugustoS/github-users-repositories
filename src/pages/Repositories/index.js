import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Button, Dimmer, Loader, Icon } from 'semantic-ui-react';
import api from '../../services/api';

// Styled Components
import {
  Card,
  Content,
  Title,
  Top,
  CenterContent,
  Item,
  ItemLeft,
  ItemRight
} from '../../global/styles.global';

import {
  Avatar,
  BaseButton
} from './styles';

const Repositories = props => {
  const [user, setUser] = React.useState(null);
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
    fetchUser();
    fetchRespositories();
  }, []);

  const fetchUser = () => {
    const param = props.match.params.user;

    const storage = localStorage.getItem('users');
    const filterUser = JSON.parse(storage).filter(value => value.login === param);

    setUser(filterUser[0]);
  }

  console.log('Dados user: ', user);

  const fetchRespositories = async () => {
    const user = props.match.params.user;

    try {
      const response = await api.get(`/users/${user}/repos`);

      setRepositories(response.data);
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  }

  const _renderLoad = () => {
    return (
      <Dimmer active>
        <Loader content='Carregando...' />
      </Dimmer>
    );
  }

  return (
    <Content>
      <Card>
        <BaseButton>
          <Icon name='arrow left' color="blue" />
          <Link to="/">Voltar</Link>
        </BaseButton>
        <Top>
          {user !== null && (
            <Avatar src={user.avatar_url} />
          )}
          <Title>{`Repositórios de ${props.match.params.user}`}</Title>
        </Top>
        <Divider />
        <CenterContent>
          {repositories.length === 0
            ? _renderLoad()
            : repositories.map((item, key) => {
            return (
              <Item key={key}>
                <ItemLeft>
                <Title>{item.name}</Title>
                </ItemLeft>
                <ItemRight>
                  <Button
                    content="Detalhes"
                    color="blue"
                  />
                </ItemRight>
              </Item>
            );
          })}
        </CenterContent>
      </Card>
    </Content>
  );
}

export default Repositories;
