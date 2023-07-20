import React, { useRef, useState, FormEvent } from 'react';
import { Button, CustomModal, Input, Toast } from '@components';
import { FormDataType, LoginPropType } from './types';

function LoginForm({
  loginModal,
  setLoginModal,
  onSignUpClick,
}: LoginPropType) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const isValidData = (data: FormDataType): boolean => {
    const emailReg =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailReg.test(data.email)) {
      setShowToast({
        visible: true,
        text: 'Please Enter a valid email',
      });
      return false;
    }
    if (data.email === '' || data.password === '') {
      setShowToast({
        visible: true,
        text: 'Please enter all fields',
      });
      return false;
    }
    return true;
  };
  const makeRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: emailRef?.current?.value.trim() || '',
      password: passwordRef?.current?.value.trim() || '',
    };
    if (isValidData(data)) {
      // TODO: make backend request
    }
  };
  return (
    <CustomModal isOpen={loginModal} onClose={() => setLoginModal(false)}>
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <div className="font-gilroy">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form
          className="flex flex-col gap-3 md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5"
          onSubmit={makeRequest}
        >
          {/* Email */}
          <div className="md:flex md:flex-col md:mb-4">
            <div className="mb-2 block md:ml-20 lg:ml-32">
              <label htmlFor="email2">Your Email *</label>
            </div>
            <Input
              id="email2"
              type="email"
              placeholder="name@gmail.com"
              ref={emailRef}
              required
              className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
            />
          </div>
          {/* Password */}
          <div className="md:flex md:flex-col">
            <div className="mb-2 block md:ml-20 lg:ml-32">
              <label htmlFor="password2">Your Password *</label>
            </div>
            <Input
              id="password2"
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
              required
              className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
            />
          </div>
          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            >
              Login
            </Button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center p-3">
          <p>Don&apos;t have an account ?</p>
          <Button
            type="button"
            className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            onClick={onSignUpClick}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </CustomModal>
  );
}

export default LoginForm;
