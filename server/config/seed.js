/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Post = require('../api/post/post.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Post.find({}).remove(function() {
  Post.create({
    title : '0',
    contents : '![Alt text](http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-119527.jpg "Optional title")',
    posted: new Date(100000000),
    public: false
  }, {
    title : '1',
    contents : '![Alt text](/assets/images/yeoman.png "Optional title")',
    posted: new Date(200000000),
    public: true
  }, {
    title : '2',
    contents : '#Hello world\n```\n#include <iostream>\n\nint main(){\n\n\treturn 0;\n}\n```',
    posted: new Date(300000000),
    public: true
  },  {
    title : '3',
    contents : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    posted: new Date(400000000),
    public: true
  },  {
    title : '4',
    contents : '5 process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    posted: new Date(500000000),
    public: true
  },{
    title : '5',
    contents : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    posted: new Date(600000000),
    public: true
  }, {
    title : '6',
    contents : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    posted: new Date(700000000),
    public: true
  }, {
    title : '7',
    contents : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    posted: new Date(800000000),
    public: true
  }, {
    title : '8',
    contents : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
    posted: new Date(900000000),
    public: true
  }, {
    title : 'Title4',
    contents : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    posted: new Date(1382312333333 + Math.floor(Math.random() * 12312333333)),
    public: true
  },  {
    title : 'Title5',
    contents : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    posted: new Date(1382312333333 + Math.floor(Math.random() * 12312333333)),
    public: true
  },{
    title : 'Title6',
    contents : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    posted: new Date(1382312333333 + Math.floor(Math.random() * 12312333333)),
    public: true
  }, {
    title : 'Title1',
    contents : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    posted: new Date(1382312333333 + Math.floor(Math.random() * 12312333333)),
    public: true
  }, {
    title : 'Title2',
    contents : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    posted: new Date(),
    public: true
  }, {
    title : 'Title3',
    contents : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
    posted: new Date(),
    public: true
  },  {
    title : 'Title4',
    contents : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    posted: new Date(),
    public: true
  },  {
    title : 'Title5',
    contents : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    posted: new Date(),
    public: true
  },{
    title : 'Title6',
    contents : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    posted: new Date(),
    public: true
  }, {
    title : 'Image From WallHeaven',
    contents : '![Alt text](http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-119527.jpg "Optional title")',
    posted: new Date(),
    public: true
  }, {
    title : 'HIDDEN',
    contents : '![Alt text](/assets/images/yeoman.png "Optional title")',
    posted: new Date(),
    public: false
  });
});



User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Dale',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
