import React, { useEffect, useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps, ColumnsType } from 'antd';
import { message, Upload, Space, Table, Tag, Button } from 'antd';
import styled from 'styled-components';
import { Upload as UploadServer } from '../../util/serverLess';
import { connect } from 'dva';

const { Dragger } = Upload;
const Wrapper = styled.div`
  padding: 40px;
`;
const DraggerContainer = styled(Dragger)`
  margin-top: 20px;
`;
const TabelDiv = styled.div`
  margin-top: 20px;
`;
const ImgContainer = styled.img`
  width: 80px;
  height: auto;
`;
const ButtonContainer = styled(Button)`
  margin-left: 10px;
`;

interface DataType {
  [propsName: string]: any;
}
const handelUrl = (url: string, type: string) => {
  if (type === 'open') {
    window.open(url);
  } else {
    navigator.clipboard.writeText(url);
    message.success('复制成功');
  }
};
const columns: ColumnsType<DataType> = [
  {
    title: '图片',
    dataIndex: 'url',
    key: 'url',
    render: (text: string) => <ImgContainer src={text} alt="" />,
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    dataIndex: 'url',
    key: () => {
      return new Date();
    },
    render: (text: any, record: any) => {
      console.log('操作', text, record);
      return (
        <div>
          <ButtonContainer
            type="primary"
            onClick={() => handelUrl(text, 'open')}
          >
            查看地址
          </ButtonContainer>
          <ButtonContainer
            type="primary"
            onClick={() => handelUrl(text, 'copy')}
          >
            复制地址
          </ButtonContainer>
        </div>
      );
    },
  },
];

const Index: React.FC<any> = (props) => {
  const [uploadList, setUploadList] = useState<Array<any>>([]);
  const key = 'updatable';
  // 图片提交封装
  const addUpload = (file: any, filename: string) => {
    message.loading({ content: 'Loading...', key });
    UploadServer.add(file, filename).then(
      (response: any) => {
        message.success({ content: '上传成功', key, duration: 3 });
        const { url } = response.attributes;
        setUploadList([...uploadList, { ...url.attributes }]);
      },
      (err) => {
        message.error({ content: '上传失败', key, duration: 3 });
      },
    );
  };
  // 上传的配置项
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    action: '',
    onChange(info) {
      console.log(info);
      addUpload(info.file, info.file.name);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload: () => {
      return false;
    },
  };

  return (
    <Wrapper>
      <DraggerContainer {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
        <p className="ant-upload-hint">
          请遵守中国法律法规,严禁上传侵权/涉黄/黑产等违法图片
        </p>
      </DraggerContainer>
      <TabelDiv>
        <Table columns={columns} dataSource={uploadList} />
      </TabelDiv>
    </Wrapper>
  );
};
export default connect((state: any) => state.user)(Index);
