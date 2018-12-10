import React from 'react'
import '../../styles/components/ui/_button.scss'

const Button = ({
    text,
    addClass = '',
    url = ''
}) => (
    <a href={url} className={`Button ${addClass}`} target="_blank" rel="noopener noreferrer">{text}</a>
)

export default Button
