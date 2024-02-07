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
    pulsar: 'pulsar 1s ease-in-out both',
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
    'vertical-bounce': 'vertical-bounce 0.6s ease-in-out both',
    'horizontal-bounce': 'horizontal-bounce 0.6s ease-in-out both',
    tilt: 'tilt 0.6s ease-in-out both',
    squeeze: 'squeeze 0.6s ease-in-out both',
    'slide-up-fade': 'slide-up-fade 0.6s ease-out both',
    'bounce-fade-in': 'bounce-fade-in 0.6s ease-out both',
    'swing-drop-in': 'swing-drop-in 0.6s ease-out both',
    'background-shine': 'background-shine 2s linear infinite both',
    'pulse-fade-in': 'pulse-fade-in 0.6s ease-out both'
  },
  keyframes: {
    'background-shine': {
      from: {
        backgroundPosition: '0 0'
      },
      to: {
        backgroundPosition: '-200% 0'
      }
    },
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
    pulsar: {
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
    }
  },
  animationDelay: {
    none: 0,
    0: 0,
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
    none: 0,
    slower: '500ms',
    slow: '400ms',
    normal: '300ms',
    fast: '200ms',
    faster: '100ms',
    0: 0,
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
  }
}
