import { Button, DatePicker, Divider, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React from "react";
import { jobs_backend } from 'declarations/jobs_backend';
import toast, { Toaster } from "react-hot-toast";

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

  // kalau berhasil di submit di sini
  // registrationEndDate pake dayjs paling ke ISO String (toISOString) aja
  const onSubmit =  async (values) => {
    const targetDate = values.registrationEndDate;
    console.log(targetDate)
    const currentDate = new Date();
    const differenceInMilliseconds = targetDate - currentDate;
    const millisecondsInADay = 24 * 60 * 60 * 1000;

    const duration = Math.ceil(differenceInMilliseconds / millisecondsInADay);
    const creatorId = await jobs_backend.whoami()
    try {
      await jobs_backend.addJob(values.jobTitle, creatorId, values.company, Number(duration), values.description);
      // console.log('Successful adding Job') //ini bisa dikasih toast atau apa
    } catch (error) {
      console.error('Error adding job:', error);
      toast.error("Error adding job, please try again!");
    }
    console.log(values);
    
    toast.success("Your job is listed now");
    form.resetFields();
  };

  // kalau pas submit ada error (di sisi frontend)
  const onSubmitFailed = (values) => {
    console.log("failed");
    console.log(values);
  }; // ini ga ada jg gpp

  return (
    <section className="my-20 mx-40">
      <Toaster position="top-right" 
      toastOptions={{
        style: {
          background: 'rgba(255, 255, 255, 0.9)',
          color: '#333',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '16px',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      }}/>
      <Title>Create a Jobs</Title>
      <Divider style={{ borderColor: "#fff" }} />
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          registrationEndDate: dayjs().add(1, "day"),
        }}
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
        autoComplete="off">
        {/* jobTitle */}
        <Form.Item
          label="Job Title"
          name="jobTitle"
          rules={[{ required: true, message: "Please input your job title!" }]}>
          <Input placeholder="Front-end Developer" />
        </Form.Item>
        {/* description */}
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your job description!" },
          ]}>
          <TextArea rows={4} placeholder="Creating UI From UI Design" />
        </Form.Item>
        {/* profile? */}
        {/* company */}
        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: "Please input your company!" }]}>
          <Input placeholder="Google" />
        </Form.Item>
        {/* registrationEndDate */}
        <Form.Item label="Registration End Date" name="registrationEndDate">
          <DatePicker needConfirm presets={datePresets} 
          disabledDate={(current) => {
            return current && current < dayjs().endOf('day');
          }}/>
        </Form.Item>
        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default PostJobs;
