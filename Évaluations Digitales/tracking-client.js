'use strict';
const evaluationId=document.querySelector('meta[name=eval-id]').content;
let studentCode='', attemptId='', pending=null;
const statusEl=document.getElementById('accessStatus');
async function request(data){
 const endpoint=window.S1S_TRACKING?.endpoint;
 if(!endpoint)throw Error('La collecte sera disponible après activation par l’enseignant.');
 const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(data),signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error('Connexion indisponible. Réessayez.');
 const result=await response.json();if(!result.ok)throw Error(result.error||'Enregistrement refusé.');return result;
}
function save(){if(!studentCode)return;try{localStorage.setItem(evaluationId+':'+studentCode,JSON.stringify({votes,attemptId,pending}));}catch{}}
document.getElementById('login').onclick=async()=>{
 const button=document.getElementById('login');button.disabled=true;
 try{
 studentCode=document.getElementById('accessCode').value.trim().toLowerCase();
 if(!/^s1s\d{4}$/.test(studentCode))throw Error('Saisissez votre code s1s suivi de quatre chiffres.');
 await request({action:'login',code:studentCode,evalId:evaluationId});
 attemptId=crypto.randomUUID();
 try{const old=JSON.parse(localStorage.getItem(evaluationId+':'+studentCode));if(old){votes=old.votes||{};attemptId=old.attemptId||attemptId;pending=old.pending||null;}}catch{}
 window.studentReady=true;document.getElementById('access').hidden=true;document.getElementById('activity').hidden=false;render();
 }catch(e){statusEl.textContent=e.message;}finally{button.disabled=false;}
};
document.addEventListener('click',save);document.addEventListener('keyup',save);
document.getElementById('sendAnswers').onclick=async()=>{
 const button=document.getElementById('sendAnswers'),receipt=document.getElementById('receipt');button.disabled=true;
 try{
 if(!pending){pending={action:'submit',code:studentCode,evalId:evaluationId,submissionId:attemptId,answers:quiz.map((q,i)=>votes[i])};save();}
 const result=await request(pending);receipt.textContent='Enregistré — reçu '+result.receipt+' • '+result.score+' / '+result.maximum;
 }catch(e){receipt.textContent='Non confirmé : '+e.message+' Vos réponses restent conservées sur cet appareil.';}finally{button.disabled=false;}
};
document.getElementById('resetBtn').onclick=()=>{if(pending){alert('Cette tentative a déjà été envoyée ou attend confirmation.');return;}if(confirm('Recommencer ?')){votes={};idx=0;revealed={};attemptId=crypto.randomUUID();save();render();}};
if(!window.S1S_TRACKING?.endpoint)statusEl.textContent='Collecte en attente d’activation par l’enseignant.';
