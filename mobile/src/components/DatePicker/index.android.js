import React, {useMemo} from 'react';
import {DatePickerAndroid} from 'react-native';
import {format} from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import {Container, DateButton, DateText} from './styles';

export default function DatePicker({date, onChange}) {
  const dateFormatted = useMemo(() => format(date, 'MMMM dd', {locale: enUS}), [
    date,
  ]);

  async function handleOpenPicker() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}
