# ldp-workspace

# Contacts formats
- vcard http://microformats.org/wiki/vcard
- jcard http://microformats.org/wiki/jcard
- hcard http://microformats.org/wiki/hcard-fr



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
- https://github.com/solid/solid-rest/blob/master/tests/browser-test.html
- https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB
- https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB
- https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Offline_Service_workers
- https://medium.com/js-dojo/how-to-permanently-save-data-with-vuex-localstorage-in-your-vue-app-f1d5c140db69
- https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#Integrating-Vuex-with-Local-Storage

# custom service worker
- https://levelup.gitconnected.com/vue-pwa-example-298a8ea953c9
