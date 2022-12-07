import React, { FC, ReactElement, useState } from "react";
import { Button, Divider, Modal, Switch, Upload } from "antd";
import { Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import {
  CategoryDesc,
  CategoryDivider,
  CategoryName,
  CategoryTags,
  CustomBustom,
  CustomDivider,
  FormItemFlex,
  ImageDivCategory,
  ImageObjectCategory,
  InnerMyRestaurantDiv,
  MainInnerDivCategory,
  MainInnerDivCategoryFlex,
  MainMyRestaurantDiv,
  MainOutterDiv,
  OuterMyRestaurantDiv,
  TextHolderCategoryDiv,
} from "./style/RestaurantStyle";
import { InboxOutlined } from "@material-ui/icons";

interface CategoriesMyRestaurantProps {}

const CategoriesMyRestaurant: FC<
  CategoriesMyRestaurantProps
> = ({}): ReactElement => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <MainMyRestaurantDiv>
      <OuterMyRestaurantDiv>
        <InnerMyRestaurantDiv>
          <div>
            <h3>Product categories</h3>
          </div>
          <CustomDivider />

          <div>
            <h6>Add product categories</h6>
            <CustomBustom onClick={showModal} type="primary">
              Add product categories
            </CustomBustom>
          </div>

          <CustomDivider />

          <div>
            <h5>List of product categories</h5>
          </div>
          <MainOutterDiv>
            <MainInnerDivCategory>
              <MainInnerDivCategoryFlex>
                <ImageDivCategory>
                  <Link to={""}>
                    <ImageObjectCategory />
                  </Link>
                </ImageDivCategory>
                <TextHolderCategoryDiv>
                  <CategoryName>Name of category</CategoryName>
                  <CategoryDesc>Description of category</CategoryDesc>
                  <CategoryDivider />
                  <CategoryTags>List of tags</CategoryTags>
                </TextHolderCategoryDiv>
              </MainInnerDivCategoryFlex>
            </MainInnerDivCategory>
          </MainOutterDiv>
          <Modal
            footer={null}
            maskClosable={false}
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Name of category"
                name="nameOfCategory"
                rules={[
                  { required: true, message: "Please input name of category" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Description of category"
                name="descOfCategory"
                rules={[
                  {
                    required: true,
                    message: "Please input description of category",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <FormItemFlex>
                <Form.Item
                  label="Is category visible ?"
                  name={"categoryVisible"}
                >
                  <Switch defaultChecked={false} />
                </Form.Item>

                <Form.Item
                  label="Is category featured ?"
                  name={"categoryFeatured"}
                >
                  <Switch defaultChecked={false} />
                </Form.Item>
              </FormItemFlex>
              <Form.Item label="Image of category">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger
                    name="files"
                    beforeUpload={(fm, f) => {
                      return false;
                    }}
                    customRequest={(file) => {
                      console.log(file);
                      return true;
                    }}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </InnerMyRestaurantDiv>
      </OuterMyRestaurantDiv>
    </MainMyRestaurantDiv>
  );
};

export default CategoriesMyRestaurant;
