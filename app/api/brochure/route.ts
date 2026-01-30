import { NextRequest, NextResponse } from 'next/server';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1446202104963268723/h0diHEYpUO9cqgZ0aTKSsbtq0ZEZx4l-M7AqdPFzHCI8AcNlMRHb5J3eec_2NXr9_Pwx';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, role, employees, message } = body;

    // Validate required fields
    if (!name || !email || !company || !role || !employees) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format message for Discord
    const discordMessage = {
      embeds: [
        {
          title: '📋 Nieuwe Brochure Aanvraag',
          color: 0x1e40af, // Blue color
          fields: [
            {
              name: '👤 Naam',
              value: name,
              inline: true,
            },
            {
              name: '📧 E-mail',
              value: email,
              inline: true,
            },
            {
              name: '🏢 Organisatie',
              value: company,
              inline: true,
            },
            {
              name: '💼 Functie',
              value: role,
              inline: true,
            },
            {
              name: '👥 Aantal medewerkers',
              value: employees,
              inline: true,
            },
            ...(phone ? [{
              name: '📞 Telefoon',
              value: phone,
              inline: true,
            }] : []),
            ...(message ? [{
              name: '💬 Bericht',
              value: message,
              inline: false,
            }] : []),
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'Front Runners Website',
          },
        },
      ],
    };

    // Send to Discord
    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });

    if (!discordResponse.ok) {
      console.error('Discord webhook error:', await discordResponse.text());
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
