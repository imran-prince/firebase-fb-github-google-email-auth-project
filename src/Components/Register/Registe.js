import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(app)
const provider =new GoogleAuthProvider()

const Registe = () => {
    const [user, setuser] = useState('')
    const [er, setEr] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const nameHandaler = event => {
        setName(event.target.value)
    }
    const emailHandaler = event => {
        setEmail(event.target.value)
    }
    const passHandaler = event => {
        setPass(event.target.value)
    }
    const newRegister = (e) => {
        e.preventDefault()
        if (email && pass) {
            createUserWithEmailAndPassword(auth, email, pass)
                .then(rs => {
                    setuser(rs.user)
                    setEr('Successfullay created')
                })

        }
    }
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(rs => {
                setuser(rs.user)
            })
    }

    return (
        <div className='w-50 m-auto mt-5 text-center'>
            <Form onSubmit={newRegister}>
                <Form.Group className="mb-3" controlId="formBasicnName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" onBlur={nameHandaler} placeholder="imran khan" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={emailHandaler} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={passHandaler} placeholder="Password" />
                </Form.Group>
                <p className='text-success'>{er}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Link to='/login'>Log In</Link>
                <br />
                 <button onClick={googleSignIn} className='btn btn-outline-none  bg-info mt-2'>
                 Google sign in <FcGoogle  size={'1.5em'}></FcGoogle>
                 </button>
                 
                 
            </Form>
        </div>
    );
};

export default Registe;