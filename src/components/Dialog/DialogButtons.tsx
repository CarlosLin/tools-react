import React from 'react'
import { DialogButtonProps } from './DialogTypes'
import './DialogButtons.css'

export const HintDialogButtons: React.FC<DialogButtonProps> = ({ onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm?.()
    onClose?.()
  }

  return (
    <div className="dialog-buttons hint-dialog-buttons">
      <button onClick={handleConfirm} className="btn btn-primary">
        確認
      </button>
    </div>
  )
}

export const ConfirmDialogButtons: React.FC<DialogButtonProps> = ({ 
  onClose, 
  onConfirm, 
  onCancel 
}) => {
  const handleConfirm = () => {
    onConfirm?.()
    onClose?.()
  }

  const handleCancel = () => {
    onCancel?.()
    onClose?.()
  }

  return (
    <div className="dialog-buttons confirm-dialog-buttons">
      <button onClick={handleCancel} className="btn btn-secondary">
        取消
      </button>
      <button onClick={handleConfirm} className="btn btn-primary">
        確認
      </button>
    </div>
  )
} 