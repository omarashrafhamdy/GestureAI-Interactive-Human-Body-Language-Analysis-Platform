import React from 'react';

export default function EditProfile() {
    return (
        <div className='container p-0 m-0'>
            <div className='row w-100 m-0 '>
                <div className='col-md-3 offset-3'>Edit personal data</div>
            </div>

            <div className='row w-100 m-0'>
            <form className='col-12 '>

                <div className='row justify-content-center'>
                    <div className='col-5'>

                    </div>
                </div>

                <div className='row justify-content-center row mb-3'>
                    <label className='col-5'>First name</label>
                    <label className='col-5'>Last name</label>

                    <div className='col-5'>
                        <input className='form-control' placeholder='first name' name='firstname'/>
                    </div>
                    <div className='col-5'>
                        <input className='form-control' placeholder='last name' name='lastname'/>
                    </div>


                    <div className='col-10'>
                        <p className='danger'>First name and Last name must be at least four characters</p>
                    </div>
                </div>
                
                <div className='row justify-content-center row mb-3'>
                    <label className='col-5'>Birth date</label>
                    <label className='col-5'>Last name</label>

                    <div className='col-5'>
                        <input type="date" className='form-control'name='bdate'/>
                    </div>
                    <div className='col-5'>
                        <input type="file" className='form-control' name='profilepic'/>
                    </div>
                </div>

                <div className='row'>
                    <label className='col-4 offset-2'>Email</label>
                </div>

                <div className='row row mb-3'>
                    <div className='col-8 offset-2'>
                    <input className='form-control' name='email' placeholder='Email'/>
                    </div>
                    <p className='col-8 offset-2'>email error</p>
                </div>

                <div className='row '>
                    <label className='col-4 offset-2'>Password</label>
                </div>

                <div className='row mb-3'>
                    <div className='col-8 offset-2'>
                    <input className='form-control' name='password' placeholder='Password' type="password"/>
                    </div>
                    <p className='col-8 offset-2'>email error</p>
                </div>

                <div className='row'>
                    <label className='col-8 offset-2'>Password Confiramtion</label>
                </div>

                <div className='row row mb-3'>
                    <div className='col-8 offset-2'>
                    <input className='form-control' name='passwordConfiramtion' type="password" placeholder='Password Confiramtion'/>
                    </div>
                    <p className='col-8 offset-2'>email error</p>
                </div>


            </form>
            </div>

        </div>
    )
}
