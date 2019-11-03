import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { newMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from '../styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required(),
  title: Yup.string().required('Enter meetup title'),
  description: Yup.string().required('Describe your meetup'),
  date: Yup.date().required('Enter a date'),
  location: Yup.string().required('Enter location'),
});

export default function New() {
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, date, location }) {
    dispatch(newMeetupRequest(file_id, title, description, date, location));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="file" />

        <Input name="title" placeholder="Enter meetup title" />
        <Input
          name="description"
          placeholder="Describe your meetup"
          multiline
        />
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
