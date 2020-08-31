// title      : OpenJSCAD.org Logo
// author     : Rene K. Mueller
// license    : MIT License
// revision   : 0.003
// tags       : Logo,Intersection,Sphere,Cube
// file       : logo.jscad

function main () {
    //return box2();
    //return cover2().rotateY(180).translate([45,1.5,1.5]);
    //return lamp();
    //return lamp_side();  //return uselessBox();
  //return fanGrill80();
  //return clock();
  //return angle(); //17x9x40x1
  //return lipbox()
  //return sensorMagnet2()
  //return canyon()
  //return cableHolder()
  //return lego().scale(2.6);
  //return vasher()
  //return ring_cover()
  //return ring_button()
  //return sil()
  //return sil2()
  //return sil3()
  //return sil4()
  //return sil5()
  //return lampAround();
  //return cutCube();
  //return wireHolder();
  //return wireHolder2();
  //return wireHolder3();
  //return wireHolder4();
  //return mount1();
  //return ringInsert();
  //return tankGlassHolder();
  //return tankGlassHolder2();
  //return charger();
  //return wallHolder();
  //return stop1();
  //return cableHolder2();
  //return sil6()
  //return stopper()
  //return tubeConnector1()
  //return threadHolder()
  //return doorShim()
  //return knifeHandle()
  //return knifeHandle2()
  //return doorHolder()
  //return meshHolder()
  return table()
}

function table() {
    var h=33, l=60, w=28;
    var ll=l-6*2;
    var l_center = ll/2;
    var l_center2 = (ll-4-2)/4;
    
    var p1 = cube([4,4,h]).setColor(0,0.5,0,0.9);
    var p3 = cube([4,w,4]).setColor(0,0,1,0.9)
        .subtract(cube([4,2,2]))
        .subtract(cube([4,2,2]).mirroredY().translate([0,w,0]));
    var p2 = cube([2,w-2*2,10]).setColor(0,0,1,0.9);
    var p8 = cube([l,2,10]).setColor(1,0,1,0.9)
        .subtract(cube([2,2,4]).translate([l/2-2/2,0,10-4]))
        .subtract(cube([4,2,2]).translate([l/2-l_center2-2,0,10-2]))
        .subtract(cube([4,2,2]).translate([l/2+l_center2-2,0,10-2]));
    var p5_key = cube([2,w,10]).setColor(0,0,1,0.9)
        .subtract(cube([2,2,6]))
        .subtract(cube([2,2,6]).mirroredY().translate([0,w,0]));
    var p9_top = cube([l,10,2]).setColor(1,1,0,0.75);
    var p4 = cube([ll/2-2/2-4-2,2,4]).setColor(0.5,0.5,0,0.9);
    
    var l_p6 =Math.sqrt(Math.pow(w-2*2, 2)+Math.pow(h-10,2));
    var p6 = cube([2,l_p6,4]).setColor(0,1,1,0.9)
        .subtract(cube([1,10,10]).rotateX(45).translate([1,0.9,-2]))
        .subtract(cube([1,10,10]).rotateX(-45).translate([1,l_p6-7.85,0]));
    var p6_2 = p6
        .subtract(cube([1,10,10]).rotateX(45*1).translate([0,l_p6-0.8,0]));

    var l_p7 =Math.sqrt(Math.pow(ll/2-2/2, 2)+Math.pow(h-4-4-4,2));
    var p7 = cube([l_p7,2,4]).setColor(0,0.5,0.5,0.9)
        .subtract(cube([10,1,10]).rotateY(-45).translate([0,1,-2.9]))
        .subtract(cube([10,1,10]).rotateY(-45).translate([l_p7,1,0]))
        .subtract(cube([10,1,10]).rotateY(-45).translate([l_p7-2.9+2,0,-2]))
        .subtract(cube([10,1,10]).rotateY(45).translate([l_p7-1.5,1,0]));
    
    var p10 = cube([4,2,10]).setColor(0.5,0.5,0,0.9);
    
    
    var tressels1 = p1.rotateX(90)
        .union(p1.rotateX(90).translate([5,0,0]))
        .union(p2.rotateY(-90).translate([10,1,0]))
        .union(p6.rotateY(-90).translate([-1,2,0]))
        .union(p6_2.rotateY(-90).mirroredX().mirroredY().translate([-5,0,0]));
        
    var tressels = p1
        .union(p1.mirroredY().translate([0,w-2-2,0]))
        .union(p2.translate([4,0,h-10]))
        .union(p6.rotateX(45).translate([-1,2,0]))
        .union(p6_2.rotateX(45).mirroredX().mirroredY().translate([4+1,w-4-2,0]));
        
    var table = tressels
        .union(tressels.mirroredX().translate([ll,0,0]))
        .union(p3.translate([l_center-l_center2-4/2,-2,h-4]))
        .union(p3.mirroredX().translate([l_center+l_center2+4/2,-2,h-4]))
        .union(p5_key.translate([l_center-2/2,-2,h-10]))
        .union(p8.translate([-(l-ll)/2,-2,h-10]))
        .union(p8.mirroredY().translate([-(l-ll)/2,w-2,h-10]))
        .union(p9_top.translate([-(l-ll)/2,-2,h+0.1]))
        .union(p9_top.translate([-(l-ll)/2,-2+10,h+0.1]))
        .union(p9_top.translate([-(l-ll)/2,-2+10+10,h+0.1]))
        .union(p4.translate([l_center+2/2,0,h-4-4]))
        .union(p4.mirroredX().translate([l_center-2/2,0,h-4-4]))
        .union(p7.rotateY(-45).translate([2,-1,3]))
        .union(p7.rotateY(-45).mirroredX().translate([ll-2,-1,3]))
        .union(p10.translate([-4,0,h-10]))
        .union(p10.mirroredX().translate([ll+4,0,h-10]))
        
    var table1 = tressels1
        .union(tressels1.translate([16,0,0]))
        .union(p3.rotateY(180).translate([31,0,4]))
        .union(p3.mirroredX().rotateY(180).translate([32,0,4]))
        .union(p5_key.rotateY(90).translate([26,-30,2]))
        .union(p8.rotateX(90).translate([-5,-35,0]))
        .union(p8.mirroredY().rotateX(-90).translate([-5,-56,0]))
        .union(p9_top.translate([-5,36,0]))
        .union(p9_top.translate([-5,47,0]))
        .union(p9_top.translate([-5,58,0]))
        .union(p4.rotateX(90).translate([16,33,0]))
        .union(p4.mirroredX().rotateX(90).translate([51,33,0]))
        .union(p7.rotateX(90).rotateZ(90).translate([38,-2,0]))
        .union(p7.mirroredX().rotateX(90).rotateZ(90).translate([38,-3,0]))
        .union(p10.rotateX(90).translate([43,10,0]))
        .union(p10.mirroredX().rotateX(90).translate([47,21,0]))
        
    return table;
    //eturn table1;
}

function meshHolder() {
    return cube([15,14,8])
     .subtract(cylinder({d:5.5, h:35}).rotateY(90).translate([0,4,4]))
     .subtract(cube([35,5,1]).translate([0,0,3.5]))
     .subtract(cylinder({d:3, h:6}).translate([7.5,10,0]))
     .subtract(cylinder({d:20, h:35}).rotateY(90).translate([0,15,12]))
}

