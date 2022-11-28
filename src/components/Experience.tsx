import React from 'react'

interface propsType {
  experience: experienceType;
}

export interface experienceType {
    type: string;
    role: string;
    organization: string;
    startDate: string;
    endDate: string;
    contributions: string[];
}

const Experience = ({experience}: propsType) => {
  return (
    <div>
                  <h4>{experience.role} @ {experience.organization}</h4>
                  <p>{experience.startDate} - {experience.endDate}</p>
                  {
                    experience.contributions.map((contribution, index) => (
                      <ul key={index}>
                          <li>
                              {contribution}
                          </li>
                      </ul>
                    ))
                  }
              </div>
  )
}

export default Experience