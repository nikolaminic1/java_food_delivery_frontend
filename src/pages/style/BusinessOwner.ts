import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import { message, Upload } from "antd";

const { Dragger } = Upload;

export const CustomForm = styled(Form)``;

export const CustomFormItem = styled(Form.Item)``;
export const CustomFormItemTime = styled(Form.Item)`
  margin-bottom: 12px;
  .ant-form-item-control-input-content > .ant-picker {
    width: 100%;
    border-radius: 8px;
  }
`;

export const CustomFormItemButton = styled(Form.Item)`
  display: flex;
  justify-content: center;
`;

export const CustomFormItemButtonTime = styled(Form.Item)`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const CustomFormItemInput = styled(Input)`
  border-radius: 10px;
`;

export const CustomFormItemInputTextArea = styled(Input.TextArea)`
  border-radius: 10px;
`;

export const CustomFormButton = styled(Button)`
  margin-top: 20px;
  border-radius: 5px;
`;

export const TextDivWrapper = styled.div`
  text-align: center;
  color: #000;
  margin-bottom: 30px;
`;

export const CustomCheckbox = styled(Checkbox)``;

export const CustomDragger = styled(Dragger)`
  border-radius: 20px !important;
  border: none !important;
  padding: 10px;
  background-color: #ffffff81 !important;
`;

export const ButtonItemHolder = styled.div`
  display: flex;
  justify-content: center;
`;

export const SelectComponentHolder = styled(Form.Item)`
  display: flex;
  margin: 0;
  justify-content: space-between;

  .ant-row.ant-form-item-row
    > .ant-col.ant-form-item-control
    > .ant-form-item-control-input
    > .ant-form-item-control-input-content {
    display: flex !important;
    justify-content: space-between;
    align-items: end;
  }

  /* .ant-picker {
    width: 80%;
    border-radius: 8px;
  } */
`;
