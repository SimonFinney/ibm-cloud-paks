/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import sectionTitle from '../../../config';

import { DISPLAY_NAME } from '.';

import mdx from './DISPLAY_NAME.mdx';
import styles from './DISPLAY_NAME-story.scss';

const { name } = DISPLAY_NAME;

export default {
  title: `${sectionTitle}/${name}`,
  component: DISPLAY_NAME,
  parameters: {
    docs: {
      mdx,
    },
    styles,
  },
};

export const _Default = () => {
  return <DISPLAY_NAME>{name}</DISPLAY_NAME>;
};

_Default.story = {
  name,
};

export const Playground = (args) => {
  return <DISPLAY_NAME {...args} />;
};

// TODO: Args - https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: name,
};
