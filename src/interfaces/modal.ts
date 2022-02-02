
export interface ModalProps{
  open:boolean
  setOpen: any
  children: any
  title: string
  size: "mini" | "tiny" | "small" | "large" | "fullscreen" | undefined
}