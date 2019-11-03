import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Image,
  Content,
  Info,
  InfoText,
  Title,
  CardButton,
} from './styles';

export default function MeetupCard({data, textButton, onHandle}) {
  return (
    <Container past={data.past}>
      {data.file.url ? (
        <Image
          source={{
            uri: data.file.url,
          }}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={{
            uri:
              'https://www.e-commerce.org.br/wp-content/uploads/2016/05/palestras-motivacionais.jpg',
          }}
          resizeMode="cover"
        />
      )}

      <Content>
        <Info>
          <Title>{data.title}</Title>
        </Info>
        <Info>
          <Icon name="event" size={14} color="#999" />
          <InfoText>{data.date}</InfoText>
        </Info>
        <Info>
          <Icon name="place" size={14} color="#999" />
          <InfoText>{data.location}</InfoText>
        </Info>
        <Info>
          <Icon name="person" size={14} color="#999" />
          <InfoText>Organizer: {data.User.name}</InfoText>
        </Info>

        <CardButton onPress={onHandle}>{textButton}</CardButton>
      </Content>
    </Container>
  );
}

MeetupCard.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    past: PropTypes.bool.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  textButton: PropTypes.string.isRequired,
  onHandle: PropTypes.func,
};

MeetupCard.defaultProps = {
  onHandle: () => {},
};
