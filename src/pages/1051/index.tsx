// import React, { useState } from 'react';

// function Calc1051() {
//     return (
//       <div>
//         1051
//       </div>
//     );
// }
// export default Calc1051;

import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Table, Tag } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './index.css'

function Calc1051(){
  const [En, setEn] = useState(0)
  const [Ex, setEx] = useState(0)
  const [dR1, setDR1] = useState(0)
  const [dR2, setDR2] = useState(0)
  const [dR11, setDR11] = useState(0)
  const [dR22, setDR22] = useState(0)
  const [uR1, setUR1] = useState(0)
  const [uR2, setUR2] = useState(0)
  const [uR11, setUR11] = useState(0)
  const [uR22, setUR22] = useState(0)
  const [s,setS] = useState(0)
  const [dsEx,setDsEx] = useState(0)
  const [usEx, setUsEx] = useState(0)
  const [uEx, setUEx] = useState(0)
  const [final, setFinal] = useState(0)
  const [form] = Form.useForm();
  const filedName = ['R1','R2','R1\'','R2\'','R1\'\'','R2\'\'','R0','U0','Ux','t','n','cR']

  const getFields = () => {
    const count = 12;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={4} key={i}>
          <Form.Item
            name={filedName[i]}
            label={filedName[i]}
            rules={[
              {
                required: true,
                message: 'Input '+filedName[i],
              },
            ]}
          >
            <Input placeholder={"Input "+filedName[i]} />
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value1',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: 'Value2',
      dataIndex: 'value2',
      key: 'value2',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'R1',
      value1: dR1,
      value2: uR1
    },
    {
      key: '2',
      name: 'R2',
      value1: dR2,
      value2: uR2
    },
    {
      key: '3',
      name: 'R1\'',
      value1: dR11,
      value2: uR11
    },
    {
      key: '4',
      name: 'R2\'',
      value1: dR22,
      value2: uR22
    },
  ];

  const onFinish = (values: any) => {
    const t = values['t']
    const rs = [values['R1'],values['R2'],values['R1\''],values['R2\''],values['R1\'\''],values['R2\'\''],values['R0']]
    const drur = [0,0,0,0,0,0,0]
    const cR = values['cR']
    const en = 1.01860-3.99*10e-5*(t-20)-0.94*10e-6*Math.pow(t-20,2)+9*10e-9*Math.pow(t-20,3)
    const ex = en*(rs[0]+rs[1])*rs[2]/rs[0]/(rs[2]+rs[3])
    // const dR1 = (r1/1000)+(r1/100)*0.1+(r1/10)*0.02+(r1/1)*0.005+(r1-Math.floor(r1))*10*0.005+cR
    // const dR2 = (r2/1000)+(r1/100)*0.1+(r1/10)*0.02+(r1/1)*0.005+(r1-Math.floor(r1))*10*0.005+cR
    for(let i=0;i<7;i++){
      drur[i] = (rs[i]/1000)+(rs[i]/100)*0.1+(rs[i]/10)*0.02+(rs[i]/1)*0.005+(rs[i]-Math.floor(rs[i]))*10*0.005+cR
    }
    setEn(en)
    setEx(ex)
    setDR1(drur[0])
    setUR1(drur[0]/Math.sqrt(3))
    setDR2(drur[1])
    setUR2(drur[1]/Math.sqrt(3))
    setDR11(drur[2])
    setUR11(drur[2]/Math.sqrt(3))
    setDR22(drur[3])
    setUR22(drur[3]/Math.sqrt(3))
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <div>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
      </div>
      <div>
            <span>En={En},</span>
            <span>Ex={Ex}</span>
      </div>
      <div className='InstrumentError'>
      <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
    
  );
};

export default Calc1051;
