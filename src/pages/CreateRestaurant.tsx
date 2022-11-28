import React, { FC, ReactElement, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useAppDispatch } from "../app/hooks";
import { message, Upload } from "antd";
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createRestaurant } from "../app/store/actions/restaurant/createRestaurantActions";
import {
  FormWrapper,
  InnerFormDivCreateRestaurant,
} from "./style/RestaurantStyle";
import TagFormRestaurantCreate from "../components/restaurant/TagFormRestaurantCreate";
import Schema from "async-validator";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

interface CreateRestaurantProps {}

const CreateRestaurant: FC<CreateRestaurantProps> = ({}): ReactElement => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const asyncRule = (fn: any | null, message: any | null) => {
    return {
      validator: fn,
      message,
    };
  };

  const validateName = (_: any | null, value: any | null) => {
    console.log("validate");
    console.log(_);
    console.log(value);
    console.log(typeof value);
    return new Promise((resolve, reject) => {
      value
        ? resolve(() => {
            console.log("resolve");
          })
        : reject(() => {
            console.log(value);
            console.log(typeof value);
            if (value === undefined) {
              console.log(typeof value);
              new Error("Should accept agreement");
            }
          });
    });
  };

  const onClick = (values: any) => {
    setLoading(true);
    form
      .validateFields()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: object) => {
    console.log(values);
    dispatch(createRestaurant(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <InnerFormDivCreateRestaurant>
        {/* <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
            <TagFormRestaurantCreate />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form> */}
        <FormWrapper>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Restaurant name"
              name="name"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Restaurant description"
              name="description"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </InnerFormDivCreateRestaurant>
    </div>
  );
};

export default CreateRestaurant;
