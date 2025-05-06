import { useTranslations } from "next-intl";

export default function Footer() {
    const translate = useTranslations();
    const ItemsPlatform = [
        { id: 1, text: translate('voicebot') },
        { id: 2, text: translate('chatbot') },
        { id: 3, text: translate('real_time_agent_assist') },
        { id: 4, text: translate('live_chat') },
        { id: 5, text: translate('floatbot_uno') },
        { id: 6, text: translate('floatbot_neo') },
        { id: 7, text: translate('floatbot_armor') },
        { id: 8, text: translate('pricing') }
    ];

    const ItemsUsecases = [
        { id: 1, text: translate('increase_digital_sales') },
        { id: 2, text: translate('automate_claim_submissions') },
        { id: 3, text: translate('corporate_banking') },
        { id: 4, text: translate('retail_banking') },
        { id: 5, text: translate('automated_debt_collection') }
    ];

    const ItemsIndustries = [
        { id: 1, text: translate('insurance') },
        { id: 2, text: translate('collections') },
        { id: 3, text: translate('healthcare') },
        { id: 4, text: translate('banking') },
        { id: 5, text: translate('lending') },
        { id: 6, text: translate('bpo') }
    ];

    const ItemsCompany = [
        { id: 1, text: translate('contact') },
        { id: 2, text: translate('support') },
        { id: 3, text: translate('careers_hiring') },
        { id: 4, text: translate('partner') },
        { id: 5, text: translate('about') }
    ];

    const ItemsResources = [
        { id: 1, text: translate('press') },
        { id: 2, text: translate('blog') },
        { id: 3, text: translate('tech') },
        { id: 4, text: translate('case_studies') },
        { id: 5, text: translate('dev_center') },
        { id: 6, text: translate('academy') }
    ];

    const ItemsFooter = [
        {
            title: translate('platform'),
            items: ItemsPlatform
        },
        {
            title: translate('use_cases'),
            items: ItemsUsecases
        },
        {
            title: translate('industries'),
            items: ItemsIndustries,
        },
        {
            title: translate('company'),
            items: ItemsCompany
        },
        {
            title: translate('resources'),
            items: ItemsResources
        }
    ]

    return (
        <div>
            <div className="md:hidden mt-[14%] mb-4 w-full flex items-center justify-center">
                <div className="w-full px-4 screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="gap-2 grid grid-cols-2">
                            <div>
                                <p className="text-[11.2px] sm:text-base mb-2 font-[600] leading-[19.2px] tracking-custom-0.75 text-[#1a1a1a]">{translate('platform')}</p>
                                <ul className="leading-custom-24 text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-xs">
                                    {ItemsPlatform.map(item => (
                                        <li className="hover:text-[#b34cef] cursor-pointer" key={item.id}>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11.2px] sm:text-base mb-2 font-[600] leading-[19.2px] tracking-custom-0.75 text-[#1a1a1a]">{translate('use_cases')}</p>
                                <ul className="leading-custom-24 text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-xs">
                                    {ItemsUsecases.map(item => (
                                        <li className="hover:text-[#b34cef] cursor-pointer" key={item.id}>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-[14%]">
                            <div>
                                <p className="text-[11.2px] sm:text-base mb-2 font-[600] leading-[19.2px] tracking-custom-0.75 text-[#1a1a1a]">{translate('industries')}</p>
                                <ul className="leading-custom-24 text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-xs">
                                    {ItemsIndustries.map(item => (
                                        <li className="hover:text-[#b34cef] cursor-pointer" key={item.id}>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11.2px] sm:text-base mb-2 font-[600] leading-[19.2px] tracking-custom-0.75 text-[#1a1a1a]">{translate('company')}</p>
                                <ul className="leading-custom-24 text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-xs">
                                    {ItemsCompany.map(item => (
                                        <li className="hover:text-[#b34cef] cursor-pointer" key={item.id}>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11.2px] sm:text-base mb-2 font-[600] leading-[19.2px] tracking-custom-0.75 text-[#1a1a1a]">{translate('resources')}</p>
                                <ul className="leading-custom-24 text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-xs">
                                    {ItemsResources.map(item => (
                                        <li className="hover:text-[#b34cef] cursor-pointer" key={item.id}>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden mt-[7%] mb-4 w-full md:flex items-center justify-center">
                <div className="w-full px-4 screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                    <div className="flex justify-between gap-4 w-full">
                        {ItemsFooter.map((item, index) => (
                            <div key={index}>
                                <p className="md:text-base text-[11.2px] mb-2 font-[600] leading-[19.2px] tracking-custom-0.75 text-[#1a1a1a]">
                                    {item.title}
                                </p>
                                <ul className="leading-custom-24 text-[#6c7278] font-[500] flex gap-3 flex-col md:text-sm text-[10px]">
                                    {item.items.map((subItem) => (
                                        <li key={subItem.id} className="hover:text-[#b34cef] cursor-pointer">
                                            {subItem.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full flex justify-end screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] mb-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                        <div className="flex items-center md:justify-end justify-between gap-4 w-full px-2">
                            <img alt="iso" className="screen-425:w-20 screen-425:h-20 w-10 h-10" src="https://floatbot.ai/images/ISO.png?v=1" />
                            <img alt="hipaa" className="screen-425:w-20 screen-425:h-20 w-10 h-10" src="https://floatbot.ai/images/hipaa.png?v=1" />
                            <img alt="GDPR" className="screen-425:w-20 screen-425:h-20 w-10 h-10" src="https://floatbot.ai/images/GDPR.png" />
                            <img alt="SOC" className="screen-425:w-20 screen-425:h-20 w-10 h-10" src="https://floatbot.ai/images/SOC.png?v=1" />
                        </div>
                        <div className="flex items-center flex-col text-[#6c7278] font-[700] text-sm">
                            <p>+1 (650) 679-4167</p>
                            <a href="mailto:test@gmail.com">connect@floatbot.ai</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <hr className="h-[2px] mt-1 mb-1 screen-1400:w-[1320px] screen-1200:w-[1140px] screen-992:w-[960px] md:w-[720px] screen-576:w-[540px] w-[94%]" />
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full px-4 screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px] px-2 gap-4 flex items-center
                     md:justify-between flex-col md:flex-row h-[72px] text-xs text-[#6c7278] leading-custom-18 py-2">
                    <p>© 2025 Floatbot All Rights Reserved</p>
                    <div className="md:w-1/3 w-full flex items-center justify-between">
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Bug Bounty Program</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 w-full md:w-1/6">
                        <a rel="noreferrer" href="https://discord.com/" target="_blank" aria-label="discord">
                            <img src="/logos/discord.svg" alt="icon" />
                        </a>
                        <a rel="noreferrer" href="https://facebook.com/" target="_blank" aria-label="discord">
                            <img src="/logos/facebook.svg" alt="icon" />
                        </a>
                        <a rel="noreferrer" href="https://x.com/" target="_blank" aria-label="discord">
                            <img src="/logos/x.svg" alt="icon" />
                        </a>
                        <a rel="noreferrer" href="https://linkedin.com/" target="_blank" aria-label="discord">
                            <img src="/logos/linkedin.svg" alt="icon" />
                        </a>
                        <a rel="noreferrer" href="https://instagram.com/" target="_blank" aria-label="discord">
                            <img src="/logos/instagram.svg" alt="icon" />
                        </a>
                        <a rel="noreferrer" href="https://youtube.com/" target="_blank" aria-label="discord">
                            <img src="/logos/youtube.svg" alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}