function doorHolder() {
    return cube([30,30,45])
    .union(cube([20,30,70])
        .intersect(cylinder({d:20,h:30}).scale([1,2,1]).translate([10,15,45]))
    )
    .intersect(cylinder({d:40,h:30}).rotateX(-90).scale([1.5,1,1.8]).translate([30,0,35])
        .union(cube([30,30,70]).translate([0,0,35])))
    
}

function knifeHandle2() {
    var k = cube([8.6,40,2.6])
        .subtract(cube([28,40,20]).rotateY(45).rotateZ(19.5).translate([8.4,8.5,2.6]));
    return cube([10.6,40,4])
        .subtract(k.translate([1.1,0,0.6]))
        .subtract(cube([8.5,17,2.6]).translate([1.1,0,0.6]))
        .subtract(cube([8.5+2,8,2.6]).translate([1.1-2,0,0.6]))
        ;
}

function knifeHandle() {
    return cube([10,15,4])
        .subtract(cube([8.2,12,2.2]).translate([0.9,0,0.6]));
}

function doorShim() {
    return cube([35, 150,5])
        .subtract(cylinder({d:10, h:5}).translate([35/2,30,0]))
        .subtract(cylinder({d:10, h:5}).translate([35/2,30+90,0]))
}

function threadHolder() {
    return cube([10,3,1.5])
        .subtract(cube([1,2,1.5]).translate([2.5,0,0]))
        .subtract(cube([1,2,1.5]).translate([4.5,1,0]))
        .subtract(cube([1,2,1.5]).translate([6.5,0,0]))
        .subtract(cube([10,1,0.3]).translate([0,1,1.2]))
        .subtract(cube([10,1,0.3]).translate([0,1,0]))
        .subtract(cube([1.5,0.2,1.5]).translate([8.5,1.4,0]))
        .subtract(cube([1.5,0.2,1.5]).translate([0,1.4,0]))
}

function tubeConnector1() {
    return cylinder({d1:18.5, d2:17.5, h:12, fn:64}).intersect(cube({size:[15,15,12], center:[1,1,0]}))
     .union(cylinder({d:25, h:20})
        .subtract(cube({size:[50,50,50], center:[1,0,0]}).translate([0,6,0]))
        .subtract(cylinder({d:21.5, h:20}))
        .rotateX(-90).translate([0,-7.5,-10])
     )
        .subtract(cylinder({d:21.5, h:20})
        .rotateX(-90).translate([0,-7.5,-10]))
}


function stopper() {
    return cube([20,20,10])
    .subtract(cube([10,18,10]).translate([10,1,1.5]))
    .subtract(cube([10,18,20]).rotateY(-45).translate([10,1,1.5]))
    .subtract(cube([10,20,40]).rotateY(-65).translate([20,0,1.5]))
    .subtract(cylinder({d:1.5, h:2}).translate([12,10,0]))
    .subtract(cylinder({d1:1.5,d2:4, h:0.5}).translate([12,10,1]))
}

function sil6() {
    return cube({size:[26,40,50], center:[1,0,0]}).translate([0,-10,0])
    .subtract(cube({size:[23,37,47], center:[1,0,0]}).translate([0,-8.5,1.5]))
    .union(cylinder({d:2, h:50}).translate([0,-8.5,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,-8.5,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,5,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,17,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,28.5,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,-8.5,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,5,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,17,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,28.5,0]))
    .union(cylinder({d:2, h:50}).translate([0,28.5,0]))
    
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,28.5,1.5]))
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,-8.5,1.5]))
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,28.5,50-1.5]))
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,-8.5,50-1.5]))

    .union(cylinder({d:2, h:40}).rotateX(90).translate([-11.5,30,1.5]))
    .union(cylinder({d:2, h:40}).rotateX(90).translate([11.5,30,1.5]))
    .union(cylinder({d:2, h:40}).rotateX(90).translate([-11.5,30,50-1.5]))
    .union(cylinder({d:2, h:40}).rotateX(90).translate([11.5,30,50-1.5]))
    .setColor([0.7,0,0.7,0.75])

    .union(cube({size:[26,40,50], center:[1,0,0]}).translate([0,-10,0])
        .intersect(
        cube({size:[0.5,40,60], center:[1,0,0]}).translate([0,-10,0])
        .union(cube({size:[30,0.75,11], center:[1,0,0]}).rotateZ(30))
        .union(cube({size:[30,0.75,11], center:[1,0,0]}).rotateZ(-30))

        .union(cube({size:[0.5,50,12], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,-5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,15]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,25]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,35]))
        .union(cube({size:[0.5,25,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,45]))

        .union(cube({size:[0.5,50,12], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,-5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,15]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,25]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,35]))
        .union(cube({size:[0.5,25,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,45]))

        ))
    
    .union(cylinder({d1:9.1, d2:9.3, h:9, fn:64}).subtract(cylinder({d1:6.7, d2:6.3, h:12})).translate([-0,0,-11]))
    .union(cylinder({d1:9.3, d2:20, h:2, fn:64}).subtract(cylinder({d:5.5, h:2})).translate([-0,0,-2]))
    .subtract(cylinder({d1:5.5, d2:6.5, h:50, fn:64}))

    //.subtract(cube({size:[40,40,50], center:[1,0,0]}).translate([0,-10,0.2]))
    ;
}

function cableHolder2() {
    return cube({size:[12,5,3.5]})
        .subtract(cube({size:[6,5,2]}).translate([1.25,0,1.5]))
        .subtract(cube({size:[6.5,5,1.5]}).translate([1,0,1.5]))
        .subtract(cylinder({d:2.5, h:3.5}).translate([10,2.5,0]))
        .subtract(cylinder({d1:4, d2:2.5, h:1}).translate([10,2.5,0]))
}

function stop1() {
    return cylinder({d1:5.5, d2:6, h:2})
        .union(cylinder({d1:5.5, d2:6, h:2}).translate([0,0,-2]))
        .union(cylinder({d1:5.5, d2:6, h:2}).translate([0,0,-4]))
        .union(cylinder({d1:6, d2:5.7, h:2}).translate([0,0,2]))
        .union(cylinder({d:6.4, h:0.2}).translate([0,0,4]))
}

function wallHolder() {
    const h=10, w=1, s=14, ww=13.2;
    return cube({size:[ww,w,h], center:true})
        .union(cube({size:[w,s,h], center:true}).translate([(ww+w)/2,0,0]))
        .union(cube({size:[w,s-4,h], center:true}).translate([-(ww+w)/2,-2,0]))
        //.union(cube({size:[w,s/2,h], center:true}).translate([-(ww+w)/2,(s/2-w)/2,0]))
}

