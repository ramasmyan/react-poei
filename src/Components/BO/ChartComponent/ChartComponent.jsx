import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './ChartComponent.scss';

function ChartComponent(props) {

  useEffect(() => {
    const orderData = props.orders.map((order) => {
      return {
        month: new Date(order.createdAt).toLocaleString('en-US', { month: 'long' }),
        totalProfit: order.totalPrice,
      };
    });

    // Organiser les données par mois
    const dataByMonth = orderData.reduce((acc, order) => {
      const { month, totalProfit } = order;
      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month] += totalProfit;
      return acc;
    }, {});

    // Créer des tableaux pour les labels des mois et les bénéfices
    const months = Object.keys(dataByMonth);
    const profits = Object.values(dataByMonth);

    // Créer le graphique
    const ctx = document.getElementById('profitChart').getContext('2d');
    const existingChart = Chart.getChart(ctx); // Obtenez le graphique existant

    // Détruisez le graphique existant s'il y en a un
    if (existingChart) {
      existingChart.destroy();
    }
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Total des bénéfices par mois',
            data: profits,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

        // Code pour le graphique du nombre de produits par marque
        const productData = props.products.reduce((acc, product) => {
          const { brand } = product;
          if (!acc[brand]) {
            acc[brand] = 0;
          }
          acc[brand]++;
          return acc;
        }, {});
    
        // Créer des tableaux pour les labels des marques et le nombre de produits
        const brands = Object.keys(productData);
        const productCounts = Object.values(productData);
    
        // Créer le graphique pour le nombre de produits par marque
        const productChartCtx = document.getElementById('productChart').getContext('2d');
        const existingProductChart = Chart.getChart(productChartCtx);
    
        if (existingProductChart) {
          existingProductChart.destroy();
        }

        new Chart(productChartCtx, {
          type: 'bar',
          data: {
            labels: brands,
            datasets: [
              {
                label: 'Nombre de produits par marque',
                data: productCounts,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
    
  }, [props.orders, props.products]);

  return (
    <div>
            <div className='d-flex justify-content-around'>
              <div style={{ width: '600px', height: '350px', marginBottom: '20px' }}>
                <canvas id="profitChart"></canvas>
              </div>
              <div style={{ width: '600px', height: '350px' }}>
                <canvas id="productChart"></canvas>
              </div>
            </div>
    </div>
  );
}

export default ChartComponent;
