import marked from 'marked';
console.log("controller tweet")
class TweetCtrl {
  // constructor(tweet, User, $sce, $rootScope) {
  constructor(tweet, $sce, $rootScope) {
    'ngInject';

    this.tweet = tweet;

    // this.currentUser = User.current;

    $rootScope.setPageTitle("@"+this.tweet.author.username);

    this.tweet.body = $sce.trustAsHtml(marked(this.tweet.body, { sanitize: true }));
    console.log(this.tweet);
  }


}


export default TweetCtrl;