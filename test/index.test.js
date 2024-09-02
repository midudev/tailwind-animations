import { generatePluginCSS } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-animations plugins', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Hello</div>'
    })
    expect(css).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out both}')
  })

  it('use fade in up animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-fade-in-up">Hello</div>'
    })
    expect(css).toMatch('@keyframes fade-in-up{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}.animate-fade-in-up{animation:fade-in-up 0.6s ease-in-out both}')
  })

  it('use a predefined animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100">Hello</div>'
    })

    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
  })

  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[777ms]">Hello</div>'
    })

    expect(css).toMatch('.animate-delay-\\[777ms\\]{animation-delay:777ms}')
  })

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-100">Hello</div>'
    })

    expect(css).toMatch('.animate-duration-100{animation-duration:100ms}')
  })

  it('use a predefined named animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-faster">Hello</div>'
    })

    expect(css).toMatch('.animate-duration-faster{animation-duration:100ms}')
  })

  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[777ms]">Hello</div>'
    })

    expect(css).toMatch('.animate-duration-\\[777ms\\]{animation-duration:777ms}')
  })

  it('use a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-linear">Hello</div>'
    })

    expect(css).toMatch('.animate-linear{animation-timing-function:linear}')
  })

  it('use a bezier curve as a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-bezier-sine-in">Hello</div>'
    })

    expect(css).toMatch('.animate-bezier-sine-in{animation-timing-function:cubic-bezier(0.12,0,0.39,0)}')
  })

  it('use a custom bezier curve as a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-bezier-[cubic-bezier(0,0,0,0)]">Hello</div>'
    })

    expect(css).toMatch(
      '.animate-bezier-\\[cubic-bezier\\(0\\2c 0\\2c 0\\2c 0\\)\\]{animation-timing-function:cubic-bezier(0,0,0,0)}'
    )
  })

  it('use a custom animation iteration count', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-iteration-count-twice">Hello</div>'
    })

    expect(css).toMatch('.animate-iteration-count-twice{animation-iteration-count:2}')
  })

  it('use a custom animation iteration count with an arbitrary value', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-iteration-count-[10]">Hello</div>'
    })

    expect(css).toMatch('.animate-iteration-count-\\[10\\]{animation-iteration-count:10}')
  })

  it('use a custom animation direction', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-direction-reverse">Hello</div>'
    })

    expect(css).toMatch('.animate-direction-reverse{animation-direction:reverse}')
  })

  it('use a fill mode animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-fill-mode-forwards">Hello</div>'
    })

    expect(css).toMatch('.animate-fill-mode-forwards{animation-fill-mode:forwards}')
  })

  it('use not custom animation steps', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-steps-retro">Hello</div>'
    })

    expect(css).toMatch('.animate-steps-retro{animation-timing-function:steps(8)}')
  })
  it('use a custom animation steps', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-steps-[33]">Hello</div>'
    })

    expect(css).toMatch('.animate-steps-\\[33\\]{animation-timing-function:steps(33)}')
  })

  it('use a play state animation play', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-play-paused">Hello</div>'
    })

    expect(css).toMatch('.animate-play-paused{animation-play-state:paused}')
  })

  it('use a animation timeline none or auto', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-none">Hello</div>'
    })

    expect(css).toMatch('.timeline-none{animation-timeline:none}')
  })

  it('use a animation timeline single', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-single">Hello</div>'
    })

    expect(css).toMatch('.timeline-single{animation-timeline:--single-timeline}')
  })

  it('use a animation timeline scroll', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-scroll">Hello</div>'
    })

    expect(css).toMatch('.timeline-scroll{animation-timeline:scroll()}')
  })

  it('use a animation timeline scroll custom', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-[scroll(20%)]">Hello</div>'
    })

    expect(css).toMatch('.timeline-\\[scroll\\(20\\%\\)\\]{animation-timeline:scroll(20%)}')
  })

  it('use a animation timeline custom name', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-[--test]">Hello</div>'
    })

    expect(css).toMatch('.timeline-\\[--test\\]{animation-timeline:--test}')
  })

  it('use a scroll timeline single', async () => {
    const css = await generatePluginCSS({
      content: '<div class="scroll-timeline-single">Hello</div>'
    })

    expect(css).toMatch('.scroll-timeline-single{scroll-timeline-name:--single-timeline}')
  })

  it('use a view timeline single', async () => {
    const css = await generatePluginCSS({
      content: '<div class="view-timeline-single">Hello</div>'
    })

    expect(css).toMatch('.view-timeline-single{view-timeline-name:--single-timeline}')
  })

  it('use a view timeline custom name', async () => {
    const css = await generatePluginCSS({
      content: '<div class="view-timeline-[--test-view]">Hello</div>'
    })

    expect(css).toMatch('.view-timeline-\\[--test-view\\]{view-timeline-name:--test-view}')
  })

  it('use a timeline range', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-range-cover">Hello</div>'
    })

    expect(css).toMatch('.animate-range-cover{animation-range:cover}')
  })

  it('use a timeline range porcentual', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-range-moderate">Hello</div>'
    })

    expect(css).toMatch('.animate-range-moderate{animation-range:20% 80%}')
  })

  it('use a timeline range custom', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-range-[12%_65%]">Hello</div>'
    })

    expect(css).toMatch('.animate-range-\\[12\\%_65\\%\\]{animation-range:12% 65%}')
  })

  it('use a scroll timeline axis', async () => {
    const css = await generatePluginCSS({
      content: '<div class="scroll-timeline-axis-block">Hello</div>'
    })

    expect(css).toMatch('.scroll-timeline-axis-block{scroll-timeline-axis:block}')
  })

  it('use a view timeline axis', async () => {
    const css = await generatePluginCSS({
      content: '<div class="view-timeline-axis-y">Hello</div>'
    })

    expect(css).toMatch('.view-timeline-axis-y{view-timeline-axis:y}')
  })

  it('use view animation timeline in same element', async () => {
    const css = await generatePluginCSS({
      content: '<div class="view-animate-single">Hello</div>'
    })

    expect(css).toMatch('.view-animate-single{view-timeline-name:--single-timeline; animation-timeline: --single-timeline}')
  })

  it('use scroll animation timeline in same element', async () => {
    const css = await generatePluginCSS({
      content: '<div class="scroll-animate-single">Hello</div>'
    })

    expect(css).toMatch('.scroll-animate-single{scroll-timeline-name:--single-timeline; animation-timeline: --single-timeline}')
  })

  it('use scroll animation timeline in same element with custom name', async () => {
    const css = await generatePluginCSS({
      content: '<div class="scroll-animate-[--test-timeline-scroll]">Hello</div>'
    })

    expect(css).toMatch('.scroll-animate-\\[--test-timeline-scroll\\]{scroll-timeline-name:--test-timeline-scroll; animation-timeline: --test-timeline-scroll}')
  })
})
