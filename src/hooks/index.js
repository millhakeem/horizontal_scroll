import { useLayoutEffect, useState } from 'react';

const queries = [
    '(min-width: 375px) and (max-width: 576px)',
    '(min-width: 577px) and (max-width: 992px)',
    '(min-width: 993px)',
];

export const useMatchMedia = () => {
    const mediaQueryLists = queries.map((query) => matchMedia(query));

    const getValues = mediaQueryLists.map((list) => list.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const changeHandler = () => setValues(getValues);

        mediaQueryLists.forEach((list) => list.addEventListener('change', changeHandler));

        return () =>
            mediaQueryLists.forEach((list) => list.removeEventListener('change', changeHandler));
    }, []);

    return ['isMobile', 'isTablet', 'isDesktop'].reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {},
    );
};
