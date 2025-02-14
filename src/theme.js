export default {
  animation: {
    'blurred-fade-in': 'blurred-fade-in 0.9s ease-in-out both',
    'fade-in': 'fade-in 0.6s ease-in both',
    'fade-out': 'fade-out 0.6s ease-out both',
    'slide-in-top': 'slide-in-top 0.6s ease-out both',
    'slide-in-bottom': 'slide-in-bottom 0.6s ease-out both',
    'slide-out-top': 'slide-out-top 0.6s ease-out both',
    'slide-out-bottom': 'slide-out-bottom 0.6s ease-out both',
    'zoom-in': 'zoom-in 0.6s ease-out both',
    'zoom-out': 'zoom-out 0.6s ease-out both',
    'rotate-90': 'rotate-90 1s ease-in-out both',
    'rotate-180': 'rotate-180 1s ease-in-out both',
    'rotate-360': 'rotate-360 1s linear both',
    'flip-horizontal': 'flip-horizontal 1s ease-in-out both',
    'flip-vertical': 'flip-vertical 1s ease-in-out both',
    bouncing: 'bouncing 1s ease-in-out both',
    swing: 'swing 1s ease-in-out both',
    wobble: 'wobble 1s ease-in-out both',
    pulsing: 'pulsing 1s ease-in-out both',
    shake: 'shake 0.5s ease-in-out both',
    tada: 'tada 1s ease-in-out both',
    jump: 'jump 1s ease-in-out both',
    hang: 'hang 1s ease-in-out both',
    'roll-in': 'roll-in 1s ease-in-out both',
    'roll-out': 'roll-out 1s ease-in-out both',
    float: 'float 1s ease-in-out both',
    sink: 'sink 1s ease-in-out both',
    flash: 'flash 1s ease-in-out both',
    jiggle: 'jiggle 0.5s ease-in-out both',
    'rubber-band': 'rubber-band 1s ease-in-out both',
    scale: 'scale 0.6s ease-out both',
    'slide-in-left': 'slide-in-left 0.6s ease-out both',
    'slide-in-right': 'slide-in-right 0.6s ease-out both',
    'slide-out-left': 'slide-out-left 0.6s ease-out both',
    'slide-out-right': 'slide-out-right 0.6s ease-out both',
    'spin-clockwise': 'spin-clockwise 0.6s linear both',
    'spin-counter-clockwise': 'spin-counter-clockwise 0.6s linear both',
    'flip-x': 'flip-x 0.6s ease-out both',
    'flip-y': 'flip-y 0.6s ease-out both',
    blink: 'blink 0.5s both',
    pop: 'pop 0.6s ease-out both',
    'expand-horizontally': 'expand-horizontally 0.6s ease-out both',
    'contract-horizontally': 'contract-horizontally 0.6s ease-out both',
    'expand-vertically': 'expand-vertically 0.6s ease-out both',
    'contract-vertically': 'contract-vertically 0.6s ease-out both',
    'fade-in-up': 'fade-in-up 0.6s ease-in-out both',
    'fade-in-down': 'fade-in-down 0.6s ease-in-out both',
    'fade-in-left': 'fade-in-left 0.6s ease-in-out both',
    'fade-in-right': 'fade-in-right 0.6s ease-in-out both',
    'fade-out-up': 'fade-out-up 0.6s ease-out both',
    'fade-out-down': 'fade-out-down 0.6s ease-out both',
    'fade-out-left': 'fade-out-left 0.6s ease-out both',
    'fade-out-right': 'fade-out-right 0.6s ease-out both',
    sway: 'sway 0.6s ease-out both',
    'flip-in-x': 'flip-in-x 0.6s ease-out both',
    'flip-in-y': 'flip-in-y 0.6s ease-out both',
    'flip-out-x': 'flip-out-x 0.6s ease-out both',
    'flip-out-y': 'flip-out-y 0.6s ease-out both',
    'rotate-in': 'rotate-in 0.6s ease-out both',
    'rotate-out': 'rotate-out 0.6s ease-out both',
    'slide-rotate-in': 'slide-rotate-in 0.6s ease-out both',
    'slide-rotate-out': 'slide-rotate-out 0.6s ease-out both',
    heartbeat: 'heartbeat 0.6s ease-out both',
    'horizontal-vibration': 'horizontal-vibration 0.3s linear infinite both',
    'rotational-wave': 'rotational-wave 2s ease-in-out infinite both',
    skew: 'skew 0.5s ease-in-out both',
    'skew-right': 'skew-right 0.5s ease-in-out both',
    'vertical-bounce': 'vertical-bounce 0.6s ease-in-out both',
    'horizontal-bounce': 'horizontal-bounce 0.6s ease-in-out both',
    tilt: 'tilt 0.6s ease-in-out both',
    squeeze: 'squeeze 0.6s ease-in-out both',
    'slide-up-fade': 'slide-up-fade 0.6s ease-out both',
    'bounce-fade-in': 'bounce-fade-in 0.6s ease-out both',
    'swing-drop-in': 'swing-drop-in 0.6s ease-out both',
    'pulse-fade-in': 'pulse-fade-in 0.6s ease-out both',
    'impulse-rotation-right': 'impulse-rotation-right 1s ease-in-out both',
    'impulse-rotation-left': 'impulse-rotation-left 1s ease-in-out both',
    dancing: 'dancing 1s ease-in-out both',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    jelly: 'jelly 1s ease-out forwards'
  },
  keyframes: {
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    'fade-out': {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' }
    },
    'slide-in-top': {
      '0%': { transform: 'translateY(-20px)' },
      '100%': { transform: 'translateY(0)' }
    },
    'slide-in-bottom': {
      '0%': { transform: 'translateY(20px)' },
      '100%': { transform: 'translateY(0)' }
    },
    'slide-out-top': {
      '0%': { transform: 'translateY(0)' },
      '100%': { transform: 'translateY(-20px)' }
    },
    'slide-out-bottom': {
      '0%': { transform: 'translateY(0)' },
      '100%': { transform: 'translateY(20px)' }
    },
    'zoom-in': {
      '0%': { opacity: '0', transform: 'scale(.5)' },
      '100%': { opacity: '1', transform: 'scale(1)' }
    },
    'zoom-out': {
      '0%': { opacity: '1', transform: 'scale(1)' },
      '100%': { opacity: '0', transform: 'scale(.5)' }
    },
    'rotate-90': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(90deg)' }
    },
    'rotate-180': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(180deg)' }
    },
    'rotate-360': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    'flip-horizontal': {
      '0%': { transform: 'rotateY(0deg)' },
      '100%': { transform: 'rotateY(180deg)' }
    },
    'flip-vertical': {
      '0%': { transform: 'rotateX(0deg)' },
      '100%': { transform: 'rotateX(180deg)' }
    },
    bouncing: {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(0)' }
    },
    swing: {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(15deg)' },
      '100%': { transform: 'rotate(0deg)' }
    },
    wobble: {
      '0%': { transform: 'translateX(0)' },
      '15%': { transform: 'translateX(-20px)' },
      '30%': { transform: 'translateX(20%)' },
      '45%': { transform: 'translateX(-15%)' },
      '60%': { transform: 'translateX(20px)' },
      '75%': { transform: 'translateX(-5%)' },
      '100%': { transform: 'translateX(0)' }
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' }
    },
    pulsing: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' }
    },
    shake: {
      '0%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-10px)' },
      '50%': { transform: 'translateX(10px)' },
      '75%': { transform: 'translateX(-10px)' },
      '100%': { transform: 'translateX(0)' }
    },
    tada: {
      '0%': { transform: 'scale(1)' },
      '10%': { transform: 'scale(0.9) rotate(-3deg)' },
      '20%': { transform: 'scale(0.9) rotate(-3deg)' },
      '30%': { transform: 'scale(1.1) rotate(3deg)' },
      '40%': { transform: 'scale(1.1) rotate(-3deg)' },
      '50%': { transform: 'scale(1.1) rotate(3deg)' },
      '60%': { transform: 'scale(1.1) rotate(-3deg)' },
      '70%': { transform: 'scale(1.1) rotate(3deg)' },
      '80%': { transform: 'scale(1.1) rotate(-3deg)' },
      '90%': { transform: 'scale(1.1) rotate(3deg)' },
      '100%': { transform: 'scale(1) rotate(0)' }
    },
    jump: {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
      '100%': { transform: 'translateY(0)' }
    },
    hang: {
      '0%': { transform: 'translateY(-20px)' },
      '50%': { transform: 'translateY(0)' },
      '100%': { transform: 'translateY(-20px)' }
    },
    'roll-in': {
      '0%': { transform: 'translateX(-20px) rotate(-120deg)' },
      '100%': { transform: 'translateX(0) rotate(0)' }
    },
    'roll-out': {
      '0%': { transform: 'translateX(0) rotate(0)' },
      '100%': { transform: 'translateX(20px) rotate(120deg)' }
    },
    float: {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(0)' }
    },
    sink: {
      '0%': { transform: 'translateY(-10px)' },
      '50%': { transform: 'translateY(0)' },
      '100%': { transform: 'translateY(-10px)' }
    },
    flash: {
      '0%': { opacity: '1' },
      '50%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    jiggle: {
      '0%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
      '100%': { transform: 'rotate(-3deg)' }
    },
    'rubber-band': {
      '0%': { transform: 'scale(1)' },
      '30%': { transform: 'scale(1.25)' },
      '40%': { transform: 'scale(0.75)' },
      '50%': { transform: 'scale(1.15)' },
      '65%': { transform: 'scale(0.95)' },
      '75%': { transform: 'scale(1.05)' },
      '100%': { transform: 'scale(1)' }
    },
    scale: {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(1.10)' }
    },
    'slide-in-left': {
      '0%': { transform: 'translateX(-20px)' },
      '100%': { transform: 'translateX(0)' }
    },
    'slide-in-right': {
      '0%': { transform: 'translateX(20px)' },
      '100%': { transform: 'translateX(0)' }
    },
    'slide-out-left': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-20px)' }
    },
    'slide-out-right': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(20px)' }
    },
    'spin-clockwise': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    'spin-counter-clockwise': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(-360deg)' }
    },
    'flip-x': {
      '0%': { transform: 'scaleX(1)' },
      '50%': { transform: 'scaleX(-1)' },
      '100%': { transform: 'scaleX(1)' }
    },
    'flip-y': {
      '0%': { transform: 'scaleY(1)' },
      '50%': { transform: 'scaleY(-1)' },
      '100%': { transform: 'scaleY(1)' }
    },
    blink: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    pop: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' }
    },
    'expand-horizontally': {
      '0%': { transform: 'scaleX(0)' },
      '100%': { transform: 'scaleX(1)' }
    },
    'contract-horizontally': {
      '0%': { transform: 'scaleX(1)' },
      '100%': { transform: 'scaleX(0)' }
    },
    'expand-vertically': {
      '0%': { transform: 'scaleY(0)' },
      '100%': { transform: 'scaleY(1)' }
    },
    'contract-vertically': {
      '0%': { transform: 'scaleY(1)' },
      '100%': { transform: 'scaleY(0)' }
    },
    'fade-in-up': {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    },
    'fade-in-down': {
      '0%': { opacity: '0', transform: 'translateY(-20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    },
    'fade-in-left': {
      '0%': { opacity: '0', transform: 'translateX(20px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' }
    },
    'fade-in-right': {
      '0%': { opacity: '0', transform: 'translateX(-20px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' }
    },
    'fade-out-up': {
      '0%': { opacity: '1', transform: 'translateY(0)' },
      '100%': { opacity: '0', transform: 'translateY(-20px)' }
    },
    'fade-out-down': {
      '0%': { opacity: '1', transform: 'translateY(0)' },
      '100%': { opacity: '0', transform: 'translateY(20px)' }
    },
    'fade-out-left': {
      '0%': { opacity: '1', transform: 'translateX(0)' },
      '100%': { opacity: '0', transform: 'translateX(-20px)' }
    },
    'fade-out-right': {
      '0%': { opacity: '1', transform: 'translateX(0)' },
      '100%': { opacity: '0', transform: 'translateX(20px)' }
    },
    sway: {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(15deg)' },
      '100%': { transform: 'rotate(0deg)' }
    },
    'flip-in-x': {
      '0%': { opacity: '0', transform: 'rotateY(90deg)' },
      '100%': { opacity: '1', transform: 'rotateY(0deg)' }
    },
    'flip-in-y': {
      '0%': { opacity: '0', transform: 'rotateX(90deg)' },
      '100%': { opacity: '1', transform: 'rotateX(0deg)' }
    },
    'flip-out-x': {
      '0%': { opacity: '1', transform: 'rotateY(0deg)' },
      '100%': { opacity: '0', transform: 'rotateY(90deg)' }
    },
    'flip-out-y': {
      '0%': { opacity: '1', transform: 'rotateX(0deg)' },
      '100%': { opacity: '0', transform: 'rotateX(90deg)' }
    },
    'rotate-in': {
      '0%': { opacity: '0', transform: 'rotate(-90deg)' },
      '100%': { opacity: '1', transform: 'rotate(0deg)' }
    },
    'rotate-out': {
      '0%': { opacity: '1', transform: 'rotate(0deg)' },
      '100%': { opacity: '0', transform: 'rotate(90deg)' }
    },
    'slide-rotate-in': {
      '0%': { opacity: '0', transform: 'translateX(-20px) rotate(-90deg)' },
      '100%': { opacity: '1', transform: 'translateX(0) rotate(0deg)' }
    },
    'slide-rotate-out': {
      '0%': { opacity: '1', transform: 'translateX(0) rotate(0deg)' },
      '100%': { opacity: '0', transform: 'translateX(20px) rotate(90deg)' }
    },
    heartbeat: {
      '0%': { transform: 'scale(1)' },
      '25%': { transform: 'scale(1.1)' },
      '50%': { transform: 'scale(1)' },
      '75%': { transform: 'scale(0.9)' },
      '100%': { transform: 'scale(1)' }
    },
    'blurred-fade-in': {
      '0%': { filter: 'blur(5px)', opacity: '0' },
      '100%': { filter: 'blur(0)', opacity: '1' }
    },
    'horizontal-vibration': {
      '0%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(5px)' },
      '50%': { transform: 'translateX(-5px)' },
      '75%': { transform: 'translateX(5px)' },
      '100%': { transform: 'translateX(0)' }
    },
    'rotational-wave': {
      '0%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(10deg)' },
      '50%': { transform: 'rotate(-10deg)' },
      '75%': { transform: 'rotate(10deg)' },
      '100%': { transform: 'rotate(0deg)' }
    },
    skew: {
      '0%': { transform: 'skew(0deg)' },
      '100%': { transform: 'skew(20deg)' }
    },
    'skew-right': {
      '0%': { transform: 'skew(0deg)' },
      '100%': { transform: 'skew(-20deg)' }
    },
    'vertical-bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' }
    },
    'horizontal-bounce': {
      '0%, 100%': { transform: 'translateX(0)' },
      '50%': { transform: 'translateX(20px)' }
    },
    tilt: {
      '0%': { transform: 'rotateY(0deg)' },
      '50%': { transform: 'rotateY(20deg)' },
      '100%': { transform: 'rotateY(0deg)' }
    },
    squeeze: {
      '0%, 100%': { transform: 'scale(1, 1)' },
      '50%': { transform: 'scale(1.1, 0.9)' }
    },
    'slide-up-fade': {
      '0%': { opacity: '0', transform: 'translateY(50px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    },
    'bounce-fade-in': {
      '0%': { transform: 'scale(0.5)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    'swing-drop-in': {
      '0%': { transform: 'rotate(-30deg) translateY(-50px)', opacity: '0' },
      '100%': { transform: 'rotate(0deg) translateY(0)', opacity: '1' }
    },
    'pulse-fade-in': {
      '0%': { transform: 'scale(0.9)', opacity: '0' },
      '50%': { transform: 'scale(1.05)', opacity: '0.5' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    'impulse-rotation-right': {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(-40deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    'impulse-rotation-left': {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(40deg)' },
      '100%': { transform: 'rotate(-360deg)' }
    },
    dancing: {
      '0%': { transform: 'skew(0deg)' },
      '25%': { transform: 'skew(-40deg)' },
      '50%': { transform: 'skew(40deg)' },
      '75%': { transform: 'skew(-40deg)' },
      '100%': { transform: 'skew(0deg)' }
    },
    jelly: {
      '0%': { transform: 'scale(1, 1)' },
      '20%': { transform: 'scale(1.25, 0.75)' },
      '40%': { transform: 'scale(0.75, 1.25)' },
      '60%': { transform: 'scale(1.15, 0.85)' },
      '75%': { transform: 'scale(0.95, 1.05)' },
      '85%': { transform: 'scale(1.05, 0.95)' },
      '92%': { transform: 'scale(1, 1.02)' },
      '100%': { transform: 'scale(1, 1)' }
    }
  },
  animationDelay: {
    none: '0ms',
    0: '0ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    250: '250ms',
    300: '300ms',
    400: '400ms',
    500: '500ms',
    700: '700ms',
    800: '800ms',
    900: '900ms',
    1000: '1000ms'
  },
  animationDuration: {
    none: '0ms',
    slower: '500ms',
    slow: '400ms',
    normal: '300ms',
    fast: '200ms',
    faster: '100ms',
    0: '0ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    250: '250ms',
    300: '300ms',
    400: '400ms',
    500: '500ms',
    700: '700ms',
    800: '800ms',
    900: '900ms',
    1000: '1000ms'
  },
  animationSteps: {
    none: '0',
    retro: '8',
    normal: '16',
    modern: '24'
  },
  animationIterationCount: {
    none: '0',
    once: '1',
    twice: '2',
    thrice: '3',
    infinite: 'infinite'
  },
  animationFillMode: {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both'
  },
  animationCubicBezier: {
    'sine-in': 'cubic-bezier(0.12,0,0.39,0)',
    'sine-out': 'cubic-bezier(0.39,0.575,0.565,1)',
    'sine-in-out': 'cubic-bezier(0.445,0.05,0.55,0.95)',
    'quad-in': 'cubic-bezier(0.55,0.085,0.68,0.53)',
    'quad-out': 'cubic-bezier(0.25,0.46,0.45,0.94)',
    'quad-in-out': 'cubic-bezier(0.455,0.03,0.515,0.955)',
    'cubic-in': 'cubic-bezier(0.55,0.055,0.675,0.19)',
    'cubic-out': 'cubic-bezier(0.215,0.61,0.355,1)',
    'cubic-in-out': 'cubic-bezier(0.645,0.045,0.355,1)',
    'quart-in': 'cubic-bezier(0.895,0.03,0.685,0.22)',
    'quart-out': 'cubic-bezier(0.165,0.84,0.44,1)',
    'quart-in-out': 'cubic-bezier(0.77,0,0.175,1)',
    'quint-in': 'cubic-bezier(0.755,0.05,0.855,0.06)',
    'quint-out': 'cubic-bezier(0.23,1,0.32,1)',
    'quint-in-out': 'cubic-bezier(0.86,0,0.07,1)',
    'expo-in': 'cubic-bezier(0.95,0.05,0.795,0.035)',
    'expo-out': 'cubic-bezier(0.19,1,0.22,1)',
    'expo-in-out': 'cubic-bezier(1,0,0,1)',
    'circ-in': 'cubic-bezier(0.6,0.04,0.98,0.335)',
    'circ-out': 'cubic-bezier(0.075,0.82,0.165,1)',
    'circ-in-out': 'cubic-bezier(0.785,0.135,0.15,0.86)',
    'back-in': 'cubic-bezier(0.6,-0.28,0.735,0.045)',
    'back-out': 'cubic-bezier(0.175,0.885,0.32,1.275)',
    'back-in-out': 'cubic-bezier(0.68,-0.55,0.265,1.55)'
  },
  animationRange: {
    normal: 'normal',
    cover: 'cover',
    contain: 'contain',
    entry: 'entry',
    exit: 'exit',
    gradual: '10% 90%',
    moderate: '20% 80%',
    brisk: '30% 70%',
    rapid: '40% 60%'
  },
  timeline: {
    none: 'none',
    auto: 'auto',
    single: '--single-timeline',
    scroll: 'scroll()',
    view: 'view()'
  },
  scrollTimeline: {
    single: '--single-timeline'
  },
  viewTimeline: {
    single: '--single-timeline'
  },
  scrollTimelineAxis: {
    block: 'block',
    inline: 'inline',
    x: 'x',
    y: 'y'
  },
  viewTimelineAxis: {
    block: 'block',
    inline: 'inline',
    x: 'x',
    y: 'y'
  },
  scrollAnimation: {
    single: '--single-timeline'
  },
  viewAnimation: {
    single: '--single-timeline'
  }
}
