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

export const ContactFormAndImage02 = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="grid grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="relative max-lg:hidden">
                <img
                    src="https://www.untitledui.com/marketing/split-image-01.webp"
                    className="max-size-full absolute inset-0 h-full object-cover"
                    alt="Split image"
                />
            </div>
            <div className="w-full px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto w-full md:max-w-120">
                    <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Let's level up your brand, together</h2>
                    <p className="mt-4 text-lg whitespace-pre-line text-tertiary md:mt-6 md:text-xl">
                        You can reach us anytime via{" "}
                        <Button color="link-color" size="xl" href="mailto:hi@untitledui.com" className="text-lg font-medium md:text-xl">
                            hi@untitledui.com
                        </Button>
                    </p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-12 flex flex-col gap-8"
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
                            <TextArea isRequired label="Message" placeholder="Leave us a message..." rows={5} />
                            <fieldset className="max-md:hidden">
                                <legend className="text-sm font-medium text-secondary">Services</legend>
                                <div className="mt-4 grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2">
                                    <Checkbox name="design" size="md" label="Website design" />
                                    <Checkbox name="content" size="md" label="Content creation" />
                                    <Checkbox name="ux" size="md" label="UX design" />
                                    <Checkbox name="consulting" size="md" label="Strategy & consulting" />
                                    <Checkbox name="research" size="md" label="User research" />
                                    <Checkbox name="other" size="md" label="Other" />
                                </div>
                            </fieldset>
                        </div>

                        <Checkbox
                            className="lg:hidden"
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

                        <Button type="submit" size="xl">
                            <span className="hidden lg:inline">Get started</span>
                            <span className="lg:hidden">Send message</span>
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};
