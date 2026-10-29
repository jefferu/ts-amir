<?php
/**
 * Backend E-Mail Dispatcher for Tennisschule Amir (ts-amir.de)
 * Receives JSON-encoded form data and sends formatted HTML & plain-text emails to info@ts-amir.de.
 */

// Allow POST requests only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

header('Content-Type: application/json; charset=UTF-8');

// Read raw JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON input']);
    exit;
}

// Honeypot spam check (if bot filled hidden field)
if (!empty($data['website_url'])) {
    // Silently succeed for bots
    echo json_encode(['success' => true]);
    exit;
}

// Sanitize fields
$name = htmlspecialchars(trim($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$program = htmlspecialchars(trim($data['program'] ?? 'Allgemeine Anfrage'), ENT_QUOTES, 'UTF-8');
$ageGroup = htmlspecialchars(trim($data['ageGroup'] ?? 'Nicht angegeben'), ENT_QUOTES, 'UTF-8');
$skillLevel = htmlspecialchars(trim($data['skillLevel'] ?? 'Nicht angegeben'), ENT_QUOTES, 'UTF-8');
$location = htmlspecialchars(trim($data['location'] ?? 'SG Weiterstadt Tennis'), ENT_QUOTES, 'UTF-8');
$notes = htmlspecialchars(trim($data['notes'] ?? '-'), ENT_QUOTES, 'UTF-8');

// Basic validation
if (empty($name) || empty($phone) || !$email) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Bitte Name, Telefonnummer und eine gültige E-Mail-Adresse angeben.']);
    exit;
}

// Map age group readable
$ageMap = [
    'kids' => 'Kids (5 – 8 Jahre)',
    'jugend' => 'Jugend (9 – 17 Jahre)',
    'erwachsene' => 'Erwachsene (ab 18)',
];
$ageGroupText = $ageMap[$ageGroup] ?? $ageGroup;

// Map skill level readable
$skillMap = [
    'anfaenger' => 'Anfänger',
    'wiedereinsteiger' => 'Wiedereinsteiger',
    'fortgeschritten' => 'Fortgeschritten',
    'turnierspieler' => 'Turnier- / Mannschaftsspieler',
];
$skillLevelText = $skillMap[$skillLevel] ?? $skillLevel;

// Recipient & Subject
$to = 'info@ts-amir.de';
$subject = "Neue Anfrage Website: {$program} – {$name}";

// Email Body (HTML)
$htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Neue Anfrage - Tennisschule Amir</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #0a192f; padding: 24px; color: #ffffff;">
            <div style="color: #a3e635; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                Tennisschule Amir – Website-Anfrage
            </div>
            <h1 style="margin: 0; font-size: 20px; font-weight: bold; color: #ffffff;">
                {$program}
            </h1>
        </div>
        <div style="padding: 24px;">
            <p style="font-size: 14px; color: #475569; margin-top: 0;">
                Über das Online-Formular auf <strong>ts-amir.de</strong> ist eine neue Anfrage eingegangen:
            </p>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 140px;"><strong>Name:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">{$name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Telefon:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="tel:{$phone}" style="color: #0284c7; text-decoration: none; font-weight: bold;">{$phone}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>E-Mail:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:{$email}" style="color: #0284c7; text-decoration: none; font-weight: bold;">{$email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Angebot:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">{$program}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Altersgruppe:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">{$ageGroupText}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Spielstärke:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">{$skillLevelText}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Standort:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">{$location}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: #64748b; vertical-align: top;"><strong>Nachricht / Wunsch:</strong></td>
                    <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">{$notes}</td>
                </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                Direkt antworten: Klicke in deinem Mail-Programm einfach auf "Antworten", um {$name} direkt zu schreiben.
            </div>
        </div>
    </div>
</body>
</html>
HTML;

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Tennisschule Amir Website <noreply@ts-amir.de>';
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Send email
$sent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    // If mail fails, return error code so frontend can handle fallback
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail konnte nicht versendet werden.']);
}
