import { Button, DatePicker, Divider, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React from "react";

const { Title } = Typography;

const PostJobs = () => {
  const [form] = Form.useForm();

  const datePresets = [
    {
      label: "Tommorow",
      value: dayjs().add(1, "d"),
    },
    {
      label: "Next Week",
      value: dayjs().add(7, "d"),
    },
    {
      label: "Next Month",
      value: dayjs().add(1, "month"),
    },
  ];

  return (
    <section className="my-20 mx-40">
      <Title>Create a Jobs</Title>
      <Divider style={{ borderColor: "#fff" }} />
      <Form layout="vertical" form={form}>
        {/* jobTitle */}
        <Form.Item label="Job Title" name="jobTitle">
          <Input placeholder="Front-end Developer" />
        </Form.Item>
        {/* description */}
        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Creating UI From UI Design" />
        </Form.Item>
        {/* profile? */}
        {/* company */}
        <Form.Item label="Company" name="company">
          <Input placeholder="Google" />
        </Form.Item>
        {/* registrationEndDate */}
        <Form.Item label="Registration End Date" name="registrationEndDate">
          <DatePicker
            needConfirm
            defaultValue={dayjs().add(1, "day")}
            presets={datePresets}
          />
        </Form.Item>
        {/* Submit */}
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default PostJobs;
