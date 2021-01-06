'use strict';

const newsPaper = {
  title: 'FC daily',
  articles: ['test1', 'test2', 'article1', 'INTERESTING1'],

  showArticle(){
    this.articles.forEach((currentArticle, index) => {
      console.log(`${this.title}: ${index + 1}: ${currentArticle}`);
    });
  }
}
newsPaper.showArticle();