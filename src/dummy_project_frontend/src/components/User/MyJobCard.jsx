import React, { useState } from "react"
import {
    Avatar,
    Card,
    Tooltip,
    Typography,
    Modal,
    Button,
    List,
    message
} from "antd"
import {
    FileAddOutlined,
    ShopOutlined,
    FieldTimeOutlined,
    DownloadOutlined,
    CheckOutlined
} from "@ant-design/icons"

const { Paragraph } = Typography
const { Meta } = Card

const initialApplicants = [
    { id: 7, name: "John Doe", proposalUrl: "#" },
    { id: 8, name: "Jane Smith", proposalUrl: "#" },
    { id: 9, name: "Bob Johnson", proposalUrl: "#" },
];

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

const MyJobCard = (props) => {
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
    const [isApplicantsModalVisible, setIsApplicantsModalVisible] = useState(false)
    const [applicants, setApplicants] = useState(initialApplicants)
    const [approvedApplicant, setApprovedApplicant] = useState(null)

    const showDescriptionModal = () => {
        setIsDescriptionModalVisible(true)
    }

    const handleDescriptionModalCancel = () => {
        setIsDescriptionModalVisible(false)
    }

    const handleViewApplicants = () => {

        if (approvedApplicant) {
            message.info("This job position has already been filled.")
            return
        }
        setIsApplicantsModalVisible(true)
    }

    const handleApplicantsModalCancel = () => {
        setIsApplicantsModalVisible(false)
    }

    const handleDownloadProposal = (applicantId) => {
        // Implement download logic here
        console.log(`Downloading proposal for applicant ${applicantId}`)
        message.success("Downloading proposal...")
    }

    const handleApproveApplicant = (applicant) => {
        setApprovedApplicant(applicant)
        setApplicants(prevApplicants => prevApplicants.filter(a => a.id !== applicant.id))
        message.success(`Applicant ${applicant.name} approved!`)
        setTimeout(() => {
            setIsApplicantsModalVisible(false)
        }, 1000) // Close the modal after 1 second
    }

    const isEllipsisNeeded =
        description.split("\n").length > 3 || description.length > 100

    return (
        <>
            <Card
                loading={loading}
                actions={[
                    <Tooltip title={approvedApplicant ? "Position filled" : "View applicants"}>
                        <FileAddOutlined 
                            key="view" 
                            onClick={handleViewApplicants}
                            style={{ color: approvedApplicant ? 'green' : undefined }}
                        />
                    </Tooltip>
                ]}>
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
                {approvedApplicant && (
                    <div style={{ marginTop: '10px', color: 'green' }}>
                        Position filled by {approvedApplicant.name}
                    </div>
                )}
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
                title={`Applicants for ${jobTitle}`}
                open={isApplicantsModalVisible}
                onCancel={handleApplicantsModalCancel}
                footer={null}
                width={600}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={applicants}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Button 
                                    icon={<DownloadOutlined />} 
                                    onClick={() => handleDownloadProposal(item.id)}
                                >
                                    Download
                                </Button>,
                                <Button 
                                    type="primary" 
                                    icon={<CheckOutlined />} 
                                    onClick={() => handleApproveApplicant(item)}
                                    style={{ backgroundColor: 'green', borderColor: 'green' }}
                                >
                                    Approve
                                </Button>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={`/img/jobs/avatar${item.id}.svg`} />}
                                title={item.name}
                                description={`Applicant ID: ${item.id}`}
                            />
                        </List.Item>
                    )}
                />
            </Modal>
        </>
    )
}

export default MyJobCard;