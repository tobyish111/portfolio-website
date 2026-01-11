# Custom Domain Setup for GitHub Pages

Follow these steps in order to configure your custom domain:

## Step 1: Create CNAME File

1. In your `public/` folder, create a file named `CNAME` (no extension)
2. Add your domain to it (e.g., `yourdomain.com` or `www.yourdomain.com`)

**IMPORTANT**: Choose ONE format:
- `yourdomain.com` (apex/naked domain)
- `www.yourdomain.com` (www subdomain)

## Step 2: Configure DNS in Cloudflare

### For `www.yourdomain.com` (Recommended - Easier):
1. Go to Cloudflare Dashboard → Your Domain → DNS
2. Add a **CNAME** record:
   - **Name**: `www`
   - **Target**: `YOUR_GITHUB_USERNAME.github.io` (replace with your actual username)
   - **Proxy status**: DNS only (gray cloud) - Important!
   - **TTL**: Auto
3. Click Save

### For `yourdomain.com` (Apex domain):
Cloudflare uses "CNAME Flattening" automatically. Add:
1. Go to Cloudflare Dashboard → Your Domain → DNS
2. Add a **CNAME** record:
   - **Name**: `@`
   - **Target**: `YOUR_GITHUB_USERNAME.github.io`
   - **Proxy status**: DNS only (gray cloud)
   - **TTL**: Auto
3. Click Save

## Step 3: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours to propagate
- Usually takes 15-30 minutes with Cloudflare
- Check DNS propagation: https://dnschecker.org

## Step 4: Verify DNS is Working

Before adding to GitHub, verify DNS resolves correctly:

```bash
# For www subdomain
nslookup www.yourdomain.com

# For apex domain
nslookup yourdomain.com
```

It should return GitHub Pages IP addresses or CNAME to github.io

## Step 5: Add Domain in GitHub Pages

**Only after DNS is configured and propagated:**

1. Go to your GitHub repository
2. Settings → Pages
3. Under "Custom domain", enter your domain
4. Click "Save"
5. Check "Enforce HTTPS" (available after DNS propagates)

## Troubleshooting

### Error: "Domain doesn't resolve to GitHub Pages server"
- **Cause**: DNS not configured yet or hasn't propagated
- **Fix**: Complete Steps 2-3 first, wait for DNS propagation, then try again

### DNS Check Tips:
- Use https://dnschecker.org to check global DNS propagation
- Wait at least 15 minutes after configuring DNS
- Make sure CNAME points to `username.github.io` (not the repo URL)

### Cloudflare Proxy (Orange Cloud):
- **Must be OFF (gray cloud)** for the CNAME record
- GitHub Pages needs direct DNS, not Cloudflare proxy
- You can proxy other records, but not the main domain record

## Example Configuration

If your GitHub username is `tobybuckmaster` and domain is `example.com`:

**DNS Record**:
- Name: `@` or `www`
- Target: `tobybuckmaster.github.io`
- Proxy: OFF (gray cloud)

**CNAME file**:
```
example.com
```
or
```
www.example.com
```
