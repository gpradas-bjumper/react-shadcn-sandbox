import {cleanup, fireEvent, prettyDOM, render, screen} from "@testing-library/react";
import { beforeEach, describe, it, expect } from "vitest";
import Login from "../../Login.tsx";

const username = "email@test.com"
const password = "password"
const OTP = "A5EH6O"

const loginFormMessage = "Introduce your access credentials"
const recoveryFormMessage = "Input your e-mail to recover your password"


async function submitLoginForm() {
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(emailInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    const loginForm = screen.getByTestId("login-form")
    fireEvent.submit(loginForm);
}

async function pressBackButton() {
    const backButton = screen.getByTestId('back-button');
    fireEvent.click(backButton, { target: { value: username } });
}

describe('Login Test:',() => {
    beforeEach(cleanup)

    it('should render component', () => {
        render(<Login />);
    });

    it('should render text', () => {
        render(<Login />);
        const text = screen.getByText(loginFormMessage);
        expect(text).toBeTruthy()
    });

    it('Should submit login and change to OTP form', async () => {
        render(<Login />);
        await submitLoginForm()
        //TODO: Assert API call
        expect(await screen.findByText('One-Time Password')).toBeTruthy()
    });

    it('In OTP form, should submit OTP', async () => {
        render(<Login />);
        await submitLoginForm()
        await screen.findByText('One-Time Password')

        const OTPInput = screen.getByTestId('otp-input');
        fireEvent.change(OTPInput, { target: { value: OTP } });
        const OTPForm = screen.getByTestId("otp-form")
        fireEvent.submit(OTPForm);
        //TODO: Assert API call
    });

    it('Should go back to login form from OTP form', async () => {
        render(<Login />);
        await submitLoginForm()
        await screen.findByText('One-Time Password')
        await pressBackButton()
        expect(await screen.findByText(loginFormMessage)).toBeTruthy()
    })

    it('Should change to Recovery form and submit email', async () => {
        render(<Login />);

        const forgotPasswordButton = screen.getByTestId('forgot-password-button');
        fireEvent.click(forgotPasswordButton, { target: { value: username } });
        expect(await screen.findByText(recoveryFormMessage)).toBeTruthy()

        const recoveryEmailInput = screen.getByTestId('recovery-email-input');
        fireEvent.change(recoveryEmailInput, { target: { value: username } });

        const recoveryForm = screen.getByTestId("recovery-form")
        fireEvent.submit(recoveryForm);
        //TODO: Assert API call

        await screen.findByTestId('recovery-email-input').then((element) => {
            expect(element.value).toEqual(username)
        })
    });

    it('Should go back to login form from recovery email', async () => {
        render(<Login />);const forgotPasswordButton = screen.getByTestId('forgot-password-button');
        fireEvent.click(forgotPasswordButton, { target: { value: username } });
        await screen.findByText(recoveryFormMessage)
        await pressBackButton()
        expect(await screen.findByText(loginFormMessage)).toBeTruthy()
    });
});
