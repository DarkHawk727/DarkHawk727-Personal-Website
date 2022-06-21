import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import LaunchIcon from '@material-ui/icons/Launch'
import './CertificationContainer.css'

const CertificationContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <h6>
      {project.awarder} / {project.date}
    </h6>
    <br />
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <br />
    {project.link && (
      <a
        href={project.link}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

CertificationContainer.propTypes = {
  project: PropTypes.node.isRequired,
}

export default CertificationContainer
