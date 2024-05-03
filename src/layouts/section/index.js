import React from "react";
import Section1 from "./page/Section1";
import Section2 from "./page/Section2";
import Section3 from "./page/Section3";
import Section4 from "./page/Section4";
import Section5 from "./page/Section5";
import Section6 from "./page/Section6";

class Home extends React.Component {
  render() {
    return (
      <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </>
    );
  }
}
export default Home;
