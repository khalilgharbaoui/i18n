import BigNumber from "bignumber.js";
import { RoundingMode } from "../../index.d";
declare type RoundingOptions = {
    roundMode: RoundingMode;
    precision: number | null;
    significant: boolean;
};
export declare function roundNumber(numeric: BigNumber, options: RoundingOptions): string;
export {};
