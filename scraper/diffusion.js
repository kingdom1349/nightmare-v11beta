import axios from 'axios'
import fs from 'fs'

let headers = {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0Mjk1NDM3NTM5NjA2Mzg3MCwiZGV2aWNlSWQiOiIiLCJyZWZyZXNoVG9rZW4iOiIiLCJleHBpcmVUaW1lIjoyNTkyMDAwLCJleHAiOjE2OTg4NjU1MjR9.du-VYEt4vMC0A8h7b2pVf1ec8NtklxXQZjMwrkbupro",
    "Content-Type": "application/json",
    "cookie": "ta_token_prod=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0Mjk1NDM3NTM5NjA2Mzg3MCwiZGV2aWNlSWQiOiIiLCJyZWZyZXNoVG9rZW4iOiIiLCJleHBpcmVUaW1lIjoyNTkyMDAwLCJleHAiOjE2OTg4NjU1MjR9.du-VYEt4vMC0A8h7b2pVf1ec8NtklxXQZjMwrkbupro",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
  }

export async function diff(prompt, negativePrompt) {
  return new Promise(async (resolve, reject) => {
    axios("https://api.tensor.art/works/v1/works/task", {
      headers: headers,
      data: {
        "params": {
            "baseModel": {
             "modelId": "606685584192268852",
             "modelFileId": "606685584191220277"
         },
           "sdxl": {
          "refiner": false
      },
    "models": [],
    "sdVae": "vae-ft-mse-840000-ema-pruned.ckpt",
    "prompt": prompt,
    "negativePrompt": negativePrompt,
    "height": 768,
    "width": 512,
    "imageCount": 1,
    "steps": 28,
    "samplerName": "DPM++ SDE Karras",
    "images": [],
    "cfgScale": 5,
    "seed": "-1",
    "clipSkip": 2,
    "etaNoiseSeedDelta": 31337,
    "enableHr": true,
    "hrUpscaler": "4x-UltraSharp",
    "hrSecondPassSteps": 0,
    "denoisingStrength": 0.3,
    "hrResizeX": 512,
    "hrResizeY": 768
  },
  "credits": 1.11,
  "taskType": "TXT2IMG"
  },
      "method": "POST"
    }).then(a => {
      axios("https://api.tensor.art/works/v1/works/mget_task", {
        headers: headers,
        data: {
          ids: [a.data.data.task.taskId]
        },
        "method": "POST"
      }).then(yanz => {
        resolve(yanz.data.data.tasks);
      });
    });
  });
};