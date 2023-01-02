import React from "react";

type propTypes = {
    buttonText: string;
    cssClasses?: string;
    isPrimary: boolean;
    marginBottom?: string;
    marginTop?: string;
    width?: string;
};

const CommonButton = ({
    buttonText,
    cssClasses,
    isPrimary,
    marginBottom,
    marginTop,
    // Width passed as props often fails to take effect, workaround being used for now
    width,
}: propTypes) => {
    return (
        <>
            {isPrimary ? (
                <button
                    className={`font-comfortaa primary-btn ${
                        cssClasses ? `${cssClasses}` : ""
                    }  ${marginBottom ? `mb-${marginBottom}` : ""} ${
                        marginTop ? `mt-${marginTop}` : ""
                    }
                    px-2 py-4 font-semibold text-mainColor/80  hover:text-dimmedSecondaryColor dark:hover:text-mainColor/70 bg-dimmedSecondaryColor/60 dark:bg-secondaryColor hover:bg-mainColor dark:hover:bg-secondaryColor/90 border-2 border-dimmedSecondaryColor/60 dark:border-secondaryColor dark:hover:border-secondaryColor/90 tracking-wide rounded-md shadow-lg`}
                >
                    {buttonText}
                </button>
            ) : (
                <button
                    className={`font-comfortaa font-bold hover:font-normal dark:font-normal secondary-btn ${
                        cssClasses ? `${cssClasses}` : ""
                    } ${marginBottom ? `mb-${marginBottom}` : ""} ${
                        marginTop ? `mt-${marginTop}` : ""
                    }
                    px-2 py-4 text-dimmedSecondaryColor dark:text-secondaryColor hover:bg-dimmedSecondaryColor/10 dark:hover:bg-secondaryColor/10 border-2 border-dimmedSecondaryColor dark:border-secondaryColor hover:border-dimmedSecondaryColor/5 dark:hover:border-secondaryColor/10 tracking-wide rounded-md shadow-lg `}
                >
                    {buttonText}
                </button>
            )}
        </>
    );
};

export default CommonButton;
