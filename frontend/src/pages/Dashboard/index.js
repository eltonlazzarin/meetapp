import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { fetchMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button, Meetup } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    async function loadMeetup() {
      try {
        dispatch(fetchMeetupRequest());
      } catch (error) {
        toast.error('There was an error loading meetups');
      }
    }

    loadMeetup();
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h2>My meetups</h2>
        <Link to="/meetup/new">
          <Button>
            <MdAddCircleOutline size={20} />
            New meetup
          </Button>
        </Link>
      </header>
      {meetups ? (
        <ul>
          {meetups.map(meetup => (
            <Link
              key={String(meetup.id)}
              to={meetup.past ? '/' : `/meetup/${meetup.id}/details`}
            >
              <Meetup past={meetup.past}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>
                    {meetup.past
                      ? 'This meetup has already occurred'
                      : meetup.date}
                  </span>
                  <MdChevronRight size={30} />
                </div>
              </Meetup>
            </Link>
          ))}
        </ul>
      ) : (
        <h3>You have no Meetup.</h3>
      )}
    </Container>
  );
}
