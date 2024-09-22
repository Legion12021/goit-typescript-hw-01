let mixedType: string | number;
mixedType = "hello"; // OK
mixedType = 12; // OK


type EnableOrDisable = "enable" | "disable";
let literal: EnableOrDisable;
literal = "enable"; // OK
literal = "disable"; /