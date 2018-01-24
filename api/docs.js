const docs = {
  'align-content': {
    'en': '<p>Aligns a flex container\'s lines within the flex container when there is extra space on the cross-axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ru': '<p>Выравнивает ряды flex-контейнера внутри него (работает только, если элементы расположены больше чем в один ряд).</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>'
  },
  'align-items': {
    'en': '<p>Aligns flex items along the cross axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль пересекаемой оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'align-self': {
    'en': '<p>Aligns a flex item along the cross axis, overriding the <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элемент вдоль пересекаемой оси, перекрывая значения свойства <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'flex-direction': {
    'en': '<p>Defines the direction of the main axis.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ru': '<p>Задает направление основной оси.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>'
  },
  'flex-flow': {
    'en': '<p>Shorthand property for <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ru': '<p>Свойство для быстрой записи <code>flex-direction</code> и <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>'
  },
  'flex-wrap': {
    'en': '<p>Specifies whether flex items are forced on a single line or can be wrapped on multiple lines.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ru': '<p>Указывает, нужно ли чтоб элементы принудительно находились в одном ряду или автоматически переносились.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>'
  },
  'justify-content': {
    'en': '<p>Aligns flex items along the main axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль главной оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>'
  },
  'order': {
    'en': '<p>Specifies the order of the flex item.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ru': '<p>Указывает порядок flex-элемента.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>'
  }
};

module.exports = docs;
