import React from 'react'
import { BaseDialogLayout } from './BaseDialogLayout'
import { BaseDialogProps, DialogIconType } from './DialogTypes'
import { HintDialogButtons } from './DialogButtons'
import './DialogLayout.css'

export interface HintDialogLayoutProps extends BaseDialogProps {
  icon?: DialogIconType | React.ReactNode
  onConfirm?: () => void
  showCloseButton?: boolean
}

const DefaultIcon: React.FC<{ type: DialogIconType }> = ({ type }) => {
  const iconMap = {
    [DialogIconType.SUCCESS]: '✅',
    [DialogIconType.FAILED]: '❌',
    [DialogIconType.WARNING]: '⚠️',
    [DialogIconType.INFO]: 'ℹ️'
  }

  return <div className={`dialog-icon dialog-icon-${type}`}>
    {iconMap[type]}
  </div>
}

export const HintDialogLayout: React.FC<HintDialogLayoutProps> = ({
  title,
  onClose,
  icon,
  onConfirm,
  width = '400px',
  height = 'auto',
  showCloseButton = false
}) => {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon
    }
    
    if (typeof icon === 'string' && Object.values(DialogIconType).includes(icon as DialogIconType)) {
      return <DefaultIcon type={icon as DialogIconType} />
    }
    
    return null
  }

  const handleConfirm = () => {
    onConfirm?.()
    onClose()
  }

  const headerContent = (
    <>
      {renderIcon()}
      <h2 className="dialog-title">{title}</h2>
    </>
  )

  return (
    <BaseDialogLayout 
      title={title} 
      onClose={onClose} 
      width={width} 
      height={height}
      headerContent={headerContent}
      showCloseButton={showCloseButton}
      className={`hint-dialog ${showCloseButton ? 'with-close-button' : ''}`}
    >
      <div className="hint-dialog-content">
        <div className="dialog-buttons-container">
          <HintDialogButtons 
            onClose={showCloseButton ? onClose : undefined} 
            onConfirm={handleConfirm} 
          />
        </div>
      </div>
    </BaseDialogLayout>
  )
} 