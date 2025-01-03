import React from 'react';

export default function LoginSectionSignUpWhitePattern1() {
    return (
        <React.Fragment>
            <>
                <section className="relative pt-16 pb-0 md:py-32 bg-white" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}>
  <div className="container px-4 mx-auto mb-16">
    <div className="w-full md:w-3/5 lg:w-1/2">
      <div className="max-w-sm mx-auto">
        <div className="mb-6 text-center">
          <a className="inline-block mb-6" href="#">
            <img className="h-16" src="https://static.shuffle.dev/uploads/files/76/7675732c1375916f878e8a31f80358b3e266836d/leaf-soil-logo-design-633982-339.jpg" alt />
          </a>
          <h3 className="mb-4 text-2xl md:text-3xl font-bold">Momentan acces doar prin invitație speciala</h3>
          <p className="text-lg text-coolGray-500 font-medium">Află cum </p>
        </div>
        <form action>
          <div className="mb-6">
            <label className="block mb-2 text-coolGray-800 font-medium" htmlFor>Name*</label>
            <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="name" placeholder="Patryk" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-coolGray-800 font-medium" htmlFor>Email*</label>
            <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="name" placeholder="dev@shuffle.dev" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-coolGray-800 font-medium" htmlFor>Password*</label>
            <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="************" />
          </div>
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="w-full md:w-1/2">
              <label className="relative inline-flex items-center">
                <input className="form-checkbox appearance-none" type="checkbox" />
                <img className="absolute top-1/2 transform -translate-y-1/2 left-0" src="flex-ui-assets/elements/sign-up/checkbox-icon.svg" alt />
                <span className="ml-7 text-xs text-coolGray-800 font-medium">Remember me</span>
              </label>
            </div>
            <div className="w-full md:w-auto mt-1"><a className="inline-block text-xs font-medium text-green-500 hover:text-green-600" href="#">Forgot your password?</a></div>
          </div>
          <a className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">Sign Up</a>
          <a className="inline-flex items-center justify-center py-3 px-7 mb-6 w-full text-base text-coolGray-500 font-medium text-center leading-6 bg-white border border-coolGray-100 hover:border-coolGray-200 rounded-md shadow-sm" href="#">
            <img className="mr-2" src="flex-ui-assets/elements/sign-up/google-icon-sign-up.svg" alt />
            <span>Sign in with Google</span>
          </a>
          <p className="text-center">
            <span className="text-xs font-medium">Already have an account?</span>
            <a className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline" href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  <img className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover" src="https://images.unsplash.com/photo-1527040819607-e9d6608084af?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyMHx8ZmFybWVyJTIwdGVjaG5vbG9naWVzJTIwfGVufDB8fHx8MTczNTQ2ODE3NHww&ixlib=rb-4.0.3&q=85&w=1920" alt />
</section>


            </>
        </React.Fragment>
    );
}

