import React from "react";
import { Button, Space } from "antd";
import {PlusCircleFilled}from "@ant-design/icons"
export default function ButtonAdd() {
  return (
    <div>
      <Space>
        <Button>add1</Button>
        <Button type="primary">add2</Button>
        <Button danger>add3</Button>
        <Button type="primary" danger>
          add4
        </Button>
        <Button type="primary" danger size="small">add5</Button>
        <Button type="primary" danger size="large">add6</Button>
        <Button type="primary" danger size="large" icon={<PlusCircleFilled/>}>add7</Button>
      </Space>
    </div>
  );
}
