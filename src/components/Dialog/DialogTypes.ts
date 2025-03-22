import { ReactNode } from 'react'

export enum DialogModel {
  HINT = 'hint',
  CONFIRM = 'confirm',
  CUSTOM = 'custom'
}

export enum DialogIconType {
  SUCCESS = 'success',
  FAILED = 'failed',
  WARNING = 'warning',
  INFO = 'info'
}

export interface BaseDialogProps {
  title: string
  onClose: () => void
  width?: string
  height?: string
}

export interface DialogOptions {
  title?: string
  content?: ReactNode
  width?: string
  height?: string
  model?: DialogModel
  onConfirm?: () => void
  onCancel?: () => void
  onClose?: () => void
  overlayClosable?: boolean
  onOverlayClick?: () => void
  
  // 新增 HintDialog 特有屬性
  icon?: DialogIconType | ReactNode
  showCloseButton?: boolean
}

export interface DialogButtonProps {
  onConfirm?: () => void
  onCancel?: () => void
  onClose?: () => void
}

export interface HintDialogProps {
  title: string
  icon?: DialogIconType | ReactNode
  onClose?: () => void
  showCloseButton?: boolean
} 