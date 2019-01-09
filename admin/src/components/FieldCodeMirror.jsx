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
    return (
      <div className="FieldCodeMirror">
        <h1>Test FieldCodeMirror</h1>
        <CodeMirror
          value='<h1>I ♥ react-codemirror2</h1>'
          options={{
            mode: 'xml',
            theme: 'xq-light',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            console.log(editor, data, value);
          }}
        />
      </div>
    );
  }
}


export default FieldCodeMirror;