import Link from "next/link";
import Layout from '../layouts/Layout'
import fetch from 'isomorphic-unfetch'

const ProfileLink = ({path, name}) => (
  <div>
    <Link href="/[profile]" as= {path}>
      <a>Go to {name}'s profile</a>
    </Link>
  </div>
);

const Index = (props) => {
   return ( 
   <Layout>
      index page
      {props.users.map((user)=> <ProfileLink key ={user.id} name= {user.name} path = {user.path}/>)}
    </Layout>
    )
   
}
Index.getInitialProps = async function (){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {users : data.map((v)=> {return {
    id : v.id,
    name : v.name,
    path : v.username
  }})}
}
export default Index;