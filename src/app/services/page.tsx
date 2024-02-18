import type { NextPage } from "next";
import Link from "next/link";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Class Documents</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Class Syllabus</h4>
          <Link href="https://inventingtolearn.org/wp-content/uploads/2024/01/LT-3737-7777-syllabus-Spring-24.pdf"><i className="fa fa-folder-open"></i> Download</Link>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          
        <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>3737 Module Tracker</h4>
          <Link href="https://inventingtolearn.org/wp-content/uploads/2024/01/3737-Module-Tracker-Spring-2024.pdf"><i className="fa fa-folder-open"></i> Download</Link>
   
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>7777 Module Tracker</h4>
          <Link href="https://inventingtolearn.org/wp-content/uploads/2024/01/7777-Module-Tracker-Spring-2024.pdf"><i className="fa fa-folder-open"></i> Download</Link>
   
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */ }
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Module Overviews</h4>
          <Link href="https://inventingtolearn.org/wp-content/uploads/2024/01/Module-Overviews-2024.pdf"><i className="fa fa-folder-open"></i> Download</Link>
   
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Parts, Purposes and Complexity Routine Presentation</h4>
          <Link href="https://inventingtolearn.org/wp-content/uploads/2024/01/AbD_PPC-Thinking-Routine-Parts-Purposes-Complexity.pdf"><i className="fa fa-folder-open"></i> Download</Link>
   
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Makification Presentation</h4>
          <Link href="https://inventingtolearn.org/wp-content/uploads/2024/02/Makification.pptx"><i className="fa fa-folder-open"></i> Download</Link>
   
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
