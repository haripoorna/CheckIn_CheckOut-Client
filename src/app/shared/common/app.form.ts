export class AppFormGroup {
   static DATA_PATTERN:string = '[\\w\\d\\s.,&@:;!#-=]*';
   static DECIMAL_PATTERN: string = '(\\d+(\\.\\d{1,2})?)';
   static NUMBER_PATTERN: string = '[0-9]*';
   //static DATE_PATTERN: string = '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(T?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';
    static DATE_PATTERN: string = '[\\w\\d\\s.,&@:;!#-=]*';
}