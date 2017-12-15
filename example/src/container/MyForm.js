import { connect } from 'react-redux' ;
import { reduxForm } from 'redux-form';


const submit = ({corporateName = '', userName ='', userNameKana = '', mailAddress ='', tel = '', contact = ''}, submitAction, reset ) => {
    let error = {},
    let isError = false;
    if(corporateName.trim() === ''){
        error.corporateName = '企業名を入れてください';
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
        submitAction({})
    }

}


const renderField = (field) => {
    return (
        <input {field.input} type={field.type} placeholder={field.placeholder} />
        {field.meta.touched && field.meta.error && <span className='error'>{field.meta.error}</span>}
    )
}

const ContactformFunc = ({asyncValidating, handleSubmit, submitAction, pristine, submitting, reset}) => (
    <form  onSubmit={handleSubmit( fields ) => submit(fields, submitAction, reset)} id='form1'>
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
    <Field component={renderField} type='input' placeholder='abcdef@mlab.com' name='mailAddress' id='mailAddress' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'tel'} fieldName={'電話番号'} isRequire={false} />
    <Field component={renderField} type='number' placeholder='0800000000' name='tel' id='tel' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'content'} fieldName={'お問い合わせ内容'} isRequire={true} />
    <Field component={renderFieldTextarea} type='text' placeholder='こちらにお問い合わせ内容をご記入ください。' name='content' id='content' />
    </div>
    <div className={`submitBtn ${submitting} u-mt30 u-mb80`}><button type='submit' disabled={submitting}>お問い合わせする</button></div>
    </form>
)


const ContactForm = reduxForm({
    form: 'contact',
    ayncValidate,

})(ContactformFunc);

export default Contactform;

