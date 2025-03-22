import React, { ReactNode } from 'react'
import { BaseDialogProps } from './DialogTypes'
import './DialogLayout.css'

export interface BaseDialogLayoutProps extends BaseDialogProps {
  children: ReactNode
  className?: string
  headerContent?: ReactNode
  showCloseButton?: boolean
}

export const BaseDialogLayout: React.FC<BaseDialogLayoutProps> = ({
  title,
  onClose,
  width = '400px',
  height = 'auto',
  children,
  className = '',
  headerContent,
  showCloseButton = true
}) => {
  return (
    <div 
      className={`dialog-wrapper ${className}`} 
      style={{ width, height }}
    >
      {showCloseButton && (
        <button className="dialog-close" onClick={onClose}>&times;</button>
      )}
      
      <div className="dialog-content">
        <div className="dialog-header">
          {headerContent || <h2 className="dialog-title">{title}</h2>}
        </div>
        {children}
      </div>
    </div>
  )
} 