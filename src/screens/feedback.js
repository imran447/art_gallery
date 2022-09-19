import React, { useState } from "react";
import { ScrollView } from "react-native";
import CustomButton from "../shared/components/customButton";
import Header from "../shared/components/header";
import TextInputField from "../shared/components/textInputField";

const Feedback = ({ navigation }) => {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubjectError, setIsSubjectError] = useState(false);
    const [isMessageError, setIsMessageError] = useState(false);


    const checkValidation = () => {
        let _subjectError = subject ? false : true;
        let _messageError = message ? false : true;
        setIsMessageError(_messageError);
        setIsSubjectError(_subjectError);
        return (!_subjectError && !_messageError)
    }

    const handleSubmit = () => {
        if (checkValidation())  {
            console.log("asdfsdf")
        }
    }
    return (
        <>
            <Header title={"Feedback"} hasBack onPress={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <TextInputField
                    IsError={isSubjectError}
                    placeholder={"Subject"}
                    OnChangeText={(value) => {
                        setSubject(value);
                    }}
                />
                <TextInputField
                    IsError={isMessageError}
                    Multiline={true}
                    numberOfLines={10}
                    placeholder={"Type a feedback"}
                    OnChangeText={(value) => {
                        setMessage(value);
                    }}
                />
                <CustomButton
                    Title="Send"
                    onPress={handleSubmit}
                    style={{ marginTop: 20 }}
                />
            </ScrollView>
        </>
    )
}
export default Feedback;