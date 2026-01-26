---
type: enum
name: swFeatureFilletProfileType_e
description: Fillet cross-sectional profile shapes.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureFilletProfileType_e

Fillet cross-sectional profile shapes.

## Values

| Member | Value | Description |
|---|---|---|
| `swFeatureFilletCircular` | 0 | = Circular for symmetric fillets; elliptical for asymmetric fillets |
| `swFeatureFilletConicRadius` | 2 | = Requires that you set the radius of curvature at the shoulder point along the fillet's cross section |
| `swFeatureFilletConicRho` | 1 | = Requires that you set a ratio in the range [0.5, 0.95] which indicates the weight of the cross-section |
| `swFeatureFilletConicRhoZeroChamfer` | 3 | = Chamfer cross section |