import axios from 'axios';

const API_URL = 'http://localhost:3000';

interface Order {
  id: number;
  name: string;
  price: number;
}

export async function getOrders() {
  const response = await axios.get<Order[]>(`${API_URL}/orders`);
  return response.data;
}

export async function getOrder(id: number) {
  const response = await axios.get<Order>(`${API_URL}/orders/${id}`);
  return response.data;
}
