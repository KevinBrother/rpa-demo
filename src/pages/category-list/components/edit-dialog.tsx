import React, { useEffect } from 'react';
import { categoryService } from '@/services/category';
import { Modal, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { v4 } from 'uuid';
import { defaultCategory, EFlag } from '..';
import { useRequest } from 'ahooks';
import { CategoryRootPId } from '@/utils';

/* export function useEditDialog({ runGetCategoryById, category, flag, refreshGetCategoryById }) {

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);


  return { isEditDialogOpen, setIsEditDialogOpen, onFinish, form }
}; */

export function EditDialog({ editCategory, currentCategory, isEditDialogOpen, setIsEditDialogOpen, refreshGetCategoryById, flag }) {
  useEffect(() => {
    let initialValues = defaultCategory;
    if (isEditDialogOpen) {
      // 编辑和修改不一样！！！
      if (flag === EFlag.add) {
        initialValues.pId = currentCategory.id || CategoryRootPId;
        initialValues.id = v4();
        console.log('%c [ initialValues ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', initialValues);
      } else {
        initialValues = { ...editCategory };
      }
      form.setFieldsValue(initialValues);
    }

    return () => {
      form.resetFields();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editCategory, isEditDialogOpen]);

  const [form] = Form.useForm();

  const { run: runAddCategoryById } = useRequest(() => categoryService.addCategory(form.getFieldsValue()), {
    manual: true,
    onSuccess() {
      // runGetCategoryById(category.id);
      refreshGetCategoryById();
      handleCancel();
    }
  });

  const { run: runEditCategoryById } = useRequest(() => categoryService.editCategory(form.getFieldsValue()), {
    manual: true,
    onSuccess() {
      refreshGetCategoryById();
      handleCancel();
    }
  });

  const handleCancel = () => {
    setIsEditDialogOpen(false);
  };

  const onFinish = (form: FormInstance) => {
    form
      .validateFields()
      .then((rst) => {
        if (EFlag.add === flag) {
          runAddCategoryById();
        } else {
          runEditCategoryById();
        }
      })
      .catch((err) => {
        console.log('[ err ] >', err);
      });
  };

  return (
    <Modal title='创建/编辑类目' open={isEditDialogOpen} onOk={() => onFinish(form)} onCancel={() => setIsEditDialogOpen(false)} getContainer={false}>
      <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} autoComplete='off'>
        <Form.Item label='name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='desc' name='desc' rules={[{ required: true, message: 'Please input your desc!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          // hidden={true}
          label='id'
          name='id'
          rules={[{ required: true }]}
        />
        <Form.Item
          // hidden={true}
          label='pId'
          name='pId'
        />

        <Form.Item
          // hidden={true}
          label='children'
          name='children'
        />
      </Form>
    </Modal>
  );
}
