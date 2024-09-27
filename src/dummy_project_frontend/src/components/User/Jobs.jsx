import React, { useState, useEffect } from 'react';
import { jobs_backend } from 'declarations/jobs_backend';


export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    // This function is similar to making a GET request
    const fetchJobs = async () => {
        try {
        const fetchedJobs = await jobs_backend.getJobs();
        setJobs(fetchedJobs);
        } catch (error) {
        console.error('Error fetching jobs:', error);
        }
    };

    // This function is similar to making a POST request
    const handleAddJob = async (e) => {
        e.preventDefault();
        if (!newJob.trim()) return;
        try {
        await jobs_backend.addJob(newJob);
        setNewJob('');
        fetchJobs();
        } catch (error) {
        console.error('Error adding job:', error);
        }
    };

    return (
        <div className="job-app">
        <h1>Job List</h1>
        <form onSubmit={handleAddJob}>
            <input
            type="text"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            placeholder="Add a new job"
            />
            <button type="submit">Add Job</button>
        </form>
        <ul>
            {jobs.map((job) => (
            <li key={job.id}>{job.text}</li>
            ))}
        </ul>
        </div>
    );
}