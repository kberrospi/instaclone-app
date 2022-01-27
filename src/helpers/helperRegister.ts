export const helperRegister = (formValue: any, register: any, login: any) =>{

  const { password2, ...input } = formValue;

      register({
        variables:{
          input
        }
      }).then(( res:any ) => {
        const { id } = res.data.register
        const input = { id }

        login({
          variables:{
            input
          }
        }).then(( res: any ) => {

          const { login } = res.data;
          console.log( login )

        }).catch(( error: any ) => console.log(error))

      }).catch(( error: any ) => console.log( error.message) );

}