function charger() {
    let c = cylinder({d:5,h:1}).rotateX(-69).translate([3,-0.5,0]);
    let a=[];
    for (i=0; i<9; i++) {
        a.push(c.rotateZ(i*10).translate([0,0,i*0.2]))
    }
    let c1=union(a);
    let c2 = c1.union(c1.rotateZ(90).translate([0,0,1.8]));
    let c3 = c2.union(c2.rotateZ(180).translate([0,0,3.6]));
    let c4 = c3.union(c3.translate([0,0,3.6*2]))
            .union(c3.translate([0,0,3.6*4]))
            .union(c3.translate([0,0,3.6*6]))
            .union(c3.translate([0,0,3.6*8]))
            .union(c3.translate([0,0,3.6*10]));

    return cylinder({d:12, h:30})
    .union(cylinder({d1:12, d2:30, h:5}).translate([0,0,30]))
    .union(cylinder({d:30, h:30}).translate([0,0,35]))
    .subtract(cylinder({d:28, h:30}).translate([0,0,43]))
    .subtract(sphere({r:14}).translate([0,0,43]))
    .subtract(c4.translate([0,0,0]))
    ;
}
function tankGlassHolder2() {
    return cylinder({d:18, h:5, fn:64})
        .subtract(cylinder({d:2, h:5}).translate([4,0,0]))
        .subtract(cylinder({d1:2, d2:6, h:2.5}).translate([4,0,2.5]))
}

function tankGlassHolder() {
    var l=46;
    return cube({size:[30, l, 23]})
        .subtract(cylinder({d:40, h:l, fn:64}).rotateX(-90).translate([3,0,-10]))
        .union(cube({size:[3, l, 20]}))
        .subtract(cube({size:[3, l, 20]}).translate([3,0,15]))
        .subtract(cylinder({d:40, h:l, fn:64}).rotateY(90).translate([3,0,-10]))
        .subtract(cube({size:[40,40,40]}).rotateX(-35).translate([3,-40,-7]))
        //.union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/6*0,0]))
        .union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/2*1,0]))
        .union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/2*2,0]))
        //.union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/6*3,0]))
        //.union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/6*4,0]))
        //.union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/6*5,0]))
        //.union(cube({size:[30,0.3,10]}).translate([0,(l-0.3)/6*6,0]))
        .intersect(cylinder({d:53, h:l, fn:64}).rotateX(-90).scale([1,1,1.2]).translate([-2,0,-10]))
    ;
}

function ringInsert() {
    return cube({size:[4.6, 62, 0.2]})
        .union(cube({size:[4.6, 61, 0.35]}).translate([0,0.5,0]))
        .union(cube({size:[0.5, 62, 0.95]}))
        .union(cube({size:[0.5, 62, 0.95]}).translate([4.6,0,0]))
        /*
        .union(cube({size:[0.5, 5, 0.6]}).translate([-0.1,0,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([4.8,0,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([-0.1,15,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([4.8,15,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([-0.1,40,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([4.8,40,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([-0.1,55,0.35]))
        .union(cube({size:[0.5, 5, 0.6]}).translate([4.8,55,0.35]))
        */
    ;
}

function picatini(l) {
    var s1 = 18.2, s2 = 22;
    var lc1 = s2-s1;
    var lc = lc1/Math.sqrt(2);
    var c=cube({size:[lc, l, lc], center:[1,1,1]}).rotateY(45).translate([0,0,lc1/2]);
    return cube({size:[s1,l,9.32], center:[1,1,0]})
        .union(c.translate([s1/2,0,0]))
        .union(c.translate([-s1/2,0,0]))
        .union(cube({size:[s1,l,2],center:[1,1,0]}).translate([0,0,-2]))
        .mirroredZ();
}

function mount1() {
    var l= 25;
    var p = picatini(l);
    return cube({size:[25,l,25], center:[1,1,0]})
        .subtract(p.translate([0,0,4]))
        .subtract(cylinder({d:6.5, h:15}).rotateX(90).translate([0,12.5,20]))
        .subtract(cylinder({d:3, h:l}).rotateX(90).translate([0,l/2,18.5]))
        .subtract(cylinder({d:21, h:4, fn:64}).rotateY(90).translate([8.5,0,16]))
        .union(cube({size:[0.7,15,2], center:[1,1,0]}).translate([12.15,0,5.5]))
        .union(cube({size:[0.7,3,2], center:[1,1,0]}).translate([12.15,8.2,23]))
        .union(cube({size:[0.7,3,2], center:[1,1,0]}).translate([12.15,-8.2,23]))
        .union(cube({size:[4,15,0.7], center:[1,1,0]}).translate([10.5,0,24.3]))
        .subtract(cylinder({d:2,h:20}).rotateY(90).rotateZ(60).translate([0,-15,15]))
        .subtract(cylinder({d:2,h:16.5}).rotateY(90).rotateZ(45).rotateX(-40).translate([0,-14,13.5]))
        //.subtract(cube({size:[15,5,10], center:[1,1,0]}).translate([0,-11,10]))
}

function wireHolder4() {
    return cube({size:[14,5,5], center:[1,1,0]})
}

function wireHolder3() {
    return cube({size:[14,5,5], center:[1,1,0]})
        .subtract(cube({size:[8,3,5], center:[1,1,0]}).translate([2,0,0]))
        .subtract(cube({size:[4,3,5], center:[1,1,0]}).translate([2.5,1,0]))
        .subtract(cube({size:[3,0.7,5], center:[1,1,0]}).translate([-4.5,0,0]))
        .subtract(cube({size:[0.6,3,5], center:[1,1,0]}).rotateZ(20).rotateY(25).translate([-4.8,1.5,2.5]))
        .subtract(cube({size:[0.6,3,5], center:[1,1,0]}).rotateZ(20).rotateY(-25).translate([-2.75,1.5,-1.6]))
}

function wireHolder2() {
    var c = cube({size:[16,2,2], center:[1,1,0]});
    return cube({size:[10,50,2], center:[1,1,0]})
    .subtract(c.rotateZ(5).translate([-12,-12,0]))
    .subtract(c.rotateZ(0).translate([12,-6,0]))
    .subtract(c.rotateZ(0).translate([-12,6,0]))
    .subtract(c.rotateZ(-5).translate([12,12,0]))
    .subtract(cylinder({d:2,h:3}).translate([0,-21,0]))
    .subtract(cylinder({d:2,h:3}).translate([0,0,0]))
    .subtract(cylinder({d:2,h:3}).translate([0,21,0]))
}

function wireHolder() {
    return cube({size:[15,25,3], center:[1,1,0]}).translate([0,-2,0])
    .subtract(cylinder({d:6, h:5}).rotateX(20).translate([0,-4,-1]))
    .subtract(cylinder({d1:6, d2:11, h:4}).rotateX(20).translate([0,-4.9,1.5]))
    .subtract(cylinder({d:1,h:4}).translate([15/2,-11,0]))
    .subtract(cylinder({d:1,h:4}).translate([-15/2,-11,0]))
    .subtract(cube({size:[14,3.5,0.5],center:[1,1,0]}).translate([0,-12.25,0]))
}


function cutCube() {
    return cube({size:[20,20,20], center:true}).rotateZ(45).rotateY(45)
        .intersect(cube({size:[20,20,20], center:true}).rotateX(37)).lieFlat()
}

