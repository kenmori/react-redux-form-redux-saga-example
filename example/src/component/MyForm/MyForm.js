import React from 'react';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {FormLabel} from '../FormLabel';
// import asyncValidate from '../../actions/acyncValidation';


import 'object-assign';

const submit = ({corporateName = '', userName='', userNameKana='', mailAddress='', tel='', content='' }, submitAction, reset) => {
    let error = {};
    let isError = false;
    if(corporateName.trim() === '') {
        error.corporateName = '企業名を入力してください';
        isError = true;
    }
    if(userName.trim() === '') {
        error.userName = '名前を入力してください';
        isError = true;
    }
    if(userNameKana.trim() === '') {
        error.userNameKana = 'カナを入力してください';
        isError = true;
    }

    if (content.trim() === '') {
        error.content = 'お問い合わせ内容を入力してください';
        isError = true;
    }

    if (userName.length > 20) {
        error.userName = '名前が長すぎます20文字以下にしてください';
        isError = true;
    }

    if (userNameKana.length > 20) {
        error.userNameKana = 'カナが長すぎます20文字以下にしてください';
        isError = true;
    }

    if (mailAddress.trim() === '') {
        error.mailAddress = 'メールアドレスを入力してください';
        isError = true;
    }
    if (isError) {
        console.log(isError, 'Errorです');
        throw new SubmissionError(error);

    } else {
        console.log(isError, 'Errorはないです');
        submitAction({corporateName, userName, userNameKana, mailAddress, tel, content});
        window.alert(`送信しました:\n\n${JSON.stringify({corporateName, userName, userNameKana, mailAddress, tel, content}, null, 2)}`)
        reset();
    }
};


const renderFieldTextarea = ({type, placeholder,label, input, textarea, meta: {touched, error}}) => (
<span className='field'>
    <textarea {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
);

const renderField = ({type,placeholder,  label, input,  meta: {touched, error}}) => (
<span className='field'>
    <input {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
);

const ContactFormFunc = ({asyncValidating, handleSubmit, submitAction,  pristine, submitting, reset}) => (
<form onSubmit={handleSubmit((fields) => submit(fields, submitAction, reset))} id='form1' className='mLabForm'>
    <div className='form-row'>
    <FormLabel labelName={'corporateName'} fieldName={'企業名'} isRequire={true} />
    <Field component={renderField} type='text' placeholder='' name='corporateName' id='corporateName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'userName'} fieldName={'氏名'} isRequire={true} />
    <Field component={renderField} type='text' placeholder='森田けんじ' name='userName' id='userName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'userNameKana'} fieldName={'フリガナ'} isRequire={true} />
    <Field component={renderField} type='input' placeholder='モリタケンジ' name='userNameKana' id='userNameKana' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'mailAddress'} fieldName={'メールアドレス'} isRequire={true} />
    <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='mailAddress' id='mailAddress' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'tel'} fieldName={'電話番号'} isRequire={false} />
    <Field component={renderField} type='number' placeholder='0800000000' name='tel' id='tel' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'content'} fieldName={'お問い合わせ内容'} isRequire={true} />
    <Field component={renderFieldTextarea} type='text' placeholder='こちらにお問い合わせ内容をご記入ください。' name='content' id='content' />
    </div>
    <div className={`submitBtn u-mt30 u-mb80`}>
        <button type='submit'>お問い合わせする</button>
    </div>
    </form>
)

const ContactForm = reduxForm({
    form: 'contact',
})(ContactFormFunc);

export default ContactForm;