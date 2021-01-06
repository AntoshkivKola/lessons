'use strict';

const newsPaper = {
  title: 'FC daily',
  articles: ['test1', 'test2', 'article1', 'INTERESTING1'],

  showArticle(){
    this.articles.forEach(function(currentArticle, index){
      console.log(`${index + 1}: ${currentArticle}`);
    });
  }
}
newsPaper.showArticle();