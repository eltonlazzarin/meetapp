import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {format, parseISO, isBefore} from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';

import {Container, MeetupText, List} from './styles';

function Subscription({isFocused}) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('subscriptions');

        const data = response.data.map(meetup => ({
          subscriptionId: meetup.id,
          ...meetup.Meetup,
          past: isBefore(parseISO(meetup.Meetup.date), new Date()),
          defaultDate: meetup.Meetup.date,
          date: format(parseISO(meetup.Meetup.date), "MMMM dd',' 'at' HH'h'", {
            locale: enUS,
          }),
        }));

        setMeetups(data);
      } catch (error) {
        Alert.alert(
          'Search failed',
          'There was an error while searching meetups',
        );
      }
    }

    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused]);

  async function handleUnsubscribe(meetup) {
    try {
      const {subscriptionId} = meetup;
      const {id} = meetup;

      await api.delete(`/subscriptions/${subscriptionId}`);

      setMeetups(meetups.filter(item => item.id !== id));

      Alert.alert('Success!', 'Cancellation made');
    } catch (error) {
      Alert.alert(
        'Unsubscribe failed',
        'There was an error unsubscribing from meetup',
      );
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        {meetups.length === 0 ? (
          <MeetupText>You are not subscribed to any meetup</MeetupText>
        ) : (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <MeetupCard
                data={item}
                textButton="Unsubscribe"
                onHandle={() => handleUnsubscribe(item)}
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

Subscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Subscription.navigationOptions = {
  tabBarLabel: 'Subscriptions',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscription);
