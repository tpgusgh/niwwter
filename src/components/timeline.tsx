import { useEffect, useState } from "react";
import { Wrapper } from "./auth-components";
import styled from "styled-components";
import { collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Tweet from "./tweet";

export interface ITweet{
    id:string;
    // photo?:string;
    tweet:string;
    userId:string;
    username:string;
    createAt:number;


}

const Wrapper = styled.div`

`;

export default function Timeline(){
    const [tweets,setTweets] = useState<ITweet[]>([]);
    const fetchTweets = async() => {
        const tweetsQuery = query(
            collection(db,"tweets"),
            orderBy("createAt","desc")
        )
        const spanshot = await getDocs(tweetsQuery);
        const tweets = spanshot.docs.map(doc => {
            const {tweet, createAt, userId, username} = doc.data();
            return {
                tweet, createAt, userId, username,//photo,
                id: doc.id
            }
        });
        setTweets(tweets);
    }
    useEffect(() => {
        fetchTweets();
    }, [])
    return <Wrapper>
           {tweets.map(tweet => <Tweet key= {tweet.id} {...tweet} />)}
    </Wrapper>;
}