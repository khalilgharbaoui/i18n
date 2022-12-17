import { DateTime, Dict, FormatNumberOptions, I18nOptions, MissingPlaceholderHandler, NullPlaceholderHandler, NumberToCurrencyOptions, NumberToDelimitedOptions, NumberToHumanOptions, NumberToHumanSizeOptions, NumberToPercentageOptions, NumberToRoundedOptions, Numeric, OnChangeHandler, Scope, StrftimeOptions, TimeAgoInWordsOptions, ToSentenceOptions, TranslateOptions } from "./typing";
import { Locales } from "./Locales";
import { Pluralization } from "./Pluralization";
import { MissingTranslation } from "./MissingTranslation";
import { interpolate } from "./helpers";
export declare class I18n {
    private _locale;
    private _defaultLocale;
    private _version;
    onChangeHandlers: OnChangeHandler[];
    defaultSeparator: string;
    enableFallback: boolean;
    locales: Locales;
    pluralization: Pluralization;
    missingBehavior: string;
    missingPlaceholder: MissingPlaceholderHandler;
    missingTranslationPrefix: string;
    nullPlaceholder: NullPlaceholderHandler;
    missingTranslation: MissingTranslation;
    placeholder: RegExp;
    translations: Dict;
    transformKey: (key: string) => string;
    interpolate: typeof interpolate;
    constructor(translations?: Dict, options?: Partial<I18nOptions>);
    store(translations: Dict): void;
    get locale(): string;
    set locale(newLocale: string);
    get defaultLocale(): string;
    set defaultLocale(newLocale: string);
    translate<T = string>(scope: Scope, options?: TranslateOptions): string | T;
    t: <T = string>(scope: Scope, options?: TranslateOptions) => string | T;
    pluralize(count: number, scope: Scope, options?: TranslateOptions): string;
    p: (count: number, scope: Scope, options?: TranslateOptions) => string;
    localize(type: string, value: string | number | Date | null | undefined, options?: Dict): string;
    l: (type: string, value: string | number | Date | null | undefined, options?: Dict) => string;
    toTime(scope: Scope, input: DateTime): string;
    numberToCurrency(input: Numeric, options?: Partial<NumberToCurrencyOptions>): string;
    numberToPercentage(input: Numeric, options?: Partial<NumberToPercentageOptions>): string;
    numberToHumanSize(input: Numeric, options?: Partial<NumberToHumanSizeOptions>): string;
    numberToHuman(input: Numeric, options?: Partial<NumberToHumanOptions>): string;
    numberToRounded(input: Numeric, options?: Partial<NumberToRoundedOptions>): string;
    numberToDelimited(input: Numeric, options?: Partial<NumberToDelimitedOptions>): string;
    withLocale(locale: string, callback: () => void): Promise<void>;
    strftime(date: Date, format: string, options?: Partial<StrftimeOptions>): string;
    update(path: string, override: any, options?: {
        strict: boolean;
    }): void;
    toSentence(items: any[], options?: Partial<ToSentenceOptions>): string;
    timeAgoInWords(fromTime: DateTime, toTime: DateTime, options?: TimeAgoInWordsOptions): string;
    distanceOfTimeInWords: (fromTime: DateTime, toTime: DateTime, options?: TimeAgoInWordsOptions) => string;
    onChange(callback: OnChangeHandler): () => void;
    get version(): number;
    formatNumber(input: Numeric, options: FormatNumberOptions): string;
    get(scope: Scope): any;
    private runCallbacks;
    private hasChanged;
}
