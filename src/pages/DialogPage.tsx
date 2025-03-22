import React from 'react'
import { Link } from 'react-router-dom'
import { openDialog } from '../components/Dialog/DialogBase'
import { DialogModel, DialogIconType } from '../components/Dialog/DialogTypes'

const DialogPage: React.FC = () => {
  const handleOpenHintDialog = () => {
    openDialog({
      title: '操作成功',
      model: DialogModel.HINT,
      icon: DialogIconType.SUCCESS
    })
  }

  const handleOpenHintDialogWithClose = () => {
    openDialog({
      title: '重要提示',
      model: DialogModel.HINT,
      icon: DialogIconType.WARNING,
      showCloseButton: true,
      overlayClosable: false
    })
  }

  const handleOpenCustomIconDialog = () => {
    openDialog({
      title: '自定義圖標',
      model: DialogModel.HINT,
      icon: <div style={{ fontSize: '3rem' }}>🚀</div>
    })
  }

  const handleOpenConfirmDialog = () => {
    openDialog({
      title: '確認對話框',
      content: '是否確定執行此操作？',
      model: DialogModel.CONFIRM,
      onConfirm: () => console.log('確認對話框 - 確認'),
      onCancel: () => console.log('確認對話框 - 取消')
    })
  }

  const handleOpenComplexDialog = () => {
    openDialog({
      title: '複雜對話框',
      content: (
        <div>
          <h3>自定義內容</h3>
          <p>這是一個包含 React 節點的對話框</p>
        </div>
      ),
      model: DialogModel.CONFIRM,
      width: '500px',
      overlayClosable: false,
      onConfirm: () => console.log('複雜對話框 - 確認'),
      onCancel: () => console.log('複雜對話框 - 取消')
    })
  }

  return (
    <div className="dialog-page">
      <h1>對話框功能</h1>
      <div className="dialog-actions">
        <button onClick={handleOpenHintDialog}>
          成功提示
        </button>
        <button onClick={handleOpenHintDialogWithClose}>
          帶關閉按鈕的提示
        </button>
        <button onClick={handleOpenCustomIconDialog}>
          自定義圖標
        </button>
        <button onClick={handleOpenConfirmDialog}>
          打開確認對話框
        </button>
        <button onClick={handleOpenComplexDialog}>
          打開複雜對話框
        </button>
      </div>
      <Link to="/" className="btn">返回首頁</Link>
    </div>
  )
}

export default DialogPage 