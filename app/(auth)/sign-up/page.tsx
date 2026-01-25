'use client'
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { SubmitHandler, useForm } from "react-hook-form"


const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology',
    },
    mode: 'onBlur'
},
    );

    const onSubmit= async(data:SignUpFormData) => {
        try {
            console.log(data);

        } catch (e) {
            console.error(e);

        }
    };

    return (
        <>
        <h1 className='form-title'>Sign Up & Personalize</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
            <InputField 
                name="fullName"
                label="Full Name"
                placeholder="Enter your full name"
                register={register}
                error={errors.fullName}
                validation={{ required: "Full name is required", minLength: 2 }}
            />
            <InputField 
                name="email"
                label="Email"
                placeholder="john@email.com"
                register={register}
                error={errors.email}
                validation={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }}
            />
            <CountrySelectField  
                name="country"
                label="Country"
                error={errors.country}
                control={control}
                required
            />
            <InputField 
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                register={register}
                error={errors.password}
                validation={{ required: "Password is required", minLength: 8 }}
            />
            <SelectField  
                name="investmentGoals"  
                label="Investment Goals"
                placeholder="Select your investment goals"
                error={errors.investmentGoals}
                options={INVESTMENT_GOALS}
                control={control}
                required
            />
            <SelectField  
                name="riskTolerance"  
                label="Risk Tolerance"
                placeholder="Select your risk tolerance"
                error={errors.riskTolerance}
                options={RISK_TOLERANCE_OPTIONS}
                control={control}
                required
            />
            <SelectField  
                name="preferredIndustry"  
                label="Preferred Industry"
                placeholder="Select your preferred industry"
                error={errors.preferredIndustry}
                options={PREFERRED_INDUSTRIES}
                control={control}
                required
            />
            <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <FooterLink text="Already have an account?" linkText="Log In" href="/sign-in" />
        </form>
        </>
    )
}

export default SignUp