export function dutyFree(normPrice, discount, hol, butilokBudet = hol/(0.01*discount*normPrice)|0){
    return  butilokBudet
}