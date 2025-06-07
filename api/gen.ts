import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiUrl = 'https://tempmail.bjcoderx.workers.dev/gen';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok') {
      res.status(200).json({
        status: 'success',
        email: data.mail,
        credit: {
          provider: 'https://t.me/treasure_king_tk',
          vip: 'https://t.me/+CZui8RQStGlkNGVl',
          author: 'https://t.me/IslamTanvir0',
        }
      });
    } else {
      res.status(500).json({ status: 'fail', message: 'Failed to generate email.' });
    }
  } catch (err) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
}
