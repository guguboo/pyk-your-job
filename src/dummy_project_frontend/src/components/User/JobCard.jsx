import React, { useState } from "react"
import {
	Avatar,
	Card,
	Tooltip,
	Typography,
	Modal,
	Button,
	Upload,
	message
} from "antd"
import {
	FileAddOutlined,
	ShopOutlined,
	FieldTimeOutlined,
	InboxOutlined
} from "@ant-design/icons"
import dayjs from "dayjs"

const { Paragraph } = Typography
const { Meta } = Card
const { Dragger } = Upload

const dates = [
  "7 October 2024",
  "31 September 2024 ",
  "03 October 2024",
  "7 October 2024",
  "31 September 2024 ",
  "03 October 2024",
  "7 October 2024",
  "31 September 2024 ",
  "03 October 2024",
  "7 October 2024",
  "31 September 2024 ",
  "03 October 2024",
  "7 October 2024",
  "31 September 2024 ",
  "03 October 2024",
  "7 October 2024",
  "31 September 2024 ",
  "03 October 2024",
]

const JobCard = (props) => {
	const {
		id,
		creatorId,
		jobTitle,
		company,
		registrationEndDate,
		description,
		onAddJob,
		loading,
		currentUserId
	} = props

	const [isDescriptionModalVisible, setIsDescriptionModalVisible] = useState(false)
	const [isApplicationModalVisible, setIsApplicationModalVisible] = useState(false)
  
  return (
    <Card
      loading={loading} // ini gw add aja, jadi cmn 1 state dmn semua card jd loading (biar cepet aja wkwk)
      actions={[<FileAddOutlined key="add" onClick={() => onAddJob(props)} />]}>
      <Meta
        avatar={
          <Avatar src={`/img/jobs/avatar${id}.svg`} />
        }
        title={jobTitle}
      />
      <div className="mb-4" />
      <div className="flex gap-2">
        <Tooltip title="Company">
          <ShopOutlined />
        </Tooltip>
        {company}
      </div>
      <div className="flex gap-2">
        <Tooltip title="Registration End Date">
          <FieldTimeOutlined />
        </Tooltip>
        {dates[id]}
      </div>
      <div className="mb-2" />
      <Paragraph style={{ marginBottom: 0 }}>{description}</Paragraph>
    </Card>
  );
};

	const showDescriptionModal = () => {
		setIsDescriptionModalVisible(true)
	}

	const handleDescriptionModalCancel = () => {
		setIsDescriptionModalVisible(false)
	}

	const handleAddJob = () => {
		if (creatorId === currentUserId) {
			message.warning("You can't apply to your own job listing.")
			return
		}
		setIsApplicationModalVisible(true)
	}

	const handleApplicationModalCancel = () => {
		setIsApplicationModalVisible(false)
	}

	const isEllipsisNeeded =
		description.split("\n").length > 3 || description.length > 100

	const uploadProps = {
		name: "file",
		multiple: true,
		action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
		onChange(info) {
			const { status } = info.file
			if (status !== "uploading") {
				console.log(info.file, info.fileList)
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`)
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`)
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files)
		}
	}

	return (
		<>
			<Card
				loading={loading} // ini gw add aja, jadi cmn 1 state dmn semua card jd loading (biar cepet aja wkwk)
				actions={[<FileAddOutlined key="add" onClick={handleAddJob} />]}>
				<Meta
					avatar={
						<Avatar
							src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${id}`}
						/>
					}
					title={jobTitle}
				/>
				<div className="mb-4" />
				<div className="flex gap-2">
					<Tooltip title="Company">
						<ShopOutlined />
					</Tooltip>
					{company}
				</div>
				<div className="flex gap-2">
					<Tooltip title="Registration End Date">
						<FieldTimeOutlined />
					</Tooltip>
					{/* {dayjs(registrationEndDate).toString()} */}
				</div>
				<div className="mb-2" />
				<Paragraph
					ellipsis={
						isEllipsisNeeded
							? {
									rows: 3,
									suffix: <a onClick={showDescriptionModal}>Show more</a>
							  }
							: false
					}>
					{description}
				</Paragraph>
			</Card>

			<Modal
				title={jobTitle}
				open={isDescriptionModalVisible}
				onCancel={handleDescriptionModalCancel}
				footer={[
					<Button key="back" onClick={handleDescriptionModalCancel}>
						Close
					</Button>
				]}>
				<p>{description}</p>
			</Modal>

			<Modal
				title={`Apply for ${jobTitle}`}
				open={isApplicationModalVisible}
				onCancel={handleApplicationModalCancel}
				footer={null}>
				<Dragger {...uploadProps}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">
						Click or drag file to this area to upload
					</p>
					<p className="ant-upload-hint">
						Support for a single or bulk upload. Strictly prohibited from
						uploading company data or other banned files.
					</p>
				</Dragger>
			</Modal>
		</>
	)
}

export default JobCard
