/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import { settings } from 'carbon-components';
import React from 'react';

import { ComboButton, ComboButtonItem } from '..';

const { name } = ComboButtonItem;

describe(ComboButton.name, () => {
  it('displays the first action as the primary action', () => {
    const testId = 'testId';

    expect(
      render(
        <ComboButton>
          <ComboButtonItem data-testid={testId}>{name}</ComboButtonItem>
        </ComboButton>
      ).getByTestId(testId)
    ).toHaveClass(`${settings.prefix}--btn`);
  });

  it('displays subsequent actions as secondary actions', () => {
    const testId = 'testId';

    expect(
      render(
        <ComboButton>
          <ComboButtonItem>{name}</ComboButtonItem>
          <ComboButtonItem data-testid={testId}>{name}</ComboButtonItem>
        </ComboButton>
      ).queryByTestId(testId)
    ).not.toBeInTheDocument();
  });
});
