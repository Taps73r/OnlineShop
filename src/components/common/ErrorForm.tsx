import React from "react";

import "./ErrorForm.scss";

interface ErrorFormProps {
    message?: string;
}

export function ErrorForm({ message }: ErrorFormProps): JSX.Element {
    return <div className="error-form">*{message}</div>;
}
