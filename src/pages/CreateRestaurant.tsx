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
  OuterFormDivCreateRestaurant,
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
import { useNavigate } from "react-router-dom";

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
  const isCreated = useAppSelector(
    (state: RootState) => state.restaurantCreate.isCreated
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (isCreated) {
      return navigate("/upload_background");
    }
  }, []);

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

  const onFinish = (values: object) => {
    const resultAction = dispatch(createRestaurant(values));
    console.log(resultAction.then((res) => {}));
    if (isCreated) {
      return navigate("/upload_background");
    }
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
    <OuterFormDivCreateRestaurant>
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
    </OuterFormDivCreateRestaurant>
  );
};

export default CreateRestaurant;
