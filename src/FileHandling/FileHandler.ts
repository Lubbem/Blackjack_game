import fs from "fs";
import { fileTypes } from "./FileTypes";

export interface DataReader {
    Read(fileName: string): void,
    data: string[][];
}

export class FileHandler {

    data: string[][] = [];
    dataReadSuccess: boolean = false;

    constructor(public filename: string, public dataReader: DataReader) { }

    //Check whether the file exists
    private fileExist(): boolean {
        return fs.existsSync(this.filename);
    } //end of fileExist

    //Check whether the file is correct format
    private fileTypeCheck(): boolean {
        const extension = this.filename.split(".");
        let correctFileType = false;

        for (let i = 0; i < fileTypes.length; i++) {
            if (extension[1] === fileTypes[i]) {
                correctFileType = true;
            }
        } //end of for loop i in fileTypes
        return correctFileType;

    } //end of fileTypeCheck

    fileRead(): string[][] {
        this.dataReadSuccess = false;
        if (!this.fileExist()) {                //Does the file exist
            console.log(this.filename + " does not exist.");
            return [];
        } else if (!this.fileTypeCheck()) {     //Is the file in the correct format
            console.log(this.filename + " is not in the correct format.");
        }

        this.dataReader.Read(this.filename);
        this.data = this.dataReader.data;
        this.dataReadSuccess = true;
        console.log("Data read successfully from: " + this.filename);

        return this.data;
    } //end of fileRead

}//end of FileHandler
