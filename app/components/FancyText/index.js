/*
 * app/components/FancyText
 */

// import react and react-native elements
import React, { Component } from 'react';
import { Text } from 'react-native';

// import screens styles
import styles from './styles';

class FancyText extends Component {
  static propTypes = {};

  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);

    this.state = {};
  }

  /**
   * Render component
   */
  render () {
    return (
      <Text style={styles.text}>{this.children}</Text>
    );
  }
}

FancyText.defaultProps = {};

export default FancyText;
