import fs from "fs";
import { DataReader } from "./FileHandler";

export class TXTFileReader implements DataReader {

    data: string[][] = [];

    constructor() { }

    Read(fileName: string): void {
        this.data = fs.readFileSync(fileName, { encoding: `utf-8` }).split(`\n`).map((row:string) :string[] => {
            return row.split(`,`);
        });
    } //end of Read()

} //end of CSVFileReader

