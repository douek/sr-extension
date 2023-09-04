function onClickHandler(info) {
  if (info.menuItemId == "add_card_all") {
    let query = {
      surl: info.pageUrl,
    };
    let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
    window.open(urlQueary, "_blank");
  } else if (info.menuItemId == "add_card_selection_front") {
    let query = {
      surl: info.pageUrl,
      front: info.selectionText,
    };
    let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
    window.open(urlQueary, "_blank");
  } else if (info.menuItemId == "add_card_selection_back") {
    let query = {
      surl: info.pageUrl,
      front: info.selectionText,
    };
    let urlQueary = `${ROOT_SR_URL}/new/${qs.stringify(query)}`;
    window.open(urlQueary, "_blank");
  }
}
