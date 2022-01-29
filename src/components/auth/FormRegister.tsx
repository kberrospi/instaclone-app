import { useState } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';

export const FormRegister = ({ formik }: any) => {

  const { handleSubmit, handleChange, errors, touched, handleBlur } = formik;
  const { name, userName, email, password, password2 } = formik.values;
  const [ showPass, setShowPass ] = useState<any>({
    showPassInit: false,
    showPassConfirm: false
  });
  
  const { showPassInit, showPassConfirm } = showPass

  const handlleShowHide = (e: MouseEvent, showPassword: string ) => {
    e.preventDefault();
    setShowPass({ ...showPass, [showPassword]: !showPass[showPassword] })
  }

  return (
    <Form className='form' onSubmit={handleSubmit}>
      <Form.Input
        type='text'
        name='name'
        placeholder='Nombres y apellidos'
        onChange={handleChange}
        value={name}
        onBlur={handleBlur}
        error={errors.name && touched.name && { content: errors.name }}
      />

      <Form.Input
        type='email'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={email}
        onBlur={handleBlur}
        error={errors.email && touched.email && { content: errors.email }}
      />

      <Form.Input
        type='text'
        name='userName'
        placeholder='Nombre de usuario'
        onChange={handleChange}
        value={userName}
        onBlur={handleBlur}
        error={
          errors.userName && touched.userName && { content: errors.userName }
        }
      />

      <Form.Input
        type={showPassInit ? 'text' : 'password'}
        name='password'
        placeholder='Contraseña'
        onChange={handleChange}
        value={password}
        onBlur={handleBlur}
        error={
          errors.password && touched.password && { content: errors.password }
        }
        icon={
          <Icon
            className='show-hide'
            name={showPassInit ? 'eye slash' : 'eye'}
            link
            onClick={(e: MouseEvent) => {
              handlleShowHide(e, 'showPassInit');
            }}
          />
        }
      />

      <Form.Input
        type={showPassConfirm ? 'text' : 'password'}
        name='password2'
        placeholder='Confirmar Contraseña'
        onChange={handleChange}
        value={password2}
        onBlur={handleBlur}
        error={
          errors.password2 && touched.password2 && { content: errors.password2 }
        }
        icon={
          <Icon
            className='show-hide'
            name={showPassConfirm ? 'eye slash' : 'eye'}
            link
            onClick={(e: MouseEvent) => {
              handlleShowHide(e, 'showPassConfirm');
            }}
          />
        }
      />
      <Button className='btn-submit' type='submit'>
        Registrarse
      </Button>
    </Form>
  );
};
