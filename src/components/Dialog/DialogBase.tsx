import React from 'react'
import { createRoot } from 'react-dom/client'
import { DialogModel, DialogOptions } from './DialogTypes'
import { HintDialogLayout } from './HintDialogLayout'
import { ConfirmDialogLayout } from './ConfirmDialogLayout'
import './DialogBase.css'

export class DialogBase {
  private dialogElement: HTMLDivElement
  private options: DialogOptions & {
    title: string
    width: string
    height: string
    model: DialogModel
    overlayClosable: boolean
  }

  private contentContainer: HTMLDivElement | null = null
  private root: ReturnType<typeof createRoot> | null = null

  constructor(options: DialogOptions = {}) {
    this.options = {
      title: '提示',
      width: '400px',
      height: 'auto',
      model: DialogModel.HINT,
      overlayClosable: true,
      ...options
    } as DialogOptions & {
      title: string
      width: string
      height: string
      model: DialogModel
      overlayClosable: boolean
    }

    this.dialogElement = this.createDialogElement()
    this.renderContent()
    this.setupOverlayEvents()
  }

  private createDialogElement(): HTMLDivElement {
    const dialog = document.createElement('div')
    dialog.className = 'dialog-container'
    
    document.body.appendChild(dialog)

    this.contentContainer = document.createElement('div')
    this.contentContainer.className = 'dialog-content-wrapper'

    return dialog
  }

  private setupOverlayEvents(): void {
    this.dialogElement.addEventListener('click', (event) => {
      if (event.target === this.dialogElement) {
        this.handleOverlayClick()
      }
    })
  }

  private handleOverlayClick(): void {
    if (this.options.overlayClosable) {
      this.options.onOverlayClick?.()
      this.close()
    }
  }

  private renderContent(): void {
    if (!this.contentContainer) return

    if (this.root) {
      this.root.unmount()
    }

    this.root = createRoot(this.contentContainer)
    
    const dialogProps = {
      title: this.options.title,
      onClose: () => this.close(),
      width: this.options.width,
      height: this.options.height,
      onConfirm: this.options.onConfirm,
      onCancel: this.options.onCancel,
      icon: this.options.icon,
      showCloseButton: this.options.showCloseButton
    }

    const DialogComponent = this.options.model === DialogModel.CONFIRM 
      ? ConfirmDialogLayout 
      : HintDialogLayout

    this.root.render(
      <DialogComponent 
        {...dialogProps} 
        content={this.options.content}
      />
    )

    this.dialogElement.appendChild(this.contentContainer)
  }

  public close(): void {
    try {
      if (this.dialogElement && this.dialogElement.parentNode) {
        if (this.root) {
          this.root.unmount()
        }
        
        this.dialogElement.parentNode.removeChild(this.dialogElement)
        this.options.onClose?.()
      }
    } catch (error) {
      console.warn('Error closing dialog:', error)
    }
  }

  public static open(options: DialogOptions): DialogBase {
    return new DialogBase(options)
  }
}

export const openDialog = (options: DialogOptions) => {
  return DialogBase.open(options)
} 