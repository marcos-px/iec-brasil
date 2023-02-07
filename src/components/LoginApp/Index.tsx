import React, { FormEvent, useState, useEffect } from "react";
import { ButtonSubmit } from "../Button/Button.styles";
import { TesteStyle, Login } from "./LoginApp.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { apiLocal } from "../../api/config"
import { useNavigate, Link } from "react-router-dom";
import avatar from "../../assets/avatar.png"

type Inputs = {
    email: string | null,
    password: string | null,
    checkbox: boolean,
    forget?: boolean
}

const LoginPageApp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<String>("")
  const [password, setPassword] = useState<String>("")
  const [checkbox, setCheckbox] = useState<Boolean>()

  const { register, handleSubmit } = useForm<Inputs>();

  if(Boolean(localStorage.getItem('checkbox')) == true && localStorage.getItem('email') !== ""){ // validate button remember
    if (email == "" && password == "") {
    const localStorageEmail = localStorage.getItem('email')
    const localStoragePassword = localStorage.getItem('password')
    const localStorageCheckbox = true
    const localStorageVoid = () => {
      setEmail(String(localStorageEmail));
      setPassword(String(localStoragePassword));
      setCheckbox(localStorageCheckbox);
    }
    localStorageVoid()
    };


    const forgetme = (element: FormEvent) => {
      element.preventDefault()
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('photo')
      localStorage.removeItem('id')
      localStorage.removeItem('checkbox')
      setTimeout(() => {window.location.reload(); navigate('/login'), 1000})
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {

      const submitInfos = () => {
        apiLocal.post(`/login`, {
          email: data.email,
          password: data.password,
        }).then((res) => {
          localStorage.setItem('token', `${String(res.data.token)}`);
          localStorage.setItem('idUsers', `${String(res.data.User.idUsers)}`);
          localStorage.setItem('photo', `${String(res.data.User.photo)}`);
          console.log(res)
        }).catch((err) => {
          console.log(err);
        });
      }
      submitInfos()
      setTimeout(() => navigate('/users'), 1000)
    }
    
    return(
    <>
      <Login>
        <TesteStyle onSubmit={handleSubmit(onSubmit)}>
          <div className="row"> 
            <label className="login">
            <Link to={'/'}><div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center logo"><img src={avatar} alt="logo" width={"50%"}/></div></Link>
            </label>
          </div>
          <div className='row'>
            <div className='col-12 col-md-12 '>
              <label className='email'>
                Email
                <input {...register('email', { required: true })} placeholder="Digite aqui o seu Email" value={String(email)} onChange={(event) => setEmail(event.target.value)}/>
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-12 '>
              <label className='password'>
                Senha
                <input {...register('password', { required: true })} type="password" placeholder="Digite aqui a sua Senha" value={String(password)} onChange={(event) => setPassword(event.target.value)}/>
              </label>
            </div>
          </div>
          <div className="row"> 
            <label className="login">
              <ButtonSubmit  >Login</ButtonSubmit>
              <p className="remember"><input {...register('checkbox')} className="checkbox" type="checkbox" checked={Boolean(checkbox)} onChange={(event) => setCheckbox(Boolean(event.target.checked))}/>Lembrar-me</p>
              <div onClick={forgetme} className="forgetme" style={{cursor: "pointer", color: "FFFFFF", fontSize: "18px"}}><p>Esquecer-me</p></div>
            </label>
          </div>
        </TesteStyle>
      </Login>
    </>
    )
  } else {

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const submitInfos = () => {
      apiLocal.post(`/login`, {
        email: data.email,
        password: data.password,
      }).then((res) => {
        localStorage.setItem('token', `${String(res.data.token)}`);
        localStorage.setItem('idUsers', `${String(res.data.User.idUsers)}`);
        localStorage.setItem('photo', `${String(res.data.User.photo)}`)
        if(data.checkbox == true){
        localStorage.setItem('email', `${data.email}`)
        localStorage.setItem('password', `${data.password}`)
        localStorage.setItem('checkbox', `${data.checkbox}`)
        }
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    }
    submitInfos()
    setTimeout(() => navigate('/users'), 1000) 

  }
;

  return (
    <>
      <Login>
        <TesteStyle onSubmit={handleSubmit(onSubmit)}>
            <div className="row"> 
            <label className="login">
            <Link to={'/'}><div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center logo"><img src={avatar} alt="logo" width={"50%"}/></div></Link>
            </label>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='email'>
                Email
                <input {...register('email', { required: true })} placeholder="Digite aqui o seu Email" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='password'>
                Senha
                <input {...register('password', { required: true })} type="password" placeholder="Digite aqui a sua Senha" />
                </label>
            </div>
            </div>
            <div className="row"> 
            <label className="login">
              <ButtonSubmit  >Login</ButtonSubmit>
             <p className="remember"><input {...register('checkbox')} className="checkbox" type="checkbox" />Lembrar-me</p>
            </label>
            </div>
        </TesteStyle>
      </Login>
    </>
  )
}
}

export default LoginPageApp