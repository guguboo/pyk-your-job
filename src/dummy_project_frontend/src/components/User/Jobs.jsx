import React, { useState, useEffect } from 'react';
import { jobs_backend } from 'declarations/jobs_backend';


export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState('');
    const [desc, setDesc] = useState('');
    const [creatorId, setCreatorId] = useState('');
    const [company, setCompany] = useState('');
    const [duration, setDuration] = useState(0);

    

    useEffect(async () => {
        const id = await jobs_backend.whoami()
        setCreatorId(id) //insert internet id here
        fetchJobs();
    }, []);

    // This function is similar to making a GET request
    const fetchJobs = async () => {
        try {
        const fetchedJobs = await jobs_backend.getJobs();
        print(fetchedJobs)
        setJobs(fetchedJobs);
        } catch (error) {
        console.error('Error fetching jobs:', error);
        }
    };

    // This function is similar to making a POST request
    const handleAddJob = async (e) => {
        e.preventDefault();
        if (!newJob.trim() && !desc.trim() && !creatorId.trim() && !company.trim()) return;
        try {
        await jobs_backend.addJob(newJob, creatorId, company, Number(duration), desc);
        setNewJob('');
        setDesc('');
        setCreatorId('');
        setCompany('');
        setDuration(0);
        fetchJobs();
        } catch (error) {
        console.error('Error adding job:', error);
        }
    };

    return (
        <div className='w-full p-[10%]'>

            <div className="job-app">
            <div className='text-4xl font-black'>Available Jobs:</div>
            <form onSubmit={handleAddJob} className='flex flex-col gap-3 my-10'>
                <label>Job Title</label>
                <input
                name="title"
                type="text"
                className="text-[#1e1d1d] px-3 mb-4 rounded-lg w-[30%]"
                value={newJob}
                onChange={(e) => setNewJob(e.target.value)}
                placeholder="Add a new job"
                />
                <label>Description</label>
                <input
                type="text"
                className="text-[#0e0e0e] h-28 px-3 mb-4 rounded-lg w-[30%]"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Enter Job Description"
                />
                <label>Company Name</label>
                <input
                type="text"
                className="text-[#0e0e0e] px-3 mb-4 rounded-lg w-[30%]"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter Company Name"
                />
                <label>Registration Duration</label>
                <input
                type="number"
                className="text-[#0e0e0e] px-3 mb-4 rounded-lg w-[30%]"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Duration in Days From Now"
                />
                <button type="submit" className='bg-white text-[#0e0e0e] w-[10%] rounded-lg mt-4'>Add Job</button>
            </form>
            <div className='text-4xl font-black mb-10'>Jobs List</div>
            <div className='grid grid-cols-4 gap-5'>
                {jobs.map((job) => (
                    <div key={job.id} className='p-10 bg-white bg-opacity-10 rounded-xl border border-white flex flex-col gap-3'>
                        <div key={job.id} className='font-bold text-4xl'>{job.jobTitle}</div>   
                        <div key={job.id} className='font-bold text-lg'>{job.company}</div>
                        <div key={job.id} className='font-light text-lg'>{job.description}</div>
                        <div key={job.id} className='font-bold text-lg'>Deadline: {job.registrationEndDate} in Nanosecond</div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}