import {RiGoogleFill, RiGithubFill, RiQuestionLine, RiPlantFill} from '@remixicon/react'
import {HelpModal} from '../components/loghelpmodal'
import {LoginForm} from '../components/login_form'


const Logins =()=> {

    const handleModal = () => {
        document.getElementById('Help_modal').showModal()
    }

    return (
        <div className="min-h-screen bg-mainbackground flex items-center">
      <div className="card mx-auto w-full max-w-md shadow-xl">
        <div className="card-body">
          <div className="navbar mb-4 bg-mainbackground text-neutral-content rounded-box">
            <div className="flex-1 px-2 mx-2">
              <span className="text-lg font-bold flex flex-row align-center gap-1">
                <RiPlantFill />
                <span className = "text-lg font-normal text-maintext">ExpenseTrack</span>
              </span>
            </div>
            <div className="flex-none hidden px-2 mx-2 lg:flex">
              <button className="btn btn-ghost btn-sm rounded-btn" onClick={handleModal}>
                <RiQuestionLine />
              </button>
              <HelpModal />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-4 text-maintext">Login to your account</h2>
          
          <LoginForm />
          
          <div className="divider mt-6 text-maintext">OR</div>
          
          <div className="flex flex-col space-y-3">
            <button className="btn btn-outline gap-2 text-maintext border-white">
              <RiGoogleFill />
              Continue with Google
            </button>
            <button className="btn btn-outline gap-2 text-maintext border-white">
             <RiGithubFill />
              Continue with GitHub
            </button>
          </div>
          
          <p className="text-center mt-4 text-maintext">
            Don't have an account? 
            <a href="#" className="text-primary hover:underline ml-1">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    )
}

export default Logins