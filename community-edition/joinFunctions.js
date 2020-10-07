/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default (a, b) => {
  if (a && b) {
    return (...args) => {
      a(...args);
      b(...args);
    };
  }

  return a || b;
};