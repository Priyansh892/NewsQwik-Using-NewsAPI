import React from 'react'
import NewsItem from './NewsItem'
import Spinner from 'react-bootstrap/Spinner';
export default function News() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [articles, setarticles] = React.useState([]);

  React.useEffect(() => {

    const url= "https://newsapi.org/v2/everything?q=keyword&apiKey=ccc2ede285734ee0b64302014cace803";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setarticles(json.articles))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (articles.length !== 0) {
      setIsLoading(false);
    }
    console.log(articles);
  }, [articles]);

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetchNewsItems(page);
  }, [page]);

  const fetchNewsItems = async (page) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=ccc2ede285734ee0b64302014cace803&page=${page}`);
    const data = await response.json();
    setarticles(data.articles);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };
  return (
    <div className="container my-3">
      <div className="row mt-3">

      <div className="container d-flex justify-content-between">
                  <button type="button" className="btn btn-dark" onClick={handlePrevClick} disabled={page === 1}>
              &larr; Previous
              </button>
            <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
    
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
        ) : (
          articles.map((element) =>
            <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url}></NewsItem>
            </div>
          )
        )
        }
      </div>

    </div>

  );


  
  // React.useEffect(() => {
  //   const url = "https://newsdata.io/api/1/news?apikey=pub_2128558b52cbfb6b8678c7bbb9da6c6ca0328";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setarticles(json.articles))
  //     .catch((error) => console.log(error));
  // }, []);

  // React.useEffect(() => {
  //   if (articles.length !== 0) {
  //     setIsLoading(false);
  //   }
  //   console.log(articles);
  // }, [articles]);

  // return (

  //   <div className="container my-3">
  //     <div className="row mt-3">
    
  //       {isLoading ? (
  //         <div className="d-flex justify-content-center align-items-center">
  //         <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //       </div>
  //       ) : (
  //         articles.map((element) =>
  //           <div className="col-md-4" key={element.url}>
  //             <NewsItem title={element.title.slice(0, 57)} description={element.description.slice(0, 75)} image_url={element.image_url} url={element.url}></NewsItem>
  //           </div>
  //         )
  //       )
  //       }
  //     </div>
  //   </div>

  // );

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [articles, setarticles] = React.useState([]);

  // React.useEffect(() => {
  //   const url = "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=12&apikey=4fe323ab8920d4697bb3f85defbe5b85";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setarticles(json.articles))
  //     .catch((error) => console.log(error));
  // }, []);

  // React.useEffect(() => {
  //   if (articles.length !== 0) {
  //     setIsLoading(false);
  //   }
  //   console.log(articles);
  // }, [articles]);

  // return (

  //   <div className="container my-3">
  //     <div className="row mt-3">
    
  //       {isLoading ? (
  //         <div className="d-flex justify-content-center align-items-center">
  //         <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //       </div>
  //       ) : (
  //         articles.map((element) =>
  //           <div className="col-md-4" key={element.url}>
  //             <NewsItem title={element.title.slice(0, 57)} description={element.description.slice(0, 75)} image={element.image} url={element.source.url}></NewsItem>
  //           </div>
  //         )
  //       )
  //       }
  //     </div>
  //   </div>

  // );
}



/*Page previous and next only works if we have paid subscription to GNews API */

/*function NewsItems() {
  const [newsItems, setNewsItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNewsItems(page);
  }, [page]);

  const fetchNewsItems = async (page) => {
    const response = await fetch(`https://api.example.com/news?page=${page}`);
    const data = await response.json();
    setNewsItems(data);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>News Items</h1>
      <ul>
        {newsItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={handlePrevClick} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default NewsItems;
 */




/*Extract NewsItems without using API */

/*//   const articles=[
  //     {
  //         "title": "Man Riding Bike In River-We Have Officially Seen Everything",
  //         "description": "The video seemed like a perfect example of “Where there is a will there's a way.”",
  //         "content": "Social media is swamped with eccentric content, and one can never know what they stumble upon next. Adding to the long list of such posts, here’s a video showing a man riding a motorcycle through a river. Can’t believe it? Wait till you watch it your... [2638 chars]",
  //         "url": "https://www.news18.com/viral/man-riding-bike-in-river-we-have-officially-seen-everything-7497343.html",
  //         "image": "https://images.news18.com/ibnlive/uploads/2023/04/man-riding-bike-in-river-168093633716x9.png",
  //         "publishedAt": "2023-04-08T06:46:47Z",
  //         "source": {
  //             "name": "News18",
  //             "url": "https://www.news18.com"
  //         }
  //     },
  //     {
  //         "title": "Billionaires pile into media outlet streaming video to youth",
  //         "description": "Brut is but one example of how ultra-wealthy people who made fortunes in other sectors have pivoted to invest in media companies, often in a bid to gain prestige and influence",
  //         "content": "A youth-focused media company that churns out fast-paced videos has netted another billionaire backer, bringing the total to four of the world’s wealthiest people.\nBrut SAS, the six-year-old operation whose name means raw, has added French shipping t... [4757 chars]",
  //         "url": "https://www.livemint.com/industry/media/billionaires-pile-into-media-outlet-streaming-video-to-youth-11680827634399.html",
  //         "image": "https://www.livemint.com/lm-img/img/2023/04/07/600x338/OTT_1680828220054_1680828225825_1680828225825.jpg",
  //         "publishedAt": "2023-04-06T18:30:00Z",
  //         "source": {
  //             "name": "Livemint",
  //             "url": "https://www.livemint.com"
  //         }
  //     },
  //     {
  //         "title": "In Good Faith: Winning isn’t all, Hardik Pandya sets an ethical example",
  //         "description": "By ruling himself out of a Test series on ethical grounds, Hardik Pandya took a stand that is as rare as it is worthy of emulation",
  //         "content": "The cricketer Hardik Pandya recently cited “ethics” to rule himself out of the race for a slot in the Indian team for the World Test Championship final in June at The Oval. With the Indian team qualifying, given Pandya’s creditable record in Tests in... [5015 chars]",
  //         "url": "https://indianexpress.com/article/opinion/columns/winning-isnt-all-hardik-pandya-sets-an-ethical-example-8540445/",
  //         "image": "https://images.indianexpress.com/2023/04/Pandya.jpg",
  //         "publishedAt": "2023-04-05T11:57:26Z",
  //         "source": {
  //             "name": "The Indian Express",
  //             "url": "https://indianexpress.com"
  //         }
  //     },
  //     {
  //         "title": "Mumbai reels under construction dust ‘devil’",
  //         "description": "Construction has emerged as a key contributing factor for Mumbai’s air pollution, affecting the city’s AQI. For example, between December 1 last year and March 2 this year, when the Gokhale bridge was demolished, Andheri recorded 66 days of ‘poor’ and ‘very poor’ AQI.",
  //         "content": "Mumbai reeled under bad Air Quality Index (AQI) consistently between October 2022 and February 2023. Amid other factors, ongoing construction of several real estate and infrastructure projects across the city has been one of the key contributors to t... [8803 chars]",
  //         "url": "https://indianexpress.com/article/cities/mumbai/mumbai-reels-under-construction-dust-devil-8534463/",
  //         "image": "https://images.indianexpress.com/2023/04/GokhaleBridge2-7col.jpg",
  //         "publishedAt": "2023-04-03T01:31:16Z",
  //         "source": {
  //             "name": "The Indian Express",
  //             "url": "https://indianexpress.com"
  //         }
  //     },
  //     {
  //         "title": "Behavioural biases intaking investment calls",
  //         "description": "Most of the traditional economic theories assume and believe that individuals are consistent, well-informed and hence rational. We all know that this assumption is too facile when it comes to investments. In stock markets for example, when an investor sees the prices of stocks going up and down like a yoyo it gives the investor an adrenaline rush and his decisions will be",
  //         "content": "Most of the traditional economic theories assume and believe that individuals are consistent, well-informed and hence rational. We all know that this assumption is too facile when it comes to investments. In stock markets for example, when an investo... [4335 chars]",
  //         "url": "https://www.deccanherald.com/business/behavioural-biases-intaking-investment-calls-1206007.html",
  //         "image": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/04/03/file7eitlqt16nlwtnb7ihy-1206007-1680483338.jpg",
  //         "publishedAt": "2023-04-02T20:39:02Z",
  //         "source": {
  //             "name": "Deccan Herald",
  //             "url": "https://www.deccanherald.com"
  //         }
  //     },
  //     {
  //         "title": "Sotheby’s to auction Hebrew Bible estimated at $50 million: Why is it so special?",
  //         "description": "In May, Sotheby’s headquarters in New York will be hosting the auction of what could be the most expensive book of all time: a bible estimated up to 50 million dollars. It is said to be one of the oldest in the world, an example of a book unlike any other. What is it really?",
  //         "content": "In May, Sotheby’s headquarters in New York will be hosting the auction of what could be the most expensive book of all time: a bible estimated up to $50 million (Rs 410 crore). It is said to be one of the oldest in the world, an example of a book unl... [6812 chars]",
  //         "url": "https://www.firstpost.com/explainers/sothebys-to-auction-hebrew-bible-estimated-at-50-million-why-is-it-so-special-12385492.html",
  //         "image": "https://images.firstpost.com/wp-content/uploads/2023/03/2023-03-22T113135Z_164897566_RC2XYZ92X7HM_RTRMADP_3_AUCTION-BIBLE-ISRAEL.jpg",
  //         "publishedAt": "2023-04-01T05:35:45Z",
  //         "source": {
  //             "name": "Firstpost",
  //             "url": "https://www.firstpost.com"
  //         }
  //     },
  //     {
  //         "title": "PM Modi flags off Bhopal-Delhi Vande Bharat Express train",
  //         "description": "The prime minister further added that today’s occasion is a prime example of a new order and new traditions being created in modern India",
  //         "content": "NEW DELHI: Prime Minister Narendra Modi on Saturday flagged off the Bhopal-Delhi Vande Bharat Express train in Madhya Pradesh capital.\n“The new train being introduced between Rani Kamlapati Railway station, Bhopal and New Delhi railway station will b... [1506 chars]",
  //         "url": "https://www.livemint.com/news/india/pm-modi-flags-off-bhopal-delhi-vande-bharat-express-train-11th-semi-high-speed-train-in-india-vandebharatexpress-pmmodi-bhopaldelhitrain-11680350616105.html",
  //         "image": "https://www.livemint.com/lm-img/img/2023/04/01/600x338/PM-Modi-flags-off-Bhopal-Delhi-Vande-Bharat-Expres_1680350605339.jpeg",
  //         "publishedAt": "2023-03-31T18:30:00Z",
  //         "source": {
  //             "name": "Livemint",
  //             "url": "https://www.livemint.com"
  //         }
  //     },
  //     {
  //         "title": "US: Russia Seeks Arms-for-food Deal with North Korea",
  //         "description": "The publicizing of Russia's efforts to get weapons from North Korea is just the latest example of the Biden administration loosening restrictions on intelligence findings and making them public over the course of the grinding war in Ukraine",
  //         "content": "The White House on Thursday said it has new evidence that Russia is looking again to North Korea for weapons to fuel the war in Ukraine, this time in a deal that would provide Pyongyang with needed food and other commodities in return.\nIt’s the lates... [2967 chars]",
  //         "url": "https://www.news18.com/world/us-russia-seeks-arms-for-food-deal-with-north-korea-7427335.html",
  //         "image": "https://images.news18.com/ibnlive/uploads/2023/03/untitled-design-1-40-167934564916x9.png",
  //         "publishedAt": "2023-03-30T17:45:34Z",
  //         "source": {
  //             "name": "News18",
  //             "url": "https://www.news18.com"
  //         }
  //     },
  //     {
  //         "title": "FSSAI allows labelling curd in regional names amid political controversy",
  //         "description": "Food safety regulatory FSSAI on Thursday revised its order and allowed the use of regional names in printed labels of curd packets amid political controversy in Tamil Nadu. Food Business Operators (FBOs) are now allowed to use the term 'curd' along with any other prevalent regional common name in brackets on the label. For example, 'Curd (Dahi)' or 'Curd (Mosaru), 'Curd",
  //         "content": "Food safety regulatory FSSAI on Thursday revised its order and allowed the use of regional names in printed labels of curd packets amid political controversy in Tamil Nadu.\nFood Business Operators (FBOs) are now allowed to use the term 'curd' along w... [1409 chars]",
  //         "url": "https://www.deccanherald.com/national/south/fssai-allows-labelling-curd-in-regional-names-amid-political-controversy-1204998.html",
  //         "image": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/03/30/istock-1219690492-1-1204971-1680166270-1204998-1680174673.jpg",
  //         "publishedAt": "2023-03-30T15:32:37Z",
  //         "source": {
  //             "name": "Deccan Herald",
  //             "url": "https://www.deccanherald.com"
  //         }
  //     },
  //     {
  //         "title": "Can Britannia help women grab a bigger slice of India's job pie?",
  //         "description": "The biscuit maker plans to increase the share of women in its workforce to 50% by next year. There are reasons to expect more companies to emulate its example",
  //         "content": "Britannia Industries Ltd claims it expects women to comprise half of its workforce by 2024. Around 100,000 people work for Britannia at 15 company-owned manufacturing plants and 35 contract and franchisee units. The company said it is looking to rais... [3454 chars]",
  //         "url": "https://www.livemint.com/opinion/online-views/can-britannia-help-women-grab-a-bigger-slice-of-india-s-job-pie-11678100907512.html",
  //         "image": "https://images.livemint.com/img/2023/03/06/600x338/britannia-kKlC--621x414LiveMint_1678101128016_1678101128187_1678101128187.JPG",
  //         "publishedAt": "2023-03-29T18:30:00Z",
  //         "source": {
  //             "name": "Livemint",
  //             "url": "https://www.livemint.com"
  //         }
  //     }
  // ];
  //   return (

  //     <div className="container my-3">
  //       <div className="row mt-3">

  //         {articles.map((element)=>
  //         <div className="col-md-4" key={element.url}>
  //         <NewsItem title={element.title.slice(0,57)} description={element.description.slice(0,75)} image={element.image} url={element.source.url}></NewsItem>
  //         </div>
  //         )};

  //       </div>
  //     </div>

  //   ); */