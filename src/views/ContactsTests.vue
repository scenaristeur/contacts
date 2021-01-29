<template>
  <b-container>


    <b-button v-b-modal.newContact @click="initVcard">New Contact</b-button>




    <b-list-group>
      <b-list-group-item>Default list group item</b-list-group-item>
      <b-list-group-item variant="primary">Primary list group item</b-list-group-item>
      <b-list-group-item variant="secondary">Secondary list group item</b-list-group-item>
      <b-list-group-item variant="success">Success list group item</b-list-group-item>
      <b-list-group-item variant="danger">Danger list group item</b-list-group-item>
      <b-list-group-item variant="warning">Warning list group item</b-list-group-item>
      <b-list-group-item variant="info">Info list group item</b-list-group-item>
      <b-list-group-item variant="light">Light list group item</b-list-group-item>
      <b-list-group-item variant="dark">Dark list group item</b-list-group-item>
    </b-list-group>

    
    <b-card-group deck>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img src="http://api.randomuser.me/portraits/women/57.jpg" width=75 class="img-responsive img-circle" alt="Circle image"></b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

      </b-card-group>


    <!-- {{ contacts }} -->
    <div class="row">
      <div class="col-xs-12 col-sm-offset-3 col-sm-6">
        <div class="panel panel-default">

          <ul class="list-group" id="contact-list">
            <li class="list-group-item" v-for="c in contacts" :key="c['@id']" button>
              <div class="col-xs-12 col-sm-3">
                    <b-img src="http://api.randomuser.me/portraits/women/57.jpg" class="m1" width=75 height=75 rounded="circle" alt="Circle image"></b-img>
                <!-- <img src="http://api.randomuser.me/portraits/women/57.jpg" alt="Scott Stevens" class="img-responsive img-circle" /> -->
              </div>
              <div class="col-xs-12 col-sm-9">
                <span class="name">{{c['vcard:hasName']}}</span><br/>
                <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
                <span class="visible-xs"> <span class="text-muted">5842 Hillcrest Rd</span><br/></span>
                <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(870) 288-4149"></span>
                <span class="visible-xs"> <span class="text-muted">(870) 288-4149</span><br/></span>
                <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" :title="c['vcard:hasEmail']"></span>
                <span class="visible-xs"> <span class="text-muted">{{c['vcard:hasEmail']}}</span><br/></span>

                <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" :title="c['solid:hasWebId']"></span>
                <span class="visible-xs"> <span class="text-muted">{{c['solid:hasWebId']}}</span><br/></span>
              </div>
              <div class="clearfix"></div>
              <!-- {{c}} -->
            </li>

          </ul>
        </div>
      </div>
    </div>


    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body p-t-0">
              <div class="input-group">
                <input type="text" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Search">
                <span class="input-group-btn">
                  <button type="button" class="btn btn-effect-ripple btn-primary"><i class="fa fa-search"></i></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src="https://bootdey.com/img/Content/user_1.jpg" alt="">
                </a>
                <div class="pull-right btn-group-sm">
                  <a href="#" class="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fa fa-close"></i>
                  </a>
                </div>
                <div class="info">
                  <h4>Jonathan Smith</h4>
                  <p class="text-muted">Graphics Designer</p>
                </div>
              </div>
              <div class="clearfix"></div>
              <hr>
              <ul class="social-links p-b-10  list-group list-group-horizontal">
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-6">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src="https://bootdey.com/img/Content/user_2.jpg" alt="">
                </a>
                <div class="pull-right btn-group-sm">
                  <a href="#" class="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fa fa-close"></i>
                  </a>
                </div>
                <div class="info">
                  <h4>Jonathan Smith</h4>
                  <p class="text-muted">Graphics Designer</p>
                </div>
              </div>
              <div class="clearfix"></div>
              <hr>
              <ul class="social-links p-b-10  list-group list-group-horizontal">
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-6">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src="https://bootdey.com/img/Content/user_3.jpg" alt="">
                </a>
                <div class="pull-right btn-group-sm">
                  <a href="#" class="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fa fa-close"></i>
                  </a>
                </div>
                <div class="info">
                  <h4>Jonathan Smith</h4>
                  <p class="text-muted">Graphics Designer</p>
                </div>
              </div>
              <div class="clearfix"></div>
              <hr>
              <ul class="social-links p-b-10  list-group list-group-horizontal">
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-6">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src="https://bootdey.com/img/Content/user_1.jpg" alt="">
                </a>
                <div class="pull-right btn-group-sm">
                  <a href="#" class="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fa fa-close"></i>
                  </a>
                </div>
                <div class="info">
                  <h4>Jonathan Smith</h4>
                  <p class="text-muted">Graphics Designer</p>
                </div>
              </div>
              <div class="clearfix"></div>
              <hr>
              <ul class="social-links p-b-10  list-group list-group-horizontal">
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-6">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src="https://bootdey.com/img/Content/user_2.jpg" alt="">
                </a>
                <div class="pull-right btn-group-sm">
                  <a href="#" class="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fa fa-close"></i>
                  </a>
                </div>
                <div class="info">
                  <h4>Jonathan Smith</h4>
                  <p class="text-muted">Graphics Designer</p>
                </div>
              </div>
              <div class="clearfix"></div>
              <hr>
              <ul class="social-links p-b-10  list-group list-group-horizontal">
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-6">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src="https://bootdey.com/img/Content/user_3.jpg" alt="">
                </a>
                <div class="pull-right btn-group-sm">
                  <a href="#" class="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fa fa-close"></i>
                  </a>
                </div>
                <div class="info">
                  <h4>Jonathan Smith</h4>
                  <p class="text-muted">Graphics Designer</p>
                </div>
              </div>
              <div class="clearfix"></div>
              <hr>
              <ul class="social-links p-b-10  list-group list-group-horizontal">
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="#" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



    <b-modal id="newContact" title="New Contact" @ok="createVcard">
      <!-- <p class="my-4">Hello from modal!</p> -->
      <NewContact :vcard="vcard"/>
    </b-modal>

  </b-container>
