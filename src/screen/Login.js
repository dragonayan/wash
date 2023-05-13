import React from "react";
import './registration.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import toast from 'react-hot-toast'
function Login() {
    // onfinish function
    const onFinish = async (value) => {
        try {
            // const response = await axios.post("api/register/admin", value);

        } catch (err) {
            toast.error("something went wrong")
        }
    }

    //
    return (
        <div className="authentication">
            <Tabs size='lg'>
                <TabList>
                    <Tab>Super Admin</Tab>
                    <Tab>Sub Admin 1</Tab>
                    <Tab>Sub Admin 2</Tab>
                    <Tab>Sub Admin 3</Tab>
                </TabList>

                <TabPanels style={{ color: "white" }}>
                    <TabPanel>
                        <p  >Super Admin!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Sub Admin 1!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Sub Admin 2!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Sub Admin 3!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <div className="authentication-form card p-3">
                <h1 className="card-title">Welcome Back</h1>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email">
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input placeholder="Password" type="password" />
                    </Form.Item>


                    <Button className="primary-button my-2 full-width-button" htmlType="submit">
                        LOGIN
                    </Button>

                    <Link to="/register" className="anchor mt-2">
                        CLICK HERE TO REGISTER
                    </Link>

                </Form>
            </div>
        </div>
    );
}

export default Login;
