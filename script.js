document.getElementById('playButton').addEventListener('click', () => {
    const stage = document.querySelector('.stage');
    const button = document.getElementById('playButton');
    
    // Adiciona a classe para abrir as cortinas
    stage.classList.add('open');
    
    // Esconde o botão gradualmente
    button.classList.add('hidden');
    
    // Espera o término da animação para mudar o conteúdo
    setTimeout(() => {
      document.body.innerHTML = `
         <div style="text-align: center; margin: 50px 40px ; color: #fff; width: 90%; height: 730px; text-align: justify; font-size: 17px; ">
          <h1>Gratidão! <hr></h1>
          <p>Aos queridos líderes ELIETE e ARILSON,

Queremos expressar nossa mais profunda gratidão a vocês, que têm sido exemplos vivos de dedicação, respeito e amor na obra do Senhor Jesus Cristo. Através de suas vidas comprometidas e de sua entrega sincera, vocês demonstraram o que significa servir ao Reino de Deus com excelência e humildade.

O zelo com que cuidam das responsabilidades e o carinho com que conduzem cada passo dessa caminhada inspiram a todos nós a perseverar e a nos aproximar ainda mais de Cristo. Vocês são verdadeiros instrumentos nas mãos do Senhor, trazendo luz, liderança e direção direcionada aos que os cercam.

Que Deus continue abençoando suas vidas, suas famílias e seu ministério, renovando suas forças a cada dia. Que Ele os recompense abundantemente por tudo o que fazem para a edificação da Sua obra. <br>

Com gratidão e amor em Cristo,
LIDERADOS.</p>
        </div>
      `;
    }, 4000); // Tempo deve coincidir com o CSS (2s)
  });
  