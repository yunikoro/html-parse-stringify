var test = require('tape');

var parseTag = require('../lib/parse-tag');
var HTML = require('../index');

test('firsttest', (t) => {
  t.deepEqual({a: 5}, {a: 4})
  t.end()
})

test('parseTag', (t) => {
  const tag = '<div class=thing other=stuff something=54 quote="me ">'
  
  t.deepEqual(parseTag(tag), {
    type: 'tag',
    attrs: {
        class: 'thing',
        other: 'stuff',
        something: '54',
        quote: 'me '
    },
    name: 'div',
    voidElement: false,
    children: []
  });
  t.end()
})


test('parse', t => {
  const html = '<div class="oh"><p>hi</p></div>'
  parsed = HTML.parse(html)
  
  t.deepEqual(parsed, [{
    type: 'tag',
    name: 'div',
    attrs: {
        class: 'oh'
    },
    voidElement: false,
    children: [
        {
            type: 'tag',
            name: 'p',
            attrs: {},
            voidElement: false,
            children: [
                {
                    type: 'text',
                    content: 'hi'
                }
            ]
        }
    ]
  }]);
  t.end()
})