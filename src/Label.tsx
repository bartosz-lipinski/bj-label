import React from 'react';
import logo from './logo.svg';
import './App.css';
import QRCodeImpl from "qr.js/lib/QRCode";


function Label({ index, total, url } : { index: number, total: number, url: string }) {
   
  const qrcode = new QRCodeImpl(-1, 0);
  qrcode.addData(url);
  qrcode.make();
  const cells: any[] = qrcode.modules;
  const tileSize = 512 / cells.length;
  const fontStyle = { fontSize: 40, fontWeight: 700 };
  //<path d={d} fill={fill} transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`} />


  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="192" height="288" viewBox="0 0 600 460"  x="0px" y="0px" origin="0 0" style={{ border: '1px solid black', fontFamily: 'Arial' }}>
      <g transform='scale(2) translate(-28, -90)'>
        <path transform='scale(1.2) translate(-90, -95) ' d="M 216.181 111.657 C 215.601 110.517 214.861 109.507 213.851 108.697 C 211.091 106.477 208.031 105.717 204.641 106.967 C 202.791 107.647 201.341 108.927 200.101 110.447 C 199.791 110.827 199.611 110.827 199.301 110.457 C 198.581 109.587 197.781 108.817 196.861 108.147 C 196.071 107.577 195.241 107.107 194.331 106.797 C 191.011 105.667 186.881 106.907 184.491 109.727 C 182.921 111.587 182.241 113.757 182.241 116.227 C 182.211 116.857 182.291 117.527 182.431 118.207 C 182.991 120.937 184.281 123.327 185.941 125.527 C 187.811 127.997 190.071 130.087 192.441 132.067 C 194.601 133.877 196.921 135.467 199.281 136.987 C 199.521 137.147 199.711 137.197 200.031 137.007 C 201.091 136.387 202.111 135.697 203.131 134.997 C 205.651 133.267 208.001 131.347 210.201 129.227 C 212.241 127.257 214.041 125.107 215.381 122.597 C 216.401 120.687 217.111 118.677 217.191 116.497 C 217.231 114.817 216.961 113.177 216.181 111.657 Z" 
              style={{ fill: 'rgb(218, 20, 25)' }}></path>
        <text x="170" y="40" style={{ fontSize: 28, fontWeight: 900 }}>B + J</text>
      </g>
      <text x="170" y="10" style={fontStyle}>Edition</text>
      <text x="320" y="10" style={fontStyle}>{index}/{total}</text>

      <text x="165" y="95" style={fontStyle}>https://BJ.XYZ</text>
      <text x="116" y="150" style={fontStyle}>CLAIM UNIQUE NFT</text>
      
      <g x="50" y="100" transform='translate(95, 190) scale(0.8)'>
        {cells.map((row: any[], rowIndex) =>
          row.map((cell, cellIndex) => {
            const fill = cell ? 'white' : 'black';
            const transformX = Math.round(cellIndex * tileSize);
            const transformY = Math.round(rowIndex * tileSize);
            const qrItemWidth = Math.round((cellIndex + 1) * tileSize) - transformX;
            const qrItemHeight = Math.round((rowIndex + 1) * tileSize) - transformY;
            const d = `M 0 0 L ${qrItemWidth} 0 L ${qrItemWidth} ${qrItemHeight} L 0 ${qrItemHeight} Z`;
            return (
              <path d={d} fill={fill} transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`} />
            );
          })
        )}
      </g>
    </svg>
  );
}

export default Label;
