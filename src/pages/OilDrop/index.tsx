import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Table, Tag } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './index.css'

function OilDrop(){
    const [U_, setU] = useState(0);
    const [t_,setT] = useState(0);
    const [q_,setQ] = useState(0);
    const [ecal_, setEcal] = useState(0);
    const [error_,setError] = useState(0);
    const [u_U_,setUu] = useState(0);
    const [u_t_,setUt] = useState(0);
    const [u_q_relative,setUqrelative] = useState(0);
    const [e_q_,setEq] = useState(0);

    const [tup,setTup] = useState(0);
    const [tdown,setTDown] = useState(0);
    const [q__,setQ_] = useState(0);
    const [ecal__, setEcal_] = useState(0);
    const [error__,setError_] = useState(0);
    const [u_tup,setUtup] = useState(0);
    const [u_tdown,setUtdown] = useState(0);
    const [u_q_relative_,setUqrelative_] = useState(0);
    const [e_q__,setEq_] = useState(0);
    
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const fieldName = ['Uk','tk','tupk','tdnk']
    const placeHolder = ['平衡电压','油滴匀速下降时间','油滴匀速上升时间','油滴匀速下降时间']

    const U = 0; const t = 0;
    const yitapie = 0;
    const rouyou = 981; const roukong = 1.293;
    const yita = 1.83e-5;
    const l = 2e-3
    const d = 5e-3
    const b = 8.22e-3
    const p = 1.013e5
    const g = 9.794
    const pi = Math.PI
    const e = 1.602e-19
    
    const getFields1 = () => {
      const count = 8;
      const children = [];
      for (let j=0;j < 2;j++){
        for (let i = 1; i <= count; i++) {
            children.push(
              <Col span={6} key={i}>
                <Form.Item
                  name={fieldName[j]+i}
                  label={fieldName[j]+i}
                  rules={[
                    {
                      required: true,
                      message: 'Input '+fieldName[j]+i,
                    },
                  ]}
                >
                  <Input placeholder={placeHolder[j]+fieldName[j]+i} />
                </Form.Item>
              </Col>,
            );
          }
      }
      return children;
    };

    const getFields2 = () => {
        const count = 8;
        const children = [];
        for (let j=2;j < 4;j++){
          for (let i = 1; i <= count; i++) {
              children.push(
                <Col span={6} key={i}>
                  <Form.Item
                    name={fieldName[j]+i}
                    label={fieldName[j]+i}
                    rules={[
                      {
                        required: true,
                        message: 'Input '+fieldName[j]+i,
                      },
                    ]}
                  >
                    <Input placeholder={placeHolder[j]+fieldName[j]+i} />
                  </Form.Item>
                </Col>,
              );
            }
        }
        return children;
      };
  
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name1',
        key: 'name1',
        width: '16%'
      },
      {
        title: 'Value',
        dataIndex: 'value1',
        key: 'value1',
        width: '16%'
      },
      {
        title: 'Name',
        dataIndex: 'name2',
        key: 'name2',
        width: '16%'
      },
      {
        title: 'Value',
        dataIndex: 'value2',
        key: 'value2',
        width: '16%'
      },
      {
        title: 'Name',
        dataIndex: 'name3',
        key: 'name3',
        width: '16%'
      },
      {
        title: 'Value',
        dataIndex: 'value3',
        key: 'value3',
        width: '16%'
      },
    ];
    
    const data1 = [
      {
        key: '1',
        name1: '平衡电压平均值',
        name2: '油滴匀速下降用时平均值',
        value1: U_,
        value2: t_,
      },
      {
        key: '2',
        name1: '油滴带电量',
        name2: '基本电荷带电量',
        name3: '相对误差',
        value1: q_,
        value2: ecal_,
        value3: error_+'%'
      },
      {
        key: '3',
        name1: '电压测量带来的不确定度',
        name2: '时间偏差带来的不确定度',
        value1: u_U_,
        value2: u_t_
      },
      {
        key: '4',
        name1: '油滴电量相对不确定度',
        name2: '元电荷电量不确定度',
        value1: u_q_relative+'%',
        value2: e_q_
      },
    ];

    const data2 = [
        {
          key: '1',
          name1: '油滴匀速上升时间平均值',
          name2: '油滴匀速下降用时平均值',
          value1: tup,
          value2: tdown,
        },
        {
          key: '2',
          name1: '油滴带电量',
          name2: '基本电荷带电量',
          name3: '相对误差',
          value1: q__,
          value2: ecal__,
          value3: error__+'%'
        },
        {
          key: '3',
          name1: '上升时间测量带来的不确定度',
          name2: '下降时间测量带来的不确定度',
          value1: u_tup,
          value2: u_tdown
        },
        {
          key: '4',
          name1: '油滴电量相对不确定度',
          name2: '元电荷电量不确定度',
          value1: u_q_relative_+'%',
          value2: e_q__
        },
      ];

    const std = function(data: any):number {
        //map reduce
        var sum = function(x: number,y: number):number { return x+y;};　　//求和函数
        var square = function(x: number):number { return x*x;};　　//数组中每个元素求它的平方
        var mean = data.reduce(sum)/data.length;
        var deviations = data.map(function(x: number){return x-mean;});
        var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length));
        
        return stddev;
    }
  
    const onFinish1 = (values: any) => {
        var U = 0;
        var t = 0;
        const Uks = [];
        const tks = [];
        for(let i=1;i<=8;i++){
            U += parseFloat(values['Uk'+i]);
            Uks.push(parseFloat(values['Uk'+i]));
            t += parseFloat(values['tk'+i]);
            tks.push(parseFloat(values['tk'+i]));
        }
        U /= 8; t /=8;
        const R = 3*((yita*l/t/2/(rouyou-roukong)/g)**0.5)
        const yitapie = yita/(1+b/(p*R))
        const q = 18*pi/((2*(rouyou-roukong)*g)**0.5)*((yitapie*l)**1.5)*d/U*((1/t)**1.5)
        const n = Math.round(q/e)
        const ecal = q/n
        const error = (ecal - e) / e * 100

        const u_U = std(Uks) / 7**0.5
        const u_t = std(tks) / 7**0.5
        const u_q_relative = (((3*0.0195859/(4*(1+0.0195859*(t**0.5))*(t**0.5))+3/2/t)*u_t)**2+(1/U*u_U)**2)**0.5
        const e_q = ecal * u_q_relative

        setU(U); setT(t);
        setQ(q); setEcal(ecal); setError(error);
        setUu(u_U); setUt(u_t);
        setUqrelative(u_q_relative*100); setEq(e_q);
    };

    const onFinish2 = (values: any) => {
        var tup = 0;
        var tdown = 0;
        const tupk = [];
        const tdownk= [];
        const U = 1.5*parseFloat(values['U']);
        for(let i=1;i<=8;i++){
            tup += parseFloat(values['tupk'+i]);
            tupk.push(parseFloat(values['tupk'+i]));
            tdown += parseFloat(values['tdnk'+i]);
            tdownk.push(parseFloat(values['tdnk'+i]));
        }
        tup /= 8; tdown /=8;

        const R = 3*((yita*l/tdown/2/(rouyou-roukong)/g)**0.5)
        const q = 18*pi*((yita/(1+b/p/R))**1.5)/((2*(rouyou-roukong)*g)**0.5)*d/U*(l/tdown+l/tup)*((l/tdown)**0.5)
        const n = Math.round(q/e)
        const ecal = q/n
        const error = (ecal - e) / e *100

        const u_tup = std(tupk) / 7 ** 0.5
        const u_tdown = std(tdownk) / 7**0.5
        const u_q_relative = (((3*0.0195859/(4*(1+0.0195859*(tdown**0.5))*(tdown**0.5))+(3/2/(tdown**2.5)+1/2/(tdown**1.5)/tup)*(tdown**0.5)/(1/tdown+1/tup))*u_tdown)**2+(1/(tup**2)/(1/tdown+1/tup)*u_tup)**2)**0.5
        const e_q = ecal * u_q_relative

        setTup(tup); setTDown(tdown);
        setQ_(q); setEcal_(ecal); setError_(error);
        setUtup(u_tup); setUtdown(u_tdown);
        setUqrelative_(u_q_relative*100); setEq_(e_q);
        
    };
  
  
    return (
      <div>
          <div className='title'>
            静态法测基本电荷
          </div>
        <div>
        <Form
          form={form1}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish1}
        >
          <Row gutter={24}>{getFields1()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form1.resetFields();
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
        </div>
        <div className='ex1-table'>
        <Table columns={columns} dataSource={data1} pagination={false}/>
        </div>
        <div className='title'>
            动态法测基本电荷
        </div>
        <div>
        <Form
          form={form2}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish2}
        >  
            <Row gutter={6}>
            <Col span={6}>
                  <Form.Item
                    name={'U'}
                    label={'平衡电压'}
                    rules={[
                      {
                        required: true,
                        message: '输入平衡电压',
                      },
                    ]}
                  >
                    <Input placeholder={'输入平衡电压'} />
                  </Form.Item>
            </Col>
            </Row>
          <Row gutter={24}>{getFields2()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form2.resetFields();
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
        </div>
        <div className='ex1-table'>
        <Table columns={columns} dataSource={data2} pagination={false}/>
        </div>
      </div>
      
    );
  };
  
  export default OilDrop;