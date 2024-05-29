import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  })

  // notify when information successfull store in databases... 
  const notify = (msg) => toast(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",

  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { Name, Email, Subject, Message } = formData;

    if (Name !== '' && Email !== '' && Subject !== '' && Message !== '') {
      
      notify('We will Contact Shorty !')
    } else {
        notify('All Fields Are Required !')
    }
  }


  return (
    <>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        />


      </div>
      <section className="min-w-56">
        <div className='my-0 mx-auto py-1 px-11 '>
          <h2 className='font-bold text-3xl'>Contact us</h2>
          <p className='text-2xl font-light pt-2'>Get in touch with us. We are always here to help you.</p>
        </div>

        <div className='flex md:flex-row justify-evenly  flex-col gap-4 px-8 '>
          <div className='py-4 md:w-1/2'>
            <form onSubmit={handleFormSubmit} method="POST">
              <div>
                <div className='flex flex-col pb-3'>

                  <input type='text' placeholder='Your Name' name='Your Name' id='Your Name' className='py-2 px-4 border-2 rounded-md text-lg outline-none focus:border-black'

                    value={formData.Name}
                    onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                  />
                </div>

                <div className='flex flex-col pb-3'>

                  <input type='text' placeholder='Email Address' name='Email Address' id='Email Address' className='py-2 px-4 border-2 rounded-md text-lg outline-none focus:border-black'
                    value={formData.Email}
                    onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                  />
                </div>
                <div className='flex flex-col pb-3'>

                  <input type='text' placeholder='Subject' name='Subject' id='Subject' className='py-2 px-4 border-2 rounded-md text-lg outline-none focus:border-black'
                    value={formData.Subject}

                    onChange={(e) => setFormData({ ...formData, Subject: e.target.value })}
                  />
                </div>
                <div className='flex flex-col pb-3'>

                  <textarea placeholder='Your Message' name='Message' id='Message' cols={30} rows={6} className='py-2 px-4 border-2 rounded-md text-lg outline-none focus:border-black'
                    value={formData.Message}
                    onChange={(e) => setFormData({ ...formData, Message: e.target.value })}
                  ></textarea>
                </div>
                <div>
                  <button type='submit' className='bg-dark-teal text-teal-100 py-2 px-5 rounded-md hover:text-dark-teal hover:bg-teal-100 duration-500 focus:border-black'>Submit</button>
                </div>
              </div>
            </form>
          </div>

          <div className="md:w-1/2   md:mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37764.85305168884!2d77.38649172450346!3d23.275952464442472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c684ba13c07d5%3A0xde2136659c881e0!2sNishatpura!5e0!3m2!1sen!2sin!4v1716948706275!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full md:h-96 mb-6"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
