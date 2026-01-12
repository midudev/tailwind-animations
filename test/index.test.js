import { generatePluginCSS } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-animations plugins', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Hello</div>'
    })
    expect(css).toContain('.animate-zoom-in{animation:zoom-in 0.6s ease-out both}')
    expect(css).toContain('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}')
  })

  it('use fade in up animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-fade-in-up">Hello</div>'
    })
    expect(css).toContain('.animate-fade-in-up{animation:fade-in-up 0.6s ease-in-out both}')
    expect(css).toContain('@keyframes fade-in-up{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}')
  })

  it('use a predefined animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100">Hello</div>'
    })

    expect(css).toContain('animation-delay:100ms')
  })

  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[777ms]">Hello</div>'
    })

    expect(css).toContain('.animate-delay-\\[777ms\\]{animation-delay:777ms}')
  })

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-100">Hello</div>'
    })

    expect(css).toContain('animation-duration:100ms')
  })

  it('use a predefined named animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-faster">Hello</div>'
    })

    expect(css).toContain('.animate-duration-faster{animation-duration:100ms}')
  })

  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[777ms]">Hello</div>'
    })

    expect(css).toContain('.animate-duration-\\[777ms\\]{animation-duration:777ms}')
  })

  it('use a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-linear">Hello</div>'
    })

    expect(css).toContain('.animate-linear{animation-timing-function:linear}')
  })

  it('use a bezier curve as a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-bezier-sine-in">Hello</div>'
    })

    expect(css).toContain('.animate-bezier-sine-in{animation-timing-function:cubic-bezier(0.12, 0, 0.39, 0)}')
  })

  it('use a custom bezier curve as a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-bezier-[cubic-bezier(0,0,0,0)]">Hello</div>'
    })

    expect(css).toContain(
      '.animate-bezier-\\[cubic-bezier\\(0\\,0\\,0\\,0\\)\\]{animation-timing-function:cubic-bezier(0,0,0,0)}'
    )
  })

  it('use a custom animation iteration count', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-iteration-count-twice">Hello</div>'
    })

    expect(css).toContain('.animate-iteration-count-twice{animation-iteration-count:2}')
  })

  it('use a custom animation iteration count with an arbitrary value', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-iteration-count-[10]">Hello</div>'
    })

    expect(css).toContain('.animate-iteration-count-\\[10\\]{animation-iteration-count:10}')
  })

  it('use a custom animation direction', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-direction-reverse">Hello</div>'
    })

    expect(css).toContain('.animate-direction-reverse{animation-direction:reverse}')
  })

  it('use a fill mode animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-fill-mode-forwards">Hello</div>'
    })

    expect(css).toContain('.animate-fill-mode-forwards{animation-fill-mode:forwards}')
  })

  it('use not custom animation steps', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-steps-retro">Hello</div>'
    })

    expect(css).toContain('.animate-steps-retro{animation-timing-function:steps(8)}')
  })
  it('use a custom animation steps', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-steps-[33]">Hello</div>'
    })

    expect(css).toContain('.animate-steps-\\[33\\]{animation-timing-function:steps(33)}')
  })

  it('use a play state animation play', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-play-paused">Hello</div>'
    })

    expect(css).toContain('.animate-play-paused{animation-play-state:paused}')
  })

  it('use a animation timeline none or auto', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-none">Hello</div>'
    })

    expect(css).toContain('.timeline-none{animation-timeline:none!important}')
  })

  it('use a animation timeline scroll', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-scroll">Hello</div>'
    })

    expect(css).toContain('.timeline-scroll{animation-timeline:scroll()!important}')
  })

  it('use a animation timeline scroll-x', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-scroll-x">Hello</div>'
    })

    expect(css).toContain('.timeline-scroll-x{animation-timeline:scroll(x)!important}')
  })

  it('use a animation timeline scroll-y', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-scroll-y">Hello</div>'
    })

    expect(css).toContain('.timeline-scroll-y{animation-timeline:scroll(y)!important}')
  })

  it('use a animation timeline scroll-block', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-scroll-block">Hello</div>'
    })

    expect(css).toContain('.timeline-scroll-block{animation-timeline:scroll(block)!important}')
  })

  it('use a animation timeline scroll-inline', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-scroll-inline">Hello</div>'
    })

    expect(css).toContain('.timeline-scroll-inline{animation-timeline:scroll(inline)!important}')
  })

  it('use a animation timeline view-x', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-view-x">Hello</div>'
    })

    expect(css).toContain('.timeline-view-x{animation-timeline:view(x)!important}')
  })

  it('use a animation timeline view-inline', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-view-inline">Hello</div>'
    })

    expect(css).toContain('.timeline-view-inline{animation-timeline:view(inline)!important}')
  })

  it('use a animation timeline scroll custom', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-[scroll(20%)]">Hello</div>'
    })

    expect(css).toContain('.timeline-\\[scroll\\(20\\%\\)\\]{animation-timeline:scroll(20%)!important}')
  })

  it('use a animation timeline scroll custom with spaces', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-[scroll(x_root)]">Hello</div>'
    })

    expect(css).toContain('.timeline-\\[scroll\\(x_root\\)\\]{animation-timeline:scroll(x root)!important}')
  })

  it('use a animation timeline view custom with multiple values', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-[view(x_200px_auto)]">Hello</div>'
    })

    expect(css).toContain('.timeline-\\[view\\(x_200px_auto\\)\\]{animation-timeline:view(x 200px auto)!important}')
  })

  it('use a animation timeline custom name', async () => {
    const css = await generatePluginCSS({
      content: '<div class="timeline-[--test]">Hello</div>'
    })

    expect(css).toContain('.timeline-\\[--test\\]{animation-timeline:--test!important}')
  })

  it('use a timeline range', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-range-cover">Hello</div>'
    })

    expect(css).toContain('.animate-range-cover{animation-range:cover}')
  })

  it('use a timeline range porcentual', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-range-moderate">Hello</div>'
    })

    expect(css).toContain('.animate-range-moderate{animation-range:20% 80%}')
  })

  it('use a timeline range custom', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-range-[12%_65%]">Hello</div>'
    })

    expect(css).toContain('.animate-range-\\[12\\%_65\\%\\]{animation-range:12% 65%}')
  })

  it('use a scroll timeline axis', async () => {
    const css = await generatePluginCSS({
      content: '<div class="scroll-timeline-axis-block">Hello</div>'
    })

    expect(css).toContain('.scroll-timeline-axis-block{scroll-timeline-axis:block}')
  })

  it('use a view timeline axis', async () => {
    const css = await generatePluginCSS({
      content: '<div class="view-timeline-axis-y">Hello</div>'
    })

    expect(css).toContain('.view-timeline-axis-y{view-timeline-axis:y}')
  })
})
