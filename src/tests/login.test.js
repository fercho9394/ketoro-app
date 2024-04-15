import React, { useState } from "react";
import { render, fireEvent  } from "@testing-library/react";
import {SlideDown}         from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

/* Icons */
import Visibility    from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/* Elements */
import { styled }        from '@material-ui/styles';
import TextField         from '@material-ui/core/TextField';
import Switch            from '@material-ui/core/Switch';
import InputAdornment    from '@material-ui/core/InputAdornment';
import IconButton        from '@material-ui/core/IconButton';
import FormControl       from '@material-ui/core/FormControl';
import InputLabel        from '@material-ui/core/InputLabel';
import OutlinedInput     from '@material-ui/core/OutlinedInput';

/* Images */
import IconMeta from '../assets/img/icon_meta_login.svg';

function Login(){
    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);
    const [credencials, setCredencials]   = useState({
        usuario:  '',
        pwd:      '',
    });

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!valitacion()) {

          if(credencials.usuario === "administrador@metafinanciera.com" && credencials.pwd === "hy@@HY7878189" ){
            errors['usuario'] = '';
            setIsAdmin(true);
            window.location = "/proceso-registro/Web";
          }else if(credencials.usuario === "asesor@metafinanciera.com" && credencials.pwd === "hy@@9001JI78"){
            errors['usuario'] = '';
            setIsAdmin(false);
            window.location = "/proceso-registro/Web";
          }else{
            setIsAdmin(false);
            errors['usuario'] = 'baduser'
          }

          setErrors((prevState) => {
            return { ...prevState, ...errors }
          });
            
        }
    }

    const valitacion = () => {
        let isFormDirty = false
    
        if (!credencials.usuario) {
          errors['usuario'] = 'required'
          isFormDirty = true
        } else delete errors['usuario']
    
        if (!credencials.pwd) {
          errors['pwd'] = 'required'
          isFormDirty = true
        } else delete errors['pwd']
    
        if (isFormDirty) {
          setErrors((prevState) => {
            return { ...prevState, ...errors }
          });
        } else {
          setErrors({})
        }
    
        return isFormDirty
    }

    const setFormInput = (e) => {
        e.persist()
        const target = e.currentTarget
        const name = target.name
        let value = target.value
    
        setCredencials((prev) => {
          return { ...prev, [name]: value }
        });

    }

    const SwitchSim = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: "#6941f0",
          '&:hover': {
            backgroundColor: "transparent",
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: "#6941f0",
        },
    }));

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <div className='card w-screen rounded-boxer sm:h-screen shadow-login md:mt-8 xl:mt-8 xl2:mt-8 xl3:mt-8  md:m-auto xl:m-auto xl2:m-auto xl3:m-auto md:w-96 xl:w-96 xl2:w-96 xl3:w-96 '>

            <div className='mt-10 mb-10 ml-6 mr-2'>
                <img src={IconMeta} className='w-24' alt='Metafinaciera Mexico' />
            </div>

            <h2
              className='ml-3 mb-2 text-bajio80 text-30'
            >
              ¡Bienvenido!
            </h2>
            <h2
              className='ml-4 mb-16 text-bajio80 text-20'
            >
              Inicio sesión en tu cuenta
            </h2>

            <form
              className={`flex flex-col mr-4`}
              onSubmit={onSubmit}
            >
              <div className='ml-4'>
                <TextField
                  fullWidth
                  data-testid="outlined-basic-user"
                  error={errors.usuario === "required" || errors.usuario === "baduser" ? true : false}
                  type="text"
                  autoComplete="on"
                  label="Usuario"
                  name="usuario"
                  id={errors.usuario === "required" || errors.usuario === "baduser" ?  "outlined-error-user" :  "outlined-basic-user" }
                  value={credencials.usuario ? credencials.usuario : ''}
                  variant="outlined"
                  onChange={setFormInput}  
                  InputProps={{
                    style: {
                      fontSize: 14
                    }
                  }}
                />
              </div>

              <div className='ml-4 mt-12'>

                <FormControl className='w-full' variant="outlined">
                  <InputLabel htmlFor={errors.pwd === "required" ?  "outlined-error-pwd" :  "outlined-basic-pwd" }>Contraseña</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={errors.pwd === "required" || errors.usuario === "baduser" ? true : false}
                    data-testid="outlined-basic-pwd"
                    id={errors.pwd === "required" || errors.usuario === "baduser" ?  "outlined-error-pwd" :  "outlined-basic-pwd" }
                    type={showPassword === false ?  "password" : "text" }
                    value={credencials.pwd ? credencials.pwd : ''}
                    onChange={setFormInput}
                    autoComplete="on"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                    }
                    label="Contraseña"
                    name="pwd"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              {
                errors.usuario === "required" ||
                errors.pwd     === "required"  ? (
                  <SlideDown className={'my-dropdown-slidedown'}>
                    <label className='text-irapuato sm:text-14 text-16 mt-5 ml-4 mr-4 font-semibold'>
                      Para poder avanzar, se requiere ingresar tu suario
                    </label>
                  </SlideDown> 
                )
                :
                  errors.usuario  === "baduser" ?
                    <label className='text-irapuato text-16 mt-5 ml-4 font-semibold'>
                      El usuario o contraseña es incorrecto
                    </label>
                  :
                    <div></div>
              }

              <div className="inline-flex ml-4 mt-5 mb-5">
                <div className="flex-1 text-14">
                  <label className='text-bajio80 text-16 font-semibold mt-2' >Recordar contraseña</label>
                </div>
                <div className="flex-1">
                  <SwitchSim  name="recovery" />
                </div>                                    
              </div>

              <input
                type={"submit"}
                data-testid="BtnSesion"
                id="BtnSesion"
                className={`block ml-4  cursor-pointer  text-center bg-primarymeta text-14 border-transparent rounded w-90 h-14 text-blanco mt-6  dark:bg-aguascalientes dark:text-bajio`}
                value={"INICIAR SESIÓN"}
              />
            </form>

            <label className='block m-auto mt-10 mb-10  text-14 text-primarymeta text-center font-semibold' >RECUPERAR CONTRASEÑA</label>

        </div>
    )
}

test("Valida cuando los campos son vacíos o nulls", () => {

    const {getByTestId} = render(<Login/>);

    const usuario    = getByTestId("outlined-basic-user").getAttribute('value');
    const contrasena = getByTestId("outlined-basic-pwd").getAttribute('value');
    const button     = getByTestId("BtnSesion");

    button.click();

    expect(usuario).toBe(null);
    expect(contrasena).toBe(null);
});

/*test("Valida cuando los campos no son vacíos o nulls", () => {

  const {getByTestId} = render(<Login/>);

  const usuario    = getByTestId('outlined-basic-user').getAttribute('value');
  const contrasena = getByTestId("outlined-basic-pwd").getAttribute('value');
  const button     = getByTestId("BtnSesion");

  const value_usuario   = "usuario@metafinanciera.com";
  const value_passsword = "contrasena";

  usuario.value = "usuario@metafinanciera.com";
  button.click();

  expect(usuario).toBe(value_usuario);
  expect(contrasena).toBe(value_passsword);

});*/