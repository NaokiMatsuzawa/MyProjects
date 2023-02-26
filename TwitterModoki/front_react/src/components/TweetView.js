import './TweetView.css'

function SingleTweetView({tweet}){
    return(
        <div className="SingleTweet">
            <fieldset>
                <div className="userText">
                    {tweet.userId}
                </div>
                <div className="tweetText">
                    {tweet.message}
                </div>
            </fieldset>
        </div>
    );
}


function TweetView(){
    const tweets = makeTweetListForLocal();
    
    return(
        <div className="DispTweet">
            {tweets.map(tweet => <SingleTweetView tweet={tweet} key={tweet.tweetId} />)}
        </div>
    );
}

function makeTweetListForLocal(){
    return [{
        tweetId : 0,
        userId : 0,
        message : "Test"
    },
    {
        tweetId : 1,
        userId : 0,
        message : "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"
    },
    {
        tweetId : 2,
        userId : 0,
        message : `祇園精舍の鐘の声、諸行無常の響きあり。
        娑羅双樹の花の色、盛者必衰の理をあらはす。
        おごれる人も久しからず、ただ春の夜の夢のごとし。
        猛き者もつひには滅びぬ、ひとへに風の前の塵に同じ。`
    },
    {
        tweetId : 3,
        userId : 0,
        message : "https://ja.reactjs.org/"
    },
    {
        tweetId : 4,
        userId : 0,
        message : "#ハッシュタグ"
    },];
}

export default TweetView;