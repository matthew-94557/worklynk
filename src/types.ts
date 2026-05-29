/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface WorkflowItem {
  id: string;
  name: string;
  source: string;
  target: string;
  status: 'Active' | 'Inactive' | 'Pending';
  iconName: string;
}

export interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  badge: string;
  details: string[];
}
