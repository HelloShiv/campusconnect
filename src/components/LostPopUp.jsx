  import React, { useState, useEffect } from 'react';
  import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
  import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload, message } from 'antd';
  import { notification } from 'antd';
  import { useFirebase } from "../context/Firebase";
  import { Option } from 'antd/es/mentions';

  const LostPopUp = () => {
    const imageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const firebase = useFirebase();
    const [open, setOpen] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); // State to track form validity
    const [form] = Form.useForm(); // Create a form instance


    const showDrawer = () => {
      setOpen(true);
    };

    const handleFileUpload = (files) => {
      if (files && files[0]) {
        const selectedFile = files[0];
        
        // Check if the selected file is of an allowed type
        if (imageTypes.includes(selectedFile.type)) {
          // Handle the file upload here, for example, you can store it in state or perform other operations
          console.log('Selected file:', selectedFile);
    
          // You can update the form values here if needed
          form.setFieldsValue({
            photoList: [selectedFile],
          });
        } else {
          message.error('Only image files (JPEG, PNG, GIF) are allowed.');
        }
      }
    };

    const onClose = () => {
      setOpen(false);
      form.resetFields(); // Reset form fields when closing the drawer
    };

    useEffect(() => {
      form.validateFields().then(() => {
        setIsFormValid(true); // Enable the submit button when all fields are valid
      }).catch(() => {
        setIsFormValid(false); // Disable the submit button if any field is invalid
      });
    }, [form]);

    const handleSubmit = () => {
      form.validateFields()
        .then((values) => {
          // Check if all required fields are filled
          if (Object.values(values).every((value) => value !== undefined && value !== '')) {
            // Submit the form data here
            firebase.handleNewLostAndFoundListing(values);
            console.log('Form data submitted:', values);
            onClose(); // Close the drawer after submission
          } else {
            // Display an error notification or message to the user
            // You can use Ant Design's notification component or a custom error message.
            notification.error({
              message: 'Form Submission Error',
              description: 'Please fill in all required fields.',
            });
          }
        })
        .catch((error) => {
          // Handle the error more gracefully
          console.error('Error during form validation:', error);
          // Display an error notification or message to the user
          notification.error({
            message: 'Form Submission Error',
            description: 'An error occurred during form validation. Please try again later.' + error,
          });
        });
    };
    

    return (
      <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} className="lostpopup-btn">
          Add Item
        </Button>
        <Drawer
          title="Add a new lost item"
          width={720}
          onClose={onClose}
          open={open}
          bodyStyle={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={handleSubmit} type="primary" disabled={!isFormValid}>
                Submit
              </Button>
            </Space>
          }
        >
          <Form form={form} layout="vertical" hideRequiredMark>
          <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Category"
              rules={[
                {
                  required: true,
                  message: 'Please select a category',
                },
              ]}
            >
              <Select placeholder="Select category">
                <Option value="lost">Lost</Option>
                <Option value="found">Found</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>


            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Product-Name"
                  label="Product-Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter product name',
                    },
                  ]}
                >
                  <Input placeholder="Name of the lost product" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
            name="Contact"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please enter Phone Number',
              },
              {
                pattern: /^[0-9]{10}$/, // Regular expression to match exactly 10 digits
                message: 'Phone Number must be 10 digits',
              },
            ]}
            >
            <Input placeholder="+91----------" />
            </Form.Item>

            <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please enter a description e.g where it was found',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const words = value.split(/\s+/).filter((word) => word.trim() !== '');
                  if (words.length <= 40) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Description should be less than 40 words.'));
                },
              }),
            ]}
            >
          <Input.TextArea rows={4} placeholder="Please enter a description e.g where it was found, time" />
          </Form.Item>

          <Form.Item
    name="photoList"
    label="Photo"
    rules={[
      {
        required: true,
        message: 'Please upload a photo',
      },
    ]}
  >
    <label htmlFor="fileUpload" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <span style={{ marginRight: '8px' }}>
        <UploadOutlined />
      </span>
      <span>Click here to upload a photo</span>
    </label>
    <input
      type="file"
      id="fileUpload"
      style={{ display: 'none' }}
      onChange={(e) => handleFileUpload(e.target.files)}
      accept=".jpeg, .jpg, .png, .gif" // Specify allowed file types
    />
    {form.getFieldValue('photoList') && (
      <div style={{ marginTop: '8px' }}>
        <strong>Selected File:</strong> {form.getFieldValue('photoList')[0].name}
      </div>
    )}
  </Form.Item>



          </Form>
        </Drawer>
      </div>
    );
  };

  export default LostPopUp;
