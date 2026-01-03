import React from "react";
import {useNavigate} from "react-router-dom"


export default function Portfolio() {
  const token = localStorage.getItem("token");
   const nav=useNavigate()
  return (
    <>
      {!token && (
        <div className="text-center bg-red-500 text-white font-bold py-3">
          ACCESS RESTRICTED: Please login to unlock full portfolio
        </div>
      )}

      <div className={!token ? "blur-sm select-none pointer-events-none" : ""}>
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-base-200">
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-success">Srikar</span>
          </h1>
          <p className="mt-3 text-lg opacity-80">
            MERN Developer • Problem Solver • Fast Learner
          </p>

          <a
            href="https://client-portfolio-3n1p.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success mt-4"
          >
            View Full Portfolio
          </a>
        </section>

        <section className="p-8">
          <h2 className="text-3xl font-bold text-success">About Me</h2>
          <p className="mt-3 opacity-80">
            Passionate developer focused on building real-world scalable applications with
            strong UI/UX and reliable backend systems. I enjoy solving challenging problems
            and building impactful products.
          </p>
        </section>

        <section className="p-8">
          <h2 className="text-3xl font-bold text-success mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="badge badge-success p-4 text-lg">HTML</div>
            <div className="badge badge-success p-4 text-lg">CSS</div>
            <div className="badge badge-success p-4 text-lg">JavaScript</div>
            <div className="badge badge-success p-4 text-lg">React</div>
            <div className="badge badge-success p-4 text-lg">Node.js</div>
            <div className="badge badge-success p-4 text-lg">Express</div>
            <div className="badge badge-success p-4 text-lg">MongoDB</div>
            <div className="badge badge-success p-4 text-lg">Git / GitHub</div>
          </div>
        </section>

        <section className="p-8">
          <h2 className="text-3xl font-bold text-success mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card bg-base-200 shadow-xl p-6">
              <h3 className="text-xl font-bold">AI Job Portal(under progress)</h3>
              <p className="mt-2 opacity-80">
                AI powered job recommendation platform with secure authentication and
                dashboard system.
              </p>
              <a href="https://ai-based-job-portal-six.vercel.app/"
              target="_blank">
              <button className="btn btn-outline btn-success mt-3">
                View Project
              </button>
              </a>
            </div>
          </div>
        </section>

        <section className="p-8 text-center">
          <h2 className="text-3xl font-bold text-success">Contact</h2>
          <p className="mt-2 opacity-80">Email: srikarmach@gmail.com</p>
          <p> <a href="https://github.com/Srikar282006/" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/srikar-acharya-madabhushani-29ba87344/" target="_blank"> LinkedIn</a> </p>
        </section>
      </div>
    </>
  );
}
