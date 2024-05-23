import React, { useState } from 'react';

const LoginSignup = () => {
  const [state,setState] = useState("login")
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  

  const changeHandler  = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

   const login = async()=>{
   console.log("this is login",formData);
   let responseData;

   try {
       const response = await fetch('http://localhost:4000/login', {
           method: 'POST',
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(formData),
       });

       if (!response.ok) {
           throw new Error('Network response was not ok');
       }

       responseData = await response.json();

       if (responseData.success) {
           localStorage.setItem('auth-token', responseData.token);
           window.location.replace("/");
       }
   } catch (error) {
       console.error('Error during signup:', error);
   }
   
   }

  //  const signup = async()=>{
  //   console.log("this is sign up" , formData);
  //   let responseData;
     
  //   await fetch('http://localhost:4000/signup',{
  //     method:'POST',
  //     headers:{
  //       Accept:'application/form-data',
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify(formData),
  //   }).then((response)=>response.json()).then((data)=>responseData = data)
    
  //   if(responseData.success){
  //     localStorage.setItem('auth-token',responseData.token);
  //     window.location.replace("/")
  //   }
  //  }


  const signup = async () => {
    console.log("this is sign up", formData);
    let responseData;

    try {
        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        responseData = await response.json();

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
}



  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">{state}</h1>
        <div className="mb-4">
        {state==="Sign Up" ? <input 
  name='username' 
  value={formData.username} 
  onChange={changeHandler} 
  className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Username"
/> :<></>}
          
<input 
  name='email' 
  value={formData.email} 
  onChange={changeHandler} 
  className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
  type="email"
  placeholder="Email Address"
/>
<input 
  name='password' 
  value={formData.password} 
  onChange={changeHandler} 
  className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
  type="password"
  placeholder="Password"
/>
        </div>
        <button onClick={()=>{state==="login" ? login():signup()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Continue
        </button>
        {state==="Sign Up" ?  <p className="mt-4 text-sm">
          Already have an account?{' '}
          <span onClick={()=>{setState("Login")}} className="text-blue-500 cursor-pointer">Login here</span>
        </p>
         :
         <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <span onClick={()=>{setState("Sign Up")}} className="text-blue-500 cursor-pointer">Create Account</span>
        </p>
         }
       
        
        <div className="mt-4 flex items-center">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="show-pass"
            name=""
          />
          <p className=" text-[10px]">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
