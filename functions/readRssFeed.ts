import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

import Parser from 'rss-parser';
const parser = new Parser();

async function readRssFeed() {
    const feed = await parser.parseURL('https://www.lemonde.fr/rss/une.xml');
    return feed.items;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const news = await readRssFeed();
    return {
      statusCode: 200,
      body: JSON.stringify(news),
      headers: {
        "access-control-allow-origin": "*",
      },
    };
  };

  export { handler };