search
dynamic routes in next
pre-rendering

export const Posts = ({posts})=>{
return <div></div>
}
export async function getStaticProps(){
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
const posts = await res.json()
return {
props: {
posts
}
}
}

getStaticProps method will run when our app will run on clientside
when we build our app i.e. npm run build then each pages will convert to html pages and will load on client server and then we can load them without internet connection also because all data is saved on html pages.

export async function getServerSideProps(){
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
const posts = await res.json()
return {
props: {
posts
}
}
}

getServerSideProps method will not save the files it runs on server. when server receive req to fetch the data then only data will be fetch. Means even after build we can not run out app without internet because all data of our app is rendering on server.

now if we want to render data of specific post then

export async function getServerSideProps({query}){
const {id }= query
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`+id)
const postData = await res.json()
return {
props: {
postData
}
}
}

if we want to statically store some paths means out of 100 post we want to store data of 10 posts statically then

export async function getStaticPaths(){
const paths = ["/posts/1/","/posts/2/","/posts/3/","/posts/4/","/posts/5/"]
return {psths, fallback: false}
}
by this method we can statically get data of these 5 posts only because it will get sav ein html during build time
as id can dynamically change hence we get this id in either params or query
fallback: true
this means if we req a page whose data is not statically saved then it will show loading for that and when next time it will get data related to that unknown url then it will save it statically

export async function getStaticProps({query,params}){
const {id} = query || params
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`+id)
const postData = await res.json()
return {
props: {
postData
}
}
}

// pages/posts/[id].js
import { useRouter } from 'next/router'

function Post({ post }) {
const router = useRouter()
// If the page is not yet generated, this will be displayed
// initially until getStaticProps() finishes running
if (router.isFallback) {
return <div>Loading...</div>
}

// Render post...
}

**\*\***\*\*\*\***\*\*** For style **\*\***\*\*\*\***\*\***
search Built-In CSS Support in next

import '../styles.css'
all global level imports are done in _app.js file. We use _ to make app.js as our root file
// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
return <Component {...pageProps} />
}

to use env variables create .env.local file and make a variable with given syntax and we can store api url,keys etc in it eg
API_BASE_URL=https://jsonplaceholder.typicode.com

to access this variable process.env.API_BASE_URL
put .env.local in .gitignore
we can also put this variable in .env.production but .env.local will overwrite all variable if same variable is present
if we add prefix before any variable in .env.local eg NEXT_PUBLIC_API_BASE_URL
now this variable's value can be accesses publicaly by this name only NEXT_PUBLIC_API_BASE_URL Now it can be accessed as browser variable.

Topic: Dynamic Import
next js has provided separate library to import various functions to dynamically import
import dynamic from "next/dynamic"

import dynamic from 'next/dynamic'
(if import is default)
const DynamicHeader = dynamic(() => import('../components/header'), {
loading : () => <p>loading header...</>
ssr:false
})
(if import is named import )
const DynamicHeader = dynamic(() => import('../components/header').them(mod=>mod.nameOfImport), {
loading : () => <p>loading header...</>
ssr:false
})

//search these topics on next js official website
topic: next/router

topic: next/link

topic: next/head

topic: next.config.js

project:

VID 1

1. paste template head content and scripts in \_document.js so that each page will get these scripts stylesheets or headers in it
2. in component make layout.jsx which contain all components which are static or exist on each page.
3. Between header and footer our content will change which will be children for layout.jsx.
4. To make all that content as children of layout.jsx in \_app.js wrap children in layout component
   <Layout>
   <Component {...pageProps} />
   </Layout>
   this component tag will contain all components or pages that we make inside pages folder.
5. similarly make components for pages and add them

================ Till About Page ================

VID 2,3
dependencies installed:
npm install react-loading-skeleton
npm install redux react-redux redux-thunk

1. Meet Our Team section in About Page is repeating in more than one page hence we will make its component.
2. For Dynamically load each member of our Team component we make a reducer for it and then pass all data there. store and root-reducer files are used for reducers. included Provider in \_App.js
3. For dynamic import OutTeam component in About page we use dynamic function from next/dynamic
   note: In dynamic import components or libraries are only imported and included in the JavaScript bundle when they're used.
   note: (Best practice) we should have different file for UI code and a separate file for writing logic for that UI part as we did in OurTeam.container Component.

================ Till About Page complete ================

VID 4

1. In this video we made component for Hero section and shopCategory for Home Page i.e. index.js
2. We have to check in which way items are arranged like in row or in column by inspecting shopCategory items then make reducer for it.
3. After these two component we make FeaturedProducts component

================ Till Home Page complete ================

VID 5

1. In this video we link all pages of header, for this we put all anchor tags inside header component inside Link tag and shift href from a to Link tag.
2. We made pages for each Link in header. We have to give name of these pages same as we are writing in href url
3. We created a folder with name reducers for writing all logics of cart etc
4. first we make reducer with name cart.js and then dynamically change number of cart items in header by using this reducer

================ Till Cart Items Count with redux ================

VID 6

1. In this video we created product reducer to make featuredProducts component dynamic as it has add to cart option
2. In productReducer we make initial state of items as object rather then array of objects
   Object.keys(obj) – returns an array of keys.
   Object.values(obj) – returns an array of values. (we are using this)
   Object.entries(obj) – returns an array of [key, value] pairs.
3. we made another function to render products inside featuredProducts component products are getting from store and we also used useMemo in it which act like useEffect if there is any change in its dependency then this function will execute
4. In render product function <Link href="/p/[pid]" as={`/p/${product.id}`}></Link>
   we are making p folder for product and separate [pid] page for products detail page which will change with id of products
5. we make class of product-tags dynamic so that one product can be in top fetured only and two products can be in top-featured and best seller category
6. we made some changes in pid file to make it dynamic as per object we have created for it in productReducer

================ Till Single product page for featured products ================

VID 7&8

1. In this video we are making add to cart functionality fir this we have used redux thunk. We used dispatch function in FeaturedProducts.jsx to pass addtocart function in it.
2. We've made separate folder for cart actions and made reducer for cart in reducers folder to change its quantity
3. In cart.js page we append updated cart Items

================ Till Cart Page ================

VID 9

1. In this video we will deploy our website as a static website on netlify. For this we wherever we used serverside props in our website will changed to static props like in pid page.
2. We will do static export for this website.
3. In static props function we change query to params also in static paths fallback will be true so that when site will run on server it will save the html of page which was not available statically. In this site we have only 2 dynamic path i.e. 100 and 101 hence we hard coded it
4. also to deploy on netlify we have to change export script in package.json we have to write
   "export" : "next build && next export"
5. when we run this command out folder will create in which html files will generated for our project and netlify will deploy these html files easily.
6. In netlify we have to first add our github account and then repo which we want to deploy and then in this select folder out to export when ask and write npm export and then it will get deploy.
7. now whenever we made any change to this repo it will get updated in that deployed link.
