import { toast } from "wc-toast"

export type themeProps = 'light' | 'dark' | 'custom' | undefined

export const copyToClipboard = (
  text: string,
  themeType: themeProps = 'dark'
) => {
  navigator.clipboard.writeText(text)
  toast('Copied to clipboard!', {
    theme: {
      type: themeType
    }
  })
}