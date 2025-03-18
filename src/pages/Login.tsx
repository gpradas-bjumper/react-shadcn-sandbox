"use client"

import {
    useState
} from "react"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {PasswordInput} from "@/components/ui/password-input.tsx";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.tsx";

const formSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1)
});
const OTPformSchema = z.object({
    otp: z.string().min(6).max(6)
});
const recoveryFormSchema = z.object({
    recoveryEmail: z.string().email().min(1),
});


function Login() {

    const [activeForm, setActiveForm] = useState<'login' | 'recovery' | 'otp'>('login');

    const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }

    })

    function onSubmit(values: z.infer < typeof formSchema > ) {
        try {
            console.log(values);

            //Uncomment if your don't want OTP
            setActiveForm("otp")

        } catch (error) {
            console.error("Form submission error", error);
        }
    }


    const OTPForm = useForm < z.infer < typeof OTPformSchema >> ({
        resolver: zodResolver(OTPformSchema),
        defaultValues: {
            otp: ""
        }

    })

    function OTPOnSubmit(values: z.infer < typeof OTPformSchema > ) {
        try {
            console.log(values);
        } catch (error) {
            console.error("Form submission error", error);
        }
    }
    const recoveryForm = useForm < z.infer < typeof recoveryFormSchema >> ({
        resolver: zodResolver(recoveryFormSchema),
        defaultValues: {
            recoveryEmail: ""
        }

    })

    function recoveryFormOnSubmit(values: z.infer < typeof recoveryFormSchema > ) {
        try {
            console.log(values);
        } catch (error) {
            console.error("Form submission error", error);
        }
    }

    return (
        <>
        <Card className=" shadow-none w-100  absolute top-[50%] left-[50%] translate-[-50%]">
            <CardHeader>
                <CardTitle>
                    <div className="mt-xs flex justify-center">
                        <img
                            width="50%"
                            height="45"
                            src="/src/assets/svg/logoBjumperLogin.svg"
                            alt="logo"
                        />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                { activeForm === "login" ? (
                    <Form {...form} key="form-1">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto">

                            <p className="text-sm">Introduce your acccess credentials</p>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem className="mb-5">
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E-mail"

                                                type="email"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem className="mb-5">
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Button className="mb-2 w-full" type="submit">Submit</Button>
                            <div className="w-full flex justify-end">
                                <Button variant="ghost" onClick={() => setActiveForm('recovery')}>I forgot my
                                    password</Button>
                            </div>
                        </form>
                    </Form>
                    )
                    : activeForm === "otp" ?
                        (
                            <Form {...OTPForm} key="form-2">
                                <form onSubmit={OTPForm.handleSubmit(OTPOnSubmit)} className="space-y-8 max-w-3xl mx-auto">

                            <FormField
                                control={OTPForm.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="mb-5">One-Time Password</FormLabel>
                                        <FormControl>
                                            <InputOTP containerClassName="flex justify-center mb-5" maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>Please enter the one-time password sent to your phone.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full mb-5" type="submit">Submit</Button>
                            <div className="w-full flex justify-end">
                                <Button variant="ghost" onClick={() => setActiveForm('login')}>Back</Button>
                            </div>
                        </form>
                    </Form>
                    )
                        : activeForm === "recovery" ?
                            (
                            <Form {...recoveryForm} key="form-3">
                                <form onSubmit={recoveryForm.handleSubmit(recoveryFormOnSubmit)} className="space-y-8 max-w-3xl mx-auto">

                                    <p className="text-sm mb-5">Input your e-mail to recover your password</p>
                                    <FormField
                                        control={recoveryForm.control}
                                        name="recoveryEmail"
                                        render={({field}) => (
                                            <FormItem className="mb-5">
                                                <FormControl>
                                                    <Input
                                                        placeholder="Recovery E-mail"
                                                        type="email"
                                                        {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <Button className="w-full mb-5" type="submit">Submit</Button>
                                    <div className="w-full flex justify-end">
                                        <Button variant="ghost" onClick={() => setActiveForm('login')}>Back</Button>
                                    </div>
                                </form>
                            </Form>
                            )
                            : (
                                <></>
                            )
                }

            </CardContent>
        </Card>
        </>
    )
}

export default Login
