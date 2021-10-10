import React, { Component } from "react";
import line from "../../Images/line.svg";
import "./SelectPlan.css";
import { Tabs, Radio, Space } from "antd";
import "antd/dist/antd.css";
import Date from "./Date";
import Product from "./Product";
const { TabPane } = Tabs;
export class SelectPlan extends Component {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };
  render() {
    const { tabPosition } = this.state;
    return (
      <div id="plans">
        <div className="plans-container">
          <h1>Choose your Dishes</h1>
          <img src={line}></img>
          <h5>As per your recomented calorie, choose your dishes from below</h5>
        </div>
        <div className="menu-default">
          <button>
            <input type="checkbox" />
            <span className="checkmark">Choose Default Menu</span>
          </button>
        </div>
        <div>
          <div>
            <Tabs tabPosition={tabPosition}>
              <TabPane
                tab={
                  <div>
                    <Date />
                  </div>
                }
                key="1"
              >
                <Product />
              </TabPane>
              <TabPane tab={<div></div>} key="2">
                <Product />
              </TabPane>
              <TabPane
                tab={
                  <div>
                    <Date />
                  </div>
                }
                key="3"
              >
                <Product />
              </TabPane>
              <TabPane
                tab={
                  <div>
                    <Date />
                  </div>
                }
                key="4"
              >
                <Product />
              </TabPane>
              <TabPane
                tab={
                  <div>
                    <Date />
                  </div>
                }
                key="5"
              >
                <Product />
              </TabPane>
              <TabPane
                tab={
                  <div>
                    <Date />
                  </div>
                }
                key="6"
              >
                <Product />
              </TabPane>
            </Tabs>
          </div>
          <button className="proceed">Proceed</button>
        </div>
      </div>
    );
  }
}

export default SelectPlan;
