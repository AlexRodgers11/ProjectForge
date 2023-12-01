import React, { useEffect, useState } from "react";
import useToggle from "../../../hooks/useToggle";
import FMEAForm from "../../forms/FMEAForm/FMEAForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteFMEA, fetchFMEAs } from "../../../reducers/fmeasSlice";
import "./FMEADisplay.css";
import Modal from "../../Modal/Modal";
import { IoClose } from "react-icons/io5";

export default function FMEADisplay() {
    const [showForm, toggleShowForm] = useToggle(false);
    const [editMode, toggleEditMode] = useToggle(false);
    const [deleteId, setDeleteId] = useState("");
    const fmeas = useSelector(state => state.fmeas.fmeas);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!fmeas.length) {
            dispatch(fetchFMEAs({orgId: "656646641372dda7d05850ef"}));
        }
    }, [fmeas]);

    const handleCreateFMEA = () => {
        toggleShowForm();
        if(editMode) {
            toggleEditMode();
        }
    }

    const handleDeleteFmea = evt => {
        console.log(evt.target.id);
        setDeleteId(evt.target.id);
    }

    const confirmDeleteFmea = () => {
        dispatch(deleteFMEA({orgId: "656646641372dda7d05850ef", formId: deleteId}));
        setDeleteId("");
    }
    
    return (
        <div className="FMEADisplay">
            {showForm && <Modal hideModal={toggleShowForm}><FMEAForm toggle={toggleShowForm}/></Modal>}
            {!showForm && <button onClick={handleCreateFMEA}>Create new FMEA</button>}
            {deleteId && 
                <Modal>
                    <div>
                        <p>Are you sure you want to delete this FMEA? This action cannot be undone</p>
                        <button onClick={confirmDeleteFmea}>Yes</button>
                        <button onClick={() => setDeleteId("")}>No</button>
                    </div>
                </Modal>}
            <button onClick={toggleEditMode}>{editMode ? "Done" : "Edit"}</button>
            <table>
                <thead>
                    <tr>
                        {editMode && <th className="FMEADisplay_Hidden"></th>}
                        <th>Process Step/Input</th>
                        <th>Potential Failure Mode</th>
                        <th>Potential Failure Effects</th>
                        <th className="FMEADisplay_Vertical">Severity (1-10)</th>
                        <th>Potential Causes</th>
                        <th className="FMEADisplay_Vertical">Occurrence (1-10)</th>
                        <th>Current Controls</th>
                        <th className="FMEADisplay_Vertical">Detection (1-10)</th>
                        <th className="FMEADisplay_Vertical">RPN (Risk Priority Number)</th>
                        <th>Action Recommended</th>
                        <th>Responsibility</th>
                        <th>Actions Taken</th>
                        <th className="FMEADisplay_Vertical">Severity (1-10)</th>
                        <th className="FMEADisplay_Vertical">Occurence (1-10)</th>
                        <th className="FMEADisplay_Vertical">Detection (1-10)</th>
                        <th className="FMEADisplay_Vertical">RPN (Risk Priority Number)</th>
                    </tr>
                </thead>
                <tbody>
                    {fmeas.length > 0 && fmeas.map(fmea => (
                        <tr key={fmea._id}>
                            {editMode && <td>{<IoClose id={fmea._id} className="FMEADisplay_Close" onClick={handleDeleteFmea} />}</td>}
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