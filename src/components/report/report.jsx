import "./report.css";

export default function Report() {
    return (
        <div className="report">
     
        <div className="reportItem">
        <span className="reportTitle"> <a class="active" href="#Daily">Daily</a></span>
       
       </div>
       
       <div className="reportItem">
        <span className="reportTitle"><a href="#Weekly">Weekly</a></span>
         </div>
     
     <div className="reportItem">
       <span className="reportTitle"><a href="#Monthly">Monthly</a></span>
     </div>
     
   </div>
    );
  }
  