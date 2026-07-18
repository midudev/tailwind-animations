import type { APIRoute } from 'astro'
import { buildHomeMarkdown, markdownResponse } from '../lib/agent-markdown.js'

export const prerender = true

/** Agent-readable homepage: GET /index.md */
export const GET: APIRoute = () => markdownResponse(buildHomeMarkdown())
