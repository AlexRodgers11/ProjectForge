import React from "react";
import useToggle from "../../hooks/useToggle";
import FMEAForm from "../forms/FMEAForm";

export default function FMEADisplay() {
    const [showForm, toggleShowForm] = useToggle(true);
    
    return (
        <div className="FMEA">
            {showForm && <FMEAForm toggle={toggleShowForm}/>}
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}