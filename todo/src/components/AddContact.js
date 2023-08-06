import React from 'react';

class AddContact extends React.Component {
    state= {
        name:"",
        email:"",
    }

    add = (e) =>{
        e.preventDefault();
        if (this.state.name === '' && this.state.email === ''){
            alert('xsss')
        }
        this.props.addcontacthandler(this.state);
        this.setState({name:"",email:""});
    }
  render() {
    return (
      <div className='max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md'>
        <h2 className='text-xl font-medium mb-4'>Add Contact</h2>
        <form className='space-y-4' onSubmit={this.add}>
          <div>
            <label className='block font-medium mb-1' >Name</label>
            <input
              type='text'
              name='name'
              value = {this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
              placeholder='Enter name'
              className='w-full border border-gray-300 p-2 rounded'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Enter email'
              className='w-full border border-gray-300 p-2 rounded'
              value = {this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </div>
          <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 center'
            >
            Save
          </button>
          </div>
         
        </form>
      </div>
    );
  }
}

export default AddContact;
