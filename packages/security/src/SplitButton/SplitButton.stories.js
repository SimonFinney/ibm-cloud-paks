/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { sectionTitle } from '../../config';
import { SplitButton, SplitButtonItem } from '..';

import styles from './_split-button.scss';

export default {
  title: `${sectionTitle}/${SplitButton.name}`,
  component: SplitButton,
  subcomponents: {
    SplitButtonItem,
  },
  parameters: { styles },
};

export const Default = () => (
  <SplitButton>
    <SplitButtonItem>SplitButtonItem 1</SplitButtonItem>
    <SplitButtonItem>SplitButtonItem 2</SplitButtonItem>
    <SplitButtonItem>SplitButtonItem 3</SplitButtonItem>
  </SplitButton>
);
