import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'
import Feed from './../components/Feed';
import { useQuery } from '@apollo/client';
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries';
import SubredditRow from './../components/SubredditRow';

const Home: NextPage = () => {
  const {data} = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10
    }
  })

  const subreddits: Subreddit[] = data?.getSubredditListLimit

  return (
    <div className="max-w-5xl mx-auto my-7">
      <Head>
        <title>Reddit-React-Supabase-Stepzen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PostBox />
      
      <div className="flex">
        <Feed />
        <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[350px] rounded-md border border-gray-300 bg-white lg:inline">
          <p className="p-4 pb-3 mb-1 font-bold text-md">Top Communities</p>
          <div className="">
            {subreddits?.map((subreddit, index) => (
              <SubredditRow 
                key={subreddit.id}
                topic={subreddit.topic}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
