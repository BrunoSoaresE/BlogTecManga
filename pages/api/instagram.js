
export default async function (req, res) {

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`
  const data = await fetch(url);

  const feed = await data.json();




  
      const posts = feed.data.map(({ id, caption,media_url,timestamp,media_type,permalink }) => {    

          return {
            id, caption,media_url,timestamp,media_type,permalink 
          };
      });   
  
      res.send({
          data: posts,
      }); 
  

}