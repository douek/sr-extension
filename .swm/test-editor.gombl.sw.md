---
id: gombl
name: Test Editor
file_version: 1.0.2
app_version: 0.6.8-0
file_blobs:
  src/background.js: 3e4f860daf696317c01f6abb7405158bde9acb46
  src/popup/App.vue: e61e82af66d7db5e4b19d772cf3067ee7f6f321c
---

use only the ketboard

<br/>

add sniipet /

<br/>

ewedwed `📄 public/browser-extension.html` [test](test.AthNI.sw.md) [question-time/Test - Can read new Doc after creation](https://swimm-web-app.web.app/repos/U0sVB7lC9at5XPOW1TBW/docs/rpEX5)
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/background.js
```javascript
⬜ 6      const ROOT_SR_URL = 'localhost:8080';
⬜ 7      // The onClicked callback function.
⬜ 8      function onClickHandler(info) {
🟩 9        if (info.menuItemId == 'add_card_all') {
🟩 10         // add comment to trigger autosync
🟩 11         let query = {
🟩 12           type: 'new',
🟩 13           surl: info.pageUrl
🟩 14         }
🟩 15         let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
🟩 16         window.open(urlQueary,'_blank');
🟩 17       } else if (info.menuItemId == 'add_card_selection_front') {
🟩 18         let query = {
⬜ 19           type: 'front',
⬜ 20           surl: info.pageUrl,
⬜ 21           front: info.selectionText
```

<br/>

fraegr wafawefw f e `info.menuItemId`[<sup id="2wRJ0m">↓</sup>](#f-2wRJ0m) bla blab alb
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/background.js
```javascript
⬜ 22         }
⬜ 23         let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
⬜ 24         window.open(urlQueary,'_blank');
🟩 25       } else if (info.menuItemId == 'add_card_selection_back') {
🟩 26         let query = {
🟩 27           type: 'back',
🟩 28           surl: info.pageUrl,
🟩 29           front: info.selectionText
🟩 30         }
🟩 31         let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
⬜ 32         window.open(urlQueary,'_blank');
⬜ 33       }
⬜ 34     }
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/popup/App.vue
```vue
⬜ 9      <script>
⬜ 10     import Menu from '@/components/Menu.vue'
⬜ 11     
🟩 12     export default {
🟩 13       name: 'App',
🟩 14       components: { Menu }
🟩 15     }
🟩 16     </script>
⬜ 17     
⬜ 18     <style>
⬜ 19     html {
```

<br/>

fqef e

<br/>

eded [test](test.AthNI.sw.md)

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimm-dev-content/o/repositories%2FZ2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs%3D%2Fc29bd829-38f9-4607-86b7-7631d06c8d74.jpg?alt=media&token=ecc29b52-1107-459c-a6b0-bd17490595f4" style="width:'50%'"/></div>

<br/>

w efwe

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimm-dev-content/o/repositories%2FZ2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs%3D%2Ff7875fb6-e0d1-42dd-b53f-401860312a72.jpg?alt=media&token=ccb84cda-0caf-4c2e-abb8-200f05e6c51f" style="width:'50%'"/></div>

<br/>

few fww

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimm-dev-content/o/repositories%2FZ2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs%3D%2F4d71d92e-ba2a-44ed-86d9-be3a429862f3.gif?alt=media&token=2c811321-a0eb-4b2b-adf1-85439b9d4e96" style="width:'50%'"/></div>

<br/>

rfr

<br/>

---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::


<br/>

<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->
### Swimm Note

<span id="f-2wRJ0m">info.menuItemId</span>[^](#2wRJ0m) - "src/background.js" L25
```javascript
  } else if (info.menuItemId == 'add_card_selection_back') {
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://swimm-web-app.web.app/repos/Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=/docs/gombl).