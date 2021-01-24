# ldp-workspace

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

modifier dans semapps/services/ldp.services.js pour ajouter les containers suivants
containers: [ '/persons', '/files',
  '/workspaces', '/bases',
  '/tables', '/records',
  '/fields', '/tasks',
  '/documents', '/tags',
  '/offers', '/needs',
  '/things', '/skills',
  '/categories'],



# or install solid community-server
- https://github.com/solid/community-server/
- https://github.com/solid/community-server/issues/528


# start from scratch
https://dfaveris.medium.com/portfolio-comment-cr%C3%A9er-une-application-web-portfolio-bas%C3%A9e-sur-solid-avec-vue-js-c57b50502d21

# axios Post patch...
https://serversideup.net/post-put-patch-requests-with-vuejs-and-axios/

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
