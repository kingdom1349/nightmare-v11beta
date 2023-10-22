import axios from "axios"
import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
  var rose = 'Rk-ReiiGanteng'
  const payloads = {
    prompt: text,
    width: 512,
    height: 768,
    steps: 25,
    model_id: "realisian",
    sampler: "DDIM",
    seed: null,
    cfg: 7.5,
    image_num: 1,
    negative_prompt: "ugly, ugly eyes, ugly face, deformed eyes, multi body, deformed body, disfigured, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, deformed hands, deformed eyes, multi body, deformed body, disfigured, bad art, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, blurry, watermark, low res, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, two heads, three heads, out of frame, disfigured, low-res, Deformed, blurry, bad anatomy, poorly drawn face, mutation, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn", // something you dont want to appear in the image
    safety_checker: "no",
    enhance_prompt: "yes",
    multi_lingual: "yes",
    clip_skip: 2,
    panorama: "no",
    lora_model: "more_details",
    hiresFix: "no",
    lora_strength: 1,
    embeddings_model: "",
    webhook: null,
  };
  
    m.reply(wait)

  try {
    const { data } = await axios.request({
      baseURL: "https://api.itsrose.life",
      url: "/image/diffusion/txt2img",
      method: "POST",
      params: {
        apikey: rose,
      },
      data: payloads,
    }).catch((e) => e?.response)

    const { status, message, result } = data;

    if (!status) {
      m.reply(message);
    } else {
    const { images, metadata, generation_time } = result;
    let second = result.generation_time.toFixed()
    let model = metadata.model_id;
    let schedule = metadata.scheduler;
    let tip = result.tips
    let w = metadata.W;
    let h = metadata.H;
    let cfg = metadata.guidance_scale;
    let step = metadata.steps;
    let seed = metadata.seed;
    let streng = metadata.clip_skip
    
    
    let medata = `*Generating Time*: ${second} second
*prompt*: ${text}
*model_id*: ${model}
*scheduler*: ${schedule}
*W*: ${w}
*H*: ${h}
*guidance_scale*: ${cfg}
*steps*: ${step}
*seed*: ${seed}
*clip_skip*: ${streng}`;
    await m.reply(medata);
   
      for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 1000);
      });
    }
    }
  } catch (error) {
    console.error(error);
    conn.reply(nomorown + "@s.whatsapp.net", "Terjadi kesalahan.", m);
  }
};

handler.command = handler.help = ['txt2img'];
handler.tags = ['internet'];
handler.premium = true;
handler.limit = true;

export default handler