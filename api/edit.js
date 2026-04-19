export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  try {
    const response = await fetch('https://hooks.zapier.com/hooks/catch/26760206/u7mvskt/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req.body)
    });
    
    if (!response.ok) {
      return res.status(502).json({error: 'Zapier webhook failed'});
    }
    
    return res.status(200).json({success: true});
  } catch (err) {
    return res.status(500).json({error: err.message});
  }
}
