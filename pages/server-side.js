import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
 
function Serverside(props) {
    // const {users}=props;
    const router = useRouter();

    const {userLogin} = props;
    //console.log(userLogin);
    const initialUser = {"userName":"a","password":"b"}
    const [user,setUser] =useState(initialUser);
    useEffect(()=>{
        // setUser(userLogin);
        router.push('/aww')

    },[]);
    
    return (
        <div>
            <h1>userName = {user.userName}</h1>
            <h1>password = {user.password}</h1>
            {/* {
                users.map(user => <div key={user.id}>{user.name}</div>)
            } */}
        </div>
    );
}
// export async function getServerSideProps(context){

//     const result = await fetch(`http://localhost:4000/users`);
//     const users = await result.json();
//     console.log(context);
//     return {
//         props: {
//             "users":users,
//         }
//     }
// }

export const getServerSideProps = async ({req}) => {
    let body = '';
    if (req.method == "POST") {      
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        //console.log(body);
    });
    }
    // return { props: {userLogin:body} };
    return { props: {"userLogin":{"userName":"Admin","password":"A$min123M@sco"}} };
  };

export default Serverside;