# contacts
Replace your current multi-device contact application with
[Contacts](https://scenaristeur.github.io/contacts/) .
with [Contacts](https://scenaristeur.github.io/contacts/), your informations are not stored on any GAFAM server,
they are stored on your SOLID POD and you choose who can access it.
Please be aware of Solid Security restrictions or ask on [Solid Community Forum](https://forum.solidproject.org/)


# Contacts formats
- vcard http://microformats.org/wiki/vcard
- jcard http://microformats.org/wiki/jcard
- hcard http://microformats.org/wiki/hcard-fr

#vue-offline
- https://github.com/filrak/vue-offline


# offline first
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_complex_data_%E2%80%94_indexeddb
--> /tutoidb
ou https://schoovaertswout.medium.com/offline-first-with-progressive-web-apps-part-1-3-102e61992567
ou https://okode.com/offline-first-progressive-web-applications/
ou https://www.pgs-soft.com/blog/how-to-build-offline-first-progressive-web-apps-pwas-with-react-redux/

__________________________________
#### Note from another project, todo : migartion
___________________________________

# error with npm update
Syntax Error: TypeError: eslint.CLIEngine is not a constructor

delete in package cli-plugin-eslint, remove package.json, & node_modules


# prerequist
- install semapps or solid community-server and run with
```
npm start -- -c config/config-file.json -f /Documents/ -p 3005

```

# install semapps
- official docker version
https://semapps.org/docs/guides/ldp-server#testing-your-ldp-server

- hack without docker version
https://dfaveris.medium.com/installer-semapps-sans-docker-b92f3574f07f

- créer un dataset Fuseki /localData

modifier dans semapps/services/ldp.services.js pour ajouter les containers suivants
containers: [ '/persons', '/files',
'/workspaces', '/bases',
'/tables', '/records',
'/fields', '/tasks',
'/documents', '/tags',
'/offers', '/needs',
'/things', '/skills',
'/categories',
'/models', '/collections',
'/views',
'/schemas',
'/vcards',
'/contexts'],



# or install solid community-server
- https://github.com/solid/community-server/
- https://github.com/solid/community-server/issues/528
- exemples : https://github.com/solid/community-server-demos/blob/main/solid-world-2020-sep/steps.sh

```
curl -X POST -H "Content-Type: text/turtle" -d "<ex:s> <ex:p> <ex:o>."  http://localhost:3000/
curl -X PUTT -H "Content-Type: text/turtle" -d "<ex:s> <ex:p> <ex:o>."  http://localhost:3000/persons/
curl -X POST -H "Content-Type: text/turtle" -d "<ex:s> <ex:p> <ex:o>."  http://localhost:3000/persons/
```

# start from scratch
https://dfaveris.medium.com/portfolio-comment-cr%C3%A9er-une-application-web-portfolio-bas%C3%A9e-sur-solid-avec-vue-js-c57b50502d21

# axios Post patch...
axios ne passe pas , préférer fetch https://serversideup.net/post-put-patch-requests-with-vuejs-and-axios/

# models
- https://backbonejs.org/#Getting-started
- backbone + https://www.npmjs.com/package/backbone-json-schema et https://github.com/jashkenas/backbone/blob/master/examples/todos/todos.js
-> a voir pour l'installer sans jquery https://github.com/jashkenas/backbone/wiki/Using-Backbone-without-jQuery
(- https://forum.vuejs.org/t/model-collection-conventions/8193/5
 - https://github.com/laoshu133/v-model )

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Build and publish on gh-pages
remove /dist in .gitignore
first commit :

```
npm run build
git add dist -f && git commit -m "Initial dist subtree commit"
```
then for each commit
```
npm run git -- "modif"
```
### json pretty print in a vuejs component
https://www.npmjs.com/package/vue-json-pretty

## common pattern solid Axios
https://www.codingame.com/playgrounds/51181/common-patterns-with-solid/managing-notifications

## don't use axios for POST to semapps ldp
axios uses xmlhttprequest and don't post correct json-ld

## tables vuetify
https://vuetifyjs.com/en/components/data-tables/#crud-actions

# schema generator
https://schema.pythonanywhere.com/Person

# examples json-ld
https://github.com/JayHoltslander/Structured-Data-JSON-LD
https://search.google.com/structured-data/testing-tool?url=https://raw.githubusercontent.com/JayHoltslander/Structured-Data-JSON-LD/master/Person.json#url=https%3A%2F%2Fraw.githubusercontent.com%2FJayHoltslander%2FStructured-Data-JSON-LD%2Fmaster%2FPerson.json
exemples schema:article https://search.google.com/structured-data/testing-tool?url=https://raw.githubusercontent.com/JayHoltslander/Structured-Data-JSON-LD/master/Article.json#url=https%3A%2F%2Fraw.githubusercontent.com%2FJayHoltslander%2FStructured-Data-JSON-LD%2Fmaster%2FArticle.json

https://json-ld.org/contexts/person.html
```
{
  "@context": "http://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
}
```

https://json-ld.org/contexts/person.html inclut vcard mais pas https://json-ld.org/contexts/person.jsonld

# vcard
https://github.com/enesser/vCards-js
http://jsfiddle.net/totoe/vy2GL/
https://medium.com/@404sd/building-your-vcard-using-bootstrap-4-a37f1ce57206


#checkout
https://lightit.io/blog/tailwind-vue-checkout-form/

# ultimate skeleton card
https://vusc.surge.sh/guide/components.html#skeletonscaffold

# simple card
https://codepen.io/raphael_octau/pen/ePLPJW

# card caroussel
https://vuejsexamples.com/a-multi-item-card-carousel-in-vue/

# data
- https://data-techcico.semapps.org/organizations/
- https://colibris.social/actors
- http://fluidlog.gitlab.io/cartosemapps/#https://data-techcico.semapps.org/sparql

# contacts list
- https://www.bootdey.com/snippets/tagged/contacts
- https://www.bootdey.com/snippets/view/Contact-List
- https://bootsnipp.com/snippets/4l0k2

# solid vocabularies
http://solid.github.io/vocab/

# localstorage / indexdb / solid-rest
- with vuejs https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs
put : with key, post : withoutkey
- https://github.com/solid/solid-rest/blob/master/tests/browser-test.html
- https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB
- https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB
- https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Offline_Service_workers
- https://medium.com/js-dojo/how-to-permanently-save-data-with-vuex-localstorage-in-your-vue-app-f1d5c140db69
- https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#Integrating-Vuex-with-Local-Storage
- impossible to index JSON-LD https://lists.w3.org/Archives/Public/public-webapps/2013JulSep/0211.html
- alternative webdb https://www.npmjs.com/package/@beaker/webdb
- indexdb dynamically upgrade base version number https://stackoverflow.com/questions/20097662/how-to-create-multiple-object-stores-in-indexeddb
- dive in indexdb https://flaviocopes.com/indexeddb/
- indexeddb n'accepterait pas @id come keyPath : https://stackoverflow.com/questions/43273983/invalid-key-path-in-indexeddb-restrictions
- dexie universal id @id  https://dexie.org/cloud/
- + https://publift.com/what-is-universal-id/
- avec callbacks https://www.codemag.com/Article/1411041/Introduction-to-IndexedDB-The-In-Browser-Database




# jsonld expanded query
https://www.npmjs.com/package/ld-query

# custom service worker
- https://levelup.gitconnected.com/vue-pwa-example-298a8ea953c9

# use contact picker for import
- https://contact-picker.glitch.me/ & https://web.dev/contact-picker/

# share media on cantact page
<b-button>Send audio / video / pic</b-button>
https://whatwebcando.today/camera-microphone.html

# vuetable or vuetify-table ?
https://www.vuetable.com/guide/

# ouchdb serviceworker
https://github.com/pouchdb-community/worker-pouch

# jsonml
- store XHTML as json http://www.jsonml.org/ https://github.com/mckamey/jsonml

# rdf store
- https://npmdoc.github.io/node-npmdoc-rdfstore/build/apidoc.html
- https://github.com/antoniogarrote/rdfstore-js#documentation


# progressive web app caching
- https://egghead.io/lessons/vue-js-intro-to-offline-first-progressive-web-apps-in-vue-js
- https://hackernoon.com/build-a-progressive-web-app-in-vuejs-from-zero-to-hero-part-2-the-service-worker-d9babc3d756f
- https://www.freecodecamp.org/news/how-to-make-your-app-work-offline-with-the-power-of-javascript-685d968bcfbb/

# extend vcard with socialprofil like solid

```
socialProfile;type=linkedin:http://www.linkedin.com/in/barryleiba
socialProfile;type=facebook:http://www.facebook.com/barackobama
socialProfile;type=solid:https://www.spoggy-test5.solidcommunity.net/profile/card#me
```
- https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
- https://forum.solidproject.org/t/in-which-vocabulary-is-the-solid-haswebid-predicate-defined/3884/13
- https://apple.stackexchange.com/questions/355047/how-do-you-add-a-custom-social-profile-in-contacts-on-macos/400432
- https://alessandrorossini.org/the-sad-story-of-the-vcard-format-and-its-lack-of-interoperability/
- https://fr.wikipedia.org/wiki/CardDAV client-serveur protocol
- jcard / vcard https://www.npmjs.com/package/jcard-to-vcard

# Contacts vue apps
- https://vuejsexamples.com/mobile-contacts-component-for-vue/ & https://github.com/chiaweilee/vue-contacts
- https://kots.pro/contacts & https://github.com/floydkots/contacts
- https://github.com/hemantsinghi/contacts-app
- vue3 contact app https://www.reddit.com/r/vuejs/comments/kl6nz5/vue_3_composition_api_tutorial_lets_refactor_a/
