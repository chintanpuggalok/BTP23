import React from 'react'

import PropTypes from 'prop-types'

import './schedule.css'

const Schedule = (props) => {
  return (
    <div className="schedule-schedule card">
      <img
        alt={props.Icon_alt}
        src={props.Icon_src}
        className="schedule-icon"
      />
      <span className="schedule-text">{props.text}</span>
      <span className="schedule-text1">{props.text1}</span>
      <div>Placeholder for widget timer</div>
    </div>
  )
}

Schedule.defaultProps = {
  text: 'Schedule',
  Icon_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/39622a11-b838-43d2-9bdc-3ba79420cf0d/3550b2ef-9fa5-4847-8833-c091ca4a08ef?org_if_sml=11142',
  Icon_alt: 'pastedImage',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
}

Schedule.propTypes = {
  text: PropTypes.string,
  Icon_src: PropTypes.string,
  Icon_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default Schedule
