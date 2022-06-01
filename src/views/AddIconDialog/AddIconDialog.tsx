import { createIcon } from "@/apis/icon"
import { InboxOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons"
import { Button, Form, Input, message, Modal, Upload } from "antd"
import { RcFile } from "antd/lib/upload"
import { createElement, useState } from "react"

function AddIconDialog() {
  const [visible, setVisible] = useState(false)

  const openDialog = () => {
    form.resetFields()
    setVisible(true)
  }

  // ======================== form ========================
  const [form] = Form.useForm<API.ICON.CreateIconDTO>()
  const [submitting, setSubmitting] = useState(false)
  const onSubmit = (values: API.ICON.CreateIconDTO) => {
    setSubmitting(true)
    createIcon(values)
      .then(() => {
        message.success('新增 Icon 成功！')
        form.resetFields()
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <>
      <Button size="large" icon={<PlusOutlined />} type="primary" onClick={openDialog}>新增</Button>

      <Modal
        title="新增图标"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={form.submit}
        okButtonProps={{ loading: submitting }}
        cancelButtonProps={{ disabled: submitting }}
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={onSubmit}
        >
          <Form.Item label="名称" name="name" required>
            <Input placeholder="请输入 Icon 名称"></Input>
          </Form.Item>
          <Form.Item
            label="文件"
            name="file"
            required
          >
            {createElement((itemProps: { value?: RcFile, onChange?: (value?: RcFile) => void }) => {
              const { value, onChange } = itemProps
              return <Upload.Dragger
                name="logo"
                listType="picture"
                accept=".svg"
                maxCount={1}
                onRemove={() => {
                  onChange?.(undefined)
                }}
                beforeUpload={(currentFile) => {
                  onChange?.(currentFile)
                  return false
                }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            })}
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddIconDialog