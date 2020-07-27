import React, {Component} from 'react';

class Eligibility extends Component {
    render() {
        return (
            <>
            <div>
                <h1>Eligibility</h1>
                <p>There are three qualifiers for membership in the VFW, as set out in our By-Laws. An individual must meet all three in order to become a member. They are as follows:</p>
                <br/>
                <p>
                    1: Citizenship – must be a U.S. citizen or U.S. National.
                </p>
                <p>
                    2: Honorable Service – must have served in the Armed Forces of the United States and either received a discharge of Honorable or General (Under Honorable Conditions) or be currently
                    serving.
                </p>
                <p>
                    3: Service in a war, campaign, or expedition on foreign soil or in hostile waters*. This can be proven by any of the following:
                    <br/>
                    - An authorized campaign medal (see a full list of qualifying medals and badges)
                    - Receipt of Hostile Fire Pay or Imminent Danger Pay (verified by a military pay statement)
                    - Service in Korea for 30 consecutive or 60 non-consecutive day
                </p>
                <p>
                    *This information is usually available through a veteran’s DD-214. If other information is needed or if a veteran’s DD-214 is not complete, they can contact the National Personnel Records Center online or at 314-801-0800 to request more information.
                </p>
            </div>
                <img src={"./images/join-today.jpg"} onClick={"/register"}/>
                </>
        );
    }
}

export default Eligibility;