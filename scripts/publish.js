var ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
  console.info('发布失败', err);
});

console.info('发布成功！');
