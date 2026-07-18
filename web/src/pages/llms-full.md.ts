import type { APIRoute } from 'astro'
import {
  buildLlmsFullMarkdown,
  markdownResponse
} from '../lib/agent-markdown.js'

export const prerender = true

/** Full agent reference: GET /llms-full.md */
export const GET: APIRoute = () => markdownResponse(buildLlmsFullMarkdown())
