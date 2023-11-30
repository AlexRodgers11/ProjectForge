import React, { useEffect } from "react";
import useToggle from "../../../hooks/useToggle";
import FMEAForm from "../../forms/FMEAForm/FMEAForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchFMEAs } from "../../../reducers/fmeasSlice";
import "./FMEADisplay.css";
import Modal from "../../Modal/Modal";

export default function FMEADisplay() {
    const [showForm, toggleShowForm] = useToggle(true);
    const fmeas = useSelector(state => state.fmeas.fmeas);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!fmeas.length) {
            dispatch(fetchFMEAs({orgId: "656646641372dda7d05850ef"}));
        }
    }, [fmeas]);

    const handleCreateFMEA = () => {
        toggleShowForm();
    }
    
    return (
        <div className="FMEA">
            {showForm && <Modal hideModal={toggleShowForm}><FMEAForm toggle={toggleShowForm}/></Modal>}
            {!showForm && <button onClick={handleCreateFMEA}>Create new FMEA</button>}
            <table>
                <thead>
                    <tr>
                        <th>Process Step/Input</th>
                        <th>Potential Failure Mode</th>
                        <th>Potential Failure Effects</th>
                        <th>Severity (1-10)</th>
                        <th>Potential Causes</th>
                        <th>Occurrence (1-10)</th>
                        <th>Current Controls</th>
                        <th>Detection (1-10)</th>
                        <th>RPN (Risk Priority Number)</th>
                        <th>Action Recommended</th>
                        <th>Responsibility</th>
                        <th>Actions Taken</th>
                        <th>Severity (1-10)</th>
                        <th>Occurence (1-10)</th>
                        <th>Detection (1-10)</th>
                        <th>RPN (Risk Priority Number)</th>
                    </tr>
                </thead>
                <tbody>
                    {fmeas.length > 0 && fmeas.map(fmea => (
                        <tr key={fmea._id}>
                            <td>{fmea.step}</td>
                            <td>{fmea.failureMode}</td>
                            <td>{fmea.failureEffects}</td>
                            <td>{fmea.severity}</td>
                            <td>{fmea.causes}</td>
                            <td>{fmea.occurence}</td>
                            <td>{fmea.controls}</td>
                            <td>{fmea.detection}</td>
                            <td>{fmea.severity * fmea.occurence * fmea.detection}</td>
                            <td>{fmea.recommendedAction}</td>
                            <td>{fmea.responsibility}</td>
                            <td>{fmea.actionsTaken}</td>
                            <td>{fmea.updatedSeverity}</td>
                            <td>{fmea.updatedOccurence}</td>
                            <td>{fmea.updatedDetectance}</td>
                            <td>{fmea.updatedSeverity * fmea.updatedOccurence * fmea.updatedDetectance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}