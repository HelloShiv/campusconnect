import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';

const { Option } = Select;

const LostPopUp = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display:"flex", justifyContent: "end" , width:"100%"}}>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} classNameName='lostpopup-btn'>
        Add Item
      </Button>
      <Drawer
        title="Add a new lost item"
        width={720}
        onClose={onClose}
        visible={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'Please enter a description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Please enter a description" />
              </Form.Item>
            </Col>
          </Row>

          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
          </Upload>
        </Form>
      </Drawer>
    </div>
  );
};

// const mountNode = document.getElementById('root');
// ReactDOM.createRoot(mountNode).render(<App />);

export default LostPopUp;