"use client";

import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import countries, { phoneCodeOptions } from "@/utils/countries";

export const ContactFormAndImage01 = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="bg-primary py-16 md:pt-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div className="flex w-full flex-col gap-12 md:w-120 md:justify-self-center lg:py-11">
                        <div className="flex flex-col">
                            <h2 className="text-display-md font-semibold text-primary">Contact us</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our friendly team would love to hear from you.</p>
                        </div>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex flex-col gap-8"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-x-8 gap-y-6 md:flex-row">
                                    <Input isRequired size="md" name="firstName" label="First name" placeholder="First name" wrapperClassName="flex-1" />
                                    <Input isRequired size="md" name="lastName" label="Last name" placeholder="Last name" wrapperClassName="flex-1" />
                                </div>
                                <Input isRequired size="md" name="email" label="Email" type="email" placeholder="you@company.com" />
                                <InputGroup
                                    size="md"
                                    name="phone"
                                    label="Phone number"
                                    leadingAddon={
                                        <NativeSelect
                                            aria-label="Country code"
                                            value={selectedCountryPhone}
                                            onChange={(value) => setSelectedCountryPhone(value.currentTarget.value)}
                                            options={phoneCodeOptions.map((item) => ({
                                                label: item.label as string,
                                                value: item.id as string,
                                            }))}
                                        />
                                    }
                                >
                                    <InputBase
                                        type="tel"
                                        placeholder={countries.find((country) => country.code === selectedCountryPhone)?.phoneMask?.replaceAll("#", "0")}
                                    />
                                </InputGroup>
                                <TextArea isRequired label="Message" placeholder="Leave us a message..." rows={4} />
                                <Checkbox
                                    name="privacy"
                                    size="md"
                                    hint={
                                        <>
                                            You agree to our friendly{" "}
                                            <a
                                                href="#"
                                                className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                privacy policy.
                                            </a>
                                        </>
                                    }
                                />
                            </div>

                            <Button type="submit" size="xl">
                                Send message
                            </Button>
                        </Form>
                    </div>

                    <div className="max-lg:hidden lg:h-200">
                        <img src="https://www.untitledui.com/marketing/smiling-girl-12.webp" className="size-full object-cover" alt="Smiling girl" />
                    </div>
                </div>
            </div>
        </section>
    );
};
