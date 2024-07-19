import React, { useState } from "react";
import { Form, Button, Table, Input, Row, Col } from "antd";

const SignupForm = () => {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (values) => {
    setTableData([...tableData, values]);
    form.resetFields();
  };

  const columns = [
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "FullName",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "FatherName",
      dataIndex: "fathername",
      key: "fathername",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CNIC",
      dataIndex: "cnic",
      key: "cnic",
    },
    {
      title: "Last-Qualification",
      dataIndex: "lastqualification",
      key: "lastqualification",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
  ];

  return (
    <div className="container">
      <Row justify="center" style={{ paddingLeft: 300 }}>
        <Col span={12}>
          <h1>Signup Form</h1>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item label="City" name="city">
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item label="FullName" name="fullname">
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item label="FatherName" name="fathername">
              <Input placeholder="Father name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="CNIC" name="cnic">
              <Input placeholder="CNIC" />
            </Form.Item>
            <Form.Item label="Last-Qualification" name="lastqualification">
              <Input placeholder="Last qualification" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              {/* <Button type="primary" htmlType="submit">
                Submit
              </Button> */}
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <h2>Form Data</h2>
          <Table bordered={1} columns={columns} dataSource={tableData} />
        </Col>
      </Row>
    </div>
  );
};

export default SignupForm;
