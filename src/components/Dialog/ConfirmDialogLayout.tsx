import React, { ReactNode } from 'react'
import { BaseDialogLayout } from './BaseDialogLayout'
import { BaseDialogProps } from './DialogTypes'
import { ConfirmDialogButtons } from './DialogButtons'
import './DialogLayout.css'

export interface ConfirmDialogLayoutProps extends BaseDialogProps {
  content?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
}

export const ConfirmDialogLayout: React.FC<ConfirmDialogLayoutProps> = ({
  title,
  content,
  onClose,
  onConfirm,
  onCancel,
  width = '500px',
  height = 'auto'
}) => {
  return (
    <BaseDialogLayout 
      title={title} 
      onClose={onClose} 
      width={width} 
      height={height}
      className="confirm-dialog"
    >
      <div className="dialog-message">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
      
      <div className="dialog-buttons-container">
        <ConfirmDialogButtons 
          onClose={onClose} 
          onConfirm={onConfirm} 
          onCancel={onCancel} 
        />
      </div>
    </BaseDialogLayout>
  )
} 