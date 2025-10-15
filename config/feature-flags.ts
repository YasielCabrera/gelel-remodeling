/**
 * Feature Flags Configuration
 * 
 * This file contains static feature flags that control the visibility
 * and functionality of various features across the application.
 * 
 * To enable/disable a feature, simply change the boolean value.
 */

export interface FeatureFlags {
  /** Controls the visibility of the FAQ section and related navigation links */
  faq: boolean;
}

/**
 * Feature flags configuration
 * 
 * Set to `true` to enable a feature, `false` to disable it.
 */
export const featureFlags: FeatureFlags = {
  faq: true, // Set to false to disable FAQ section and related links
};

/**
 * Helper function to check if a feature is enabled
 * @param feature - The feature flag key
 * @returns boolean indicating if the feature is enabled
 */
export function isFeatureEnabled(feature: keyof FeatureFlags): boolean {
  return featureFlags[feature];
}

/**
 * Helper function to get all feature flags
 * @returns The complete feature flags object
 */
export function getAllFeatureFlags(): FeatureFlags {
  return featureFlags;
}
