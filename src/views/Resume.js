import React, { Component } from 'react'
import css from './Resume.scss'

import resume from '@/data/resume'

class Resume extends Component {
  render() {
    return (
      <div className={css['page']}>
        <section className={css['resume-section']}>
          <div className={css['profile']}>
            <h1 className={css['mine-name']}>
              {resume.name}
              <span className={css['desc']}>个人简历</span>
            </h1>
            <div className={css['mine-info']}>
              <p>
                <span>{resume.university.name}</span>
                <span>{resume.university.grade}</span>
              </p>
              <p>
                <span>{resume.gender}</span>
                <span>{resume.age}岁</span>
                <span>{resume.experience}年前端</span>
                <span>{resume.experience + 2}年工作</span>
                <span>{resume.city}</span>
              </p>
              <p>
                <span>{resume.mobile}</span>
                <span>{resume.email}</span>
              </p>
              <p>
                <span>
                  <a
                    href={resume.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resume.github}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>技术能力</h3>
          <div className={css['skills']}>
            {resume.skills.map((skill) => (
              <p className={css['list-row']}>{skill}</p>
            ))}
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>工作经历</h3>
          <div className={css['readme']}>
            {resume.readme.map((line) => (
              <p>{line}</p>
            ))}
          </div>
          <div className={css['enterprises']}>
            {resume.enterprises.map((enterprise) => (
              <div className={css['enterprise-item']}>
                <div className={css['enterprise-item__header']}>
                  <span
                    className={`${css['enterprise-name']} ${
                      enterprise.noFE ? css['noFE'] : ''
                    }`}
                  >
                    {enterprise.name}
                  </span>
                  <span className={css['enterprise-time']}>{`${
                    enterprise.checkin
                  } - ${enterprise.checkout || 'Now'}`}</span>
                </div>
                <div className={css['enterprise-post']}>{enterprise.post}</div>
                <div className={css['enterprise-duty']}>
                  {enterprise.duties.map((duty) => (
                    <p className={css['list-row']}>{duty}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>教育经历</h3>
          <div className={css['university']}>
            <div className={css['university-name']}>
              {resume.university.name}
            </div>
            <div className={css['university-info']}>
              <span>{resume.university.grade}</span>
              <span>{`${resume.university.entrance} - ${resume.university.graduation}`}</span>
            </div>
            <div className={css['university-major']}>
              <p>专业描述：</p>
              {resume.university.majors.map((major) => (
                <p className={css['list-row']}>{major}</p>
              ))}
            </div>
          </div>
        </section>
        <section className={css['resume-section']}>
          <h3 className={css['resume-section__title']}>项目案例</h3>
          <div className={css['projects']}>
            {resume.projects.map((project) => (
              <div className={css['project-item']}>
                <div className={css['project-item__header']}>
                  <span className={css['project-name']}>{project.name}</span>
                  <span className={css['project-time']}>{`${project.start} - ${
                    project.end || 'Now'
                  }`}</span>
                </div>
                {project.site && (
                  <div>
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.site}
                    </a>
                  </div>
                )}
                <div className={css['project-tech']}>
                  技术栈：{project.technologies.join(' / ')}
                </div>
                <div className={css['project-info']}>
                  <div className={css['project-info__title']}>
                    <span>项目简介</span>
                  </div>
                  <div className={css['project-info__content']}>
                    {project.description}
                  </div>
                </div>
                <div className={css['project-info']}>
                  <div className={css['project-info__title']}>
                    <span>负责任务</span>
                  </div>
                  <div className={css['project-info__content']}>
                    {project.duties.map((duty) => (
                      <p className={css['list-row']}>{duty}</p>
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
