import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
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
import { RootState } from "../app/store";
import {
  CustomCheckbox,
  CustomForm,
  CustomFormButton,
  CustomFormItem,
  CustomFormItemInput,
  CustomFormItemInputTextArea,
  TextDivWrapper,
} from "./style/BusinessOwner";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface BecomeBusinessOwnerProps {}

const BecomeBusinessOwner: FC<
  BecomeBusinessOwnerProps
> = ({}): ReactElement => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const width = useAppSelector((state: RootState) => state.windowReducer.width);
  const [loading, setLoading] = useState(false);
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  useEffect(() => {
    // add iniline horizontal vertiucal methods

    if (width < 768) {
      setFormLayout("vertical");
    } else {
      setFormLayout("horizontal");
    }
  }, [width]);

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 8 },
          wrapperCol: { span: 18 },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

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
        <TextDivWrapper>
          <h4>Apply request to become restaurant owner</h4>
          <p>Apply request to become restaurant owner</p>
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
              label="Contact email"
              name="contactEmail"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <CustomFormItemInput className="input_item_form" />
            </CustomFormItem>
            <CustomFormItem
              label="Contact phone"
              name="contactPhone"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <CustomFormItemInput />
            </CustomFormItem>
            <CustomFormItem
              label="Business registration number"
              name="businessRegistrationNumber"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <CustomFormItemInput />
            </CustomFormItem>

            <CustomFormItem
              label="About request"
              name="request"
              rules={[asyncRule(validateName, "This field is required")]}
            >
              <CustomFormItemInputTextArea />
            </CustomFormItem>

            <CustomFormItem
              rules={[
                {
                  required: true,
                  message: "Please agree to terms and service",
                },
              ]}
            >
              <CustomCheckbox>Agree to terms and service</CustomCheckbox>
            </CustomFormItem>

            <CustomFormItem wrapperCol={{ offset: 0, span: 24 }}>
              <CustomFormButton type="primary" htmlType="submit">
                Submit
              </CustomFormButton>
            </CustomFormItem>
          </Form>
        </FormWrapper>
      </InnerFormDivCreateRestaurant>
    </div>
  );
};

export default BecomeBusinessOwner;
