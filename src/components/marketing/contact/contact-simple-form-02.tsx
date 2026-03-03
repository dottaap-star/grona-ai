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

export const ContactSimpleForm02 = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    <div className="max-lg:hidden lg:h-192">
                        <img alt="Lana Steiner" src="https://www.untitledui.com/images/portraits/lana-steiner" className="size-full object-cover" />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full md:max-w-120">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Contact us</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our friendly team would love to hear from you.</p>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const data = Object.fromEntries(new FormData(e.currentTarget));
                                    console.log("Form data:", data);
                                }}
                                className="mt-12 flex flex-col gap-8"
                            >
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
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
                                    <TextArea isRequired name="message" label="Message" placeholder="Leave us a message..." rows={5} />
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
                    </div>
                </div>
            </div>
        </section>
    );
};
