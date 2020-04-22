import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Autocomplete from '../components/organisms/Autocomplete/Autocomplete';
import { countryList } from '../common/mocks/autocompleteOptions';
import './styles.scss';

const stories = storiesOf('Autocomplete', module);
stories.addDecorator(withKnobs);


stories.add('common', () => (
  <div style={{width: '250px', textAlign: 'left'}}>
    <Autocomplete 
      options={countryList}
      showOptionsAfterNumbersOfLetters={number('Show results after typing number of letters', 3)}
      showMaxNumberOfOptions={number('Show max number of option', 50)}
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', "Search countries")}
      noOptionText={text('No option text', 'Countries no found')}
    />
  </div>
));
