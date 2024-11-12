export function gimme (t) {

 if ((t[0]<t[1] && t[0]>t[2])|| (t[0]>t[1] && t[0]<t[2]) ) {return 0}
 if ((t[1]<t[0] && t[1]>t[2]) || (t[1]>t[0] && t[1]<t[2]) ) {return 1}
 if ((t[2]<t[1] && t[2]>t[0]) || (t[2]>t[1] && t[2]<t[0]) ) {return 2}
}