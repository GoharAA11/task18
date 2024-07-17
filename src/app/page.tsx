import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";
import { Course } from "./course";
import Link from "next/link";

export default function Home() {
  const items = getAllCourses()
  console.log()
  return (
    <main className={styles.main}>
      <div className={styles.row}>
      {items.map((elm) => (
          <div key={elm.id}>
            <Link href={`/courses/details/${elm.id}`}>
                <Course elm={elm} />
              
            </Link>
            <Link href={`/courses/edit/${elm.id}`}>
            
              <strong>Edit Course</strong>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
