import React, { useState } from "react";
import useFormInput from "../../../hooks/useFormInput";
import { useDispatch, useSelector } from "react-redux";
import { submitNewFMEAForm, updateFormIdx } from "../../../reducers/fmeasSlice";
import "./FMEAForm.css";

export default function FMEAForm(props) {
    const [step, clearStep, handleStepChange, setStep] = useFormInput("");
    const [failureMode, clearFailureMode, handleFailureModeChange, setFailureMode] = useFormInput("");
    const [failureEffects, clearFailureEffects, handleFailureEffectsChange, setFailureEffects] = useFormInput("");
    const [severity, clearSeverity, handleSeverityChange, setSeverity] = useFormInput("");
    const [causes, clearCauses, handleCausesChange, setCauses] = useFormInput("");
    const [occurence, clearOccurence, handleOccurenceChange, setOccurence] = useFormInput("");
    const [controls, clearControls, handleControlsChange, setControls] = useFormInput("");
    const [detection, clearDetection, handleDetectionChange, setDetection] = useFormInput("");
    const [recommendedAction, clearRecommendedAction, handleRecommendedActionChange, setRecommendedAction] = useFormInput("");
    const [responsibility, clearResponsibility, handleResponsibilityChange, setResponsibility] = useFormInput("");
    const [actionsTaken, clearActionsTaken, handleActionsTakenChange, setActionsTaken] = useFormInput("");
    const [updatedSeverity, clearUpdatedSeverity, handleUpdatedSeverityChange, clearSeverityChange] = useFormInput("");
    const [updatedOccurence, clearUpdatedOccurence, handleUpdatedOccurenceChange, setUpdatedOccurence] = useFormInput("");
    const [updatedDetectance, clearUpdatedDetectance, handleUpdatedDetectanceChange, setUpdatedDetectance] = useFormInput("");
    const formIdx = useSelector((state) => state.fmeas.formIdx);
    const dispatch = useDispatch();
    const fields = [
        {
            name: "step",
            value: step,
            onChange: handleStepChange
        },
        {
            name: "failure-mode",
            value: failureMode,
            onChange: handleFailureModeChange
        },
        {
            name: "failure-effects",
            value: failureEffects,
            onChange: handleFailureEffectsChange
        },
        {
            name: "severity",
            value: severity,
            onChange: handleSeverityChange

        },
        {
            name: "causes",
            value: causes,
            onChange: handleCausesChange
        },
        {
            name: "occurence",
            value: occurence,
            onChange: handleOccurenceChange
        },
        {
            name: "controls",
            value: controls,
            onChange: handleControlsChange
        },
        {
            name: "detection",
            value: detection,
            onChange: handleDetectionChange
        },
        {
            name: "recommended-action",
            value: recommendedAction,
            onChange: handleRecommendedActionChange
        },
        {
            name: "responsibility",
            value: responsibility,
            onChange: handleResponsibilityChange
        },
        {
            name: "actions-taken",
            value: actionsTaken,
            onChange: handleActionsTakenChange
        },
        {
            name: "updated-severity",
            value: updatedSeverity,
            onChange: handleUpdatedSeverityChange
        },
        {
            name: "updated-occurence",
            value: updatedOccurence,
            onChange: handleUpdatedOccurenceChange
        },
        {
            name: "updated-detectance",
            value: updatedDetectance,
            onChange: handleUpdatedDetectanceChange
        }
    ]


    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(submitNewFMEAForm({orgId: "656646641372dda7d05850ef", newForm: {
            step,
            failureMode,
            failureEffects,
            severity,
            causes,
            occurence,
            controls,
            detection,
            recommendedAction,
            responsibility,
            actionsTaken,
            updatedSeverity,
            updatedOccurence,
            updatedDetectance
        }}));
        dispatch(updateFormIdx(-1 * formIdx));
        props.toggle();
        clearStep();
        clearFailureMode();
        clearFailureEffects();
        clearSeverity();
        clearCauses();
        clearOccurence();
        clearControls();
        clearDetection();
        clearRecommendedAction();
        clearResponsibility();
        clearActionsTaken();
        clearUpdatedSeverity();
        clearUpdatedOccurence();
        clearUpdatedDetectance();
    }
    
    return (
        <div className="FMEA">
            <form>
                <label htmlFor={fields[formIdx].name}>{fields[formIdx].name}</label>
                <input type="text" name={fields[formIdx].name} id={fields[formIdx].name} value={fields[formIdx].value} onChange={fields[formIdx].onChange}/>
                {formIdx < fields.length - 1 && <button type="button" onClick={() => dispatch(updateFormIdx(1))}>Next</button>}
                {formIdx > 0 && <button type="button" onClick={() => dispatch(updateFormIdx(-1))}>Previous</button>}
                {formIdx === fields.length - 1 && <button type="button" onClick={handleSubmit}>Finish</button>}
            </form>
        </div>
    );
}