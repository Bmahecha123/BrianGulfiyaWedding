import React, { useState } from 'react';
import { InviteeService } from 'services/inviteeService';
import { cardStyles, colors, containerSizing, fontSizing, fontStyles, spacing } from '../../theme';
import './rsvp.css';

//styles
const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
};

const headerStyles = {
    fontSize: fontSizing.large,
};

const labelStyles = {
    fontSize: fontSizing.medium
};

const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    margin: spacing.small,
    alignItems: 'start',
    marginTop: spacing.xxxlarge,
};

const formRow = {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
};

const radioStyles = {
    height: fontSizing.medium,
    width: fontSizing.medium,
};

const inputStyles = {
    color: colors.primaryTextColor,
    fontSize: fontSizing.medium,
    fontWeight: fontStyles.normal,
    backgroundColor: colors.inputBackgroundColor,
    width: containerSizing.medium,
};

const inputButtonStyles = {
    backgroundColor: colors.buttonBackgroundColor,
    color: colors.buttonTextColor
};

const inviteeService = new InviteeService();

const plusOneType = {
    fullName: null,
    mealPreference: null
};

const inviteeType = {
    invitationCode: null,
    fullName: null,
    mealPreference: null,
    children: [],
    plusOne: plusOneType
};



const RSVP = () => {

    const [invitationCode, setInvitationCode] = useState(null);
    const [invitee, setInvitee] = useState(inviteeType);
    const [childList, setChildList] = useState([]);
    const [hasPlusOne, setHasPlusOne] = useState(false);

    const [mealPreference, setMealPreference] = useState('');

    const [plusOneName, setPlusOneName] = useState('');
    const [plusOneMealPreference, setPlusOneMealPreference] = useState('');

    const [childName, setChildName] = useState('');

    const [showInviteeForm, setShowInviteeForm] = useState(false);

    const [successfullyPostedDoc, setSuccessfullyPostedDoc] = useState(false);

    const resetForm = () => {                             setInvitationCode(null);
        setInvitee(inviteeType);
        setChildList([]);
        setHasPlusOne(false);
        setMealPreference('');
        setPlusOneName('');
        setPlusOneMealPreference('');
        setChildName('');
        setShowInviteeForm(false);
        setSuccessfullyPostedDoc(false);
    };
    return(
        <section style={{...sectionStyles, padding: spacing.medium}}>
            {showInviteeForm
            ? <form style={{...formStyles, padding: spacing.medium, ...cardStyles(containerSizing.large)}}>
                <h1 style={headerStyles}>Invitee Info</h1>
                <label style={{...labelStyles, fontWeight: 'bold'}}>Name</label>
                <label style={labelStyles}>{invitee.fullName}</label>
                <label style={{...labelStyles, fontWeight: 'bold'}}>Meal Preference</label>
                <div>
                    <input 
                        style={radioStyles} 
                        type="radio" 
                        id="mealPreferenceVegetarian" 
                        name="mealPreference"
                        value="Vegetarian"
                        onChange={value => {
                            setMealPreference('Vegetarian');
                        }}
                    />
                    <label style={{...radioStyles, }} for="mealPreference">Vegetarian</label>

                    <input
                        style={radioStyles} 
                        type="radio" 
                        id="mealPreferenceChicken" 
                        name="mealPreference" 
                        value="Chicken"
                        onChange={value => {
                            setMealPreference('Chicken');
                        }}
                    />
                    <label style={{...radioStyles}} for="mealPreference">Chicken</label>
                </div>

                <label style={{...labelStyles, fontWeight: 'bold'}}>Will you be bringing a +1?</label>
                <div>
                    <input 
                        style={radioStyles} 
                        type="radio" 
                        id="havePlusOne" 
                        name="havePlusOne"
                        value="havePlusOne"
                        onChange={value => {
                            setHasPlusOne(true);
                        }}
                    />
                    <label style={{...radioStyles, }} for="havePlusOne">Yes</label>

                    <input
                        style={radioStyles} 
                        type="radio" 
                        id="dontHavePlusOne" 
                        name="havePlusOne" 
                        value="havePlusOne"
                        onChange={value => {
                            setHasPlusOne(false);
                        }}
                    />
                    <label style={{...radioStyles}} for="dontHavePlusOne">No</label>
                </div>
                {hasPlusOne && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <input 
                        id="plusOneName" 
                        style={{...inputStyles, marginLeft: 0}} 
                        type="text"
                        name="plusOneName"
                        placeholder="What's their name?"
                        value={plusOneName}
                        onChange={e => {
                            setPlusOneName(e.target.value);
                        }}
                    />
                    <label style={{...labelStyles, fontWeight: 'bold'}}>Meal Preference</label>
                    <div>
                        <input 
                            style={radioStyles} 
                            type="radio" 
                            id="mealPreferenceVegetarianPlusOne" 
                            name="mealPreferencePlusOne"
                            value="Vegetarian"
                            onChange={value => {
                                setPlusOneMealPreference('Vegetarian');
                            }}
                        />
                        <label style={{...radioStyles, }} for="mealPreference">Vegetarian</label>

                        <input
                            style={radioStyles} 
                            type="radio" 
                            id="mealPreferenceMeatPlusOne" 
                            name="mealPreferencePlusOne"
                            value="Chicken"
                            onChange={value => {
                                setPlusOneMealPreference('Chicken');
                            }}
                        />
                        <label style={{...radioStyles}} for="mealPreference">Chicken</label>
                    </div>
                </div>}
                <label style={{...labelStyles, fontWeight: 'bold'}}>Bringing any little ones? (Under 10)</label>
                {childList.map((child, index) => {
                    return (<div key={index} style={formRow}>
                        <label 
                            style={{...labelStyles, 
                            color: colors.red, 
                            marginRight: spacing.small}}
                            onClick={e => {
                                setChildList(childList.filter((value, index, arr) => {
                                    return value.fullName !== child.fullName;
                                }));
                            }}
                        >-</label>
                        <label style={labelStyles}>{child.fullName}</label>
                        <div>
                            <input 
                                style={radioStyles} 
                                type="radio" 
                                id="mealPreferenceVegetarianChild" 
                                name="mealPreferenceChild"
                                value="Vegetarian"
                                onChange={value => {
                                    const updatedChild = {
                                        fullName: child.fullName,
                                        mealPreference: "Vegetarian"
                                    };
                                    childList[index] = updatedChild;
                                    setChildList(childList);
                                }}
                            />
                            <label style={{...radioStyles, }} for="mealPreference">Vegetarian</label>

                            <input
                                style={radioStyles} 
                                type="radio" 
                                id="mealPreferenceMeatChild" 
                                name="mealPreferenceChild"
                                value="Chicken"
                                onChange={value => {
                                    const updatedChild = {
                                        fullName: child.fullName,
                                        mealPreference: "Chicken"
                                    };
                                    childList[index] = updatedChild;
                                    setChildList(childList);
                                }}
                            />
                            <label style={{...radioStyles}} for="mealPreference">Chicken</label>
                        </div>
                    </div>);
                })}
                <input 
                    id="childName" 
                    style={{...inputStyles, marginLeft: 0}} 
                    type="text"
                    name="childName"
                    placeholder="Enter their name"
                    value={childName}
                    onChange={e => {
                        setChildName(e.target.value);
                    }}
                />
                <button
                    id="addChildBtn"
                    style={{...inputStyles, ...inputButtonStyles, marginLeft: 0, fontSize: fontSizing.small, width: containerSizing.small}} 
                    type="button"
                    onClick={() => {
                        setChildList([...childList, {
                            fullName: childName,
                            mealPreference: null,
                        }])
                        setChildName('');
                    }}
                >Add a little one!</button>

                <button
                    id="submitInfoBtn"
                    style={{...inputStyles, ...inputButtonStyles, boxShadow: colors.buttonBoxShadow, alignSelf: 'center', marginTop: spacing.medium, fontWeight: fontStyles.bold}} 
                    type="button"
                    onClick={async () => {
                        // print everything
                        // Create user

                        const updatedInvitee = {
                            fullName: invitee.fullName,
                            hasRsvped: true,
                            mealPreference: mealPreference,
                            plusOne: {
                                fullName: plusOneName,
                                mealPreference: plusOneMealPreference,
                            },
                            children: childList,
                        };
                        const isResponseSuccessful = await inviteeService.postInvitee(invitationCode, updatedInvitee);
                        console.log('RESPONSEEEEEE');
                        console.log(isResponseSuccessful);
                        if (isResponseSuccessful) {
                            // Show subtext below label
                            setSuccessfullyPostedDoc(true);
                        } else {
                            // Show invitee form again
                            setSuccessfullyPostedDoc(false);
                        }
                    }}
                >Submit Info</button>
                <button
                    id="startFormOverBtn"
                    style={{alignSelf: 'center', ...inputStyles, ...inputButtonStyles, fontSize: fontSizing.small, width: containerSizing.small}} 
                    type="button"
                    onClick={() => resetForm()}
                >Want to start over? Click here!</button>
                {successfullyPostedDoc && <>
                    <h1 style={{fontSize: fontSizing.medium, color: colors.red}}>{"Successfully submitted, see you there *<)8D!"}</h1>

                </>}
            </form>  
            : <form style={formStyles}>
                <input 
                    id="invitationCode" 
                    style={{...inputStyles, boxShadow: colors.buttonBoxShadow,}} 
                    type="text" 
                    name="invitationCode" 
                    placeholder="Enter Invitation Code"
                    onChange={e => {
                        setInvitationCode(e.target.value);
                    }} 
                    value={invitationCode} 
                />
                <button 
                    id="lookupBtn" 
                    style={{...inputStyles, ...inputButtonStyles}} 
                    type="submit" 
                    onClick={async () => {

                        //look up button
                        const lookupBtn = document.getElementById('lookupBtn')

                        if (invitationCode.trim() === '') {
                            alert('Enter the invitation code found on your invitation!');
                        } else {
                            // lookup invite code in firebase and if it exists then send user to contact page
                            //Disable button then re enable once request is done for firebase
                            // @ts-ignore
                            lookupBtn.disabled = true;
                            
                            const invitee = await inviteeService.getInvitee(invitationCode);
                            if (invitee === null) {
                                alert(`${invitationCode} was not found.`);
                            } else {
                                
                                setInvitee(invitee);
                                setShowInviteeForm(true);
                            }
                            
                            // @ts-ignore
                            lookupBtn.disabled = false;
                        }
                    }}
                >Look me up!</button>
            </form>
             }
        </section>
    );
};

export default RSVP;