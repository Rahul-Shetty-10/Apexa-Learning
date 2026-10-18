
(function(){
  var WA='916360453928';
  function wa(text){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(text)}
  document.getElementById('wa9').href=wa('Hello HRB Apexa Learning, I would like to enquire about Class 9 Mathematics (Karnataka State Board) classes.');
  document.getElementById('wa10').href=wa('Hello HRB Apexa Learning, I would like to enquire about Class 10 Mathematics (Karnataka State Board) classes.');
  document.getElementById('waTime').href=wa('Hello HRB Apexa Learning, could you please share the current batch timings and available places?');
  document.getElementById('yr').textContent=new Date().getFullYear();

  /* mobile menu */
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  function setMenu(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')}
  burger.addEventListener('click',function(){setMenu(!menu.classList.contains('open'))});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});

  /* reveal */
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
  } else els.forEach(function(el){el.classList.add('in')});

  /* graph playground */
  var g=document.getElementById('graph'),W=400,H=300,X0=-6,X1=6,Y0=-8,Y1=10;
  var sx=function(x){return (x-X0)/(X1-X0)*W}, sy=function(y){return H-(y-Y0)/(Y1-Y0)*H};
  var A=document.getElementById('sa'),B=document.getElementById('sb'),C=document.getElementById('sc');
  function fmt(n){return (Math.round(n*100)/100).toString().replace('-','−')}
  function render(){
    var a=+A.value,b=+B.value,c=+C.value,s='';
    document.getElementById('oa').textContent=a;document.getElementById('ob').textContent=b;document.getElementById('oc').textContent=c;
    for(var x=X0;x<=X1;x++)s+='<line x1="'+sx(x)+'" y1="0" x2="'+sx(x)+'" y2="'+H+'" stroke="#363A68"/>';
    for(var y=Math.ceil(Y0);y<=Y1;y++)s+='<line x1="0" y1="'+sy(y)+'" x2="'+W+'" y2="'+sy(y)+'" stroke="#363A68"/>';
    s+='<line x1="'+sx(0)+'" y1="0" x2="'+sx(0)+'" y2="'+H+'" stroke="#FFFFFF" stroke-width="1.5"/><line x1="0" y1="'+sy(0)+'" x2="'+W+'" y2="'+sy(0)+'" stroke="#FFFFFF" stroke-width="1.5"/>';
    var d='';
    for(var i=0;i<=240;i++){var x=X0+(X1-X0)*i/240,y=a*x*x+b*x+c;y=Math.max(Y0-4,Math.min(Y1+4,y));d+=(i?'L':'M')+sx(x).toFixed(1)+' '+sy(y).toFixed(1)}
    var facts=[];
    if(a===0){
      s+='<path d="'+d+'" fill="none" stroke="#14D6C2" stroke-width="3.5" stroke-linecap="round"/>';
      if(b!==0){var r=-c/b;facts.push('Straight line (a = 0)','Root: x = '+fmt(r));if(Math.abs(r)<=6)s+='<circle cx="'+sx(r)+'" cy="'+sy(0)+'" r="6" fill="#FFD66B" stroke="#FFFFFF" stroke-width="2"/>'}
      else facts.push('Constant line y = '+c);
    } else {
      s+='<path d="'+d+'" fill="none" stroke="#14D6C2" stroke-width="3.5" stroke-linecap="round"/>';
      var D=b*b-4*a*c,vx=-b/(2*a),vy=a*vx*vx+b*vx+c;
      if(Math.abs(vx)<=6&&vy>=Y0&&vy<=Y1)s+='<circle cx="'+sx(vx)+'" cy="'+sy(vy)+'" r="5" fill="#14D6C2" stroke="#FFFFFF" stroke-width="2"/>';
      facts.push('Opens '+(a>0?'upward':'downward'),'Vertex ('+fmt(vx)+', '+fmt(vy)+')');
      if(D>0){var r1=(-b-Math.sqrt(D))/(2*a),r2=(-b+Math.sqrt(D))/(2*a);facts.push('Roots: '+fmt(r1)+' and '+fmt(r2));[r1,r2].forEach(function(r){if(Math.abs(r)<=6)s+='<circle cx="'+sx(r)+'" cy="'+sy(0)+'" r="6" fill="#FFD66B" stroke="#FFFFFF" stroke-width="2"/>'})}
      else if(D===0){facts.push('One repeated root: x = '+fmt(vx));if(Math.abs(vx)<=6)s+='<circle cx="'+sx(vx)+'" cy="'+sy(0)+'" r="6" fill="#FFD66B" stroke="#FFFFFF" stroke-width="2"/>'}
      else facts.push('No real roots');
    }
    g.innerHTML=s;
    var t='y = ';
    if(a!==0)t+=(a===1?'':a===-1?'−':fmt(a))+'x²';
    if(b!==0)t+=(t==='y = '?'':b>0?' + ':' − ')+(Math.abs(b)===1?'':Math.abs(b))+'x';
    if(c!==0||t==='y = ')t+=(t==='y = '?fmt(c):(c>0?' + ':' − ')+Math.abs(c));
    document.getElementById('eq').textContent=t;
    document.getElementById('facts').innerHTML=facts.map(function(f){return '<span>'+f+'</span>'}).join('');
  }
  [A,B,C].forEach(function(el){el.addEventListener('input',render)});render();

  /* enquiry form → WhatsApp (nothing is sent until user presses Send in WhatsApp) */
  var form=document.getElementById('form'),status=document.getElementById('status');
  function bad(id,on){document.getElementById(id).classList.toggle('bad',on)}
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('name').value.trim(),
        parent=document.getElementById('parent').value.trim(),
        cls=document.getElementById('cls').value,
        phone=document.getElementById('phone').value.trim(),
        msg=document.getElementById('msg').value.trim();
    var digits=phone.replace(/[\s\-()]/g,'').replace(/^\+?91/,'');
    var ok=true;
    var vN=name.length>0,vC=!!cls,vP=/^[6-9]\d{9}$/.test(digits)||/^\d{10}$/.test(digits);
    bad('f-name',!vN);bad('f-class',!vC);bad('f-phone',!vP);
    document.getElementById('name').setAttribute('aria-invalid',!vN);
    document.getElementById('cls').setAttribute('aria-invalid',!vC);
    document.getElementById('phone').setAttribute('aria-invalid',!vP);
    if(!(vN&&vC&&vP)){
      status.className='status';
      (!vN?document.getElementById('name'):!vC?document.getElementById('cls'):document.getElementById('phone')).focus();
      return;
    }
    var text='Hello HRB Apexa Learning, I would like to enquire about '+cls+' Mathematics.\n\nStudent name: '+name+(parent?'\nParent/guardian: '+parent:'')+'\nClass: '+cls+'\nPhone: '+phone+(msg?'\nMessage: '+msg:'');
    window.open(wa(text),'_blank','noopener');
    status.textContent='WhatsApp should now be open with your enquiry filled in. Please press Send in WhatsApp to deliver it. Your enquiry has not been sent until you do. If WhatsApp did not open, use the WhatsApp button or call +91 6360453928.';
    status.className='status show';
  });
  ['name','cls','phone'].forEach(function(id){document.getElementById(id).addEventListener('input',function(){bad({name:'f-name',cls:'f-class',phone:'f-phone'}[id],false)})});
})();


(function(){
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header=document.querySelector('header.site'),queued=false;
  function progress(){var length=document.documentElement.scrollHeight-innerHeight;header.style.setProperty('--page-progress',length>0?Math.min(1,Math.max(0,scrollY/length)):0);queued=false}
  function schedule(){if(!queued){queued=true;requestAnimationFrame(progress)}}
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);progress();
  if(!reduced){
    document.querySelectorAll('.cards2').forEach(function(group){group.querySelectorAll('.reveal').forEach(function(card,i){card.style.setProperty('--reveal-delay',Math.min(i,3)*90+'ms')})});
    if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){
      document.querySelectorAll('#about .diff,.price,.sched,.f-card,.mini').forEach(function(card){card.addEventListener('pointermove',function(e){var rect=card.getBoundingClientRect();card.style.setProperty('--pointer-x',e.clientX-rect.left+'px');card.style.setProperty('--pointer-y',e.clientY-rect.top+'px')})});
    }
  }
  var links=Array.from(document.querySelectorAll('header.site .links a[href^="#"]'));
  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){links.forEach(function(link){if(link.getAttribute('href')==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -60% 0px',threshold:0});
    document.querySelectorAll('section[id]').forEach(function(section){observer.observe(section)});
  }
})();
