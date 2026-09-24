'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Select } from '@base-ui/react/select';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { contact, contactFormId } from '@/data/contact';
import { contactFormId } from '@/data/contact';
const HELP_WITH_OPTIONS = [
  'customerCare',
  'outboundCalls',
  'salesSupport',
  'businessSupport',
  'multipleServices',
  'other',
] as const;

const CALL_VOLUME_OPTIONS = [
  'under1000',
  'from1000',
  'from5000',
  'from20000',
  'notSure',
] as const;

const selectTriggerClassName =
  'bg-blue/15 rounded-2xl px-4 py-2 w-full text-17 text-black/25 leading-[26px] flex items-center justify-between gap-2 text-left cursor-pointer outline-none border-0 font-inherit';

type FormValues = {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  helpWith: string;
  callVolume: string;
  tellUsMore: string;
  privacyConsent: boolean;
};

function FormSelect({
  id,
  value,
  onChange,
  onBlur,
  options,
  getLabel,
  'aria-invalid': ariaInvalid,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  options: readonly string[];
  getLabel: (value: string) => string;
  'aria-invalid'?: boolean;
}) {
  return (
    <Select.Root
      id={id}
      value={value || null}
      onValueChange={(next) => onChange(next ?? '')}
      onOpenChange={(open) => {
        if (!open) onBlur();
      }}
    >
      <Select.Trigger
        aria-invalid={ariaInvalid}
        className={selectTriggerClassName}
      >
        <Select.Value>{value ? getLabel(value) : null}</Select.Value>
        <Select.Icon className="flex shrink-0 transition-transform data-open:rotate-180">
          <Image src="/icons/caret-down.svg" alt="" width={16} height={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className="z-50 outline-none"
          alignItemWithTrigger={false}
          sideOffset={4}
        >
          <Select.Popup className="min-w-[var(--anchor-width)] rounded-2xl bg-white py-2 outline-none shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <Select.List>
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  label={getLabel(option)}
                  className="cursor-pointer px-4 py-2 text-17 leading-[26px] text-black/25 outline-none data-highlighted:bg-blue/15"
                >
                  {getLabel(option)}
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

export default function ContactStartConversation() {
  const t = useTranslations('ContactStartConversation');
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      helpWith: HELP_WITH_OPTIONS[0],
      callVolume: CALL_VOLUME_OPTIONS[0],
      privacyConsent: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  useEffect(() => {
    if (window.location.hash !== `#${contactFormId}`) {
      return;
    }

    document.getElementById(contactFormId)?.scrollIntoView();
  }, []);

  return (
    <section id={contactFormId} className="scroll-mt-8 py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1.067fr_1fr] gap-x-6 gap-y-15 items-start">
          <div>
            <Title variant="purple" className="mb-2">
              {t('title')}
            </Title>
            <Description size="17" className="mb-4">
              {t('description')}
            </Description>

            <Card className="bg-light-gray max-lg:p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                  <label
                    htmlFor="fullName"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('fullName')}
                  </label>
                  <input
                    id="fullName"
                    placeholder={t('fullNamePlaceholder')}
                    aria-invalid={Boolean(errors.fullName)}
                    {...register('fullName', {
                      required: t('fullNameError'),
                    })}
                    className="bg-blue/15 rounded-2xl px-4 py-2 w-full text-17 text-black/25 leading-[26px]"
                  />
                  {errors.fullName ? (
                    <p className="text-xs text-[#FF7D7D] leading-[1.5] mt-1">
                      {errors.fullName.message}
                    </p>
                  ) : null}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="companyName"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('companyName')}
                  </label>
                  <input
                    id="companyName"
                    placeholder={t('companyNamePlaceholder')}
                    aria-invalid={Boolean(errors.companyName)}
                    {...register('companyName', {
                      required: t('companyNameError'),
                    })}
                    className="bg-blue/15 rounded-2xl px-4 py-2 w-full text-17 text-black/25 leading-[26px]"
                  />
                  {errors.companyName ? (
                    <p className="text-xs text-[#FF7D7D] leading-[1.5] mt-1">
                      {errors.companyName.message}
                    </p>
                  ) : null}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="businessEmail"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('businessEmail')}
                  </label>
                  <input
                    id="businessEmail"
                    type="email"
                    placeholder={t('businessEmailPlaceholder')}
                    aria-invalid={Boolean(errors.businessEmail)}
                    {...register('businessEmail', {
                      required: t('businessEmailError'),
                    })}
                    className="bg-blue/15 rounded-2xl px-4 py-2 w-full text-17 text-black/25 leading-[26px]"
                  />
                  {errors.businessEmail ? (
                    <p className="text-xs text-[#FF7D7D] leading-[1.5] mt-1">
                      {errors.businessEmail.message}
                    </p>
                  ) : null}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('phoneNumber')}
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder={t('phoneNumberPlaceholder')}
                    aria-invalid={Boolean(errors.phoneNumber)}
                    {...register('phoneNumber')}
                    className="bg-blue/15 rounded-2xl px-4 py-2 w-full text-17 text-black/25 leading-[26px]"
                  />
                  {errors.phoneNumber ? (
                    <p className="text-xs text-[#FF7D7D] leading-[1.5] mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  ) : null}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="helpWith"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('helpWith')}
                  </label>
                  <Controller
                    name="helpWith"
                    control={control}
                    rules={{ required: t('helpWithError') }}
                    render={({ field }) => (
                      <FormSelect
                        id="helpWith"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={HELP_WITH_OPTIONS}
                        getLabel={(option) => t(`helpWithOptions.${option}`)}
                        aria-invalid={Boolean(errors.helpWith)}
                      />
                    )}
                  />
                  {errors.helpWith ? (
                    <p className="text-xs text-[#FF7D7D] leading-[1.5] mt-1">
                      {errors.helpWith.message}
                    </p>
                  ) : null}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="callVolume"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('callVolume')}
                  </label>
                  <Controller
                    name="callVolume"
                    control={control}
                    render={({ field }) => (
                      <FormSelect
                        id="callVolume"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={CALL_VOLUME_OPTIONS}
                        getLabel={(option) => t(`callVolumeOptions.${option}`)}
                      />
                    )}
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="tellUsMore"
                    className="block mb-1 text-purple text-xl leading-[1.5]"
                  >
                    {t('tellUsMore')}
                  </label>
                  <textarea
                    id="tellUsMore"
                    placeholder={t('tellUsMorePlaceholder')}
                    {...register('tellUsMore')}
                    className="bg-blue/15 rounded-2xl px-4 py-2 w-full text-17 text-black/25 leading-[26px] resize-none min-h-35.5"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="privacyConsent"
                    className="flex items-start gap-4 cursor-pointer"
                  >
                    <span className="relative size-10 shrink-0">
                      <input
                        id="privacyConsent"
                        type="checkbox"
                        aria-invalid={Boolean(errors.privacyConsent)}
                        {...register('privacyConsent', {
                          required: t('privacyError'),
                        })}
                        className="peer appearance-none size-10 rounded-[4px] bg-blue/15 cursor-pointer"
                      />
                      <Image
                        src="/icons/check.svg"
                        alt="Icon"
                        width={32}
                        height={32}
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden peer-checked:block"
                      />
                    </span>
                    <span className="text-purple text-base leading-[20px]">
                      {t.rich('privacy', {
                        policy: (chunks) => (
                          <Link
                            href="/privacy-policy"
                            className="underline inline"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {chunks}
                          </Link>
                        ),
                      })}
                    </span>
                  </label>
                  {errors.privacyConsent ? (
                    <p className="text-xs text-[#FF7D7D] leading-[1.5] mt-1">
                      {errors.privacyConsent.message}
                    </p>
                  ) : null}
                </div>

                <div className="text-center">
                  <Button type="submit" className="md:min-w-70.5">
                    {t('submit')}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/*<div>*/}
          {/*  <Title variant="purple" className="mb-2">*/}
          {/*    {t('directTitle')}*/}
          {/*  </Title>*/}
          {/*  <Description size="17" className="mb-4">*/}
          {/*    {t('directDescription')}*/}
          {/*  </Description>*/}

          {/*  <Card className="bg-light-gray p-4">*/}
          {/*    <ul className="space-y-8">*/}
          {/*      <li className="space-y-1">*/}
          {/*        <Image src="/icons/mail.svg" alt="" width={24} height={24} />*/}
          {/*        <a*/}
          {/*          href={`mailto:${contact.email}`}*/}
          {/*          className="flex items-center gap-3 text-purple text-xl leading-[30px] hover:text-blue"*/}
          {/*        >*/}
          {/*          {contact.email}*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="space-y-1">*/}
          {/*        <Image*/}
          {/*          src="/icons/phone-call.svg"*/}
          {/*          alt=""*/}
          {/*          width={24}*/}
          {/*          height={24}*/}
          {/*        />*/}
          {/*        <a*/}
          {/*          href={`tel:${contact.phone}`}*/}
          {/*          className="flex items-center gap-3 text-purple text-xl leading-[30px] hover:text-blue"*/}
          {/*        >*/}
          {/*          {contact.phone}*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="text-purple text-xl leading-[30px] space-y-1">*/}
          {/*        <Image*/}
          {/*          src="/icons/building-complex.svg"*/}
          {/*          alt=""*/}
          {/*          width={24}*/}
          {/*          height={24}*/}
          {/*        />*/}
          {/*        <p>{contact.address}</p>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </Card>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
