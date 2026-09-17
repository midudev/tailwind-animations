import type { APIRoute } from 'astro'
import { buildLlmTxt, textResponse } from '../lib/agent-markdown.js'

export const prerender = true

/** Package usage guide for AIs: GET /llm.txt */
export const GET: APIRoute = () => textResponse(buildLlmTxt())
