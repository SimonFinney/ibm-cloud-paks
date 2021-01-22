/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { bool, node, string } from 'prop-types';
import React from 'react';

/**
 * The split button item provides additional actions a user can take.
 */
const SplitButtonItem = ({ ...rest }) => <span {...rest} />;

SplitButtonItem.propTypes = {
  /** Provide the contents of the `SplitButtonItem` */
  children: node.isRequired,

  /** Specify whether the `SplitButton` should be disabled, or not */
  disabled: bool,

  /** Provide an optional `href` for the `SplitButtonItem` to become an `a` element */
  href: string,
};

SplitButtonItem.defaultProps = {
  disabled: null,
  href: null,
};

export { SplitButtonItem };
