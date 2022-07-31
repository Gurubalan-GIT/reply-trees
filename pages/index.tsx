import type { NextPage } from "next";
import { useEffect } from "react";
import RootLayout from "../layouts/RootLayout";

const Home: NextPage = () => {
  useEffect(() => {
    fetch("/api/data")
      .then((response) => {
        response.json().then((data) => console.log(data));
      })
      .catch((e) => console.log(e));
  });

  return <RootLayout>Hey!</RootLayout>;
};

export default Home;
