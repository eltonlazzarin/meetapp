export function fetchMeetupRequest() {
  return {
    type: '@meetup/FETCH_MEETUPS_REQUEST',
  };
}

export function fetchMeetupSuccess(meetups) {
  return {
    type: '@meetup/FETCH_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function failureMeetup() {
  return {
    type: '@meetup/FAILURE',
  };
}

export function newMeetupRequest(file_id, title, description, date, location) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { file_id, title, description, date, location },
  };
}

export function newMeetupSuccess() {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: { id },
  };
}

export function cancelMeetupSuccess() {
  return {
    type: '@meetup/CANCEL_MEETUP_SUCCESS',
  };
}

export function editMeetupRequest(
  id,
  file_id,
  title,
  description,
  date,
  location
) {
  return {
    type: '@meetup/EDIT_MEETUP_REQUEST',
    payload: { id, file_id, title, description, date, location },
  };
}

export function editMeetupSuccess() {
  return {
    type: '@meetup/EDIT_MEETUP_SUCCESS',
  };
}
