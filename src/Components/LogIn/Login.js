import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase.init';
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const providerfb = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider()
const Login = () => {
    const [userInfo, setuser] = useState('')
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const emailHandaler = event => {
        setEmail(event.target.value)
    }
    const passHandaler = event => {
        setPass(event.target.value)
    }
    const loginHandaler = (e) => {
        e.preventDefault()
        if (email && pass) {
            signInWithEmailAndPassword(auth, email, pass)
                .then(rs => {
                    setuser(rs.user)
                    console.log(rs.user)
                    setError('log-in success fully')
                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(rs => {
                setuser(rs.user)
                console.log(rs.user)
            })
    }
    const faceBookLogin = () => {
        signInWithPopup(auth, providerfb)
            .then(rs => {
                setuser(rs.user)
                console.log(rs.user)
            })
    }
    const gitHubLogIn = () => {
        signInWithPopup(auth, providerGithub)
            .then(rs => {
                setuser(rs.user)
                console.log(rs.user)
            })
            .catch(error=>{
                console.error(error.message)
            })
    }
    return (
        <div className='w-50 m-auto mt-5 text-center'>






            <Form onSubmit={loginHandaler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={emailHandaler} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={passHandaler} placeholder="Password" />
                </Form.Group>
                <p className='text-success'>{error}</p>

                <Button variant="primary" type="submit">
                    Log-in
                </Button>
                <Link to='/register'>Create New Account</Link>


            </Form>
            <br />
            <button onClick={googleSignIn} className='btn btn-outline-none  bg-info mt-2'>
                Google log in <FcGoogle size={'1.5em'}></FcGoogle>
            </button>
            <button onClick={faceBookLogin} className='btn btn-outline-none  bg-danger mx-4 mt-2'>
                Facebook log in <FaFacebookSquare size={'1.5em'}></FaFacebookSquare>
            </button>
            <br />
            <button onClick={gitHubLogIn} className='btn btn-outline-none  bg-danger mx-4 mt-2'>
               git-Hub log in <BsGithub size={'1.5em'}></BsGithub>
            </button>
            <br />

            {
                userInfo.uid && <div>
                    <hr />
                    <p>Name: {userInfo.displayName}</p>
                    <p>Email: {userInfo.email}</p>
                    <img src={userInfo.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;