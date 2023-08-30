---
title: new name 1111
---
{uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/store/filesystem.js'}

send @ browser.ts:111

transmit @ browser.js:383

LOG @ browser.js:310

(anonymous) @ browser.js:287

error @ legacy-shim.ts:8

loadLocalSwmFile @ null:370

await in loadLocalSwmFile (async)

wrappedActionHandler @ vuex.esm-bundler.js:322

dispatch @ vuex.esm-bundler.js:1055

boundDispatch @ vuex.esm-bundler.js:937

loadLocalSwmFile @ initData.ts:76

setUnitData @ initData.ts:367

await in setUnitData (async)

loadStepsInBackground @ playlist.ts:116

initPlaylistData @ index.ts:155

Show 6 more frames

Show less

httpRequest.ts:70 Cross-Origin Read Blocking (CORB) blocked cross-origin response <https://logs.browser-intake-datadoghq.eu/api/v2/logs?ddsource=browser&ddtags=sdk_version%3A4.46.0%2Capi%3Abeacon%2Cenv%3Adev%2Cservice%3Aswimm-web%2Cversion%3A1.16.0&dd-api-key=pub469a2a2a78407f58ead45a1580bce140&dd-evp-origin-version=4.46.0&dd-evp-origin=browser&dd-request-id=dac8e5ba-b42c-4a0b-87db-087aff18a11d> with MIME type application/json. See <https://www.chromestatus.com/feature/5629709824032768> for more details.

sendBeaconStrategy @ httpRequest.ts:70

sendOnExit @ httpRequest.ts:56

Batch2.flush @ batch.ts:38

(anonymous) @ batch.ts:19

(anonymous) @ observable.ts:27

Observable2.notify @ observable.ts:27

flush @ flushController.ts:56

(anonymous) @ flushController.ts:38

(anonymous) @ observable.ts:27

Observable2.notify @ observable.ts:27

addEventListeners.capture @ pageExitObservable.ts:37

callMonitored @ monitor.ts:51

(anonymous) @ monitor.ts:34

Show 13 more frames

Show less

browser.ts:111 \[NO CLOUD\] cloudPageViewed: Endpoint /pageViewedEvent | with payload: {"identity":"DRxMdBNMLUaj9Vg8uiyWMZaAe6k2","timestamp":"2023-08-30T13:02:17.553Z","name":"Loaded a Page","properties":{"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"loaded_a_page","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Page Name":"Repo Page","URL":"/workspaces/rLskgfjcuP5dfN7bURYP/repos/Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=/branch/testing-playlists-drafts","app_version":"1.16.0","Platform":"WebApp"}} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: *loaded*a_page | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"loaded_a_page","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Page Name":"Repo Page","URL":"/workspaces/rLskgfjcuP5dfN7bURYP/repos/Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=/branch/testing-playlists-drafts","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: View In this branch Tab | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"view_in_this_branch_tab","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Branch":"testing-playlists-drafts","Type":"Page","Total Docs to Review":10,"Total Doc Requests":0,"Multiple Versions Exist":false,"Number of Docs":59,"Number Of Playlists":19,"Number Of Drafts":0,"Number Of Pull Requests":0,"app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: Clicked New | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"clicked_new","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: View "Creation Hub" | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"view_creation_hub","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Type":"Modal","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: Selected "Creation Hub"s Option | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"selected_creation_hubs_option","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Option Selected ":"Blank doc","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

{uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/store/filesystem.js'}

send @ browser.ts:111

transmit @ browser.js:383

LOG @ browser.js:310

(anonymous) @ browser.js:287

error @ legacy-shim.ts:8

loadLocalSwmFile @ null:370

await in loadLocalSwmFile (async)

wrappedActionHandler @ vuex.esm-bundler.js:322

dispatch @ vuex.esm-bundler.js:1055

boundDispatch @ vuex.esm-bundler.js:937

loadLocalSwmFile @ initData.ts:76

setUnitData @ initData.ts:367

await in setUnitData (async)

loadStepsInBackground @ playlist.ts:116

initPlaylistData @ index.ts:155

Show 6 more frames

Show less

httpRequest.ts:70 Cross-Origin Read Blocking (CORB) blocked cross-origin response <https://logs.browser-intake-datadoghq.eu/api/v2/logs?ddsource=browser&ddtags=sdk_version%3A4.46.0%2Capi%3Abeacon%2Cenv%3Adev%2Cservice%3Aswimm-web%2Cversion%3A1.16.0&dd-api-key=pub469a2a2a78407f58ead45a1580bce140&dd-evp-origin-version=4.46.0&dd-evp-origin=browser&dd-request-id=dac8e5ba-b42c-4a0b-87db-087aff18a11d> with MIME type application/json. See <https://www.chromestatus.com/feature/5629709824032768> for more details.

sendBeaconStrategy @ httpRequest.ts:70

sendOnExit @ httpRequest.ts:56

Batch2.flush @ batch.ts:38

(anonymous) @ batch.ts:19

(anonymous) @ observable.ts:27

Observable2.notify @ observable.ts:27

flush @ flushController.ts:56

(anonymous) @ flushController.ts:38

(anonymous) @ observable.ts:27

Observable2.notify @ observable.ts:27

addEventListeners.capture @ pageExitObservable.ts:37

callMonitored @ monitor.ts:51

(anonymous) @ monitor.ts:34

Show 13 more frames

Show less

browser.ts:111 \[NO CLOUD\] cloudPageViewed: Endpoint /pageViewedEvent | with payload: {"identity":"DRxMdBNMLUaj9Vg8uiyWMZaAe6k2","timestamp":"2023-08-30T13:02:17.553Z","name":"Loaded a Page","properties":{"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"loaded_a_page","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Page Name":"Repo Page","URL":"/workspaces/rLskgfjcuP5dfN7bURYP/repos/Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=/branch/testing-playlists-drafts","app_version":"1.16.0","Platform":"WebApp"}} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: *loaded*a_page | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"loaded_a_page","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Page Name":"Repo Page","URL":"/workspaces/rLskgfjcuP5dfN7bURYP/repos/Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=/branch/testing-playlists-drafts","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: View In this branch Tab | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"view_in_this_branch_tab","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Branch":"testing-playlists-drafts","Type":"Page","Total Docs to Review":10,"Total Doc Requests":0,"Multiple Versions Exist":false,"Number of Docs":59,"Number Of Playlists":19,"Number Of Drafts":0,"Number Of Pull Requests":0,"app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: Clicked New | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"clicked_new","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: View "Creation Hub" | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"view_creation_hub","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Type":"Modal","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

browser.ts:111 \[NO SEGMENT\] track: Selected "Creation Hub"s Option | with payload: {"Workspace ID":"rLskgfjcuP5dfN7bURYP","Repo ID":"Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=","Slug":"selected_creation_hubs_option","Email":"[daniel@swimm.io](mailto:daniel@swimm.io)","Option Selected ":"Blank doc","app_version":"1.16.0","Platform":"WebApp"} | with options: {"addRouteParams":true,"shouldSendCloud":false} {uid: 'DRxMdBNMLUaj9Vg8uiyWMZaAe6k2', name: 'apps/web/src/common/composables/useAnalytics.ts'}

&nbsp;

<SwmMeta repo-id="Z2l0aHViJTNBJTNBc3ItZXh0ZW5zaW9uJTNBJTNBZG91ZWs=" repo-name="sr-extension"><sup>Powered by [Swimm](http://localhost:5000/)</sup></SwmMeta>
