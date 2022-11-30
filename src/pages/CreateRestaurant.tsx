import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
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
import {
  CustomFormButton,
  CustomFormItem,
  CustomFormItemButton,
  CustomFormItemInput,
  CustomFormItemInputTextArea,
  TextDivWrapper,
} from "./style/BusinessOwner";
import store, { RootState } from "../app/store";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface CreateRestaurantProps {}

const CreateRestaurant: FC<CreateRestaurantProps> = ({}): ReactElement => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const width = useAppSelector((state: RootState) => state.windowReducer.width);

  useEffect(() => {
    // add iniline horizontal vertiucal methods

    if (width < 768) {
      setFormLayout("vertical");
    } else {
      setFormLayout("horizontal");
    }
  }, [width]);

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
    store.dispatch(createRestaurant(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 8 },
          wrapperCol: { span: 18 },
        }
      : null;

  return (
    <div>
      <InnerFormDivCreateRestaurant>
        <TextDivWrapper>
          <h4>Create restaurant</h4>
          <p>
            Your request for restaurant ownership is granted. Now you can enter
            the name and description of your business. In steps after this one,
            you will be allowed to add product categories, and products and view
            your orders.
          </p>
        </TextDivWrapper>

        <FormWrapper>
          <Form
            name="basic"
            {...formItemLayout}
            layout={formLayout}
            initialValues={{ layout: formLayout }}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <CustomFormItem
              label="Restaurant name"
              name="name"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <CustomFormItemInput />
            </CustomFormItem>
            <CustomFormItem
              label="Restaurant description"
              name="description"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <CustomFormItemInputTextArea />
            </CustomFormItem>

            <CustomFormItemButton wrapperCol={{ offset: 0, span: 24 }}>
              <CustomFormButton type="primary" htmlType="submit">
                Next
              </CustomFormButton>
            </CustomFormItemButton>
          </Form>
        </FormWrapper>
      </InnerFormDivCreateRestaurant>
    </div>
  );
};

export default CreateRestaurant;
