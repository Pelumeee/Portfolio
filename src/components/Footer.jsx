const Footer = () => {
    return (
        <footer className="w-full bg-[#191C22] border-t border-[#323944] py-6 flex justify-center">
            <div className="lg:w-[70%] w-[90%] flex items-center justify-between">
                <div className="text-white">
                    <h1 className="font-semibold text-xl leading-8">Need a hand?</h1>
                    <div className="flex items-center gap-10">
                        <p className="font-light leading-7">Connect with me</p>
                        <div className="flex items-center gap-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.71169 3.97081C10.2302 3.65621 13.7698 3.65621 17.2883 3.97081L18.8057 4.10648C20.318 4.2417 21.54 5.39708 21.7596 6.89951C22.2541 10.2818 22.2541 13.7181 21.7596 17.1004C21.54 18.6029 20.318 19.7582 18.8057 19.8935L17.2883 20.0291C13.7698 20.3437 10.2302 20.3437 6.71169 20.0291L5.19435 19.8935C3.68198 19.7582 2.46003 18.6029 2.24038 17.1004C1.74588 13.7181 1.74588 10.2818 2.24038 6.89951C2.46003 5.39708 3.68198 4.2417 5.19435 4.10648L6.71169 3.97081ZM5.85557 6.83962C5.62315 6.71446 5.34204 6.72072 5.11541 6.85608C4.88878 6.99145 4.75 7.23599 4.75 7.49997V17C4.75 17.4142 5.08579 17.75 5.5 17.75C5.91421 17.75 6.25 17.4142 6.25 17V8.75563L11.6444 11.6603C11.8664 11.7799 12.1336 11.7799 12.3556 11.6603L17.75 8.75563V17C17.75 17.4142 18.0858 17.75 18.5 17.75C18.9142 17.75 19.25 17.4142 19.25 17V7.49997C19.25 7.23599 19.1112 6.99145 18.8846 6.85608C18.658 6.72072 18.3769 6.71446 18.1444 6.83962L12 10.1482L5.85557 6.83962Z"
                                    fill="white"
                                />
                            </svg>

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.92061 5.40766L7.92091 5.40832C8.05217 5.70083 8.26956 6.23024 8.44299 6.65259L8.44642 6.66095C8.51492 6.82774 8.57668 6.97816 8.62485 7.09391C8.64895 7.15184 8.66909 7.19974 8.68463 7.23596C8.69842 7.26807 8.70541 7.2835 8.70743 7.28795C8.70795 7.28911 8.70814 7.28952 8.70803 7.28931C8.80816 7.48871 8.91034 7.81184 8.73031 8.18078L7.92061 5.40766ZM7.92061 5.40766C7.79985 5.13959 7.64315 4.92805 7.42233 4.80005M7.92061 5.40766L7.42233 4.80005M11.2541 11.965C11.1998 11.938 11.1319 11.9087 11.0693 11.8817L11.0602 11.8778L11.0591 11.8773C10.7138 11.7283 10.0552 11.4441 9.29115 10.7639L9.29029 10.7631C8.64398 10.1904 8.18115 9.48318 8.00016 9.18277C8.08736 9.09454 8.18083 8.98156 8.25634 8.89029L8.26529 8.87946C8.31459 8.8199 8.35901 8.76627 8.40071 8.7184L8.40082 8.71827C8.55854 8.53714 8.63081 8.3871 8.69922 8.24506L8.70307 8.23707L8.70308 8.23706L8.73027 8.18086L7.95446 9.1104L7.92574 9.12705L7.92548 9.1272L7.52402 9.35991M11.2541 11.965L11.2449 11.9834C11.2494 11.9782 11.254 11.9728 11.2588 11.9673M11.2541 11.965C11.2541 11.965 11.254 11.9649 11.254 11.9649L11.2447 11.9836C11.2325 11.9978 11.2214 12.0108 11.2115 12.0223L11.2115 12.0223C11.1986 12.0372 11.199 12.0333 11.2135 12.0241C11.2135 12.0241 11.2135 12.0241 11.2135 12.0241C11.2141 12.0237 11.2146 12.0234 11.2152 12.023C11.2191 12.0207 11.2236 12.0181 11.2288 12.0155L11.2213 12.0307L11.2213 12.0308L11.0313 12.4126M11.2541 11.965C11.2557 11.9658 11.2572 11.9665 11.2588 11.9673M11.2588 11.9673C11.2994 11.9872 11.3217 11.9942 11.3297 11.9963C11.3308 11.9966 11.3313 11.9967 11.3313 11.9967C11.3313 11.9967 11.3172 11.9938 11.2933 11.9966C11.2792 11.9983 11.2644 12.0016 11.2498 12.0068C11.242 12.0095 11.235 12.0125 11.2289 12.0155L11.2213 12.0308L11.2213 12.0308L11.0313 12.4126M11.2588 11.9673C11.4478 11.747 11.8501 11.2736 11.991 11.0662M11.0313 12.4126C11.2886 12.5406 11.4419 12.5209 11.5903 12.3486C11.7388 12.1762 12.2334 11.6001 12.4066 11.3441M11.0313 12.4126C10.9895 12.3918 10.9325 12.3672 10.8622 12.3368C10.4998 12.1805 9.783 11.8712 8.95868 11.1373C8.19192 10.4579 7.6725 9.6159 7.52402 9.35991M11.991 11.0662C11.9902 11.0673 11.9895 11.0685 11.9887 11.0696L12.4066 11.3441M11.991 11.0662C11.9915 11.0654 11.992 11.0647 11.9925 11.064L12.4066 11.3441M11.991 11.0662C12.1287 10.858 12.3291 10.6876 12.6115 10.6544C12.8385 10.6276 13.0466 10.7053 13.1557 10.746L13.1601 10.7477L13.1602 10.7477C13.3063 10.8022 13.7096 10.9933 14.0753 11.1693C14.4554 11.3523 14.8383 11.5404 14.9691 11.6055L14.9692 11.6055C15.0163 11.629 15.0607 11.6502 15.1051 11.6715L14.8889 12.1224M12.4066 11.3441C12.5748 11.0881 12.7479 11.1275 12.9854 11.2161C13.2228 11.3047 14.4892 11.9251 14.7464 12.0531C14.7972 12.0784 14.8448 12.1012 14.8889 12.1224M7.52402 9.35991L7.92539 9.12711L7.92565 9.12696L7.95443 9.11027L8.02373 8.38994C7.97709 8.44348 7.9285 8.50219 7.88009 8.56069C7.79494 8.66358 7.71035 8.7658 7.63785 8.83802C7.50925 8.96593 7.37563 9.10391 7.52402 9.35991ZM14.8889 12.1224L15.1051 11.6715L15.1173 11.6774C15.1966 11.7154 15.292 11.7611 15.3734 11.8108C15.4584 11.8627 15.5836 11.9509 15.6711 12.0984M14.8889 12.1224C15.0678 12.2082 15.1895 12.2665 15.2411 12.3535M15.6711 12.0984L15.0927 13.5746C15.3054 12.9739 15.3054 12.4618 15.2411 12.3535M15.6711 12.0984C15.7507 12.2325 15.7671 12.387 15.7734 12.4663C15.7817 12.5722 15.7799 12.6933 15.7689 12.822C15.7468 13.0806 15.6847 13.4006 15.564 13.7415L15.5628 13.7449C15.396 14.2053 14.9607 14.5749 14.5893 14.8141C14.2115 15.0574 13.7511 15.2604 13.3983 15.2934M15.6711 12.0984C15.6711 12.0983 15.671 12.0983 15.671 12.0982L15.2411 12.3535M15.2411 12.3535L13.3983 15.2934M13.3983 15.2934C13.361 15.2969 13.3229 15.3015 13.2757 15.3072L13.2156 14.8108L13.2757 15.3072C13.0358 15.3362 12.7354 15.3714 12.2298 15.2866C11.7427 15.2049 11.0762 15.0143 10.0765 14.6208C7.50638 13.61 5.83485 11.139 5.50106 10.6455L5.49541 10.6371L5.90953 10.357L5.49541 10.6371L5.46472 10.5919L5.45637 10.5799C5.45587 10.5791 5.4555 10.5786 5.45525 10.5783L5.45099 10.5726L5.45096 10.5725L5.4509 10.5725C5.37177 10.4666 5.0893 10.0886 4.82604 9.56835C4.56615 9.05476 4.30328 8.36081 4.30328 7.62685C4.30328 6.24151 4.99961 5.50184 5.29371 5.19102L5.29371 5.19102C5.31108 5.17265 5.32492 5.15802 5.33705 5.14495C5.33705 5.14495 5.33705 5.14495 5.33705 5.14494L13.3983 15.2934ZM7.42233 4.80005C7.21138 4.67777 7.0044 4.67264 6.90973 4.67029M7.42233 4.80005L6.90973 4.67029M6.90973 4.67029C6.90662 4.67022 6.90364 4.67014 6.90077 4.67007L6.90973 4.67029ZM5.51637 18.1816C5.40486 18.1212 5.27456 18.1054 5.15187 18.1375L0.712248 19.2971L1.89682 14.9973C1.93242 14.868 1.91464 14.7299 1.84745 14.6139C1.01914 13.1837 0.5835 11.562 0.584092 9.91154V9.91136C0.584092 4.72456 4.82983 0.5 10.042 0.5C12.5762 0.5 14.9475 1.48164 16.7335 3.25928C18.5189 5.03641 19.5 7.40027 19.5 9.91626C19.5 15.103 15.2543 19.3275 10.042 19.3275H10.0371C8.45352 19.3275 6.89792 18.93 5.51637 18.1816Z"
                                    fill="white"
                                    stroke="white"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.75 1.875C3.57639 1.875 2.625 2.82639 2.625 4C2.625 5.1736 3.57639 6.125 4.75 6.125C5.9236 6.125 6.875 5.1736 6.875 4C6.875 2.82639 5.9236 1.875 4.75 1.875Z"
                                    fill="white"
                                />
                                <path
                                    d="M2.75 7.875C2.68096 7.875 2.625 7.93096 2.625 8V21C2.625 21.069 2.68096 21.125 2.75 21.125H6.75C6.81904 21.125 6.875 21.069 6.875 21V8C6.875 7.93096 6.81904 7.875 6.75 7.875H2.75Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.25 7.875C9.18096 7.875 9.125 7.93096 9.125 8V21C9.125 21.069 9.18096 21.125 9.25 21.125H13.25C13.319 21.125 13.375 21.069 13.375 21V14C13.375 13.5027 13.5725 13.0258 13.9242 12.6742C14.2758 12.3225 14.7527 12.125 15.25 12.125C15.7473 12.125 16.2242 12.3225 16.5758 12.6742C16.9275 13.0258 17.125 13.5027 17.125 14V21C17.125 21.069 17.181 21.125 17.25 21.125H21.25C21.319 21.125 21.375 21.069 21.375 21V12.3802C21.375 9.9535 19.2644 8.05499 16.8498 8.2745C16.1052 8.34219 15.369 8.52731 14.6815 8.82194L13.375 9.38186V8C13.375 7.93096 13.319 7.875 13.25 7.875H9.25Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <ul className="flex items-center gap-10 text-white">
                    <li>home</li>
                    <li>work</li>
                    <li>about</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
