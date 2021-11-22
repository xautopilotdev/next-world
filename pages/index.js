import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UserList from "./user";
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>

      <Link href={'/user'}>
      <a>User List</a>
      </Link>
<br/>
      <Link href={'/server-side'}>
      <a>server-side</a>
      </Link>
      <br/>
      <Link href={'/offers'}>
      <a>offers</a>
      </Link>
    </div>
  );
}
