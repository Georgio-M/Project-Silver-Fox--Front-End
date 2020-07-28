import React, {Component} from 'react';


class About extends Component {
    render() {
        return (
            <>
            <div >
                <img src="./images/aboutus.jpg" fluid  alt={"about us"} className={"home-image"}/>
            </div>
                <div className={"about-heading"}>
                    <h1 >About Us</h1>
                </div>
                <div className={"about-body"}>
                <h5 >Our Mission: </h5>
                    <p>To foster camaraderie among United States veterans of overseas conflicts. To serve our veterans, the military and our communities. To advocate on behalf of all veterans. </p>
                <h5>Our Vision:</h5>
                    <p>Ensure that veterans are respected for their service, always receive their earned entitlements, and are recognized for the sacrifices they and their loved ones have made on behalf of this great country.</p>
                </div>
                <br/>
                <div>
                    <h2 className={"about-heading"}>Who We Are</h2>
                </div>
                <div className={"about-body"}>

                    <p>The Veterans of Foreign Wars of the United States is a nonprofit veterans service organization comprised of eligible veterans and military service members from the active, guard and reserve forces.
                    <br/>
                    <br/>
                        We trace our roots back to 1899 when veterans of the Spanish-American War (1898) and the Philippine Insurrection (1899-1902) founded local organizations to secure rights and benefits for their service. Many arrived home wounded or sick. There was no medical care or veterans' pension for them, and they were left to care for themselves.
                    <br/>
                    <br/>
                        In their misery, some of these veterans banded together and formed organizations that would eventually band together and become known as the Veterans of Foreign Wars of the United States. After chapters were formed in Ohio, Colorado and Pennsylvania, the movement quickly gained momentum. Today, membership stands at more than 1.5 million members of the VFW and its Auxiliary.
                    <br/>
                    <br/>
                        Our voice was instrumental in establishing the Veterans Administration, development of the national cemetery system, in the fight for compensation for Vietnam vets exposed to Agent Orange and for veterans diagnosed with Gulf War Syndrome. In 2008, we won a long-fought victory with the passing of a GI Bill for the 21st Century, giving expanded educational benefits to America's active duty service members, and members of the guard and reserves, fighting in Iraq and Afghanistan. We were the driving force behind the Veterans Access and Accountability Act of 2014, and continually fight for improved VA medical centers services for women veterans.
                    <br/>
                    <br/>
                        Besides helping fund the creation of the Vietnam, Korean War, World War II and Women in Military Service memorials, in 2005 the VFW became the first veterans' organization to contribute to building the new Disabled Veterans for Life Memorial, which opened in November 2010. And in 2015, we became the first supporter of the National Desert Storm War Memorial which is planned for construction at our nation's capital.
                    <br/>
                    <br/>
                        We have many programs and services that work to support veterans, service members and their families, as well as communities worldwide. Please check out our latest fact sheet or spend some time browsing our site to learn why No One Does More For Veterans.
                    </p>
                    <br/>

                <h5>Our Core Values:</h5>
                    <ul>
                        <li>Always put the interests of our members first</li>
                        <li>Treat donors as partners in our cause</li>
                        <li>Promote patriotism</li>
                        <li>Honor military service</li>
                        <li>Ensure the care of veterans and their families</li>
                        <li>Serve our communities</li>
                        <li>Promote a positive image of the VFW</li>
                        <li>Respect the diversity of veteran opinions</li>
                    </ul>
                </div>
                </>

        );
    }
}

export default About;