import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

export const CustomForm = styled(Form)``;

export const CustomFormItem = styled(Form.Item)``;

export const CustomFormItemButton = styled(Form.Item)`
  display: flex;
  justify-content: center;
`;

export const CustomFormItemInput = styled(Input)`
  border-radius: 10px;
`;

export const CustomFormItemInputTextArea = styled(Input.TextArea)`
  border-radius: 10px;
`;

export const CustomFormButton = styled(Button)`
  border-radius: 5px;
`;

export const TextDivWrapper = styled.div`
  text-align: center;
  color: #000;
  margin-bottom: 30px;
`;

export const CustomCheckbox = styled(Checkbox)``;
