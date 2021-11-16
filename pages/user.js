import axios  from "axios";
function UserList(props) {
    const {users}=props;
    console.log('user list data');
    console.log(users);
  return (
    <>
      <h1>List of useers with data</h1>
      <p>Total user : {users.length}</p>
      <ol>
         {users && users.map((user) => {return <li key={user.id}>{user.name}</li>})} 
      </ol>
    </>
  );
}
export default UserList;
// export async function getStaticProps(context) {
//     const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
//     const data = await response.json()
//     return {
//       props: {users:data,}, // will be passed to the page component as props
//     }
//   }
  export async function getStaticProps(context) {
    // return {
    //   props: { users: [{"name":"arman"},{"name":"aqeel"}] }, // will be passed to the page component as props
    // };
   const result = await axios.get(`https://my-json-server.typicode.com/xautopilotdev/fakenextapi/users`);
   return { props: { users: result.data } }
  //  result.then(res => {
  //       //console.log(res.data);
  //       //return { props: { users: await res.data } };
  //       return res.data;
  //     })
  //     .then(res =>{return { props: { users: res } }})
  //     .catch((err) => console.error(err));
      
  }
