import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';

import { UnControlled as CodeMirror } from 'react-codemirror2'

class FieldCodeMirror extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, id, className, options = {}, onChange} = this.props;

    return (
      <CodeMirror
        id = {id}
        className = {className || 'FieldCodeMirror'}
        value = {value || 'xml'}
        options = {{
          mode: options.mode || 'xml',
          theme: options.theme || 'xq-light',
          lineNumbers: options.lineNumbers || true,
          readOnly: options.readOnly || false,
          showCursorWhenSelecting: options.showCursorWhenSelecting || false
        }}
        onChange = {(editor, data, value) => {
          console.log(editor, data, value);
          onChange(value);
        }}
      />
    );
  }
}


export default FieldCodeMirror;