function lampAround() {
    var l = cube({size:[1.2,12,0.5], center:[1,1,0]}).translate([96/2,0,0])
        .union(cube({size:[1.2,12,0.5], center:[1,1,0]}).translate([96/2,0,-2]));

    return sphere({r:98/2, fn:64})
        .subtract(sphere({r:96/2, fn:64}))
        .subtract(cube({size:[100,100,100], center:[1,1,0]}).translate([0,0,30]))
        .subtract(cube({size:[100,100,100], center:[1,1,0]}).translate([0,0,-100]))
        .union(cylinder({r:98/2, h:2, fn:64}).translate([0,0,-2]))
        .subtract(cylinder({r:96/2, h:2, fn:64}).translate([0,0,-2]))
        .union(l.rotateZ(60*0))
        .union(l.rotateZ(60*1))
        .union(l.rotateZ(60*2))
        .union(l.rotateZ(60*3))
        .union(l.rotateZ(60*4))
        .union(l.rotateZ(60*5))
    ;
}

function sil5() {
    return cube({size:[26,40,50], center:[1,0,0]}).translate([0,-10,0])
    .subtract(cube({size:[23,37,47], center:[1,0,0]}).translate([0,-8.5,1.5]))
    .union(cylinder({d:2, h:50}).translate([0,-8.5,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,-8.5,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,5,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,17,0]))
    .union(cylinder({d:2, h:50}).translate([11.5,28.5,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,-8.5,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,5,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,17,0]))
    .union(cylinder({d:2, h:50}).translate([-11.5,28.5,0]))
    .union(cylinder({d:2, h:50}).translate([0,28.5,0]))
    
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,28.5,1.5]))
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,-8.5,1.5]))
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,28.5,50-1.5]))
    .union(cylinder({d:2, h:26}).rotateY(90).translate([-13,-8.5,50-1.5]))

    .union(cylinder({d:2, h:40}).rotateX(90).translate([-11.5,30,1.5]))
    .union(cylinder({d:2, h:40}).rotateX(90).translate([11.5,30,1.5]))
    .union(cylinder({d:2, h:40}).rotateX(90).translate([-11.5,30,50-1.5]))
    .union(cylinder({d:2, h:40}).rotateX(90).translate([11.5,30,50-1.5]))
    .setColor([0.7,0,0.7,0.75])

    .union(cube({size:[26,40,50], center:[1,0,0]}).translate([0,-10,0])
        .intersect(
        cube({size:[0.5,40,60], center:[1,0,0]}).translate([0,-10,0])
        .union(cube({size:[30,0.75,11], center:[1,0,0]}).rotateZ(30))
        .union(cube({size:[30,0.75,11], center:[1,0,0]}).rotateZ(-30))

        .union(cube({size:[0.5,50,12], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,-5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,15]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,25]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,35]))
        .union(cube({size:[0.5,25,60], center:[1,0,0]}).rotateY(45).rotateX(15).translate([0,-10,45]))

        .union(cube({size:[0.5,50,12], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,-5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,5]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,15]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,25]))
        .union(cube({size:[0.5,50,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,35]))
        .union(cube({size:[0.5,25,60], center:[1,0,0]}).rotateY(-45).rotateX(15).translate([0,-10,45]))

        ))
    
    .union(cylinder({d1:10.5, d2:10.8, h:12, fn:64}).subtract(cylinder({d1:7.5, d2:7, h:12})).translate([-0,0,-14]))
    .union(cylinder({d1:10.8, d2:20, h:2, fn:64}).subtract(cylinder({d:6, h:2})).translate([-0,0,-2]))
    .subtract(cylinder({d1:6, d2:6.5, h:50, fn:64}))

    //.subtract(cube({size:[40,40,50], center:[0,0,0]}).translate([5,0,0]))
    ;
}

function sil4() {
    return cube({size:[26,40,50], center:[1,0,0]}).translate([0,-10,0])
    .subtract(cube({size:[24,38,48], center:[1,0,0]}).translate([0,-9,1]))
    .union(cube({size:[26,40,50], center:[1,0,0]}).translate([0,-10,0])
        .intersect(
        cube({size:[26,0.6,60], center:[1,0,0]}).rotateX(-45).translate([0,-10,1])
        .union(cube({size:[26,0.6,60], center:[1,0,0]}).rotateX(-45).translate([0,-10,10]))
        .union(cube({size:[26,0.6,60], center:[1,0,0]}).rotateX(-45).translate([0,-10,20]))
        .union(cube({size:[26,0.6,60], center:[1,0,0]}).rotateX(-45).translate([0,-10,30]))

        .union(cube({size:[0.6,40,60], center:[1,0,0]}).translate([0,-10,0]))
        .union(cube({size:[30,0.6,60], center:[1,0,0]}).rotateZ(30))
        .union(cube({size:[30,0.6,60], center:[1,0,0]}).rotateZ(-30))
        ))
    
    .union(cylinder({d:10.2, h:12, fn:64}).subtract(cylinder({d1:7.5, d2:6, h:12})).translate([-0,0,-12]))
    .union(cylinder({d1:10.2, d2:15, h:2, fn:64}).subtract(cylinder({d:6, h:2})).translate([-0,0,-2]))
    .subtract(cylinder({d1:6, d2:7, h:50, fn:64}))

    //.subtract(cube({size:[40,40,50], center:[0,0,0]}).translate([5,0,0]))
    ;
}

function sil3() {
    var p = polygon([[2, 0], [3.5, 0.5], [4.2, 0.6], [4.7, 1.5], [4.9, 4], [4.7, 4.7], [4, 4.9], [3, 4.8], [2, 4.5], [1, 3.5], [0, 1.7], [0, 3], [2, 5], [5.3, 5], [5.3, 0]])
    p1 = polygon([[1, 1], [1.5, 2], [2.5, 3.2], [3, 3], [3, 2.5], [1, 0.5]]);
    var r = rotate_extrude({fn:32}, p.translate([1,0]));
    r = r.union(rotate_extrude({fn:32}, p1.translate([1,0])));
    var c = cube({size:[0.8,30,50], center:[1,1,0]});
    return union([r
    , r.translate([0,0,5])
    , r.translate([0,0,10])
    , r.translate([0,0,15])
    ]).scale(3).translate([0,0,-10])
    .union(cylinder({d:36, h:2}))
    .union(cube({size:[1,27,50], center:[1,1,0]}).translate([-12.5,0,0]))
    .union(c.rotateZ(60*0.5))
    .union(c.rotateZ(60*1.5))
    .union(c.rotateZ(60*2.5))
    .intersect(cube({size:[40,40,50], center:[1,1,0]}).translate([7,0,0]))
    .union(cylinder({d:10.2, h:12, fn:64}).subtract(cylinder({d1:7.5, d2:6, h:12})).translate([-0,0,-12]))
    .union(cylinder({d1:10.2, d2:15, h:2, fn:64}).subtract(cylinder({d:6, h:2})).translate([-0,0,-2]))
    .subtract(cylinder({d1:6, d2:7, h:50, fn:64}))
    
    //.subtract(cube({size:[40,40,40], center:[0,0,0]}).translate([-20,-1,0]));
}

