import React from 'react';
import Jobs from './Jobs';

const Jobpage = (props) =>{
    const jobsList = props.jobs.map(job => {
        return <>
  

        <h1>{job.title}</h1>
        <h1>{job.type}</h1>
        <p>{job.location}</p>
        <p>{job.company}</p>
          </>
                    
  
                    //<Job title = {job.title} location={job.location} key={job.id}/>
    })
    return(
    <div>
       
        {jobsList}

       
        
          
    </div>
    )
}

export default Jobpage;