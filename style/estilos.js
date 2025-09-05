window.onload = function() {
    // Configuração do gráfico
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Python/django', 'JavaScript', 'HTML/CSS', 'Wordpress', 'Bootstrap'],
            datasets: [{
                label: 'Nível de Habilidade',
                data: [100, 80, 100, 70, 100],
                backgroundColor: [
                    'rgba(99, 64, 255, 0.8)',
                    'rgba(60, 255, 0, 0.8)',
                    'rgba(255, 3, 150, 0.8)',
                    'rgba(255, 0, 0, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                borderColor: [
                    'rgba(99, 64, 255, 0.8)',
                    'rgba(60, 255, 0, 0.8)',
                    'rgba(255, 3, 150, 0.8)',
                    'rgba(255, 0, 0, 0.8)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 2,
                borderRadius: 5,
                barPercentage: 0.7,
                categoryPercentage: 0.5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgba(54, 54, 54, 1)',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Distribuição das Habilidades em Linguagens de Programação',
                    color: 'rgba(54, 54, 54, 1)',
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(54, 54, 54, 1)',
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(54, 54, 54, 1)',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    // Animação dos botões
    var buttons = document.querySelectorAll('.animate-button');
    var index = 0;

    function animateButtons() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });

        buttons[index].classList.add('active');
        index = (index + 1) % buttons.length;
    }

    setInterval(animateButtons, 500); // Alterna a animação a cada 1 segundo
};