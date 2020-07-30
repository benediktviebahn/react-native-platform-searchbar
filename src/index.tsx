import React from 'react';
import type { SearchBarProps } from './types';
import { Platform } from 'react-native';
import SearchBarIOS from './components/SearchBar/ios';
import SearchBarAndroid from './components/SearchBar/android';

type Props = SearchBarProps & {
    platform?: 'ios' | 'android' | 'default';
};

const SearchBar: React.FC<Props> = ({ platform = 'default', ...props }) => {
    if (platform === 'default') {
        return (
            Platform.select({
                ios: <SearchBarIOS {...props} />,
                android: <SearchBarAndroid {...props} />,
            }) || null
        );
    }

    return platform === 'ios' ? (
        <SearchBarIOS {...props} />
    ) : (
        <SearchBarAndroid {...props} />
    );
};

export default SearchBar;