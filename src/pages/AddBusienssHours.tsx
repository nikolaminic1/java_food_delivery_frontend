import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, Form, Input, Select, Switch } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { message, Upload } from "antd";
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  createBusinessHours,
  createRestaurant,
} from "../app/store/actions/restaurant/createRestaurantActions";
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
  CustomFormItemButtonTime,
  CustomFormItemInput,
  CustomFormItemInputTextArea,
  CustomFormItemTime,
  SelectComponentHolder,
  TextDivWrapper,
} from "./style/BusinessOwner";
import store, { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { TimePicker } from "antd";
import { dataHours, dataMinutes } from "../components/BusinessHours";

const { Option } = Select;
const { List } = Form;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface AddBusienssHoursProps {}

const AddBusienssHours: FC<AddBusienssHoursProps> = ({}): ReactElement => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const width = useAppSelector((state: RootState) => state.windowReducer.width);
  const isCreated = useAppSelector(
    (state: RootState) => state.restaurantCreate.isCreated
  );
  const isBusinessTimeCreated = useAppSelector(
    (state: RootState) => state.restaurantCreate.isBusinessTimeCreated
  );

  const [isMondayChecked, setIsMondayChecked] = useState(false);
  const [isTuesdayChecked, setIsTuesdayChecked] = useState(false);
  const [isWednesdayChecked, setIsWednesdayChecked] = useState(false);
  const [isThursdayChecked, setIsThursdayChecked] = useState(false);
  const [iFridayChecked, setIsFridayChecked] = useState(false);
  const [isSaturdayyChecked, setIsSaturdayyChecked] = useState(false);
  const [isSundayChecked, setIsSundayChecked] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (isBusinessTimeCreated) {
      return navigate("/my_restaurant");
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
    const resultAction = dispatch(createBusinessHours(values));
    console.log(resultAction.then((res) => {}));
    // if (isCreated) {
    //   return navigate("/upload_background");
    // }
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChangeMonday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsMondayChecked(checked);
  };
  const onChangeTuesday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsTuesdayChecked(checked);
  };
  const onChangeWednesday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsWednesdayChecked(checked);
  };
  const onChangeThursday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsThursdayChecked(checked);
  };
  const onChangeFriday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsFridayChecked(checked);
  };
  const onChangeSaturday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsSaturdayyChecked(checked);
  };
  const onChangeSunday = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsSundayChecked(checked);
  };

  const fields = {
    monday: {
      name: "monday",
    },
  };

  return (
    <OuterFormDivCreateRestaurant>
      <InnerFormDivCreateRestaurant>
        <TextDivWrapper>
          <h4>Add busienss hours</h4>
          <p>Add busienss hours</p>
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
            <SelectComponentHolder>
              <Form.Item label="Monday" name="monday">
                <TimePicker.RangePicker disabled={isMondayChecked} />
              </Form.Item>
              <Form.Item name="mondayNonStop">
                <Switch defaultChecked={false} onChange={onChangeMonday} />
              </Form.Item>
            </SelectComponentHolder>

            <SelectComponentHolder>
              <Form.Item label="Tuesday" name="tuesday">
                <TimePicker.RangePicker disabled={isTuesdayChecked} />
              </Form.Item>
              <Form.Item name="tuesdayNonStop">
                <Switch defaultChecked={false} onChange={onChangeTuesday} />
              </Form.Item>
            </SelectComponentHolder>

            <SelectComponentHolder>
              <Form.Item label="Wednesday" name="wednesday">
                <TimePicker.RangePicker disabled={isWednesdayChecked} />
              </Form.Item>
              <Form.Item name="wednesdayNonStop">
                <Switch defaultChecked={false} onChange={onChangeWednesday} />
              </Form.Item>
            </SelectComponentHolder>

            <SelectComponentHolder>
              <Form.Item label="Thursday" name="thursday">
                <TimePicker.RangePicker disabled={isThursdayChecked} />
              </Form.Item>
              <Form.Item name="thursdayNonStop">
                <Switch defaultChecked={false} onChange={onChangeThursday} />
              </Form.Item>
            </SelectComponentHolder>

            <SelectComponentHolder>
              <Form.Item label="Friday" name="friday">
                <TimePicker.RangePicker disabled={iFridayChecked} />
              </Form.Item>
              <Form.Item name="fridayNonStop">
                <Switch defaultChecked={false} onChange={onChangeFriday} />
              </Form.Item>
            </SelectComponentHolder>

            <SelectComponentHolder>
              <Form.Item label="Saturday" name="saturday">
                <TimePicker.RangePicker disabled={isSaturdayyChecked} />
              </Form.Item>
              <Form.Item name="saturdayNonStop">
                <Switch defaultChecked={false} onChange={onChangeSaturday} />
              </Form.Item>
            </SelectComponentHolder>

            <SelectComponentHolder>
              <Form.Item label="Sunday" name="sunday">
                <TimePicker.RangePicker disabled={isSundayChecked} />
              </Form.Item>
              <Form.Item name="sundayNonStop">
                <Switch defaultChecked={false} onChange={onChangeSunday} />
              </Form.Item>
            </SelectComponentHolder>

            <CustomFormItemButtonTime wrapperCol={{ offset: 0, span: 24 }}>
              <CustomFormButton type="primary" htmlType="submit">
                Next
              </CustomFormButton>
            </CustomFormItemButtonTime>
          </Form>
        </FormWrapper>
      </InnerFormDivCreateRestaurant>
    </OuterFormDivCreateRestaurant>
  );
};

export default AddBusienssHours;
