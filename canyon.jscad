function main () {
  return canyon();
}

function canyon() {
    var c = cube({size:[20,20,1]}).rotateX(90).rotateY(45).rotateZ(-45);
    return cube({size:[20,62,5]}).translate([0,-2,0])
     .union(c.translate([3,14.75,-3]))
     .union(c.translate([7,13,-5]))
     .union(c.translate([6,14,-5]))

     .union(c.translate([0,22,3]))
     .union(c.translate([0,24,1]))
     .union(c.translate([0,26,-1]))
     .union(c.translate([-1,27,-1]))
     .union(c.translate([-1,29,-3]))
     .union(c.translate([-1,31,-5]))
     .union(c.translate([-1,33,-7]))
     .union(cylinder({d:8, h:7}).translate([10,50,3]))
     .subtract(cylinder({d1:0, d2:6, h:2.5}).translate([10,50,0.5]))
     .subtract(cylinder({d:6, h:15}).translate([10,50,3]))
     .intersect(cube({size:[20,27,50]}).translate([0,-2,0]))
    ;
}
