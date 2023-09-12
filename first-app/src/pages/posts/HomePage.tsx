import React from "react";
import Header from "../components/Header";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";


export default function HomePage(){
    return (
        <PageLayout>
          <IntroSection/>
      </PageLayout>
    );
}