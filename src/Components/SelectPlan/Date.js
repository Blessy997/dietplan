import React from "react";
import moment from 'moment';
import { DatePicker, Space } from "antd";

export default function Date() {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  return (
    <div>
      <DatePicker defaultValue={moment('08/10/2021', dateFormatList[0])} />
    </div>
  );
}
