import React from "react";
import Section1 from "./page/Section1";
import Section2 from "./page/Section2";
import Section3 from "./page/Section3";
import Section4 from "./page/Section4";
import Section5 from "./page/Section5";

import "../../styles/components/items/board.css";

import "../../styles/components/layout/section/section1.css";
import "../../styles/components/layout/section/section2.css";
import "../../styles/components/layout/section/section3.css";
import "../../styles/components/layout/section/section4.css";
import "../../styles/components/layout/section/section5.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </>
    );
  }
}
export default Home;
