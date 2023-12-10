---
title: Test SWMD Autosync hi
---
<SwmSnippet path="/src/manifest.json" line="10">

---

Newer version saving some11

```json
    "*://*/*"
  ],
  "icons": {
    "16": "icons/16.png",
    "48": "icons/48.png",
    "128": "icons/128.png"
  },
  "background": {
    "scripts": [
      "js/background.js"
    ],
    "persistent": false
  },
  "browser_action": {
```

---

</SwmSnippet>

<SwmSnippet path="/src/background.js" line="8">

---

Save darf

```javascript
function onClickHandler(info) {
  if (info.menuItemId == 'add_card_all') {
    let query = {
      type: 'new',
      surl: info.pageUrl
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/background.js" line="39">

---

&nbsp;

```javascript
// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {

browser.contextMenus.create({
  id: "add_card_selection_front",
  title: browser.i18n.getMessage("menuAddCardSelectionFront"),
  contexts: ["selection"],
});

browser.contextMenus.create({
  id: "add_card_selection_back",
  title: browser.i18n.getMessage("menuAddCardSelectionBack"),
  contexts: ["selection"],
});

browser.contextMenus.create({
  id: "add_card_all",
  title: browser.i18n.getMessage("menuAddCard"),
```

---

</SwmSnippet>

<SwmSnippet path="/src/popup/main.js" line="1">

---

yjyj

```javascript
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

```

---

</SwmSnippet>

111

222

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=" repo-name="sr-extension"><sup>Powered by [Swimm](http://localhost:5000/)</sup></SwmMeta>