function sil2() {
    var c=cube({size:[1,26,15], center:[1,1,0]}).translate([0,6,1])
        .subtract(cube({size:[1,50,50], center:[1,1,0]}).rotateX(40).translate([0,6,4]));
    var c1 = cylinder({d:28, h:50});
  return cylinder({d:33, h:50}).subtract(c1)
    .union(cube({size:[45,45,1], center:[1,1,0]}).rotateX(45).translate([0,0,8]).intersect(c1))
    .union(cube({size:[45,45,1], center:[1,1,0]}).rotateX(-45).translate([0,0,8]).intersect(c1))
    .union(cube({size:[45,45,1], center:[1,1,0]}).rotateX(45).translate([0,0,32]).intersect(c1))
    .union(cube({size:[45,45,1], center:[1,1,0]}).rotateX(-45).translate([0,0,32]).intersect(c1))
    .union(cube({size:[45,45,1], center:[1,1,0]}).rotateX(45).translate([0,0,50]).intersect(c1))
    .union(cube({size:[45,45,1], center:[1,1,0]}).rotateX(-45).translate([0,0,50]).intersect(c1))
    .union(cylinder({d:10.2, h:12, fn:64}).subtract(cylinder({d1:7.5, d2:6, h:12})).translate([-5,0,-12]))
    .union(cylinder({d1:10.2, d2:15, h:2, fn:64}).subtract(cylinder({d:6, h:2})).translate([-5,0,-2]))
    .union(cylinder({d:33, h:2}))
    .subtract(cylinder({d1:6, d2:15, h:1, fn:64}).translate([0,0,1]))
    .union(c.rotateZ(45+90*0).translate([-5,0,0]).intersect(c1))
    .union(c.rotateZ(45+90*1).translate([-5,0,0]).intersect(c1))
    .union(c.rotateZ(45+90*2).translate([-5,0,0]).intersect(c1))
    .union(c.rotateZ(45+90*3).translate([-5,0,0]).intersect(c1))
    .union(cylinder({d:33, h:2}).subtract(cylinder({d:7, h:2}).translate([-5,0,0])).translate([0,0,50]))
    .subtract(cube({size:[5,1,4],center:[0,1,0]}).translate([13.5,0,5]))
    .subtract(cube({size:[5,1,4],center:[0,1,0]}).translate([13.5,0,10]))
    .subtract(cube({size:[5,1,4],center:[0,1,0]}).translate([13.5,0,22]))
    .subtract(cube({size:[5,1,4],center:[0,1,0]}).translate([13.5,0,27]))
    .subtract(cube({size:[5,1,4],center:[0,1,0]}).translate([13.5,0,38]))
    .subtract(cube({size:[5,1,4],center:[0,1,0]}).translate([13.5,0,43]))
    .subtract(cylinder({d:2, h:48}).translate([10,5,2]))
    .subtract(cylinder({d:2, h:48}).translate([10,-5,2]))
    .subtract(cylinder({d:2, h:48}).translate([0,10,2]))
    .subtract(cylinder({d:2, h:48}).translate([0,-10,2]))
    .subtract(cylinder({d1:6, d2:7, h:50, fn:64}).translate([-5,0,0]))
    ;
}

function sil() {
    //var s = linear_extrude({height: 50, twist: 3*360, slices: 360, center: false}, translate([0, 0, 0], polygon([[-4, 0], [-4, 0.5], [10, 10.5], [10.5, 10], [0.5, -4], [0, -4], [5, 5]])));
    var s = linear_extrude({height: 50, twist: 3*360, slices: 360, center: false}, translate([0, 0, 0], polygon([[1, 0], [0, 1], [10, 11], [11, 10]])));

  return cylinder({d:33, h:50}).subtract(cylinder({d:28, h:50}))
    .union(cylinder({d:10.2, h:12, fn:64}).subtract(cylinder({d1:7.5, d2:6, h:12})).translate([0,0,-12]))
    .union(cylinder({d1:10.2, d2:15, h:2, fn:64}).subtract(cylinder({d:6, h:2})).translate([0,0,-2]))
    .union(cylinder({d:33, h:2}))
    .subtract(cylinder({d1:6, d2:15, h:1, fn:64}).translate([0,0,1]))
    .union(cylinder({d:33, h:2}).subtract(cylinder({d:7, h:2})).translate([0,0,50]))
    .subtract(cube([5,1,4]).translate([13.5,0,5]))
    .subtract(cube([5,1,4]).translate([13.5,0,10]))
    .subtract(cube([5,1,4]).translate([13.5,0,22]))
    .subtract(cube([5,1,4]).translate([13.5,0,27]))
    .subtract(cube([5,1,4]).translate([13.5,0,38]))
    .subtract(cube([5,1,4]).translate([13.5,0,43]))
    .union(s)
    .union(s.mirroredY())
    .subtract(cylinder({d1:6, d2:7, h:50, fn:64}))
    ;
}

function ring_button() {
    return cylinder({d:24, h:3, fn:128})
        .union(cylinder({d:16, h:3, fn:128}).translate([0,0,3]))
}

function ring_cover() {
    return cylinder({d:67, h:1, fn:128})
        .union(cylinder({d1:67, d2:30, h:4, fn:128}).translate([0,0,1]))
        .subtract(cylinder({d:3, h:10}).translate([45/2,0,0]))
        .subtract(cylinder({d:3, h:10}).translate([-45/2,0,0]))
        .subtract(cylinder({d1:6, d2:10, h:3}).translate([45/2,0,2]))
        .subtract(cylinder({d1:6, d2:10, h:3}).translate([-45/2,0,2]))
}

function vasher() {
    return cylinder({d:10, h:1.5, fn:128})
        .subtract(cylinder({d:3.2, h:1.5, fn:64}))
}

function lego() {
    return cube({size:[6,6,1.2], center:[1,1,0]})
        .union(cylinder({d:1.85, h:0.8}).translate([ 1.5, 1.5,1.1]))
        .union(cylinder({d:1.85, h:0.8}).translate([ 1.5,-1.5,1.1]))
        .union(cylinder({d:1.85, h:0.8}).translate([-1.5, 1.5,1.1]))
        .union(cylinder({d:1.85, h:0.8}).translate([-1.5,-1.5,1.1]))
        .subtract(cube({size:[5,5,1], center:[1,1,0]}))
        .union(cylinder({d:2.3, h:1}))
        .subtract(cylinder({d:2, h:1}))
    ;
}

