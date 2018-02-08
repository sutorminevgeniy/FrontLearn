const lessons = [
  {
    structure: {
      lessonId: "froggy",
      title: "Flexbox Froggy",
      topic: "css",
      author:"Thomas Park",
      preview_text: "Краткое описание урока",
      image: "next-flexboxfroggy.png",
      group: {
        ansver: "#background|,wrap|&#pond>.lilypad|$color>.bg",
        question: "#pond|,wrap>.frog|$color>.bg.animated.pulse.infinite"
      },
      color: {
        g: 'green',
        y: 'yellow',
        r: 'red'
      }
    },
    levels: [
      {
        name: 'justify-content 1',
        instructions: {
          'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
          'ru': '<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>'
        },
        board: 'g',
        ansver: {'justify-content': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'justify-content 2',
        instructions: {
          'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
          'ru': '<p>Используй <code>justify-content</code> еще раз, чтоб помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul>'
        },
        board: 'gy',
        ansver: {'justify-content': 'center'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'justify-content 3',
        instructions: {
          'en': '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>',
          'ru': '<p>Помоги всем трем лягушатам найти их лилии, просто используя <code>justify-content</code>. В этот раз, у лилий много пространства вокруг.</p><p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтоб посмотреть их. Попробуй навести курсор на <code>justify-content</code>.</p>'
        },
        board: 'gyr',
        ansver: {'justify-content': 'space-around'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'justify-content 4',
        instructions: {
          'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
          'ru': '<p>Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <code>justify-content</code>. В этот раз, у лилий одинаковое расстояние между ними.</p>'
        },
        board: 'gyr',
        ansver: {'justify-content': 'space-between'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'align-items 1',
        instructions: {
          'en': '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
          'ru': '<p>Теперь используй <code>align-items</code> чтоб помочь лягушатам добратся к нижней части пруда. Это CSS свойство выравнивает элементы вертикально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по верхнему краю контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по нижнему краю контейнера.</li><li><code>center</code>: Элементы выравниваются вертикально по центру контейнера.</li><li><code>baseline</code>: Элементы отображаются на базовой линии контейнера.</li><li><code>stretch</code>: Элементы растягиваются, чтоб заполнить контейнер.</li></ul>'
        },
        board: 'gyr',
        ansver: {'align-items': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'align-items 2',
        instructions: {
          'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
          'ru': '<p>Направь лягушонка в центр пруда, используя <code>justify-content</code> и <code>align-items</code> вместе.</p>'
        },
        board: 'g',
        ansver: {'justify-content': 'center', 'align-items': 'center'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'align-items 3',
        instructions: {
          'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
          'ru': '<p>Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.</p>'
        },
        board: 'gyr',
        ansver: {'justify-content': 'space-around', 'align-items': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-direction 1',
        instructions: {
          'en': '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
          'ru': '<p>Лягушатам нужно выстроиться в порядке их лилий, используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>'
        },
        board: 'gyr',
        ansver: {'flex-direction': 'row-reverse'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-direction 2',
        instructions: {
          'en': '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
          'ru': '<p>Помоги лягушатам расположиться на своих лилиях используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>'
        },
        board: 'gyr',
        ansver: {'flex-direction': 'column'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-direction 3',
        instructions: {
          'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
          'ru': '<p>Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, все же придется применить и <code>flex-direction</code> и <code>justify-content</code>, чтоб поместить их на свои лилии.</p><p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>'
        },
        board: 'gyr',
        ansver: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-direction 4',
        instructions: {
          'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
          'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p><p>Заметь, когда в качестве направления выбрана колонка, то <code>justify-content</code> влияет на вертикальное выравнивание, а <code>align-items</code> на горизонтальное.</p>'
        },
        board: 'gyr',
        ansver: {'flex-direction': 'column', 'justify-content': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-direction 5',
        instructions: {
          'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
          'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p>'
        },
        board: 'gyr',
        ansver: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-direction 6',
        instructions: {
          'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
          'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>'
        },
        board: 'gyr',
        ansver: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'order 1',
        instructions: {
          'en': '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
          'ru': '<p>Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code>order</code> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.</p><p>Используй свойство <code>order</code>, чтоб разместить лягушат на своих лилиях.</p>'
        },
        board: 'gyr',
        selector: '> :nth-child(2)',
        classes: {'#pond, #background': 'wrap'},
        ansver: {'order': '2'},
        before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
        after: "}"
      },
      {
        name: 'order 2',
        instructions: {
          'en': '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>',
          'ru': '<p>Используй свойство <code>order</code>, чтоб отправить красного лягушонка на его лилию.</p>'
        },
        board: 'gggrg',
        selector: '> :nth-child(4)',
        classes: {'#pond, #background': 'wrap'},
        ansver: {'order': '-1'},
        before: "#pond {\n  display: flex;\n}\n\n.red {\n",
        after: "}"
      },
      {
        name: 'align-self 1',
        instructions: {
          'en': '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>',
          'ru': '<p>Еще одно свойство, которое ты можешь применить к определенному элементу это <code>align-self</code>. Это свойство принимает те же значения, что и <code>align-items</code>.</p>'
        },
        board: 'ggygg',
        selector: '> :nth-child(3)',
        ansver: {'align-self': 'flex-end'},
        before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
        after: "}"
      },
      {
        name: 'align-self 2',
        instructions: {
          'en': '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>',
          'ru': '<p>Используй <code>order</code> и <code>align-self</code> вместе, чтоб помочь лягушатам добраться к своим целям.</p>'
        },
        board: 'ygygg',
        selector: '> .yellow',
        ansver: {'align-self': 'flex-end', 'order': '2'},
        before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
        after: "}"
      },
      {
        name: 'flex-wrap 1',
        instructions: {
          'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
          'ru': '<p>О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства <code>flex-wrap</code>, которое принимает следующие значения:</p><ul><li><code>nowrap</code>: Размеры элементов устанавливаются автоматически, чтоб они поместились в один ряд.</li><li><code>wrap</code>: Элементы автоматически переносятся на новую строку.</li><li><code>wrap-reverse</code>: Элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li></ul>'
        },
        board: 'ygggggr',
        ansver: {'flex-wrap': 'wrap'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-wrap 2',
        instructions: {
          'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>',
          'ru': '<p>Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации <code>flex-direction</code> и <code>flex-wrap</code>.</p>'
        },
        board: 'gggggrrrrryyyyy',
        ansver: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'flex-flow 1',
        instructions: {
          'en': '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
          'ru': '<p>Два свойства <code>flex-direction</code> и <code>flex-wrap</code> используются так часто вместе, что было создано свойство <code>flex-flow</code> для их комбинирования. Это свойство принимает значения двух этих свойств, разделеные пробелом.</p><p>Например, ты можешь использовать <code>flex-flow: row wrap</code>, чтоб элементы располагались в ряд и автоматически переносились на новую строку.</p><p>Попробуй использовать <code>flex-flow</code>, чтоб повторить предыдущий уровень.</p>'
        },
        board: 'gggggrrrrryyyyy',
        ansver: {'flex-flow': 'column wrap'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      },
      {
        name: 'align-content 1',
        instructions: {
          'en': '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
          'ru': '<p>Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать <code>align-content</code>, чтобы указать, как несколько рядов должны отделяться друг от друга. Данное свойство принимает следующие значения:</p><ul><li><code>flex-start</code>: Ряды группируются в верхней части контейнера.</li><li><code>flex-end</code>: Ряды группируются в нижней части контейнера.</li><li><code>center</code>: Ряды группируются вертикально по центру контейнера.</li><li><code>space-between</code>: Ряды отображаются с одинаковыми расстояниями между ними.</li><li><code>space-around</code>: Ряды отображаются с одинаковыми расстояниями вокруг них.</li><li><code>stretch</code>: Ряды растягиваются, чтоб заполнить контейнер равномерно.</li></ul><p>Это может запутать, но <code>align-content</code> отвечает за расстояние между рядами, в то время как <code>align-items</code> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <code>align-content</code> ни на что не влияет.</p>'
        },
        board: 'ggggggggggggggg',
        classes: {'#pond, #background': 'wrap'},
        ansver: {'align-content': 'flex-start'},
        before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
        after: "}"
      },
      {
        name: 'align-content 2',
        instructions: {
          'en': '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>',
          'ru': '<p>Теперь течение сгруппировало лилии в нижней части. Используй <code>align-content</code>, чтоб направить лягушат туда.</p>'
        },
        board: 'ggggggggggggggg',
        classes: {'#pond, #background': 'wrap'},
        ansver: {'align-content': 'flex-end'},
        before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
        after: "}"
      },
      {
        name: 'align-content 3',
        instructions: {
          'en': '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>',
          'ru': '<p>Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию <code>flex-direction</code> и <code>align-content</code>, чтоб отправить их к своим лилиям.</p>'
        },
        board: 'rgggyrgggyrgggy',
        classes: {'#pond, #background': 'wrap'},
        ansver: {'flex-direction': 'column-reverse', 'align-content': 'center'},
        before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
        after: "}"
      },
      {
        name: 'align-content 4',
        instructions: {
          'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
          'ru': '<p>Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>'
        },
        board: 'rggggyy',
        ansver: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
      }
    ],
    levelWin: {
      name: 'win',
      instructions: {
        'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
        'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделится этой игрой со своими друзьями!</p>'
      },
      board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
      classes: {'#pond, #background': 'wrap'},
      ansver: {},
      before: "#pond {\n  display: flex;\n",
      after: "}"
    }
  },
  {
    structure: {
      lessonId: "gridgarden",
      title: "Grid Garden",
      topic: "css",
      author:"Thomas Park",
      preview_text: "Краткое описание урока",
      image: "next-gridgarden.png",
      group: {
        ansver: "#plants|&#garden>.plant|$color>.bg",
        question: "#garden>.treatment|$color>.bg",
        others: "#overlay>span|.plot|*25"
      },
      color: {
        c: "water",
        w: "poison"
      }
    },
    levels: [
      {
        name: 'grid-column-start 1',
        instructions: {
          'en': '<p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <code>grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 3;</code> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.<img src="http://code.org/api/hour/begin_codepip_grid.png"></p>',
          'ru': '<p>Добро пожаловать в Grid Garden, место где вы пишете CSS код для того чтобы вырастить ваш морковный сад. Поливайте только те зоны на которых есть морковь используя свойство <code>grid-column-start</code>.</p><p>Например, <code>grid-column-start: 3;</code> покроет водой зону, начинающуюся на 3-ей вертикальной grid линии, что является альтернативным способом сказать - 3-я вертикальная граница начиная слева на grid сетке.</p>'
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-column-start': '3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-column-start 2',
        instructions: {
          'en': '<p>Uh oh, looks like weeds are growing in the corner of your garden. Use <code>grid-column-start</code> to poison them. Note that the weeds start at the 5th vertical grid line.</p>',
          'ru': '<p>Оу, кажется будто сорняки растут прямо в углу вашего сада. Используйте <code>grid-column-start</code> чтобы отравить их. Помните что сорняки начинаются на 5-ой вертикальной grid линии.</p>',
        },
        board: 'w',
        selector: '> :nth-child(1)',
        ansver: {'grid-column-start': '5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.poison {\n",
        after: "}"
      },
      {
        name: 'grid-column-end 1',
        instructions: {
          'en': '<p>When <code>grid-column-start</code> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <code>grid-column-end</code> property.</p><p>Using <code>grid-column-end</code>, water all of your carrots while avoiding the dirt. We don\'t want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.</p>',
          'ru': '<p>Когда вы используете только <code>grid-column-start</code>, grid элемент по умолчанию "захватит" только один столбец. Однако, вы можете увеличить элемент между несколькими столбцами если добавите свойство <code>grid-column-end</code>.</p><p>Используя <code>grid-column-end</code>, полейте всю вашу морковь при этом избегая пустые участки. Мы не хотим использовать воду напрасно! Помните, что морковь начинается на 1-ой вертикальной grid линии и заканчивается на 4-ой</p>',
        },
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        ansver: {'grid-column-end': '4'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column-start: 1;\n",
        after: "}"
      },
      {
        name: 'grid-column-end 2',
        instructions: {
          'en': '<p>When pairing <code>grid-column-start</code> and <code>grid-column-end</code>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</p><p>Try setting <code>grid-column-end</code> to a value less than 5 to water your carrots.</p>',
          'ru': '<p>Когда вы соединяли <code>grid-column-start</code> и <code>grid-column-end</code>, вы могли подумать что конечное значение должно быть больше чем начальное значение. Оказывается, это не так!</p><p>Попробуйте присвоить <code>grid-column-end</code> значение меньше чем 5 чтобы полить вашу морковь.</p>',
        },
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-5'},
        selector: '> :nth-child(1)',
        ansver: {'grid-column-end': '2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column-start: 5;\n",
        after: "}"
      },
      {
        name: 'grid-column-end 3',
        instructions: {
          'en': '<p>If you want to count grid lines from the right instead of the left, you can give <code>grid-column-start</code> and <code>grid-column-end</code> negative values. For example, you can set it to -1 to specify the first grid line from the right.</p><p>Try setting <code>grid-column-end</code> to a negative value.</p>',
          'ru': '<p>Если вы хотите посчитать grid строки справа налево вместо слева направо, вы можете дать <code>grid-column-start</code> и <code>grid-column-end</code> отрицательные значения. Например, вы можете присвоить значение равное -1 чтобы указать 1-ую grid строку начиная справа.</p><p>Попробуйте присвоить <code>grid-column-end</code> отрицательное значение.</p>'
        },
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        ansver: {'grid-column-end': '-2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column-start: 1;\n",
        after: "}"
      },
      {
        name: 'grid-column-start 3',
        instructions: {
          'en': '<p>Now try setting <code>grid-column-start</code> to a negative value.</p>',
          'ru': '<p>Теперь попробуйте присвоить <code>grid-column-start</code> отрицательное значение.</p>'
        },
        board: 'w',
        selector: '> :nth-child(1)',
        ansver: {'grid-column-start': '-3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.poison {\n",
        after: "}"
      },
      {
        name: 'grid-column-end 4',
        instructions: {
          'en': '<p>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <code>span</code> keyword. Keep in mind that <code>span</code> only works with positive values.</p><p>For example, water these carrots with the rule <code>grid-column-end: span 2;</code>.</p>',
          'ru': '<p>Вместо определения grid элемента базируясь на начальной и конечной позициях grid строк, вы можете определять их с помощью необходимой вам широты строк, используя <code>span</code>. Помните, что <code>span</code> работает только с положительными значениями.</p><p>Для примера, полейте эту морковь используя свойсво <code>grid-column-end: span 2;</code>.</p>'
        },
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-2'},
        selector: '> :nth-child(1)',
        ansver: {'grid-column-end': 'span 2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column-start: 2;\n",
        after: "}"
      },
      {
        name: 'grid-column-end 5',
        instructions: {
          'en': '<p>Try using <code>grid-column-end</code> with the <code>span</code> keyword again to water your carrots.</p>',
          'ru': '<p>Попробуй опять использовать <code>grid-column-end</code> вместе с <code>span</code> для того, чтобы полить вашу морковь.</p>'
        },
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        ansver: {'grid-column-end': 'span 5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column-start: 1;\n",
        after: "}"
      },
      {
        name: 'grid-column-start 4',
        instructions: {
          'en': '<p>You can also use the <code>span</code> keyword with <code>grid-column-start</code> to set your item\'s width relative to the end position.</p>',
          'ru': '<p>Вы также можете использовать <code>span</code> вместе с <code>grid-column-start</code> для того, чтобы присвоить значение широты вашего grid элемента относительно конечной позиции.</p>'
        },
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-end-6'},
        selector: '> :nth-child(1)',
        ansver: {'grid-column-start': 'span 3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "  grid-column-end: 6;\n}"
      },
      {
        name: 'grid-column 1',
        instructions: {
          'en': '<p>Typing both <code>grid-column-start</code> and <code>grid-column-end</code> every time can get tiring. Fortunately, <code>grid-column</code> is a shorthand property that can accept both values at once, separated by a slash.</p><p>For example, <code>grid-column: 2 / 4;</code> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</p>',
          'ru': '<p>Печатать вместе <code>grid-column-start</code> и <code>grid-column-end</code> каждый раз немного утомляет. К счастью, <code>grid-column</code> является коротким свойством которое принимает оба значения сразу через слеш  "/"  .</p><p>Например, <code>grid-column: 2 / 4;</code> скажет grid элементу начаться на 2-ой вертикальной grid линии и закончиться на 4-ой вертикальной grid линии.</p>'
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-column': '4 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-column 2',
        instructions: {
          'en': '<p>Try using <code>grid-column</code> to water these carrots. The <code>span</code> keyword also works with this shorthand property so give it a try!</p>',
          'ru': '<p>Попробуйте использовать <code>grid-column</code> чтобы полить эту морковь. <code>span</code> также работает с этим коротким свойством, так что пробуйте!'
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-column': '2 / 5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-row-start 1',
        instructions: {
          'en': '<p>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <code>grid-row-start</code> works much like <code>grid-column-start</code> except along the vertical axis.</p><p>Use <code>grid-row-start</code> to water these carrots.</p>',
          'ru': "<p>Одна из вещей которая различает CSS grid'ы от flexbox'а это то что вы можете легко позиционировать элементы в двух направлениях: столбцах и строках. <code>grid-row-start</code> работает почти как <code>grid-column-start</code>, но только на вертикальной оси.</p><p>Используйте <code>grid-row-start</code> чтобы полить эту морковь.</p>"
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-row-start': '3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-row-start 2',
        instructions: {
          'en': '<p>Now give the shorthand property <code>grid-row</code> a try.</p>',
          'ru': '<p>А теперь попробуйте использовать короткое свойство <code>grid-row</code>.</p>'
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-row': '3 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-column-row 1',
        instructions: {
          'en': '<p>Use <code>grid-column</code> and <code>grid-row</code> at the same time to set position in both dimensions.</p>',
          'ru': '<p>Используйте <code>grid-column</code> и <code>grid-row</code> одновременно, для того чтобы позиционировать элемент в двух направлениях.'
        },
        board: 'w',
        selector: '> :nth-child(1)',
        ansver: {'grid-column': '2', 'grid-row': '5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.poison {\n",
        after: "}"
      },
      {
        name: 'grid-column-row 2',
        instructions: {
          'en': '<p>You can also use <code>grid-column</code> and <code>grid-row</code> together to span larger areas within the grid. Give it a try!</p>',
          'ru': '<p>Вы также можете использовать <code>grid-column</code> и <code>grid-row</code> вместе для того чтобы охватить более большие зоны внутри grid сетки. Пробуйте!</p>'
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-area 1',
        instructions: {
          'en': '<p>If typing out both <code>grid-column</code> and <code>grid-row</code> is too much for you, there\'s yet another shorthand for that. <code>grid-area</code> accepts four values separated by slashes: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, followed by <code>grid-column-end</code>.</p><p>One example of this would be <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
          'ru': '<p>Если для вас напечатать <code>grid-column</code> и <code>grid-row</code> это слишком, есть другое короткое свойство для этого. <code>grid-area</code> принимает 4 значения, разделенные слешем " / ": <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> и <code>grid-column-end</code>.</p><p>Примером для этого будет <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>'
        },
        board: 'c',
        selector: '> :nth-child(1)',
        ansver: {'grid-area': '1 / 2 / 4 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n",
        after: "}"
      },
      {
        name: 'grid-area 2',
        instructions: {
          'en': '<p>How about multiple items? You can overlap them without any trouble. Use <code>grid-area</code> to define a second area that covers all of the unwatered carrots.</p>',
          'ru': '<p>Как насчет множества элементов? Вы можете накладывать их друг на друга без каких либо проблем. Используйте <code>grid-area</code> чтобы определить вторую зону, которая займет всю не политую морковь.</p>'
        },
        board: 'cc',
        classes: {'#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4'},
        selector: '> :nth-child(1)',
        ansver: {'grid-area': '2 / 3 / 5 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n.water-2 {\n",
        after: "}"
      },
      {
        name: 'order 1',
        instructions: {
          'en': '<p>If grid items aren\'t explicitly placed with <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., they are automatically placed according to their order in the source code. We can override this using the <code>order</code> property, which is one of the advantages of grid over table-based layout.</p><p>By default, all grid items have an <code>order</code> of 0, but this can be set to any positive or negative value, similar to <code>z-index</code>.</p><p>Right now, the carrots in the second column are being poisoned and the weeds in the last column are being watered. Change the <code>order</code> value of the poison to fix this right away!</p>',
          'ru': "<p>Если grid элементы не имеют конкретного расположения с <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> и т.д., они автоматически помещаются следуя порядку написанному в коде. Мы можем перезаписать это с помощью свойства <code>order</code>, которое является одним из преимуществ grid'а перед табличной разметкой.</p><p>По умолчанию, все grid элементы имеют <code>order</code> равный 0, но этому свойству можно присвоить любое положительное или отрицательное значение, примерно как <code>z-index</code>.</p><p>На данный момент, морковь во 2-м столбце отравлена и сорняки в последнем столбце поливаются. Измените значение свойства <code>order</code> яда чтобы исправить это прямо сейчас!</p>"
        },
        board: 'cwccc',
        selector: '> :nth-child(2)',
        ansver: {'order': '2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n.poison {\n",
        after: "}"
      },
      {
        name: 'order 2',
        instructions: {
          'en': '<p>Now the water and poison are alternating, even though all of the weeds are at the start of your garden. Set the <code>order</code> of the poisons to remedy this.</p>',
          'ru': '<p>Теперь вода и яд меняются местами, хотя все сорняки находятся в начале сада. Присвойте правильное значение <code>order</code> яда так, чтобы исправить это.</p>'
        },
        board: 'wcwcwcwcwc',
        selector: '> :nth-child(odd)',
        ansver: {'order': '-1'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n.poison {\n",
        after: "}"
      },
      {
        name: 'grid-template-columns 1',
        instructions: {
          'en': '<p>Up to this point, you\'ve had your garden set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height.</p><p>This was done with the rules <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Each rule has five values which create five columns, each set to 20% of the overall width of the garden.</p><p>But you can set the grid up however you like. Give <code>grid-template-columns</code> a new value to water your carrots. You\'ll want to set the width of the 1st column to be 50%.</p>',
          'ru': '<p>До этого момента ваш сад имел grid сетку с пятью столбцами по 20% широты, и пятью строками, каждый по 20% высоты.</p><p>Это было сделано благодаря свойствам <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> и <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Каждое свойство имеет пять значений, которые создают 5 столбцов, где ширина каждого равна 20% от обшей широты сада.</p><p>Но вы можете изменять grid сетку как вам вздумается. Присвойте <code>grid-template-columns</code> новое значение, чтобы полить вашу морковь. Вам необходимо поставить значение широты 1-го столбца равное 50%.</p>'
        },
        board: 'c',
        ansver: {'grid-template-columns': '50% 50%'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column: 1;\n  grid-row: 1;\n}"
      },
      {
        name: 'grid-template-columns 2',
        instructions: {
          'en': '<p>Specifying a bunch of columns with identical widths can get tedious. Luckily there\'s a <code>repeat</code> function to help with that.</p><p>For example, we previously defined five 20% columns with the rule <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. This can be simplified as <code>grid-template-columns: repeat(5, 20%);</code></p><p>Using <code>grid-template-columns</code> with the <code>repeat</code> function, create eight columns each with 12.5% width. This way you won\'t overwater your garden.</p>',
          'ru': '<p>Определять несколько столбцов с одинаковой широтой может быть немного утомительным. К счастью, есть функция <code>repeat</code> которая призвана помочь с этим.</p><p>Например, раньше мы определили пять столбцов по 20% широты с помощью <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Это можно упростить до <code>grid-template-columns: repeat(5, 20%);</code></p><p>Используя <code>grid-template-columns</code> вместе с функцией <code>repeat</code>, создайте 8 столбцов по 12.5% широты каждый. Таким образом, вы не будете использовать больше воды чем нужно.</p>'
        },
        board: 'c',
        classes: {'#plants': 'grid-template-columns-repeat-8-12'},
        ansver: {'grid-template-columns': 'repeat(8, 12.5%)'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-column: 1;\n  grid-row: 1;\n}"
      },
      {
        name: 'grid-template-columns 4',
        instructions: {
          'en': '<p><code>grid-template-columns</code> doesn\'t just accept values in percentages, but also length units like pixels and ems. You can even mix different units together.</p><p>Here, set three columns to <code>100px</code>, <code>3em</code>, and <code>40%</code> respectively.</p>',
          'ru': '<p><code>grid-template-columns</code> не только принимает значения в процентах, но также может принимать значения длины, такие как пиксели или ems. Вы даже можете комбинировать разные единицы измерения.</p><p>Сейчас присвойте трем столбцам значение <code>100px</code>, <code>3em</code> и <code>40%</code> соответственно.</p>'
        },
        board: 'cwc',
        classes: {'#plants': 'grid-template-columns-100px-3em-40p'},
        ansver: {'grid-template-columns': '100px 3em 40%;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
      },
      {
        name: 'grid-template-columns 5',
        instructions: {
          'en': '<p>Grid also introduces a new unit, the fractional <code>fr</code>. Each <code>fr</code> unit allocates one share of the available space. For example, if two elements are set to <code>1fr</code> and <code>3fr</code> respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.</p><p>Here, weeds make up the left 1/6 of your first row and carrots the remaining 5/6. Create two columns with these widths using <code>fr</code> units.</p>',
          'ru': '<p>Grid также вводит новую единицу измерения, дробный <code>fr</code>. Каждый <code>fr</code> выделяет одну часть свободного простанства. Например, если два элемента имеют свойство равное <code>1fr</code> и <code>3fr</code> соответственно, то тогда пространство будет поделено на 4 одинаковые части. Первый элемент займет 1/4 а второй 3/4 всего оставшегося пространства.</p><p>Сейчас сорняки занимают левую 1/6 часть вашей первой строки, а морковь оставшиеся 5/6. Создайте два столбца с такими же широтами, используя единицы <code>fr</code>.</p>'
        },
        board: 'wc',
        classes: {'#plants': 'grid-template-columns-1fr-5fr'},
        ansver: {'grid-template-columns': '1fr 5fr;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
      },
      {
        name: 'grid-template-columns 3',
        instructions: {
          'en': '<p>When columns are set with pixels, percentages, or ems, any other columns set with <code>fr</code> will divvy up the space that\'s left over.</p><p>Here the carrots form a 50 pixel column on the left, and the weeds a 50 pixel column on the right. With <code>grid-template-columns</code>, create these two columns, and use <code>fr</code> to make three more columns that take up the remaining space in between.</p>',
          'ru': '<p>Когда одни столбцы определены с помощью пикселей, процентов или ems, а любые другие столбцы с помощью <code>fr</code>, то вторые просто разделят все возможное оставшееся пространство.</p><p>Сейчас морковь занимает 50 пикселей слева, а сорняки 50 пикселей справа. С помощью <code>grid-template-columns</code>, создайте два столбца и используйте <code>fr</code> чтобы сделать еще 3 столбца, которые займут оставшееся простанство между ними.</p>'
        },
        board: 'cw',
        classes: {
          '#plants': 'grid-template-columns-50px-1fr-1fr-1fr-50px',
          '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-1-1-6-2',
          '#plants > :nth-child(2), #garden > :nth-child(2)': 'grid-area-1-5-6-6'
        },
        ansver: {'grid-template-columns': '50px 1fr 1fr 1fr 50px;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n.poison {\n  grid-area: 1 / 5 / 6 / 6;\n}"
      },
      {
        name: 'grid-template-columns 6',
        instructions: {
          'en': '<p>Now there is a 75 pixel column of weeds on the left side of your garden. 3/5 of the remaining space is growing carrots, while 2/5 has been overrun with weeds.</p><p>Use <code>grid-template-columns</code> with a combination of <code>px</code> and <code>fr</code> units to make the necessary columns.</p>',
          'ru': '<p>Теперь у нас есть столбец сорняков с шириной 75 пикселей на левой стороне вашего сада. 3/5 оставшегося пространства занимает растущая морковь, когда 2/5 заполонили сорняки.</p><p>Используйте <code>grid-template-columns</code> с комбинацией <code>px</code> и <code>fr</code> чтобы сделать необходимые столбцы.</p>'
        },
        board: 'wcw',
        classes: {'#plants': 'grid-template-columns-6', '#garden, #overlay': 'grid-template-rows-100p'},
        ansver: {'grid-template-columns': '75px 3fr 2fr;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 100%;\n}"
      },
      {
        name: 'grid-template-rows 1',
        instructions: {
          'en': '<p><code>grid-template-rows</code> works much the same as <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you\'ll need to create 5 rows in total.</p>',
          'ru': '<p><code>grid-template-rows</code> работает точно так же, как и <code>grid-template-columns</code>.</p><p>Используйте <code>grid-template-rows</code> чтобы полить все, кроме верхних 50 пикселей вашего сада. Помните, что вода на данный момент заполняет только 5-ую строку, так что вам понадобиться создать в сумме 5 строк.</p>'
        },
        board: 'c',
        classes: {
          '#plants': 'grid-template-rows-50px-0-0-0-1fr',
          '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-5-1-6-6'
        },
        ansver: {'grid-template-rows': '1fr 100px;'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n",
        after: "}\n\n.water {\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n}"
      },
      {
        name: 'grid-template 1',
        instructions: {
          'en': '<p><code>grid-template</code> is a shorthand property that combines <code>grid-template-rows</code> and <code>grid-template-columns</code>.</p><p>For example, <code>grid-template: 50% 50% / 200px;</code> will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.</p><p>Try using <code>grid-template</code> to water an area that includes the top 60% and left 200 pixels of your garden.</p>',
          'ru': '<p><code>grid-template</code> является короткой вариантом комбинации <code>grid-template-rows</code> и <code>grid-template-columns</code>.</p><p>Например, <code>grid-template: 50% 50% / 200px;</code> создаст grid сетку с 2-мя строками, по 50% каждая, и одним столбцом шириной 200 пикселей.</p><p>Попробуйте использовать <code>grid-template</code> чтобы полить зону, включающую в себя верхние 60% и левые 200 пикселей вашего сада.</p>'
        },
        board: 'c',
        ansver: {'grid-template': '60% 1fr / 200px 1fr'},
        before: "#garden {\n  display: grid;\n",
        after: "}\n\n.water {\n  grid-column: 1;\n  grid-row: 1;\n}"
      },
      {
        name: 'grid-template 2',
        instructions: {
          'en': '<p>Your garden is looking great. Here you\'ve left a 50 pixel path at the bottom of your garden and filled the rest with carrots.</p><p>Unfortunately, the left 20% of your carrots have been overrun with weeds. Use CSS grid one last time to treat your garden.</p>',
          'ru': '<p>Ваш сад выглядит прекрасно. Здесь вы оставили 50 пиксельный путь в нижней части вашего сада и заполнили все оставшееся пространство морковью.</p><p>К сожалению, левые 20% вашей моркови заполонили сорняки. Используйте CSS Grid в последний раз чтобы очистить ваш сад.</p>'
        },
        board: 'wc',
        classes: {'#plants': 'grid-template-2'},
        ansver: {'grid-template': '1fr 50px / 20% 1fr'},
        before: "#garden {\n  display: grid;\n",
        after: "}"
      }
    ],
    levelWin: {
      name: 'win',
      instructions: {
        'en': '<p>You win! By the power of CSS grid, you were able to grow enough carrots for Froggy to bake his world famous 20-carrot cake. What, were you expecting a different hoppy friend?</p><p>If you enjoyed Grid Garden, be sure to check out <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> to learn about another powerful new feature of CSS layout. You can also keep up-to-date with my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Want to support Grid Garden? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. And spread the word to your friends and family about Grid Garden!</p>',
        'ru': '<p>Вы победили! Благодаря силе CSS Grid, вы смогли вырастить достаточно моркови для Froggy чтобы испечь его знаменитый 20-морковный пирог. Что, вы ожидали другого прыгучего друга?</p><p>Если вам понравился Grid Garden, удостоверьтесь посмотреть <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> чтобы изучить другую новую возможность CSS. Вы также можете оставаться в курсе всех моих проектов(автора проекта) <a href="http://thomaspark.co">мой блог</a> или <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Хотите поддержать Grid Garden? Попробуйте "topnotch" веб-дизайна и курсы программирования предложенные <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Расскажите своим друзьям и членам семьи о Grid Garden!</p>',
      },
      board: '',
      classes: {'#garden, #plants, #overlay': 'win'},
      ansver: {},
      before: "#pond {\n  display: flex;\n",
      after: "}"
    }
  },
  {
    structure: {
      lessonId: "froggy_html",
      title: "Froggy html",
      topic: "html",
      author:"Thomas Park",
      preview_text: "Краткое описание урока",
      image: "next-treehouse.png"
    },
    levels: [
      {
        name: 'justify-content 1',
        instructions: {
          'en': '<p>Build paragraph</p><p>text text text 1</p>',
          'ru': '<p>Создать абзацы</p><p>text text text 2</p>'
        },
        ansver: `<p>text text text 1</p>
<p>text text text 2</p>`,
        defansver: `text text text 1
text text text 2`,
        before: "",
        after: ""
      },
      {
        name: 'justify-content 2',
        instructions: {
          'en': '<p>Build paragraph</p><p>text text text 1</p>',
          'ru': '<p>Создать абзацы</p><p>text text text 2</p>'
        },
        ansver: `<ul>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</ul>   `,
        defansver: `item1
item2
item3`,
        before: "",
        after: ""
      },
      {
        name: 'justify-content 3',
        instructions: {
          'en': '<p>Build paragraph</p><p>text text text 1</p>',
          'ru': '<p>Создать абзацы</p><p>text text text 2</p>'
        },
        ansver: `<ol>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</ol>   `,
        defansver: `item1
item2
item3`,
        before: "",
        after: ""
      }
    ],
    levelWin: {
      name: 'win',
      instructions: {
        'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
        'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделится этой игрой со своими друзьями!</p>',
      },
      ansver: '<h2>Winner</h2>',
      before: "",
      after: ""
    }
  },
  {
    structure: {
      lessonId: "froggy_javascript",
      title: "Froggy javascript",
      topic: "javascript",
      author:"Thomas Park",
      preview_text: "Краткое описание урока",
      image: "next-treehouse.png"
    },
    levels: [
      {
        name: 'justify-content 1',
        instructions: {
          'en': '<p>The code does not execute properly. Try to figure out why.</p>',
          'ru': '<p>Код не выполняется должным образом. Попытайтесь выяснить, почему.</p>'
        },
        board: 'g',
        ansver: `function multiply(a, b){
  return a * b;
}`,
        defansver: `function multiply(a, b){
  a * b
}`,
        before: "",
        after: ""
      },
      {
        name: 'justify-content 2',
        instructions: {
          'en': '<p>The code does not execute properly. Try to figure out why.</p>',
          'ru': '<p>Код не выполняется должным образом. Попытайтесь выяснить, почему.</p>'
        },
        board: 'gy',
        ansver: `function multiply(a, b){
  return a * b;
}`,
        defansver: `function multiply(a, b){
  a * b
}`,
        before: "",
        after: ""
      }
    ],
    levelWin: {
      name: 'win',
      instructions: {
        'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
        'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделится этой игрой со своими друзьями!</p>',
      },
      ansver: '',
      before: "",
      after: ""
    }
  }
];

module.exports = lessons;