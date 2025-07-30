#!/bin/bash

echo "🧪 Testing Fruit Shop Application"
echo "=================================="

# Test server
echo "📡 Testing backend server..."
if curl -s http://localhost:3002/products > /dev/null; then
    echo "✅ Backend server is running on port 3002"
else
    echo "❌ Backend server is not responding"
    exit 1
fi

# Test web server
echo "🌐 Testing web server..."
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Web server is running on port 3000"
else
    echo "❌ Web server is not responding"
    exit 1
fi

# Test API endpoints
echo "🔌 Testing API endpoints..."

# Test products API
if curl -s http://localhost:3000/api/products | grep -q "success"; then
    echo "✅ Products API is working"
else
    echo "❌ Products API failed"
fi

# Test cart API
if curl -s http://localhost:3000/api/cart | grep -q "success"; then
    echo "✅ Cart API is working"
else
    echo "❌ Cart API failed"
fi

# Test adding to cart
echo "🛒 Testing add to cart..."
RESPONSE=$(curl -s -X POST http://localhost:3000/api/cart \
    -H "Content-Type: application/json" \
    -d '{"productId":"1","productName":"Orange","price":2.49,"quantity":1,"image":"/assets/orange.jpeg","packageSize":1}')

if echo "$RESPONSE" | grep -q "productId"; then
    echo "✅ Add to cart is working"
else
    echo "❌ Add to cart failed"
fi

echo ""
echo "🎉 All tests completed!"
echo "📱 Open http://localhost:3000 to view the application"
echo "🛒 Open http://localhost:3000/products to see products"
echo "💰 Open http://localhost:3000/cart to view cart"
