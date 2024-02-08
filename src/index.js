import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = api => {
  const { theme, matchUtilities, addUtilities } = api

  const dynamicUtils = {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') },
    'animate-iteration-count': { css: 'animation-iteration-count', values: theme('animationIterationCount') },
    'animate-fill-mode': { css: 'animation-fill-mode', values: theme('animationFillMode') },
    'animate-bezier': { css: 'animation-timing-function', values: theme('animationCubicBezier') },
    'animate-steps': { css: 'animation-timing-function', values: theme('animationSteps'), generateValue: value => `steps(${value})` }
  }

  Object.entries(dynamicUtils).forEach(([name, { css, values, generateValue }]) => {
    matchUtilities({
      [name]: value => ({
        [css]: generateValue ? generateValue(value) : value
      })
    }, {
      values
    })
  })

  addUtilities({
    '.animate-ease': {
      'animation-timing-function': 'ease'
    },
    '.animate-ease-in': {
      'animation-timing-function': 'ease-in'
    },
    '.animate-ease-out': {
      'animation-timing-function': 'ease-out'
    },
    '.animate-ease-in-out': {
      'animation-timing-function': 'ease-in-out'
    },
    '.animate-linear': {
      'animation-timing-function': 'linear'
    },
    '.animate-direction-normal': {
      'animation-direction': 'normal'
    },
    '.animate-direction-reverse': {
      'animation-direction': 'reverse'
    },
    '.animate-direction-alternate': {
      'animation-direction': 'alternate'
    },
    '.animate-direction-alternate-reverse': {
      'animation-direction': 'alternate-reverse'
    },
    '.animate-play-running': {
      'animation-play-state': 'running'
    },
    '.animate-play-paused': {
      'animation-play-state': 'paused'
    }
  })
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
