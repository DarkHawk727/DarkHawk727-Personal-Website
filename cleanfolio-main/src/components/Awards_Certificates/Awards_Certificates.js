import './Awards_Certificates.css'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import SchoolIcon from '@material-ui/icons/School'

const AwardsCertificates = () => (
  <section className='section contact center' id='awards'>
    <h2 className='section__title'>Awards/Certificates</h2>
    <ul>
      <li>
        <SchoolIcon className='icon' />
        Machine Learning | <i>August, 2021</i> | <b>Coursera</b>
      </li>
      <li>
        <EmojiEventsIcon className='icon' />1<sup>st</sup> place overall |{' '}
        <i>Febuary, 2021</i> | <b>WinHacks 2021</b>
      </li>
      <li>
        <EmojiEventsIcon className='icon' />
        Best use of Google Cloud | <i>March, 2021</i> |{' '}
        <b>UncommonHacks 2021</b>
      </li>
    </ul>
  </section>
)

export default AwardsCertificates
