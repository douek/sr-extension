// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import qs from 'qs'

const ROOT_SR_URL = 'localhost:8080';
// The onClicked callback function.
function onClickHandler(info) {
  if (info.menuItemId == 'add_card_all') {
    let query = {
      type: 'new',
      surl: info.pageUrl
    }
    let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
    window.open(urlQueary,'_blank');
  } else if (info.menuItemId == 'add_card_selection_front') {
    let query = {
      type: 'front',
      surl: info.pageUrl,
      front: info.selectionText
    }
    let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
    window.open(urlQueary,'_blank');
  } else if (info.menuItemId == 'add_card_selection_back') {
    let query = {
      type: 'back',
      surl: info.pageUrl,
      front: info.selectionText
    }
    let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
    window.open(urlQueary,'_blank');
  }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

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
  contexts: ["all"],
});

});


