import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import enUS from 'date-fns/locale/en-US';
import { format, parseISO, isBefore } from 'date-fns';
import api from '~/services/api';
import history from '~/services/history';
import {
  fetchMeetupSuccess,
  failureMeetup,
  newMeetupSuccess,
  cancelMeetupSuccess,
} from './actions';

export function* fetchMeetup() {
  try {
    const response = yield call(api.get, 'organizer');

    const meetups = response.data.map(meetup => ({
      ...meetup,
      past: isBefore(parseISO(meetup.date), new Date()),
      defaultDate: meetup.date,
      date: format(parseISO(meetup.date), "dd MMMM',' 'at' HH'h'", {
        locale: enUS,
      }),
    }));

    yield put(fetchMeetupSuccess(meetups));
  } catch (error) {
    toast.error(`Error listing meetups`);
    yield put(failureMeetup());
  }
}

export function* newMeetup({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload;

    yield call(api.post, 'meetups', {
      file_id,
      title,
      description,
      date,
      location,
    });
    toast.success('Successfully created Meetup');
    yield put(newMeetupSuccess());
    history.push('/dashboard');
  } catch (error) {
    toast.error('Failed to register meetup, please check your details');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);
    toast.success('Meetup successfully canceled');
    yield put(cancelMeetupSuccess());
    history.push('/dashboard');
  } catch (error) {
    toast.error('Failed to cancel meetup, please verify your details');
  }
}

export function* editMeetup({ payload }) {
  try {
    const { id, file_id, title, description, date, location } = payload;

    const meetup = {
      title,
      description,
      date,
      location,
      file_id,
    };

    yield call(api.put, `meetups/${id}`, meetup);
    toast.success('Successfully edited Meetup');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Failed to update, please verify your data');
  }
}

export default all([
  takeLatest('@meetup/FETCH_MEETUPS_REQUEST', fetchMeetup),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
]);
