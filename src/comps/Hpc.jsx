import React from "react"
import {connect} from "react-redux"
import "./Hpc.css"


function Hpc (props) {
    return (
        <>
        <div id="hpcImg">FusionServer Succeeds in Upgrading HPC System for EPFL</div>
        <section id="hpcSec">
            <section id="hpcText">
                <div id="mainHpc">
                    <p>"Transtec has closely cooperated with FusionServer to provide EPFL with a top-quality system, which meets our demands in the high-performance computing field. We are impressed with the excellent hardware solutions introduced by FusionServer engineers and professional planning, installation, and configuration services from Transtec."</p>
                    <h3>——Executive Officer of EPFL SCITAS Vittoria Rezzonico</h3>
                    <h1>Background</h1>
                    <p>High-Performance Computing (HPC) improves a variety of fields, including aerodynamics and space technology development, long-term climate predictions, high-precision weather forecasting, ocean current calculations, air and water pollution simulation analysis, flood and earthquake predictions, engine and mold designs, biological medicine designs, wind tunnel simulation testing, petroleum exploration, and new materials research.</p>
                    <p>Currently, HPC continues to rapidly develop and widely expand for two reasons:</p>
                    <p><b>Demand:</b> In this data era, as data volumes increase and people pursue higher data-analysis efficiencies, stronger computing capacities are required.</p>
                    <p><b>Technology development:</b> Information technologies have developed rapidly in recent years, and now people can enjoy HPC’s strong computing capacities at low costs rather than paying for expensive manpower and materials. These two reasons interact with and promote each other so that more industries can implement HPC and benefit from the resulting improvements.</p>
                    <p>The higher education industry is a typical example. Statistics show that, among the world’s top 500 HPC clusters released in June 2017, 41 are from universities, with this proportion exceeding 8 percent. Why does the higher education industry benefit from HPC? Universities use HPC in relevant curriculums such as physics, chemistry, and biology. This is why HPC is developing so rapidly in the higher education industry.</p>
                    <h1>Challenges</h1>
                    <p>École Polytechnique Fédérale de Lausanne (EPFL) is a top world-class university, ranking twelfth in the QS World University Rankings. EPFL has a well-known reputation in engineering technology and natural science fields with students, professors, and staff from over 120 countries and regions. To maintain its industry-leading scientific research level, EPFL established the first HPC system to serve all students and teachers in 2008, and continuously improves its HPC system.</p>
                    <p>To enhance future competitiveness, EPFL has planned to upgrade and expand its HPC system since 2016 because resources have become insufficient. EPFL had listed all requirements to be met, including HPC benchmark, HPL test, HPCG test, and various applications in science, engineering, biology, and medical care. All of these applications must continue running properly.</p>
                    <p>In addition, there are many mandatory requirements, such as theoretical computing capability ≥ 475 TFLOPS, shared storage ≥ 340 TB, read/write bandwidth up to 40 Gbit/s, cabinets ≤ 8, and power consumption per cabinet ≤ 25 kW. The system must be open, easy to manage, and scalable. Partners should be forward-looking in technologies and able to offer sufficient support to EPFL to build a 5 PFLOPS HPC cluster in the next five years.</p>
                    <h1>Solution</h1>
                    <p>Facing the great pressure, FusionServer and local system integrator Transtec worked together to find a solution After many detailed analyses.</p>
                    <p>The compute nodes use 408 FusionServer XH620s. Each node uses two Xeon E5-2690 v4 processors. The theoretical computing peak value is 475.2 TFLOPS. The network uses two-layer Fat-Tree networking and InfiniBand high-speed network. The storage system is composed of six systems and a General Parallel File System (GPFS), with a capacity of 350 TB.</p>
                    <h1>Benefits</h1>
                    <p>FusionServer selects a number of its advanced products and technologies for EPFL’s solution, which achieve remarkable results. For example, FusionServer X6800 high-density servers are used, increasing the single-cabinet computing capacity by 70 percent and decreasing the number of cabinets by 40 percent. If FusionServer X6800 servers are used, a 4U chassis is needed to accommodate 8 compute nodes and 16 CPUs. If ordinary 1U two-socket servers are used, an 8U chassis is needed. As a result, only 6 rather than 10 cabinets are required to accommodate 408 compute nodes. FusionServer X6800 adopts a heat dissipation design and Dynamic Energy Management Technology (DEMT), so its power consumption is 10 percent to 20 percent lower than that of a traditional rack server. Other features are not listed herein exhaustively.</p>
                    <p>This solution is widely recognized and deployed, relying on high efficiency, performance, scalability, and easy management. In actual applications, the solution completely meets users’ requirements, and the measured computing power is 401 TFLOPS with the computing efficiency up to 84.4 percent.</p>
                    <p>Miss Vittoria Rezzonico, Executive Officer of EPFL SCITAS, spoke highly of FusionServer in an interview: "Transtec has closely cooperated with FusionServer to provide EPFL with a top-quality system, which meets our demands in the high-performance computing field. We are impressed with the excellent hardware solutions introduced by FusionServer engineers and professional planning, installation, and configuration services from Transtec."</p>
                </div>
            </section>
            <div id="sideHpc">
                    <h3>Products and Solutions</h3>
                    <ul>
                        <li onClick={props.third}>FusionServer 2488H V5 Rack Server</li>
                        <li onClick={props.eight}>KunLun 9008 Mission Critical Servers</li>
                        <li onClick={props.fourth}>FusionServer 5288H v6</li>
                        <li onClick={props.fifth}>X6000 v6</li>
                        <li onClick={props.fst}>FusionServer 1288H v6</li>
                    </ul>
                </div>
        </section>  
        </>
    )


}
const mapState = (state) => {
    return ({
        state:state
    })
}

const mapAct = (deploy) => {
    return (
        {
            third: () => deploy({type:"third"}),
            eight: () => deploy({type:"eight"}),
            fourth: () => deploy({type:"fourth"}),
            fifth: () => deploy({type:"fifth"}),
            fst: () => deploy({type:"fst"}),
        }
    )
}
export default connect(mapState, mapAct)(Hpc)