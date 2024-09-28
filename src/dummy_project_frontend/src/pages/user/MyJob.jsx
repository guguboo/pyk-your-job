import { Divider, Typography, Input } from "antd";
import React, { useEffect, useState } from "react";
import MyJobCard from "../../components/User/MyJobCard";
import { jobs_backend } from 'declarations/jobs_backend';

const { Title } = Typography;
const { Search } = Input;

const jobsDef = [
  {
    id: 11,
    creatorId: 3,
    completed: false,
    jobTitle: "Motoko Developer",
    company: "Internet Computer",
    registrationEndDate: "31 July 2024",
    description:
      `Be a backend developer in the future technology! \nPrerequisites: 
      Programming Languages: Proficiency in languages like Python, Java, JavaScript (Node.js), Rust, or Go is crucial for backend development. Familiarity with languages like Swift, Kotlin, or even emerging languages like Zig could be advantageous in specific niches.\n
      1. Cloud Computing: Knowledge of cloud platforms like AWS, Azure, or Google Cloud is essential, including serverless technologies, cloud functions, and container orchestration tools like Kubernetes.\n
      2. Database Management: Understand different types of databases—relational (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB, Cassandra). Also, experience with distributed databases and database scaling techniques is beneficial. \n
      3. APIs and Microservices: Experience designing and building RESTful and GraphQL APIs. A strong grasp of microservice architecture and inter-service communication (gRPC, message brokers) will help adapt to the scaling needs of future applications.\n
      4. Version Control and CI/CD: Familiarity with Git and experience using CI/CD tools like Jenkins, GitHub Actions, or GitLab CI to streamline deployment processes.\n
      5. Security: Understanding security best practices, including encryption, authentication/authorization (OAuth, JWT), and general knowledge of securing web and cloud applications.\n
      6. Containers and Virtualization: Skills in Docker, Kubernetes, and virtualization technologies are critical to managing deployment and scaling.\n
      7. Serverless and Edge Computing: Exposure to serverless architectures (e.g., AWS Lambda, Azure Functions) and understanding of edge computing frameworks is increasingly crucial in the evolving tech landscape.\n
      8. Blockchain and Distributed Systems: A good grasp of distributed systems concepts, blockchain technology, and decentralized applications (dApps) will be relevant for backend roles involving fintech or Web3.\n
      9. Machine Learning Integration: Familiarity with integrating machine learning models in the backend, using frameworks such as TensorFlow or PyTorch, will be increasingly beneficial, especially for applications requiring intelligent data processing.\n
      10. Scalable and Fault-tolerant Systems: Understanding how to design scalable systems that can handle millions of requests while being resilient to failures will be key, particularly in industries like IoT and fintech.\n
      11. Real-time Data Processing: Skills in handling real-time data using technologies like Apache Kafka, RabbitMQ, or WebSockets are valuable for developing future-proof backends for applications such as chat, gaming, or live monitoring.\n
      12. Quantum Computing (Emerging): While still in its infancy, some awareness of quantum computing fundamentals could become an advantage in the coming decades as this technology matures.\n
      13. Soft Skills: Ability to collaborate across teams, communicate technical ideas effectively, and stay adaptable to new and evolving technologies.`,
  },
  {
    id: 13,
    creatorId: 4,
    completed: false,
    jobTitle: "AI & Machine Learning Engineer",
    company: "DeepTech Innovations",
    registrationEndDate: "10 September 2024",
    description:
      `Be part of the team leading AI development for the future! \nPrerequisites: 
      Programming Languages: Proficiency in Python is essential for AI and ML development, while familiarity with R, C++, or Julia is a plus for specialized tasks.\n
      1. Machine Learning Frameworks: Experience with TensorFlow, PyTorch, scikit-learn, or Keras is necessary for building, training, and deploying machine learning models.\n
      2. Data Analysis and Statistics: Solid understanding of statistical techniques and data manipulation using tools like Pandas, NumPy, and SQL to prepare data for machine learning tasks.\n
      3. Deep Learning: Familiarity with deep learning architectures, such as convolutional neural networks (CNNs), recurrent neural networks (RNNs), and transformer models, is crucial for AI projects.\n
      4. Data Engineering: Understanding ETL (Extract, Transform, Load) processes and experience in handling large datasets using platforms like Apache Spark or Hadoop is a plus.\n
      5. Natural Language Processing (NLP): Experience with NLP techniques, including tokenization, sentiment analysis, and language modeling, using tools like SpaCy, NLTK, or Hugging Face.\n
      6. Computer Vision: Familiarity with image processing libraries such as OpenCV, or frameworks like YOLO or Mask R-CNN for object detection and segmentation tasks.\n
      7. Cloud Platforms for ML: Knowledge of deploying ML models on cloud services such as AWS SageMaker, Google AI Platform, or Azure ML is highly beneficial.\n
      8. Model Deployment: Skills in building APIs to serve machine learning models, including using Docker for containerizing models and Kubernetes for orchestration.\n
      9. Reinforcement Learning: Exposure to reinforcement learning concepts and algorithms for applications like robotics, game AI, or financial modeling.\n
      10. Mathematics and Algorithms: Strong foundation in linear algebra, calculus, probability, and optimization, which are core to machine learning algorithms.\n
      11. Experimentation and Hyperparameter Tuning: Experience in fine-tuning model hyperparameters using techniques such as grid search, random search, or Bayesian optimization.\n
      12. AI Ethics and Bias: Awareness of ethical issues and biases in AI models, including understanding techniques to make models fairer and more transparent.\n
      13. Communication and Collaboration: Ability to work in cross-functional teams, clearly explain model performance and limitations, and iterate on feedback to improve model outcomes.`
  },

  {
    id: 4,
    creatorId: 1,
    completed: false,
    jobTitle: "UI/UX Designer",
    company: "Woogle",
    registrationEndDate: "31 September 2024",
    description:
      "Are you a Graphic Designer?",
  }
];

const MyJobs = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(jobsDef);

  const onAddJob = ({ id }) => {
    // kalo butuh values lain dari array jobs tinggal tambah sebelah id kaya ({ id }) jadi ({ id, creatorId })
    console.log(id);
  };

  return (
    <>
      <Title>See Your Active Jobs</Title>
      <Search placeholder="Search a new job" loading={loading} />
      <Divider style={{ borderColor: "#fff" }} />
      <section className="grid grid-cols-4 gap-4">
        {jobs.map((c) => (
          <MyJobCard key={c.id} {...c} onAddJob={onAddJob} loading={loading} />
        ))}
      </section>
    </>
  );
};

export default MyJobs;

