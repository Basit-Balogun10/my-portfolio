import React from "react";

type propTypes = {
    buttonText: string;
    cssClasses?: string;
    href?: string;
    isDownloadButton?: boolean;
    isPrimary: boolean;
    marginBottom?: string;
    marginTop?: string;
    onclickHandler?: () => void;
    useAnchorTag?: boolean;
    width?: string;
};

const CommonButton = ({
    buttonText,
    cssClasses,
    href,
    isDownloadButton = false,
    isPrimary,
    marginBottom,
    marginTop,
    onclickHandler,
    useAnchorTag = false,
    // Width passed as props often fails to take effect, workaround being used for now
    width,
}: propTypes) => {
    return (
        <>
            {isPrimary ? (
                useAnchorTag ? (
                    <a
                        className={`primary-btn font-comfortaa text-center ${
                            cssClasses ? `${cssClasses}` : ""
                        }  ${marginBottom ? `mb-${marginBottom}` : ""} ${
                            marginTop ? `mt-${marginTop}` : ""
                        }
                    common-btn relative overflow-hidden px-2 py-4 font-semibold text-mainColor/80  hover:text-dimmedSecondaryColor dark:hover:text-mainColor/70 bg-dimmedSecondaryColor/60 dark:bg-secondaryColor border-2 border-dimmedSecondaryColor/60 dark:border-secondaryColor hover:border-none hover:before:w-full tracking-wide rounded-md shadow-lg before:absolute before:z-[-1] before:top-0 before:left-0 before:w-0 before:h-full before:bg-mainColor dark:before:bg-secondaryColor/90 before:border-mainColor dark:before:border-secondaryColor/90 `}
                        href={href}
                        download={isDownloadButton}
                    >
                        {buttonText}
                    </a>
                ) : (
                    <button
                        className={`primary-btn font-comfortaa ${
                            cssClasses ? `${cssClasses}` : ""
                        }  ${marginBottom ? `mb-${marginBottom}` : ""} ${
                            marginTop ? `mt-${marginTop}` : ""
                        }
                    common-btn relative overflow-hidden px-2 py-4 font-semibold text-mainColor/80  hover:text-dimmedSecondaryColor dark:hover:text-mainColor/70 bg-dimmedSecondaryColor/60 dark:bg-secondaryColor border-2 border-dimmedSecondaryColor/60 dark:border-secondaryColor hover:border-none hover:before:w-full tracking-wide rounded-md shadow-lg before:absolute before:z-[-1] before:top-0 before:left-0 before:w-0 before:h-full before:bg-mainColor dark:before:bg-secondaryColor/90 before:border-mainColor dark:before:border-secondaryColor/90`}
                        onClick={() => {
                            onclickHandler && onclickHandler();
                        }}
                    >
                        {buttonText}
                    </button>
                )
            ) : useAnchorTag ? (
                <a
                    className={`secondary-btn font-comfortaa font-bold hover:font-normal dark:font-normal text-center ${
                        cssClasses ? `${cssClasses}` : ""
                    } ${marginBottom ? `mb-${marginBottom}` : ""} ${
                        marginTop ? `mt-${marginTop}` : ""
                    }
                    common-btn relative overflow-hidden  px-2 py-4 text-dimmedSecondaryColor dark:text-secondaryColor  border-2 border-dimmedSecondaryColor dark:border-secondaryColor hover:border-none hover:before:w-full tracking-wide rounded-md shadow-lg before:absolute before:z-[-1] before:top-0 before:left-0 before:w-0 before:h-full before:bg-dimmedSecondaryColor/10 dark:before:bg-secondaryColor/10 before:border-dimmedSecondaryColor/5 dark:before:border-secondaryColor/10`}
                    href={href}
                    download={isDownloadButton}
                >
                    {buttonText}
                </a>
            ) : (
                <button
                    className={`secondary-btn font-comfortaa font-bold hover:font-normal dark:font-normal ${
                        cssClasses ? `${cssClasses}` : ""
                    } ${marginBottom ? `mb-${marginBottom}` : ""} ${
                        marginTop ? `mt-${marginTop}` : ""
                    }
                    common-btn relative overflow-hidden px-2 py-4 text-dimmedSecondaryColor dark:text-secondaryColor border-2 border-dimmedSecondaryColor dark:border-secondaryColor hover:border-none hover:before:w-full tracking-wide rounded-md shadow-lg before:absolute before:z-[-1] before:top-0 before:left-0 before:w-0 before:h-full before:bg-dimmedSecondaryColor/10 dark:before:bg-secondaryColor/10 before:border-dimmedSecondaryColor/5 dark:before:border-secondaryColor/10`}
                >
                    {buttonText}
                </button>
            )}
        </>
    );
};

export default CommonButton;
