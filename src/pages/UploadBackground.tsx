import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createRestaurant } from "../app/store/actions/restaurant/createRestaurantActions";
import {
  FormWrapper,
  InnerFormDivCreateRestaurant,
  OuterFormDivCreateRestaurant,
} from "./style/RestaurantStyle";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import TagFormRestaurantCreate from "../components/restaurant/TagFormRestaurantCreate";
import Schema from "async-validator";
import {
  ButtonItemHolder,
  CustomDragger,
  CustomFormButton,
  CustomFormItem,
  CustomFormItemButton,
  CustomFormItemInput,
  CustomFormItemInputTextArea,
  TextDivWrapper,
} from "./style/BusinessOwner";
import store, { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { InboxOutlined } from "@ant-design/icons";
import { createImage } from "../app/store/actions/restaurant/createImageActions";
import { Status } from "../app/service/Status";

const { Dragger } = Upload;

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface UploadBackgroundProps {}

const UploadBackground: FC<UploadBackgroundProps> = ({}): ReactElement => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const width = useAppSelector((state: RootState) => state.windowReducer.width);
  const isCreated = useAppSelector(
    (state: RootState) => state.restaurantCreate.isCreated
  );

  const [file, setFile] = useState<UploadFile>();
  const uploading = useAppSelector(
    (state: RootState) => state.restaurantCreate.status
  );
  console.log(uploading);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("files[]", file as RcFile);
    console.log(file);

    const response = dispatch(createImage(formData));
    console.log(response);

    // fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setFileList([]);
    //     message.success("upload successfully.");
    //   })
    //   .catch(() => {
    //     message.error("upload failed.");
    //   })
    //   .finally(() => {
    //     setUploading(false);
    //   });
  };

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (isCreated) {
  //     return navigate("/upload_background");
  //   }
  // }, []);

  useEffect(() => {
    // add iniline horizontal vertiucal methods

    if (width < 768) {
      setFormLayout("vertical");
    } else {
      setFormLayout("horizontal");
    }
  }, [width]);

  const props: UploadProps = {
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
  };

  return (
    <div>
      <OuterFormDivCreateRestaurant>
        <InnerFormDivCreateRestaurant>
          <TextDivWrapper>
            <h4>
              Upload image that will be background of your restaurant profile
            </h4>
            <p>
              Upload image that will be background of your restaurant profile
            </p>
          </TextDivWrapper>

          <CustomDragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </CustomDragger>

          <ButtonItemHolder>
            <CustomFormButton
              type="primary"
              onClick={handleUpload}
              // disabled={fileList.length === 0}
              loading={uploading == 0 ? true : false}
              style={{ marginTop: 16 }}
            >
              {uploading == 0 ? "Uploading" : "Start Upload"}
            </CustomFormButton>
          </ButtonItemHolder>
        </InnerFormDivCreateRestaurant>
      </OuterFormDivCreateRestaurant>
    </div>
  );
};

export default UploadBackground;
