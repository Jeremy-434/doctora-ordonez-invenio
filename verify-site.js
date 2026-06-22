import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

async function verify() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('🔍 Navigating to localhost:4321...');
    await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });

    console.log('✅ Page loaded');

    // Take screenshot of hero/header
    await page.screenshot({ path: '/tmp/hero.png', fullPage: false });
    console.log('📸 Hero section captured at /tmp/hero.png');

    // Wait for animations
    await page.waitForTimeout(2000);

    // Check for key content
    const brandName = await page.textContent('header');
    console.log('📝 Header text found:', brandName ? 'yes' : 'no');
    if (brandName) console.log('   Content:', brandName.substring(0, 100).trim());

    const heroText = await page.textContent('h1');
    console.log('📝 Hero headline found:', heroText ? 'yes' : 'no');
    if (heroText) console.log('   Content:', heroText.substring(0, 100).trim());

    // Scroll down to see services
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/tmp/services.png', fullPage: false });
    console.log('📸 Services section captured at /tmp/services.png');

    // Check footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/tmp/footer.png', fullPage: false });
    console.log('📸 Footer captured at /tmp/footer.png');

    // Get page title
    const title = await page.title();
    console.log('📄 Page title:', title);

    // Get all text content to verify names
    const pageText = await page.content();
    const hasIleynne = pageText.includes('Ileynne');
    const hasOrdonez = pageText.includes('Ordoñez');
    const hasDraIleynne = pageText.includes('Dra. Ileynne');
    const hasNoLiliana = !pageText.includes('Liliana');
    const hasNoCastillo = !pageText.includes('Castillo');

    console.log('\n✅ Content verification:');
    console.log('  ✓ Contains "Ileynne":', hasIleynne);
    console.log('  ✓ Contains "Ordoñez":', hasOrdonez);
    console.log('  ✓ Contains "Dra. Ileynne":', hasDraIleynne);
    console.log('  ✓ No old "Liliana" name:', hasNoLiliana);
    console.log('  ✓ No old "Castillo" name:', hasNoCastillo);

    if (hasDraIleynne && hasIleynne && hasOrdonez && hasNoLiliana && hasNoCastillo) {
      console.log('\n✅ VERIFICATION PASSED: All content updated successfully');
    } else {
      console.log('\n❌ VERIFICATION FAILED: Some content may not be updated');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

verify();
