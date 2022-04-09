import {Form, Input, Button, Checkbox, message} from 'antd';
import 'antd/dist/antd.css';
import './loginform.css';

const Demo = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        message.success("Login successful!");
        setTimeout(form.resetFields(), 2000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    };

    return (
        <div className='loginForm'>
             <h2 className='formTitle'>Form Example</h2>
            <Form 
                name="basic" 
                labelCol={{span: 4,}} 
                wrapperCol={{span: 16,}}
                initialValues={{remember: true}}
                onFinish={{onFinish}}
                onFinishFailed={{onFinishFailed}}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="unchecked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" style={{backgroundColor:"green"}} htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Demo;

