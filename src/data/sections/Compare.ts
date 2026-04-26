
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
    { feature: 'ADAS', keys: ['ADAS', 'ADAS Level'] },
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
  
  export const compareData: CompareRow[] = IMPORTANT_FEATURES.map(({ feature, keys }) => {
    const values = MODELS.map((model) => {
      if (keys.includes('price')) return model.price;
  
      const fromModel = model.specs.find((item) => keys.includes(item.label))?.value;
      if (fromModel) return fromModel;
  
      const fromSpecs = getSpecValue(model.slug as ModelKey, keys);
      return fromSpecs ?? '-';
    });
  
    return { feature, values };
  }).filter((row) => row.values.some((value) => value !== '-'));
  