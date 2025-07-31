# Authentication Setup

This server includes simple API key-based authentication with a scalable architecture.

## Architecture

### 🏗️ Scalable Design
- **Centralized HTTP Client**: All server-side API calls use a single `serverHttpClient`
- **Automatic Authentication**: API key is automatically added to all requests
- **Single Configuration Point**: API key configured once in environment variables
- **No Code Duplication**: Authentication logic is centralized, not repeated in every route

### 🔐 How it works
- All API endpoints except `/health` require authentication
- Authentication is done via API key passed in `X-API-Key` header
- Frontend uses BFF (Backend-for-Frontend) pattern - API key is server-side only
- Client never sees or handles API keys (secure by design)

## Configuration

### Development
- Default API key: `fruit-shop-api-key-2024`
- Set via environment variable: `API_KEY=your-custom-key`

### Production (Railway)
1. In Railway dashboard, set environment variable:
   - Key: `API_KEY`
   - Value: `your-secure-api-key`

### Frontend (Vercel)
1. In Vercel dashboard, set environment variable:
   - Key: `API_KEY`
   - Value: `same-api-key-as-railway`

## Implementation Details

### Server HTTP Client (`serverHttpClient`)
```typescript
// Automatically handles authentication for all requests
const data = await serverHttpClient.get('/products');
const result = await serverHttpClient.post('/cart', cartItem);
const deleted = await serverHttpClient.delete('/cart/123');
```

### Benefits of This Approach
- ✅ **DRY Principle**: No repeated authentication code
- ✅ **Maintainable**: Change auth logic in one place
- ✅ **Secure**: API keys never exposed to client
- ✅ **Scalable**: Easy to add new endpoints
- ✅ **Type Safe**: Full TypeScript support
- ✅ **Error Handling**: Centralized error management

## Endpoints

### Public (No Auth Required)
- `GET /health` - Health check endpoint

### Protected (Auth Required)
- `GET /products` - Get all products
- `GET /suggestions` - Get search suggestions
- `GET /cart` - Get cart contents
- `POST /cart` - Add items to cart
- `DELETE /cart/:id` - Remove items from cart

## Testing Authentication

### Success (200)
```bash
curl -H "X-API-Key: fruit-shop-api-key-2024" \
  https://your-railway-url/products
```

### Failure (401)
```bash
curl https://your-railway-url/products
# Returns: {"error":"Unauthorized","message":"Valid API key required..."}
```

## Security Notes

- Change the default API key in production
- Keep API keys secure and don't commit them to git
- Consider implementing more sophisticated auth (JWT, OAuth) for production use
