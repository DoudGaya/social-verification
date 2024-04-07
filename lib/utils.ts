import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import avatar from "@/app/img/avatar.jpg"
import twitterBanner from "@/app/img/twitter-banner.jpg"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const twitterCards = [
  {
    name: 'Doud Gaya', // required
    username: '@DoudGaya', // required
    followers: 2000000000, // required
    following: 10, // required
    profileImage: avatar, // optional
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Super Senior Software Engineer with design skills", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',
    },
  },
  {
    name: 'Doud Gaya', // required
    username: '@DoudGaya', // required
    followers: 2000000000, // required
    following: 10, // required
    profileImage: avatar, // optional
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Super Senior Software Engineer with design skills", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',

    },
  },
  {
    name: 'Doud Gaya', // required
    username: '@DoudGaya', // required
    followers: 2000000000, // required
    following: 10, // required
    profileImage: avatar, // optional
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Super Senior Software Engineer with design skills", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',

    },
  },
  {
    name: 'Bansey Blue', // required
    username: '@banseyblue', // required
    followers: 2000000000, // required
    following: 10, // required
    profileImage: avatar, // optional
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Super Senior Software Engineer with design skills", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',

    },
  },
  {
    name: 'AMIRCHO', // required
    username: '@amircho', // required
    followers: 2000000000, // required
    following: 10, // required
    profileImage: avatar, // optional
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Super Senior Software Engineer with design skills", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',
    },
  },
  {
    name: 'Emeskey', // required
    username: '@emesketoons', // required
    followers: '30M', // required
    following: '10', // required
    numberOfPosts: 2334,
    profileImage: avatar, // optional
    dateJoined: '12, January 2010',
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Scientist | Senior Software Engineer Technical Founder @chemcider. Interest: Science | Technology | Engineering", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',

    },
  },
  {
    name: 'Yaseer Dauda', // required
    username: '@unique_yaseer', // required
    followers: '30M', // required
    following: '10', // required
    numberOfPosts: 2334,
    profileImage: avatar, // optional
    dateJoined: '12, January 2010',
    banner: twitterBanner, // optional
    location: 'Kano, Nigeria', // optional
    url: 'doudgaya.xyz', // optional
    bio: "Scientist | Senior Software Engineer. Technical Founder @chemcider. Interest: Science | Technology | Engineering", // optional
    occupation: 'Software Engineer', // optional
    verification: true, // required default TRUE
    pinnedPost: { // Optional 
      body: "Hello World", 
      image: twitterBanner,
      likes: '10M',
      comments: '10.2K',
      retweet: '20K',
    },
  }
]

