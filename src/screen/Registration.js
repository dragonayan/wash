
import './registration.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import toast from 'react-hot-toast'
function Registration() {
    // useState and useeffect
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onFinish = async (value) => {
        try {
            const response = await axios.post("api/register/admin", value);

        } catch (err) {
            toast.error("something went wrong")
        }
    }







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
                <h1 className="card-title">Nice To Meet U</h1>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name">
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item className="hi" label="Email" name="email">
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item className="hi" label="Password" name="password">
                        <Input placeholder="Password" type="password" />
                    </Form.Item>

                    <Button
                        className="primary-button my-2 full-width-button"
                        htmlType="submit"
                    >
                        REGISTER
                    </Button>

                    <Link to="/login" className="anchor mt-2">
                        CLICK HERE TO LOGIN
                    </Link>
                </Form>
            </div>
        </div>
    );
}

export default Registration;
