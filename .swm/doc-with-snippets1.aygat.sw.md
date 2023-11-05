---
title: Doc with snippets1
---
<SwmSnippet path="/src/components/Menu.vue" line="13">

---

&nbsp;

```vue
export default {
    name: 'Menu',
    methods:{
      startSession: () => {
      window.open('localhost:8080/session','_blank');
      },
      manageCards: () => {
      window.open('localhost:8080','_blank');
      },
    }
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/popup/App.vue" line="2">

---

&nbsp;

```vue
<div class="ui container">
  <br>
  <h3 class="ui dividing header">Spaced Repetition</h3>
  <Menu />
</div>
```

---

</SwmSnippet>

<SwmSnippet path="/src/background.js" line="1">

---

&nbsp;

```javascript
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import qs from 'qs'
```

---

</SwmSnippet>

<SwmMeta repo-id="Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=" repo-name="sr-extension"><sup>Powered by [Swimm](http://localhost:5000/)</sup></SwmMeta>
