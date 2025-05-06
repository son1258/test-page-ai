"use client"

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ItemsContact, ItemsKnowladge } from "@/shared/constants";
import "../../globals.css";
import HeadComponent from "@/components/header/HeadComponent";
import Footer from "@/components/footer/Footer";
import { useTranslations } from "next-intl";

export default function HomePage() {
    const swiperRef = useRef<any>(null);
    const translate = useTranslations();
    const [progress, setProgress] = useState(0);
    const [activeButton, setActiveButton] = useState<any>('contact');
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [slidesPerViewInterGrations, setSlidesPerViewInterGrations] = useState(4);
    const [clipPathValue, setClipPathValue] = useState('inset(0 round 66px)');

    const ItemsExperience = [
        { text: translate("booking"), icon: "/logos/doctor-booking.svg" },
    ];

    const ItemsImpactMetric = [
        {
            icon: "/logos/setting.svg",
            title: "68%",
            description: "Productivity Enhancements"
        },
        {
            icon: "/logos/time.svg",
            title: "80%",
            description: "Cost Savings"
        },
        {
            icon: "/logos/phone.svg",
            title: "60%",
            description: "Revenue Optimization"
        },
        {
            icon: "/logos/error.svg",
            title: "60%",
            description: "Risk Management"
        },
        {
            icon: "/logos/cancel-phone.svg",
            title: "70%",
            description: "Cash flow and liquidity Optimization"
        }
    ];

    const ItemsConnect = [
        {
            title: translate('how_it_works'),
            description: translate('schedule_a_demo')
        },
        {
            title: translate('need_help'),
            description: translate('contact_us')
        },
        {
            title: translate('try_it'),
            description: translate('start_your_free_trial')
        }
    ];

    const ItemsSwiper = [
        {
            id: 1,
            title: translate('provider_title_1'),
            description: translate('provider_des_1'),
            icon: "/logos/support.svg",
        },
        {
            id: 2,
            title: translate('provider_title_2'),
            description: translate('provider_des_2'),
            icon: "/logos/payment-support.svg",
        },
        {
            id: 3,
            title: translate('provider_title_3'),
            description: translate('provider_des_3'),
            icon: "/logos/real-time-ai-agent.svg",
        },
        {
            id: 4,
            title: translate('provider_title_4'),
            description: translate('provider_des_4'),
            icon: "/logos/circle-phone.svg",
        },
        {
            id: 5,
            title: translate('provider_title_5'),
            description: translate('provider_des_5'),
            icon: "/logos/door-dfd.svg",
        },
    ];

    const ItemsPayer = [
        {
            title: translate('payer_title_1'),
            description: translate('payer_des_1'),
            icon: "/logos/billing-payment.svg"
        },
        {
            title: translate('payer_title_2'),
            description: translate('payer_des_2'),
            icon: "/logos/benefit.svg"
        },
        {
            title: translate('payer_title_3'),
            description: translate('payer_des_3'),
            icon: "/logos/eligibility.svg"
        },
        {
            title: translate('payer_title_4'),
            description: translate('payer_des_4'),
            icon: "/logos/copilot.svg"
        }
    ];

    const ItemsFloatbot = [
        {
            title: translate('floatbot_title_1'),
            description: translate('floatbot_des_1'),
            icon: "/logos/customizable.svg"
        },
        {
            title: translate('floatbot_title_2'),
            description: translate('floatbot_des_2'),
            icon: "/logos/omnichannel.svg"
        },
        {
            title: translate('floatbot_title_3'),
            description: translate('floatbot_des_3'),
            icon: "/logos/analytics.svg"
        },
        {
            title: translate('floatbot_title_4'),
            description: translate('floatbot_des_4'),
            icon: "/logos/compliance.svg"
        },
        {
            title: translate('floatbot_title_5'),
            description: translate('floatbot_des_5'),
            icon: "/logos/68.svg"
        },
        {
            title: translate('floatbot_title_6'),
            description: translate('floatbot_des_6'),
            icon: "/logos/llms.svg"
        },
        {
            title: translate('floatbot_title_7'),
            description: translate('floatbot_des_7'),
            icon: "/logos/multi-model.svg"
        },
        {
            title: translate('floatbot_title_8'),
            description: translate('floatbot_des_8'),
            icon: "/logos/1-sec-latency.svg"
        },
        {
            title: translate('floatbot_title_9'),
            description: translate('floatbot_des_9'),
            icon: "/logos/61.svg"
        },
        {
            title: translate('floatbot_title_10'),
            description: translate('floatbot_des_10'),
            icon: "/logos/bot-interruption.svg"
        },
        {
            title: translate('floatbot_title_11'),
            description: translate('floatbot_des_11'),
            icon: "/logos/human-sound.svg"
        },
        {
            title: translate('floatbot_title_12'),
            description: translate('floatbot_des_12'),
            icon: "/logos/zero-hallucination.svg"
        },
        {
            title: translate('floatbot_title_13'),
            description: translate('floatbot_des_13'),
            icon: "/logos/multi-lingual.svg"
        },
        {
            title: translate('floatbot_title_14'),
            description: translate('floatbot_des_14'),
            icon: "/logos/360-agent-copilot.svg"
        },
        {
            title: translate('floatbot_title_15'),
            description: translate('floatbot_des_15'),
            icon: "/logos/fast-deployment.svg"
        },
    ];


    const handleIntergateChange = (buttonId: string) => {
        if (activeButton == buttonId) return;
        setActiveButton(buttonId)
    };

    const handleSlideChange = (swiper: any) => {
        const totalSlides = ItemsSwiper.length;
        const progress = ((swiper.realIndex + 1) / totalSlides) * 100;
        setProgress(progress);
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setSlidesPerView(1);
                setSlidesPerViewInterGrations(1);
                setClipPathValue('inset(0 round 24px)');
            } else if (width < 992) {
                setSlidesPerView(2);
            } else if (width < 1280) {
                setSlidesPerViewInterGrations(3);
            } else if (width < 1400) {
                setClipPathValue('inset(0 round 65px)');
            } else {
                setClipPathValue('inset(0 round 66px)');
                setSlidesPerView(3);
                setSlidesPerViewInterGrations(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full min-h-screen relative font-inter">
            <div>
                <div className="w-full h-[100vh] z-[-1] absolute bg-[linear-gradient(180deg,rgba(254,230,223,0.32)_0%,rgba(254,230,223,0)_104.24%),url(/logos/bg-img.svg)] bg-center bg-cover bg-no-repeat"></div>
                <div className="screen-1400:pt-[8%] pt-[7%] relative w-full flex items-center flex-col justify-center font-[400] leading-custom-21">
                    <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                        <div className="flex items-center justify-center w-full flex-col">
                            <div className="screen-1400:max-w-[91.66666667%] flex items-center justify-center">
                                <div className="px-3 flex items-center justify-center w-full flex-col">
                                    <div className="font-[400] not-italic inline-flex items-center text-[#f46177] mb-2 bg-white font-roboto tracking-custom-035 shadow-title-shadow border-[1px] border-[#fee6df]
                                    screen-1400:text-sm screen-992:text-xs text-custom-10 screen-1400:leading-custom-21 md:leading-custom-18 
                                    leading-custom-15 screen-1400:px-custom-14 screen-1400:py-custom-6 px-2 py-custom-5 rounded-[8px] uppercase">
                                        <img src="/logos/phone-top.svg" className="px-1" /><p>{translate('healthcare_center')}</p>
                                    </div>
                                    <h1 className="block font-feature screen-1400:text-custom-64 font-[700] mb-2 text-[#1a1a1a] text-center
                                        screen-1140:text-custom-50 screen-1140:leading-custom-64 screen-992:leading-custom-46 md:text-custom-45
                                        screen-992:tracking-[0.75px] text-custom-34 leading-[40px] tracking-normal">
                                        {translate('transform_core')} <span className="text-[#8012e4]">{translate('healthcare')}</span> {translate('operations_with_agentic_ai')}
                                    </h1>
                                </div>
                            </div>
                            <div className="px-3 mt-[-50px]">
                                <div className="max-w-[1071px]">
                                    <img src="/logos/logo-ai.png" className="h-[auto] w-full" />
                                </div>
                                <div className="text-center text-[#b34cef] font-[700] text-custom-22 leading-custom-33 md:text-custom-28 md:leading-custom-42
                                    screen-992:text-custom-32 px-3 py-custom-4.8 screen-992:leading-custom-48">{translate('name_ai_agent')}</div>
                                <div className="w-full font-inter flex items-center screen-600:flex-row flex-col justify-center flex-wrap my-custom-15 w-full gap-[10px] 
                                    screen-600:gap-4 text-base screen-600:text-2xl md:text-3xl screen-600:leading-[36.57px] leading-custom-22 text-center px-5 font-[700] text-white ">
                                    <div className="px-5 py-custom-3 bg-[#303145] rounded-[15px] w-full sm:w-[auto]">{translate('insurer')}</div>
                                    <div className="px-5 py-custom-3 bg-[#303145] rounded-[15px] w-full sm:w-[auto]">{translate('user_buyer')}</div>
                                    <div className="px-5 py-custom-3 bg-[#303145] rounded-[15px] w-full sm:w-[auto]">{translate('agent')}</div>
                                </div>
                            </div>
                            <div className="mt-[7%] flex items-center justify-center w-2/3">
                                <div className="px-3 relative after:absolute after:left-1/2 after:top-0 after:translate-x-[-50%] w-full h-5 overflow-hidden after:block 
                                    after:mt-[-25px] after:w-[68%] after:h-custom-22 after:shadow-break-shadow after:rounded-[125px/12px]">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="screen-992:mt-[7%] mt-[14%] md:mt-[12%] w-full flex flex-col items-center justify-center">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                            <div className="w-full flex items-center justify-center flex-col font-inter">
                                <div className="text-center font-[700]">
                                    <h2 className="mb-6 tracking-normal screen-992:tracking-custom-075 font-feature screen-1400:text-5xl screen-1400:leading-custom-56 md:text-custom-40 text-3xl screen-992:leading-custom-52 leading-normal mb-6">{translate('experience_zone')}</h2>
                                </div>
                                <div className="block w-full flex items-center justify-center px-3">
                                    <div className="screen-1400:p-[2%] screen-992:p-[1.5%] p-[2.5%] bg-[#1a1a1a] w-full md:rounded-[69px] rounded-[24px]">
                                        <div className="p-custom-3 screen-992:rounded-[65px] md:block md:rounded-[68px] rounded-[20px] bg-[#2c2c2c]
                                            flex items-center justify-center flex-col relative overflow-hidden transition duration-custom-400" style={{ WebkitClipPath: clipPathValue }}>
                                            <div className="screen-1400:mr-custom-1 pt-4 pb-8 relative z-1 bg-[#1a1a1a] w-full h-full opacity-1 screen-992:rounded-[62px] md:rounded-[66px] rounded-[24px]">
                                                <div className="relative px-2 md:px-0">
                                                    <div className="flex items-center justify-center text-base">
                                                        <div className="min-w-40 bg-[#1a1a1a] relative before:absolute before:top-[30%] before:border-x-[4.5px] before:border-x-transparent before:border-b-[4.5px] before:right-4
                                                            after:absolute after:top-[45%] after:border-x-[4.5px] after:border-t-[4.5px] after:right-4 after:border-x-transparent">
                                                            <p className="w-[182px] pl-custom-56 pr-custom-64 py-2 rounded-[14px] border-[1px] border-[#caced1] text-white text-center mb-2 cursor-pointer leading-custom-24 tracking-normal">{translate('en')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row items-center justify-center w-full ">
                                                        <div className="screen-992:w-1/3 w-full flex flex-col py-2 md:pl-3 gap-2 leading-custom-21 text-sm mt-4">
                                                            {ItemsExperience.map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="overflow-hidden flex items-center justify-center flex-col border-[1px] border-[#655255] rounded-[16px] h-[105px] bg-[#1a1a1a]"
                                                                >
                                                                    <img src={item.icon} alt={item.text} />
                                                                    <p className="text-white/50 min-h-[45px] flex items-center justify-center px-1 text-center">{item.text}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="flex items-center flex-col justify-center screen-992:w-1/3 w-full">
                                                            <div className="mt-12 w-[110px] h-[110px] rounded-[50%] bg-gradient-to-r from-[#f8f8f8] to-[#d0cfcc] flex items-center justify-center">
                                                                <img src="/logos/micro.svg" />
                                                            </div>
                                                            <div className="flex items-center justify-center w-full text-center">
                                                                <div className="screen-1400:w-[343px] mx-auto mb-4 mt-10 h-[60px] overflow-hidden">
                                                                    <p className="w-[96%] font-[400] md:text-xl text-base text-white p-[1%] md:leading-custom-30 leading-custom-24 font-inter">
                                                                        {translate('tap_mic')}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center flex-col md:w-1/3 w-full text-base">
                                                            <p className="font-[500] px-4 text-white text-center mb-4 text-xs md:text-base leading-custom-18 md:leading-custom-24">
                                                                {translate('try_gen_ai')}
                                                            </p>
                                                            <div className="cursor-pointer text-[#f46177] py-3 px-12 bg-white rounded-[14px]">
                                                                +91796-953-1108
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center font-[600] leading-custom-21 text-sm py-4">
                                                        <p className="px-16 md:px-6 py-custom-15 rounded-[14px] border-[1px] border-white text-[#1a1a1a] text-center bg-white">
                                                            {translate('explore')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-gradient z-[-10]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="screen-992:mt-[7%] mt-[14%] md:mt-[12%] w-full flex flex-col items-center justify-center">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-3">
                            <div className="flex items-center justify-center leading-custom-21 flex-col gap-2">
                                <div className="font-feature font-[700] screen-1400:leading-custom-56 md:leading-custom-52 leading-custom-38
                                     screen-1400:text-custom-48 md:text-custom-40 text-custom-30 text-center px-3 screen-992:w-2/3">
                                    <p>{translate('empower')}</p>
                                    <p>{translate('insai_user')}</p>
                                </div>
                                <img src="/logos/logo-bot-insai.jpg" alt="logo bot INSAI" />
                            </div>
                        </div>
                    </div>

                    <div className="screen-992:mt-[7%] mt-[14%] md:mt-[12%] w-full flex flex-col items-center justify-center">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-3">
                            <div className="bg-[url(/logos/roi-bg.png)] bg-no-repeat bg-cover bg-size[100%] p-16 md:rounded-[64px] rounded-[55px]">
                                <HeadComponent icon={"/logos/impact.svg"} title={translate('impact_metric')} description={translate('des_mestric')} />
                                <div className="hidden screen-992:grid grid-cols-3 gap-4 text-sm">
                                    <div className="w-1/3 w-full grid grid-rows-2 gap-6">
                                        <div className="p-12 w-full rounded-3xl border-[#f46177] bg-white shadow-item-shadow">
                                            <div className="w-full">
                                                <img src="/logos/setting.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-custom-32 leading-custom-38">68%</p>
                                                <p className="w-[75%] text-[#6c7278]">{translate('benefit_productivity')}</p>
                                            </div>
                                        </div>
                                        <div className="p-12 w-full rounded-3xl border-[#f46177] bg-white shadow-item-shadow">
                                            <div className="w-full">
                                                <img src="/logos/time.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-custom-32 leading-custom-38">80%</p>
                                                <p className="w-[75%] text-[#6c7278]">{translate('benefit_cost')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 w-full grid grid-rows-2 gap-6">
                                        <div className="p-12 w-full rounded-3xl border-[#f46177] bg-white shadow-item-shadow">
                                            <div className="w-full">
                                                <img src="/logos/phone.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-custom-32 leading-custom-38">60%</p>
                                                <p className="w-[75%] text-[#6c7278]">{translate('benefit_revenue')}</p>
                                            </div>
                                        </div>
                                        <div className="w-full relative">
                                            <img src="/logos/row-above.svg" className="absolute top-[1%] left-[50%]" />
                                            <div className="absolute w-[70%] screen-1200:w-full h-auto">
                                                <img src="/logos/roi-image.svg" alt="icon setting" className="mt-10 ml-[21%] screen-1200:ml-[14%] screen-1400:ml-[20%]" />
                                            </div>
                                            <img src="/logos/row.svg" className="absolute left-[5%] screen-1200:top-[55%] top-[45%]" />
                                            <img src="/logos/row.svg" className="absolute right-[5%] screen-1200:top-[55%] top-[45%]" />
                                        </div>
                                    </div>
                                    <div className="w-1/3 w-full grid grid-rows-2 gap-6">
                                        <div className="p-12 w-full rounded-3xl border-[#f46177] bg-white shadow-item-shadow">
                                            <div className="w-full">
                                                <img src="/logos/error.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-custom-32 leading-custom-38">60%</p>
                                                <p className="w-[75%] text-[#6c7278]">{translate('benefit_risk')}</p>
                                            </div>
                                        </div>
                                        <div className="p-12 w-full rounded-3xl border-[#f46177] bg-white shadow-item-shadow">
                                            <div className="w-full">
                                                <img src="/logos/cancel-phone.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-custom-32 leading-custom-38">70%</p>
                                                <p className="w-[75%] text-[#6c7278]">{translate('benefit_cash')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="screen-992:hidden flex flex-col gap-4 mt-8">
                                    {ItemsImpactMetric.map((item, index) => (
                                        <div key={index} className="p-4 w-full rounded-3xl border-[#f46177] bg-white shadow-item-shadow">
                                            <div className="w-full flex items-center justify-center flex-col text-center">
                                                <img src={item.icon} alt={`${item.title} icon`} />
                                                <p className="font-[700] text-custom-32 leading-custom-38">{item.title}</p>
                                                <p className="w-[80%] text-[#6c7278] text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-3">
                            <HeadComponent icon={"/logos/provider.svg"} title={translate('provider')} description={translate('des_provider')} />
                            <div className="w-full flex items-center flex-row justify-center px-3">
                                <div className="w-full border-[1px] border-[#e4e7ec] rounded-[32px] bg-[#F8F9FC]">
                                    <div className="screen-1400:p-10 p-6 w-full">
                                        <div className="relative w-full">
                                            <Swiper
                                                slidesPerView={slidesPerView}
                                                spaceBetween={16}
                                                loop={true}
                                                freeMode={false}
                                                mousewheel={true}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                                modules={[Autoplay, Navigation]}
                                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                onSlideChange={handleSlideChange}
                                                className="w-full"
                                            >
                                                {ItemsSwiper.map((item) => (
                                                    <SwiperSlide key={item.title}>
                                                        <div className="w-full h-[458px] border-[1px] border-[#e4e7ec] rounded-[32px] bg-white screen-1400:p-custom-30 p-5">
                                                            <img src={item.icon} alt={item.title} className="w-[73px] h-[74px] mb-4" />
                                                            <p className="text-custom-22 font-feature font-[600] leading-custom-26 mb-4">
                                                                {item.title}
                                                            </p>
                                                            <p className="text-base font-[400] leading-custom-27 screen-1400:leading-custom-24 text-[#6c7278]">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className="w-full h-[2px] bg-gray-300 mt-4">
                                                <div
                                                    className="h-full bg-gray-600 transition-all duration-500 ease-linear"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                            <HeadComponent icon={"/logos/payer.svg"} title={translate('payer')} description={translate('des_payer')} />
                            <div className="flex item-center flex-col w-full">
                                <div className="px-1 w-full flex items-center flex-col justify-center">
                                    <div className="w-full">
                                        <div className="md:grid md:grid-cols-4 flex flex-col gap-6">
                                            {ItemsPayer.map((payer) => (
                                                <div className="w-full text-base flex flex-col items-center" key={payer.title}>
                                                    <div className="p-6">
                                                        <img src={payer.icon} alt={`${payer.title} icon`} />
                                                        <p className="font-feature font-[700] leading-[19.2px] tracking-custom-0.75 my-4">{payer.title}</p>
                                                        <p className="leading-custom-24 mb-4 text-[#6c7278]">{payer.description}</p>
                                                    </div>
                                                    <div className="block md:hidden mt-[7%] flex items-center justify-center w-2/3">
                                                        <div className="px-3 relative after:absolute after:left-1/2 after:top-0 after:translate-x-[-50%] w-full h-5 overflow-hidden after:block 
                                                            after:mt-[-25px] after:w-[68%] after:h-custom-22 after:shadow-break-shadow after:rounded-[125px/12px]">
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-3">
                            <HeadComponent icon={"/logos/floatbox.svg"} title={translate('choose_ai')} description={translate('fit_for_ins')} />
                            <div className="w-full">
                                <div className="screen-576:grid screen-992:grid-cols-4 screen-576:grid-cols-2 gap-4 flex flex-col w-full">
                                    {ItemsFloatbot.map((floatbot) => (
                                        <div key={floatbot.title} className="px-2">
                                            <div className="flex items-center gap-2">
                                                <img src={floatbot.icon} alt={`${floatbot.title} icon`} />
                                                <p className="font-feature font-[600] md:text-xl text-base leading-custom-24 mb-2">{floatbot.title}</p>
                                            </div>
                                            <p className="text-sm mb-4 text-[#6c7278]">{floatbot.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center px-2 flex-col">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-3">
                            <div className="w-full rounded-[64px] bg-[url(/logos/integration-bg.png)] bg-no-repeat bg-cover bg-size-[100%] text-sm md:px-custom-52 md:py-custom-26 py-2">
                                <HeadComponent icon={"/logos/pre-intergration.svg"} title={translate('pre_intergration')} description={translate('des_pre_intergration')} />
                                <div className="mt-[3%] w-full flex items-center justify-center flex-col">
                                    <div className="md:w-[55%] screen-992:w-[45%] screen-1120:w-[35%] w-2/3 text-custom-13 screen-1400:text-sm">
                                        <div className="w-full md:flex-row flex-col flex items-center justify-between px-3 py-custom-5 rounded-[16px] shadow bg-[#ffeee9] font-[600]">
                                            <button
                                                onClick={() => handleIntergateChange('contact')}
                                                className={`${activeButton === 'contact' ? 'bg-white rounded-[12px] shadow-item-shadow' : 'text-[#6c7278]'} h-10 px-custom-25`}>
                                                {translate('contact_center')}
                                            </button>
                                            <button
                                                onClick={() => handleIntergateChange('knowledge')}
                                                className={`${activeButton === 'knowledge' ? 'bg-white rounded-[12px] shadow-item-shadow' : 'text-[#6c7278]'} h-10 px-custom-25`}>
                                                {translate('knowledge_base')}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-[2%] w-full">
                                        <div>
                                            <div className="pt-custom-31 px-10 md:px-0">
                                                {activeButton == 'contact' ? (
                                                    <Swiper
                                                        slidesPerView={slidesPerViewInterGrations}
                                                        spaceBetween={16}
                                                        loop={true}
                                                        freeMode={false}
                                                        mousewheel={true}
                                                        autoplay={{
                                                            delay: 3000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        modules={[Autoplay, Navigation]}
                                                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                        className="w-full"
                                                    >
                                                        {ItemsContact.map((item) => (
                                                            <SwiperSlide key={item.id}>
                                                                <div className="w-full mt-12 mb-custom-56 md:mt-custom-30 md:px-4 h-[136px] border-[1px] border-[#e4e7ec] rounded-[32px] bg-[#f8f9fc]  flex items-center justify-center">
                                                                    <img src={item.icon} alt={item.icon} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                ) : (
                                                    <Swiper
                                                        slidesPerView={slidesPerViewInterGrations}
                                                        spaceBetween={16}
                                                        loop={true}
                                                        freeMode={false}
                                                        mousewheel={true}
                                                        autoplay={{
                                                            delay: 3000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        modules={[Autoplay, Navigation]}
                                                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                        className="w-full"
                                                    >
                                                        {ItemsKnowladge.map((item) => (
                                                            <SwiperSlide key={item.id}>
                                                                <div className="w-full mt-12 mb-custom-56 md:mt-0 md:mb-0 h-[136px] border-[1px] border-[#e4e7ec] rounded-[32px] bg-[#f8f9fc]  flex items-center justify-center">
                                                                    <img src={item.icon} alt={item.icon} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                        <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-3">
                            <div className="flex items-center justify-center flex-col">
                                <HeadComponent icon={"/logos/connect.svg"} title={translate('connect')} description={translate('insurance')} />
                                <div className="px-3 w-full mt-6">
                                    <div className="flex lg:flex-row flex-col items-center justify-between w-full">
                                        {ItemsConnect.map((item) => (
                                            <div className="flex flex-col text-center" key={item.title}>
                                                <p className="text-[#6c7278] mb-2 md:text-lg text-sm">{item.title}</p>
                                                <p className="font-feature font-[700] screen-1140:text-custom-40 md:text-custom-32 text-custom-26 leading-custom-56 tracking-custom-0.75 text-[#1a1a1a] underline underline-offset-8 cursor-pointer">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-[7%] flex items-center justify-center w-2/3">
                                    <div className="px-3 relative after:absolute after:left-1/2 after:top-0 after:translate-x-[-50%] w-full h-5 overflow-hidden after:block 
                                    after:mt-[-25px] after:w-[68%] after:h-custom-22 after:shadow-break-shadow after:rounded-[125px/12px]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}