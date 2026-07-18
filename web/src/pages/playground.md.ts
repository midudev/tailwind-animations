import type { APIRoute } from 'astro'
import {
  buildPlaygroundMarkdown,
  markdownResponse
} from '../lib/agent-markdown.js'

export const prerender = true

/** Agent-readable playground: GET /playground.md */
export const GET: APIRoute = () => markdownResponse(buildPlaygroundMarkdown())
