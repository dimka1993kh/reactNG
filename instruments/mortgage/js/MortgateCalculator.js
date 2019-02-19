import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {AutoComplete} from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

const MortgateCalculator = () => (
  <div>
    <form action="">
      <AutoCompleteTest/>
      <InputTest />
      <ButtonToolbox />
    </form>
  </div>
);
