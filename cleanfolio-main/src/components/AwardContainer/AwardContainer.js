import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './AwardContainer.css'

const AwardContainer = ({ project }) => (
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
  </div>
)

AwardContainer.propTypes = {
  project: PropTypes.node.isRequired,
}

export default AwardContainer
