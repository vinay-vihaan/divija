// // src/app/api/contact/route.ts
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const response = await fetch('https://divija.vihaandigitals.com/wp-json/wp/v2/project', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     });

//     const contentType = response.headers.get('content-type') || '';
//     const text = await response.text();

//     if (!contentType.includes('application/json')) {
 
//       console.error(text);
//       return NextResponse.json({ error: 'Invalid response from Google Apps Script' }, { status: 500 });
//     }

//     const data = JSON.parse(text);
//     console.log('Parsed GAS response:', data);

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Unexpected API error:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


