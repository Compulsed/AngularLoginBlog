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
    title : 'Image From WallHeaven',
    contents : '![Alt text](http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-119527.jpg "Optional title")',
    posted: new Date()
  }, {
    title : 'Image from server',
    contents : '![Alt text](/assets/images/yeoman.png "Optional title")',
    posted: new Date()
  }, {
    title : 'Code',
    contents : '#Hello world\n```\n#include <iostream>\n\nint main(){\n\n\treturn 0;\n}\n```',
    posted: new Date()
  },  {
    title : 'Title4',
    contents : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    posted: new Date()
  },  {
    title : 'Title5',
    contents : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    posted: new Date()
  },{
    title : 'Title6',
    contents : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    posted: new Date()
  }, {
    title : 'Title1',
    contents : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    posted: new Date()
  }, {
    title : 'Title2',
    contents : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    posted: new Date()
  }, {
    title : 'Title3',
    contents : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
    posted: new Date()
  },  {
    title : 'Title4',
    contents : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    posted: new Date()
  },  {
    title : 'Title5',
    contents : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    posted: new Date()
  },{
    title : 'Title6',
    contents : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    posted: new Date()
  }, {
    title : 'Title1',
    contents : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    posted: new Date()
  }, {
    title : 'Title2',
    contents : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    posted: new Date()
  }, {
    title : 'Title3',
    contents : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
    posted: new Date()
  },  {
    title : 'Title4',
    contents : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    posted: new Date()
  },  {
    title : 'Title5',
    contents : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    posted: new Date()
  },{
    title : 'Title6',
    contents : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    posted: new Date()
  }, {
    title : 'Image From WallHeaven',
    contents : '![Alt text](http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-119527.jpg "Optional title")',
    posted: new Date()
  }, {
    title : 'Image from server',
    contents : '![Alt text](/assets/images/yeoman.png "Optional title")',
    posted: new Date()
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
