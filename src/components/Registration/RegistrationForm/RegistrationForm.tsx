import "./RegistrationForm.scss";
import { useForm, SubmitHandler } from "react-hook-form";

export function RegistrationForm(): JSX.Element {
    return (
        <form>
            <h1>Registration</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
        </form>
    );
}
