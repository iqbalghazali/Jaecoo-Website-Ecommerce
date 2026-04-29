
import { specsData, type ModelKey } from '../../data/sections/Specs';
import { MODELS } from '../../data/sections/models';

interface CompareRow {
    feature: string;
    values: string[];
  }
  
  export const IMPORTANT_FEATURES: { feature: string; keys: string[] }[] = [
    { feature: 'Harga', keys: ['price'] },
    { feature: 'Powertrain', keys: ['Powertrain'] },
    { feature: 'Engine', keys: ['Engine'] },
    { feature: 'Power', keys: ['Max Power', 'Power', 'System Power'] },
    { feature: 'Torque', keys: ['Max Torque', 'Torque'] },
    { feature: 'Drive', keys: ['Drive System', 'Drive'] },
    { feature: 'Transmission', keys: ['Transmission'] },
    { feature: 'Range', keys: ['Range'] },
    { feature: 'ADAS', keys: ['ADAS', 'ADAS Level', 'Safety Suite'] },
    { feature: 'Seating', keys: ['Seating'] },
  ];
  
  function getSpecValue(modelKey: ModelKey, keys: string[]): string | null {
    for (const tab of Object.values(specsData[modelKey])) {
      for (const item of tab) {
        if (keys.includes(item.key)) return item.value;
      }
    }
    return null;
  }
  
function getFeatureFallback(feature: string, model: (typeof MODELS)[number]): string {
  switch (feature) {
    case 'Powertrain':
      return model.specs.find((item) => item.label === 'Engine') ? 'ICE / Hybrid' : 'See full specs';
    case 'Engine':
      return model.specs.find((item) => item.label === 'Powertrain')?.value.includes('Electric')
        ? 'Electric Motor'
        : 'See full specs';
    case 'Transmission':
      return model.specs.find((item) => item.label === 'Powertrain')?.value.includes('Electric')
        ? 'Single Speed EV'
        : 'See full specs';
    case 'Range':
      return model.specs.find((item) => item.label === 'Powertrain')?.value.includes('Electric') ||
        model.specs.find((item) => item.label === 'Powertrain')?.value.includes('Hybrid')
        ? 'See full specs'
        : 'N/A';
    case 'ADAS':
      return 'See safety specs';
    default:
      return 'See full specs';
  }
}

  export const compareData: CompareRow[] = IMPORTANT_FEATURES.map(({ feature, keys }) => {
    const values = MODELS.map((model) => {
      if (keys.includes('price')) return model.price;
  
      const fromModel = model.specs.find((item) => keys.includes(item.label))?.value;
      if (fromModel) return fromModel;
  
      const fromSpecs = getSpecValue(model.slug as ModelKey, keys);
      return fromSpecs ?? getFeatureFallback(feature, model);
    });
  
    return { feature, values };
  });
  