function cableHolder() {
    return cube({size:[34,4,10], center:[1,1,0]})
        .union(cube({size:[34,4,1.5], center:[1,1,0]}).translate([0,-4,0]))

        .subtract(cylinder({d:4, h:10}).translate([0,1,0]))
        .subtract(cylinder({d:4, h:10}).translate([0,0.5,0]))
        
        .subtract(cylinder({d:3.5, h:10}).translate([ 4.5,0.5,0]))
        .subtract(cylinder({d:3.5, h:10}).translate([ 4.5,1,0]))
        
        .subtract(cylinder({d:3.5, h:10}).translate([-4.5,0.5,0]))
        .subtract(cylinder({d:3.5, h:10}).translate([-4.5,1,0]))
        
        .subtract(cylinder({d:4, h:10}).translate([ 9,0.5,0]))
        .subtract(cylinder({d:4, h:10}).translate([ 9,1,0]))
        
        .subtract(cylinder({d:4, h:10}).translate([-9,0.5,0]))
        .subtract(cylinder({d:4, h:10}).translate([-9,1,0]))
        
        .subtract(cylinder({d:4.8, h:10}).translate([ 14,1,0]))
        .subtract(cylinder({d:4.8, h:10}).translate([-14,1,0]))
        //.subtract(cube({size:[30,10,10], center:[1,1,0]}).rotateZ(35).translate([-21,0,0]))
        //.subtract(cube({size:[30,10,10], center:[1,1,0]}).rotateZ(-35).translate([21,0,0]))
    ;
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

function sensorMagnet2() {
    return cube({size:[54,12,2], center:[1,1,0]})
        .union(cube({size:[36,12,18], center:[1,1,0]}))
        .subtract(cube({size:[36,12,30], center:[1,1,1]}).rotateX(-35).translate([0,-3.5,16.5]))
        .subtract(cylinder({d:4,h:2}).translate([22,0,0]))
        .subtract(cylinder({d1:4,d2:7,h:1}).translate([22,0,1]))
        .subtract(cylinder({d1:4,d2:7,h:1}).translate([-22,0,1]))
        .subtract(cylinder({d:4,h:2}).translate([-22,0,0]))
        .subtract(cylinder({d:4.3,h:2}).rotateX(90).translate([6,6,12]))
        .subtract(cylinder({d:4.3,h:2}).rotateX(90).translate([-6,6,12]))
        ;
}

function sensorMagnet() {
    return cube({size:[54,12,2], center:[1,1,0]})
        .union(cube({size:[36,12,12], center:[1,1,0]}))
        .subtract(cube({size:[36,12,30], center:[1,1,1]}).rotateX(-45).translate([0,0,16.5]))
        .subtract(cylinder({d:4,h:2}).translate([22,0,0]))
        .subtract(cylinder({d1:4,d2:7,h:1}).translate([22,0,1]))
        .subtract(cylinder({d1:4,d2:7,h:1}).translate([-22,0,1]))
        .subtract(cylinder({d:4,h:2}).translate([-22,0,0]))
        .subtract(cylinder({d:4.2,h:2}).rotateX(90).translate([6,6,6]))
        .subtract(cylinder({d:4.2,h:2}).rotateX(90).translate([-6,6,6]))
        ;
}

function lipbox() {
var r=9+0.5+0.15;
   var w = circle({r:r+0.5, fn:6, center: true})
    .subtract(circle({r:r, fn:6, center: true}));
    var wall = linear_extrude({ height: 10, center: false, twist: 360/12, slices: 150},w);
  return wall.translate([0,0,1]).union(cylinder({r:r+0.5, h:1, fn:6, center: [1,1,0]}));  
}

function clock() {
    var s=10, w=s/10, h=s*2;
    var b = base(s,w);
    var bb = box(s,w);
    var b2 = base2(s,w);
    var b3 = hull(bb).subtract(b2);
    var walls = linear_extrude({ height: h }, b);
    var walls2 = linear_extrude({ height: h }, bb);
    var top = linear_extrude({ height: w*3 }, b3);
    var d = linear_extrude({ height: h }, digit(s,w));
    var d1 = linear_extrude({ height: h }, dot(s,w));
    var d2 = linear_extrude({ height: h }, dot2(s,w));
    var btm = bottom(s,w);
    var mdl = middle(s,w);
    var btm1 = bottom1(s,w);
    var mdl1 = middle1(s,w);
    var btm2 = bottom2(s,w);
    var mdl2 = middle2(s,w);
    //var ss12 = linear_extrude({ height: h/3 }, s12);
    var clock1 = union([
        top, walls2
    ]).intersect(cube([s*15+w,s*16+w*2,h]).translate([-w,-w,0]))
    var clock2 = union([
        top, walls2
    ]).subtract(cube([s*15+w,s*16+w*2,h]).translate([-w,-w,0]))
    .subtract(cube([s*15+w,s*16+w*2,h]).translate([s*(42-15),-w,0]));
    //return [top, walls, walls2];
    //return [clock1, clock2]
    //return btm;
    //return mdl;
    //return btm1;
    //return btm2;
    //return mdl1;
    return mdl2;
}

function middle(s,w) {
    var s1 = segment(s,w);
    var s11 = segment(s,0.0001*w).scale([0.97,0.95]);
    var s12 = hull(s11).subtract(s1).center('xy');
    var s13 = s12.subtract(s12.scale(0.97));
    var ss1 = linear_extrude({ height: 1 }, s12);
    var ss2 = linear_extrude({ height: 9 }, s13);
    return ss1.union(ss2);
}

function middle1(s,w) {
    var s1 = dot(s,w).center('xy').scale(0.98);
    var s11 = dot(s,0.0001*w).center('xy').scale(0.98);
    var s12 = hull(s11).subtract(s1).center('xy');
    var s13 = s12.subtract(s12.scale(0.94));
    var ss1 = linear_extrude({ height: 1 }, s12);
    var ss2 = linear_extrude({ height: 9 }, s13);
    return ss1.union(ss2);
}

function middle2(s,w) {
    var s1 = dot2(s,w).center('xy').scale(0.98);
    var s11 = dot2(s,0.0001*w).center('xy').scale(0.95);
    var s12 = hull(s11).subtract(s1).center('xy');
    var s13 = s12.subtract(s12.scale(0.9));
    var ss1 = linear_extrude({ height: 1 }, s12);
    var ss2 = linear_extrude({ height: 9 }, s13);
    return ss1.union(ss2);
}

function bottom(s,w) {
    var s1 = segment(s,w).center('xy');
    var s11 = segment(s,0.0001*w).scale([0.98,0.95]).center('xy');
    var s12 = hull(s11).subtract(s1).center('xy');
    var ss1 = linear_extrude({ height: 1 }, s12.scale(1.03));
    var ss2 = linear_extrude({ height: 3 }, s12);
    var cpl = sphere({r:7}).intersect(cube({size:[6,15,15], center:[1,1,0]}))
        .subtract(sphere({r:6})).scale([1,1,1.5]);
    return ss1.union(ss2).subtract(cube({size:[4.5,4.5,3],center:[1,1,0]}))
        .subtract(cube({size:[5.2,5.2,1.5],center:[1,1,0]}))
        .union(cpl)
        ;
}

function bottom1(s,w) {
    var s1 = dot(s,w).center('xy').scale(0.99);
    var s11 = dot(s,0.0001*w).center('xy').scale(0.99);
    var s12 = hull(s11).subtract(s1).center('xy');
    var ss1 = linear_extrude({ height: 1 }, s12.scale(1.07));
    var ss2 = linear_extrude({ height: 3 }, s12);
    var cpl = sphere({r:7}).intersect(cube({size:[6,15,15], center:[1,1,0]}))
        .subtract(sphere({r:6})).scale([1,1,1.5]);
    return ss1.union(ss2).subtract(cube({size:[4.5,4.5,3],center:[1,1,0]}))
        .subtract(cube({size:[5.2,5.2,1.5],center:[1,1,0]}))
        .union(cpl)
        ;
}

function bottom2(s,w) {
    var s1 = dot2(s,w).center('xy').scale(0.98);
    var s11 = dot2(s,0.0001*w).center('xy').scale(0.98);
    var s12 = hull(s11).subtract(s1).subtract(s1.scale(1.05));
    var ss1 = linear_extrude({ height: 1 }, s12.scale(1.07));
    var ss2 = linear_extrude({ height: 3 }, s12);
    var cpl = sphere({r:7}).intersect(cube({size:[6,15,15], center:[1,1,0]}))
        .subtract(sphere({r:6})).scale([1,1,1.5]).translate([0,-s/5,0]);
    return ss1.union(ss2).subtract(cube({size:[4.5,4.5,3],center:[1,1,0]}).translate([0,-s/4,0]))
        .subtract(cube({size:[5.2,5.2,1.5],center:[1,1,0]}).translate([0,-s/4,0]))
        .union(cpl)
        ;
}

function angle() {
    return cube([40,1,17])
        .union(cube([40,9,1]))
    
}

function base(s,w) {
    var d = digitWithFrame(s,w);
    var dt = dot(s,w);
    var dt2 = dot2(s,w);
    var dt3 = dt2.rotateZ(180);
  return union([
      d,
      d.translate([s*(10*1+0),0]),
      d.translate([s*(10*2+2),0]),
      d.translate([s*(10*3+2),0]),
      dt.translate([s*(10*2),s*5]),
      dt.translate([s*(10*2),s*8]),
      dt2.translate([s*(10*2-1),s]),
      dt2.translate([s*(10-2),s]),
      dt2.translate([s*(10*3),s]),
      dt3.translate([s*(10*2+3),s*15]),
      dt3.translate([s*(10+2),s*15]),
      dt3.translate([s*(10*3+4),s*15]),
     ]);
}

function base2(s,w) {
    var d = digitWithFrame2(s,w);
    var dt = hull(dot(s,w));
    var dt2 = hull(dot2(s,w));
    var dt3 = dt2.rotateZ(180);
  return union([
      d,
      d.translate([s*(10*1+0),0]),
      d.translate([s*(10*2+2),0]),
      d.translate([s*(10*3+2),0]),
      dt.translate([s*(10*2),s*5]),
      dt.translate([s*(10*2),s*8]),
      dt2.translate([s*(10*2-1),s]),
      dt2.translate([s*(10-2),s]),
      dt2.translate([s*(10*3),s]),
      dt3.translate([s*(10*2+3),s*15]),
      dt3.translate([s*(10+2),s*15]),
      dt3.translate([s*(10*3+4),s*15]),
     ]);
}

function box(s,w) {
    var l1 = line([0,0],[0,s*16],w);
    var l2 = line([0,0],[s*(10*4+2),0],w);
  return union([
      l1,
      l1.translate([s*(10*4+2),0]),
      l2,
      l2.translate([0,s*16]),
     ]);
    
}

function digitWithFrame(s,w) {
    var l1 = line([-s,-s],[-s,14*s],w);
    var l2 = line([-s,-s],[8*s,-s],w);
  return union([
    digit(s,w),
  ]).translate([s,s]);
}

function digitWithFrame2(s,w) {
    var l1 = line([-s,-s],[-s,14*s],w);
    var l2 = line([-s,-s],[8*s,-s],w);
    var sq = square([s*4,s*4])
  return union([
    digit2(s,w),
    sq.translate([s*2,s*2]),
    sq.translate([s*2,s*8]),
  ]).translate([s,s]);
}

function dot(s, w) {
    w=w/s;
    var l1 = line([0,0], [2-w,0], w);
    var l2 = line([0,0], [0,2-w], w);
    return union([
        l1.translate([w/2,w/2]),
        l2.translate([w/2,w/2]),
        l1.translate([w/2,2-w/2]),
        l2.translate([2-w/2,w/2]),
    ]).scale(s);
}

function dot2(s, w) {
    w=w/s;
    var s2 = Math.SQRT2;
    var l1 = line([0,0], [4-w*2,0], w);
    var l2 = line([0,0], [2-w*s2,2-w*s2], w);
    return union([
        l1.translate([w,w/2]),
        l2.translate([w*s2,w/s2]),
        l2.rotateZ(90).translate([4-w*s2,w/s2]),
    ]).scale(s);
}

function digit(s,w) {
    var sg = segment(s,w);
    var sg1 = sg.rotateZ(90);
    var s6=6*s;
  return union([
      sg,
      sg1,
      sg1.translate([s6,0]),
      sg.translate([0,s6]),
      sg1.translate([0,s6]),
      sg1.translate([s6,s6]),
      sg.translate([0,s6*2]),
    ]).translate([s,s]);
}

function digit2(s,w) {
    var sg = hull(segment(s,w));
    var sg1 = sg.rotateZ(90);
    var s6=6*s;
  return union([
      sg,
      sg1,
      sg1.translate([s6,0]),
      sg.translate([0,s6]),
      sg1.translate([0,s6]),
      sg1.translate([s6,s6]),
      sg.translate([0,s6*2]),
    ]).translate([s,s]);
}

function segment(s, w) {
    w=w/s;

    var l1 = line([0,0], [1,1], w);
    var l2 = line([0,0], [4,0], w);
    var l3 = l1.rotateZ(-90);
    
  return union([
      l1,
      l2.translate([1,1]),
      l3.translate([5,1]),
      l3,
      l2.translate([1,-1]),
      l1.translate([5,-1]),
    ]).scale(s);
}

function line(p1,p2,w) {
    var dx = (p2[0]-p1[0]);
    var dy = (p2[1]-p1[1]);
    var l = Math.sqrt(dx*dx+dy*dy);
    return square([l+w,w]).translate([-w/2,-w/2])
    .rotateZ(Math.atan2(dy,dx)*180/Math.PI)
    .translate(p1);
}


function fanGrill80() {
    var fn =128;
    var s2=Math.sqrt(2);
    var b=71.5;
    var d=4.3;
    var d1=b;
    var d2=d1*0.75;
    var d3=d1*0.5;
    var d4=d1*0.25;
    var c4=cylinder({d:d4, h:1, fn:fn})
        .subtract(cylinder({d:d4-3, h:1, fn:fn}))
    var c=cylinder({d:d+3, h:3}).union(cylinder({d:d-0.75, h:6}));
    var l=cube({size:[b/s2-d4/2-1.5,1.5,1], center:[false,true,false]}).translate([d4/2-1.5,0,1-0.125]).rotateZ(45);
    var c5=c4.intersect(cube([d4,d4,1])).rotateZ(45)
        .translate([0,-d4/s2+1.5/s2,1-0.125])
    
    return cylinder({d:d1, h:1, fn:fn})
        .subtract(cylinder({d:d1-3, h:1, fn:fn}))
        .union(cylinder({d:d2, h:1, fn:fn}))
        .subtract(cylinder({d:d2-3, h:1, fn:fn}))
        .union(cylinder({d:d3, h:1, fn:fn}))
        .subtract(cylinder({d:d3-3, h:1, fn:fn}))
        .union(c4)
        .union(c.translate([ b/2, b/2]))
        .union(c.translate([-b/2, b/2]))
        .union(c.translate([ b/2,-b/2]))
        .union(c.translate([-b/2,-b/2]))
        .union(l.rotateZ(90*0))
        .union(l.rotateZ(90*1))
        .union(l.rotateZ(90*2))
        .union(l.rotateZ(90*3))
        .union(c5.rotateZ(180*0))
        .union(c5.rotateZ(180*1))
        
    ;
}

function uselessBox() {
    return cube({size:[69.1,16.7,2.7]})
    .union(cube({size:[9.7,3,2.7]})
        .translate([16.7,-3,0])
    )
    .union(cube({size:[9.7,3,2.7]})
        .translate([16.7+9.6+16.3,-3,0])
    )
    .union(cylinder({d:7.3, h:2.7})
        .translate([68.1,18.2,0])
    )
    .subtract(cylinder({d:4.5, h:2.7})
        .translate([68.1,18.2,0])
    )
    .subtract(cube({size:[2.2,6,2.7]})
        .translate([33.3,0,0])
    )
    .subtract(cube({size:[4,1.7,2.7]})
        .translate([33.3-1.8/2,2.7,0])
    )
    .subtract(cube({size:[2.7,8.4,2.7]})
        .translate([69.1-2.7,(16.7-8.4)/2,0])
    )
    .subtract(cube({size:[6,2.2,2.7]})
        .translate([69.1-2.7-6,(16.7-2.2)/2,0])
    )
    .subtract(cube({size:[1.7,4,2.7]})
        .translate([69.1-2.7-1.7-2.7,(16.7-4)/2,0])
    )
}

function lamp_side () {
  return union([
      cube({size:[10,30,30], center:[1,1,0]})
        .subtract(cylinder({d:62, h:30, fn:128}).translate([31,0,0]))
      ]);
}

function lamp () {
  return union([
      cylinder({d:61, h:3, fn:128})
        .subtract(cylinder({d:60, h:5, fn:128})),
       sphere({r:30.75, fn:128})
        .subtract(sphere({r:30.25, fn:128}))
        .subtract(cube({size:[70,70,70], center:[1,1,0]}))
      ]);
}


function cover2() {
    return cube({size:[40,60+1.5-0.1,1.5], center:[1,0,0]})
        .union(cube({size:[37,60-1.5-0.1,2.5], center:[1,0,0]}).translate([0,0,-2.5]))
        .subtract(cube({size:[34,60-1.5-1.5,2.5], center:[1,0,0]}).translate([0,0,-2.5]))
        ;
}

function box2() {
    return cube({size:[40,60,1.5], center:[1,0,0]})
        .union(cube({size:[1.5,60,28.5], center:[1,0,0]}).translate([20-1.5/2,0,0]))
        .union(cube({size:[1.5,60,28.5], center:[1,0,0]}).translate([-(20-1.5/2),0,0]))

        .union(cube({size:[0.5,60,20], center:[1,0,0]}).translate([20-0.5/2-1.5-5,0,0]))
        .union(cube({size:[0.5,60,20], center:[1,0,0]}).translate([-(20-0.5/2-1.5-5),0,0]))

        .union(cube({size:[40,3,28.5], center:[1,0,0]}).translate([0,60,0]))
        .union(cube({size:[27,1,2], center:[1,0,0]}).translate([0,55,1.5]))
        .subtract(
            cube({size:[5,3,2.8],center:[1,0,0]}).translate([0,60,2])
            .union(cube({size:[5.2,3,2.8],center:[1,0,0]}).translate([8,60,2]))
            .union(cube({size:[5.2,3,2.8],center:[1,0,0]}).translate([-8,60,2]))
            )

        .union(cube({size:[40,10,30], center:[1,0,0]}).translate([0,-8.5,0]))
        .subtract(
            c1().rotateZ(180).translate([0,-2,10])
         );
}

function box() {
    return difference(
        cube([100,30,39]).center([1,1,0]),
        ps().translate([0,3.5,17]),
        sw().translate([12,-10.5,8]),
        nd().translate([-16,-12,17]),
        connector().translate([38,2,18]),
        connector().translate([-38,2,18]),
        cube([21,20,38]).center([1,1,0]).translate([ 38,2,26]),
        cube([21,20,38]).center([1,1,0]).translate([-38,2,26]),
        cube([5,3,38]).center([1,1,0]).translate([ 25,7,18]),
        cube([5,3,38]).center([1,1,0]).translate([ 25,-3,18]),
        cube([5,3,38]).center([1,1,0]).translate([-25,7,18]),
        cube([5,3,38]).center([1,1,0]).translate([-25,-3,18]),
        cube([100-2,30-2,38]).center([1,1,0]).translate([0,0,33])
        );
}

function connector() {
    return union([
        cube([21,18,8.5]).center([1,1,0]),
        cylinder({d:6,h:7.50}).translate([ 5, 5,8.5]),
        cylinder({d:6,h:7.50}).translate([ 5,-5,8.5]),
        cylinder({d:6,h:7.50}).translate([-5, 5,8.5]),
        cylinder({d:6,h:7.50}).translate([-5,-5,8.5]),
        cube([15,1,5]).center([1,1,0]).translate([0, 2,-5]),
        cube([15,1,5]).center([1,1,0]).translate([0,-2,-5]),
        cube([15,1,5]).center([1,1,0]).translate([0, 8,-5]),
        cube([15,1,5]).center([1,1,0]).translate([0,-8,-5]),
        cylinder({d:2,h:3}).rotateY(90).translate([ 10, 5,2.5]),
        cylinder({d:2,h:3}).rotateY(90).translate([ 10,-5,2.5]),
        cylinder({d:2,h:3}).rotateY(90).translate([-13, 5,2.5]),
        cylinder({d:2,h:3}).rotateY(90).translate([-13,-5,2.5]),
    ])
}

function ps() {
    return cube([25,5,20]).center([1,1,0]);
}

function sw() {
    return cube([25,6,20]).center([1,1,0]);
}

function nd() {
    return cube([27,4,20]).center([1,1,0]);
}

function part() {
    return union([
        box(),
    ]);
}

function cover() {
     return difference([
        cube([50,21,25]).center([1,1,0]),
        part2().center([1,1,0]).mirroredZ().translate([0,0,26]),
        cube([50-4,21-4,25]).center([1,1,0]).translate([0,0,1]),
        cube([50,21,25]).center([1,1,0]).translate([0,0,4]),
        ]);
  
}

function c1() {
    return union([
        intersection(
                cylinder({d:7.8,h:5}),
                cube([7.8,6.8,5]).center([1,1,0])
        ).translate([0,0,5]),
        cylinder({d:13,h:10}).translate([0,0,5+5]),
        cylinder({d1:10.2, d2:10,h:5}),
    ]).center([0,0,1]).rotateX(90)
}

function wire() {
    return union([
        cube([15,2.7,6]),
        cube([10,2.7,6]).translate([7.7,4,0]),
        cube([2.7,4,6]).translate([15,0,0]),
        cube([12,2.7,6]).translate([7.7,8,0]),
        cube([2.7,4,6]).translate([7.7,4,0]),
    ]);
}

function part2() {
    return union([
        difference([
            cube([50,21,25]).center([1,1,0]),
            cube([48,19,10]).center([1,1,0]).translate([0,0,21.5]),
        union([
        wire().translate([-25,-5,2]),
        cube([38,12.7,14]).translate([-20,-6.5,8]),
        c1().rotateZ(-90).translate([15,0,8]),
        nd().translate([-10.5,-10,2]),
        ps().translate([11.5,-10,2]),
        ]).center([0,1,0]),
         cube([14,5,5]).translate([-7,-7,18]),
         cube([12,8,10]).translate([-6,1,1]),
         ]),
   ]);
}
