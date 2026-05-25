export interface DemoSite {
  id: number;
  category: string;
  name: string;
  image: string;
  link: string;
}

export const demoSites: DemoSite[] = [
  {
    id: 1,
    category: '飲食店',
    name: 'カフェ＆レストラン',
    image: 'https://readdy.ai/api/search-image?query=A%20beautifully%20designed%20Japanese%20cafe%20and%20restaurant%20website%20screenshot%20displayed%20on%20a%20digital%20screen%20mockup%20showing%20elegant%20food%20photography%20of%20pasta%20and%20salad%20dishes%20warm%20wooden%20interior%20background%20modern%20minimal%20web%20design%20with%20orange%20accent%20colors%20professional%20UI%20showcase&width=600&height=400&seq=2&orientation=landscape',
    link: '#',
  },
  {
    id: 2,
    category: '美容サロン',
    name: 'ヘアサロン',
    image: 'https://readdy.ai/api/search-image?query=A%20modern%20Japanese%20hair%20salon%20website%20screenshot%20mockup%20featuring%20a%20clean%20bright%20interior%20with%20white%20walls%20and%20green%20plants%20stylish%20minimalist%20web%20design%20showing%20salon%20services%20professional%20beauty%20business%20aesthetic%20with%20soft%20pastel%20colors%20and%20elegant%20typography&width=600&height=400&seq=3&orientation=landscape',
    link: '#',
  },
  {
    id: 3,
    category: '整体院',
    name: '整体・整骨院',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80',
    link: '#',
  },
  {
    id: 4,
    category: '小売店',
    name: 'セレクトショップ',
    image: 'https://readdy.ai/api/search-image?query=A%20stylish%20Japanese%20select%20shop%20boutique%20website%20screenshot%20mockup%20displaying%20fashion%20bags%20and%20accessories%20on%20shelves%20trendy%20retail%20interior%20design%20modern%20ecommerce%20web%20interface%20with%20elegant%20product%20photography%20and%20warm%20lighting%20professional%20UI&width=600&height=400&seq=5&orientation=landscape',
    link: '#',
  },
];
