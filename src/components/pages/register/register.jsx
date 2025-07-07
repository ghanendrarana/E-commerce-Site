
import Header from "../../layout/header/header";

export default function Register () {

    return (
        <div>
            <Header />
            <div>
                <div>Create Account</div>
                <form>
                    <div>First Name</div>
                    <input type="text" placeholder="Enter your first name" />
                    <div>Last Name</div>
                    <input type="text" placeholder="Enter your last name" />
                    <div>Email</div>
                    <input type="email" placeholder="Enter your email" />
                    <div>Password</div>
                    <input type="password" placeholder="Enter your password" />
                    <div>Confirm Password</div>
                    <input type="password" placeholder="Confirm your password" />
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}