import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
        />

        <button type="submit">
          {loading ? (
            'Saving...'
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              Save profile
            </>
          )}
        </button>
      </Form>
    </Container>
  );
}
