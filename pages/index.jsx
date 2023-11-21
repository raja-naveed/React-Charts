import { Column } from "@/components/Column";
import  { Ganntt } from "@/components/FunnelChart";
import { Graph } from "@/components/Graph";
import MyCharts from "@/components/MyChart";
import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
       <Graph/>
       <Column/>
       <MyCharts/>
       <Ganntt/>

      </main>
    </>
  );
}
