export const defaultGraph = {
  "last_node_id": 51,
  "last_link_id": 89,
  "nodes": [
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        672,
        573
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            40
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "a portrait of a duc who has a sign around its nec which says \"Flux under 12GB VRAM\" in the style of vincent van gogh, heavy brushwork, impasto, painted with a palate knife"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        2700,
        -20
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 24
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            88
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        3290,
        260
      ],
      "size": {
        "0": 686.9293823242188,
        "1": 1089.4158935546875
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 88
        }
      ],
      "properties": {},
      "widgets_values": [
        "flux/ComfyUI"
      ]
    },
    {
      "id": 10,
      "type": "VAELoader",
      "pos": [
        71,
        509
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            12
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "ae.sft"
      ]
    },
    {
      "id": 11,
      "type": "DualCLIPLoader",
      "pos": [
        131,
        238
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            10
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        "t5xxl_fp16.safetensors",
        "clip_l.safetensors",
        "flux"
      ]
    },
    {
      "id": 12,
      "type": "UNETLoader",
      "pos": [
        151,
        14
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            38,
            39
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "flux1-schnell.sft",
        "t5xxl_fp16"
      ]
    },
    {
      "id": 13,
      "type": "SamplerCustomAdvanced",
      "pos": [
        2250,
        400
      ],
      "size": {
        "0": 355.20001220703125,
        "1": 106
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "noise",
          "type": "NOISE",
          "link": 86,
          "slot_index": 0
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 30,
          "slot_index": 1
        },
        {
          "name": "sampler",
          "type": "SAMPLER",
          "link": 19,
          "slot_index": 2
        },
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 60,
          "slot_index": 3
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 89,
          "slot_index": 4
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            24
          ],
          "slot_index": 0,
          "shape": 3
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "SamplerCustomAdvanced"
      }
    },
    {
      "id": 16,
      "type": "KSamplerSelect",
      "pos": [
        1370,
        -160
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "SAMPLER",
          "type": "SAMPLER",
          "links": [
            19
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "KSamplerSelect"
      },
      "widgets_values": [
        "euler"
      ]
    },
    {
      "id": 17,
      "type": "BasicScheduler",
      "pos": [
        1260,
        690
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 38,
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "SIGMAS",
          "type": "SIGMAS",
          "links": [
            59
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "BasicScheduler"
      },
      "widgets_values": [
        "normal",
        4,
        1
      ]
    },
    {
      "id": 22,
      "type": "BasicGuider",
      "pos": [
        1690,
        300
      ],
      "size": {
        "0": 241.79998779296875,
        "1": 46
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 39,
          "slot_index": 0
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 40,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            30
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "BasicGuider"
      }
    },
    {
      "id": 38,
      "type": "SplitSigmas",
      "pos": [
        1650,
        590
      ],
      "size": {
        "0": 315,
        "1": 78
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 59
        }
      ],
      "outputs": [
        {
          "name": "high_sigmas",
          "type": "SIGMAS",
          "links": [],
          "slot_index": 0,
          "shape": 3
        },
        {
          "name": "low_sigmas",
          "type": "SIGMAS",
          "links": [
            60
          ],
          "slot_index": 1,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "SplitSigmas"
      },
      "widgets_values": [
        0
      ]
    },
    {
      "id": 50,
      "type": "RandomNoise",
      "pos": [
        1630,
        1010
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "NOISE",
          "type": "NOISE",
          "links": [
            86
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "RandomNoise"
      },
      "widgets_values": [
        598338437297154,
        "randomize"
      ]
    },
    {
      "id": 51,
      "type": "EmptyLatentImage",
      "pos": [
        199,
        -195
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            89
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        576,
        1
      ]
    }
  ],
  "links": [
    [
      10,
      11,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      12,
      10,
      0,
      8,
      1,
      "VAE"
    ],
    [
      19,
      16,
      0,
      13,
      2,
      "SAMPLER"
    ],
    [
      24,
      13,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      30,
      22,
      0,
      13,
      1,
      "GUIDER"
    ],
    [
      38,
      12,
      0,
      17,
      0,
      "MODEL"
    ],
    [
      39,
      12,
      0,
      22,
      0,
      "MODEL"
    ],
    [
      40,
      6,
      0,
      22,
      1,
      "CONDITIONING"
    ],
    [
      59,
      17,
      0,
      38,
      0,
      "SIGMAS"
    ],
    [
      60,
      38,
      1,
      13,
      3,
      "SIGMAS"
    ],
    [
      86,
      50,
      0,
      13,
      0,
      "NOISE"
    ],
    [
      88,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      89,
      51,
      0,
      13,
      4,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 2.357947691000002,
      "offset": [
        -1816.4765874567797,
        -629.4805996643654
      ]
    }
  },
  "version": 0.4
}

