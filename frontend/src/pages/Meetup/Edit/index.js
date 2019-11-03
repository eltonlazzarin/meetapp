import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { zonedTimeToUtc } from 'date-fns-tz';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { editMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from '../styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required(),
  title: Yup.string().required('Enter meetup title'),
  description: Yup.string().required('Describe your meetup'),
  date: Yup.date().required('Enter a date'),
  location: Yup.string().required('Enter location'),
});

export default function Edit({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  const meetupFind = meetups.find(m => m.id === meetupId);

  const currentMeetup = {
    title: meetupFind.title,
    description: meetupFind.description,
    date: zonedTimeToUtc(meetupFind.defaultDate),
    location: meetupFind.location,
    file: {
      url: meetupFind.file.url,
      id: meetupFind.file.id,
      path: meetupFind.file.path,
    },
  };

  function handleSubmit({ file_id, title, description, date, location }) {
    dispatch(
      editMeetupRequest(meetupId, file_id, title, description, date, location)
    );
  }

  return (
    <Container>
      <Form schema={schema} initialData={currentMeetup} onSubmit={handleSubmit}>
        <ImageInput name="file" />

        <Input name="title" placeholder="Meetup title" />
        <Input name="description" placeholder="Full Description" multiline />
        <DatePicker name="date" placeholder="Meetup date" />
        <Input name="location" placeholder="Location" />

        <button type="submit">
          {loading ? (
            'Saving...'
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              Save meetup
            </>
          )}
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape().isRequired,
};
