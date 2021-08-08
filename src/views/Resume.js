import React, { Component } from 'react'
import css from './Resume.scss'

import resume from '@/data/resume'

class Resume extends Component {
  render() {
    return (
      <div className={css['page']}>
        <section className={css['resume-section']}>
          <div className={css['profile']}>
            <h1>{resume.name}<span>个人简历</span></h1>
            <div>
              <p>
                <span>{resume.university.name}</span>
                <span>{resume.university.grade}</span>
              </p>
              <p>
                <span>{resume.gender}</span>
                <span>{resume.age}岁</span>
                <span>{resume.experience}年相关工作经验</span>
                <span>{resume.city}</span>
              </p>
              <p>
                <span>{resume.mobile}</span>
                <span>{resume.email}</span>
              </p>
              <p>
                <span>{resume.github}</span>
              </p>
            </div>
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>技术能力</h3>
          <div className={css['skills']}>
            {resume.skills.map(skill => (
              <p>{skill}</p>
            ))}
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>工作经历</h3>
          <div className={css['enterprises']}>
            {resume.enterprises.map(enterprise => (
              <div className={css['enterprise-item']}>
                <div>
                  <span>{enterprise.name}</span>
                  <span>{`${enterprise.checkin} - ${enterprise.checkout || 'Now'}`}</span>
                </div>
                <div>{enterprise.post}</div>
                <div>
                  {enterprise.duties.map(duty => (
                    <p>{duty}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>教育经历</h3>
          <div className={css['university']}>
            <div>{resume.university.name}</div>
            <div>
              <span>{resume.university.grade}</span>
              <span>{`${resume.university.entrance} - ${resume.university.graduation}`}</span>
            </div>
            <div>专业描述：{resume.university.majors.join('、')}</div>
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>项目案例</h3>
          <div className={css['projects']}>
            {resume.projects.map(project => (
              <div className={css['project-item']}>
                <div>
                  <span>{project.name}</span>
                  <span>{`${project.start} - ${project.end}`}</span>
                </div>
                <div>{project.site}</div>
                <div>技术栈：{project.technologies.join(' / ')}</div>
                <div>
                  <div>项目简介</div>
                  <div>{project.description}</div>
                </div>
                <div>
                  <div>负责任务</div>
                  <div>
                    {project.duties.map(duty => (
                      <p>{duty}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default Resume
