import React from 'react'

const EarthIcon = props =>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" viewBox="0 0 120 120">
        <g id="Artboard_1" data-name="Artboard 1">
        <image id="world" x="5" y="1" width="110" height="118" xlinkHref="data:img/png;base64,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"/>
        </g>
    </svg>


export default EarthIcon