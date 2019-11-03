import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {format, parseISO, isBefore, subDays, addDays} from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import DatePicker from '~/components/DatePicker';
import MeetupCard from '~/components/MeetupCard';

import {
  Container,
  DateHeader,
  Button,
  MeetupText,
  MeetupList,
  Loading,
} from './styles';

function Dashboard({isFocused}) {
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('meetups', {
          params: {date},
        });

        const data = response.data.map(meetup => ({
          ...meetup,
          past: isBefore(parseISO(meetup.date), new Date()),
          defaultDate: meetup.date,
          date: format(parseISO(meetup.date), "MMMM dd',' 'at' HH'h'", {
            locale: enUS,
          }),
        }));

        setMeetups(data);
        setLoading(false);
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
  }, [date, isFocused]);

  async function handleSubscribe(id) {
    try {
      await api.post(`/meetups/${id}/subscriptions`);

      Alert.alert('Success!', 'Registration done');
    } catch (err) {
      Alert.alert(
        'Failed to subscribe',
        'There was an error subscribing for meetup',
      );
    }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function loadMore() {
    setLoading(true);

    const nextPage = page + 1;

    const response = await api.get('meetups', {
      params: {date, page: nextPage},
    });

    const data = response.data.map(meetup => ({
      ...meetup,
      past: isBefore(parseISO(meetup.date), new Date()),
      defaultDate: meetup.date,
      date: format(parseISO(meetup.date), "MMMM dd',' 'at' HH'h'", {
        locale: enUS,
      }),
    }));

    setMeetups([...meetups, ...data]);
    setPage(nextPage);
    setLoading(false);
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateHeader>
          <Button onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#FFF" />
          </Button>
          <DatePicker date={date} onChange={setDate} />
          <Button onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#FFF" />
          </Button>
        </DateHeader>

        {loading && <Loading />}

        {!loading &&
          (meetups.length ? (
            <MeetupList
              data={meetups}
              onEndReachedThreshold={0.2}
              onEndReached={meetups.length >= 10 ? loadMore : null}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <MeetupCard
                  data={item}
                  textButton="Register"
                  onHandle={() => handleSubscribe(item.id)}
                />
              )}
            />
          ) : (
            <MeetupText>No meetup for this day</MeetupText>
          ))}
      </Container>
    </Background>
  );
}

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