</template>

<script>
import Vcard from '@/models/Vcard.js'
import { mapState } from 'vuex';

export default {
  name: 'Contacts',
  components: {
    // 'LdpServer': () => import('@/components/config/LdpServer'),
    // 'AxiosPost': () => import('@/components/axios/AxiosPost'),
    // 'Tableau': () => import('@/components/basic/Tableau'),
    // 'VCard': () => import('@/components/basic/VCard'),
    'NewContact': () => import('@/views/NewContact'),

    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },
  data() {
    return {
      vcard: {}
    };
  },
  methods: {
    initVcard() {
      this.vcard = new Vcard()
      console.log("vcard", this.vcard)

      // this.options = this.vcard.jsonld['@context'].defines.filter(function(f) {
      //   return f['@type'] != 'owl:Class' && f.deprecated != true;
      // }).map(f => ( {value: f, text: f.label+' '+f['@type']} ))
      //
      // // var result = arr.map(person => ({ value: person.id, text: person.name }));
      // this.options.unshift({value: null, text:'Add a field'})
      // console.log("options", this.options)
    },
    createVcard(){
      console.log(this.vcard)
      this.$store.dispatch('contacts/add',this.vcard)
    }
  },
  watch:{
    storage(){
      this.$store.dispatch('contacts/findAll')
    }
  },
  computed: mapState({
    contacts: s =>  s.contacts.contacts,
    storage: s => s.solid.storage

  }),

}
</script>

<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

body {
  padding: 30px 0px 60px;
}
.panel > .list-group .list-group-item:first-child {
  /*border-top: 1px solid rgb(204, 204, 204);*/
}
@media (max-width: 767px) {
  .visible-xs {
    display: inline-block !important;
  }
  .block {
    display: block !important;
    width: 100%;
    height: 1px !important;
  }
}
#back-to-bootsnipp {
  position: fixed;
  top: 10px; right: 10px;
}


.c-search > .form-control {
  border-radius: 0px;
  border-width: 0px;
  border-bottom-width: 1px;
  font-size: 1.3em;
  padding: 12px 12px;
  height: 44px;
  outline: none !important;
}
.c-search > .form-control:focus {
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none;
}
.c-search > .input-group-btn .btn {
  border-radius: 0px;
  border-width: 0px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  height: 44px;
}


.c-list {
  padding: 0px;
  min-height: 44px;
}
.title {
  display: inline-block;
  font-size: 1.7em;
  font-weight: bold;
  padding: 5px 15px;
}
ul.c-controls {
  list-style: none;
  margin: 0px;
  min-height: 44px;
}

ul.c-controls li {
  margin-top: 8px;
  float: left;
}

ul.c-controls li a {
  font-size: 1.7em;
  padding: 11px 10px 6px;
}
ul.c-controls li a i {
  min-width: 24px;
  text-align: center;
}

ul.c-controls li a:hover {
  background-color: rgba(51, 51, 51, 0.2);
}

.c-toggle {
  font-size: 1.7em;
}

.name {
  font-size: 1.7em;
  font-weight: 700;
}

.c-info {
  padding: 5px 10px;
  font-size: 1.25em;
}
</style>
