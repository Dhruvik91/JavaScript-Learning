/* The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.  */


let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

/* Unless the precendence is defined, we cant use the nullish with other operator like && and || */