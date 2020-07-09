/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { select, text } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';

import {
  FilterPanel,
  FilterPanelAccordion,
  FilterPanelAccordionItem,
  FilterPanelCheckbox,
  FilterPanelCheckboxWithOverflowMenu,
  FilterPanelGroup,
  FilterPanelSearch,
} from '..';

import styles from './_index.scss';

export const Default = () => (
  <FilterPanel>
    <FilterPanelSearch labelText="Search">
      <FilterPanelGroup>
        <FilterPanelCheckbox
          id="filterPanelCheckbox"
          labelText="FilterPanelCheckbox"
        />
      </FilterPanelGroup>
    </FilterPanelSearch>
    <FilterPanelAccordion>
      <FilterPanelAccordionItem>
        <FilterPanelCheckboxWithOverflowMenu
          id="filterPanelCheckboxWithOverflowMenu"
          labelText="FilterPanelCheckboxWithOverflowMenu"
        />
      </FilterPanelAccordionItem>
    </FilterPanelAccordion>
  </FilterPanel>
);

export default {
  title: `${sectionTitle}/FilterPanel`,
  component: FilterPanel,
  parameters: { styles },
};
