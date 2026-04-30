'use client';

import { useEffect, useState } from 'react';
import styles from './SpecsSection.module.css';
import {
  modelTabs,
  specsData,
  tabs,
  type ModelKey,
  type TabKey,
} from '../../data/sections/Specs';

export default function SpecsSection() {
  const [activeModel, setActiveModel] = useState<ModelKey>(modelTabs[0].key);
  const [activeTab, setActiveTab] = useState<TabKey>('perf');

  useEffect(() => {
    const modelParam = new URLSearchParams(window.location.search).get('model');
    if (!modelParam) return;

    const validModels = new Set<ModelKey>(modelTabs.map((model) => model.key));
    if (validModels.has(modelParam as ModelKey)) {
      setActiveModel(modelParam as ModelKey);
    }
  }, []);

  return (
    <section id="specs">
      <span className={styles.tag}>Deep Dive</span>
      <h2 className={styles.title}>{activeModel.toUpperCase()} Specifications</h2>
      <div className={styles.tabs}>
        {modelTabs.map((model) => (
          <button
            key={model.key}
            className={`${styles.tabBtn} ${activeModel === model.key ? styles.active : ''}`}
            onClick={() => setActiveModel(model.key)}
          >
            {model.label}
          </button>
        ))}
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabBtn} ${activeTab === tab.key ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {specsData[activeModel][activeTab].map((item) => (
          <div key={item.key} className={styles.item}>
            <div className={styles.itemKey}>{item.key}</div>
            <div className={styles.itemVal}>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}