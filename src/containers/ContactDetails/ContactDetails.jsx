import React from 'react'
import PropTypes from 'prop-types'
import Mailto from 'react-protected-mailto'
import styles from './ContactDetails.module.scss'

const ContactDetails = ({ computedMatch, users }) => {
  const { params: { userId = 1 } = {} } = computedMatch
  const { id, avatar = null, email, first_name, last_name, favorite } = users.find(({ id }) => id === +userId)

  return (
    <div className="wrapper-sm">
      <div className={ styles.UserCard }>
        { avatar
          && <div className={ styles.UserAvatar }>
            <img src={ avatar } alt="avatar" />
          </div>
        }
        <div className={ styles.UserName }>
          { first_name } { last_name }
        </div>
        <div className={ styles.UserEmail }>
          <Mailto
            email={ email }
            headers={
              { subject:'Question from the Contact Manager App' },
              { cc:'friend@mail.my' }
            }
          >{ email }</Mailto>
        </div>
        <div className={ styles.UserDescription }>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolor exercitationem similique sed voluptatem consequatur sapiente repellendus ipsa recusandae laudantium.
        </div>
      </div>
    </div>
  )
}

ContactDetails.propTypes = {
  users: PropTypes.array
}

ContactDetails.defaultProps = {
  users: []
}

export default ContactDetails
