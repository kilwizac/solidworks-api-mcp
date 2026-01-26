---
type: method
interface: IFeatureManager
member: FeatureAdvancedTableDrivenPattern
returns: Feature
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featureadvancedtabledrivenpattern
  - ifeaturemanager
  - feature
  - manager
  - advanced
  - table
  - driven
  - pattern
---

# IFeatureManager.FeatureAdvancedTableDrivenPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in IDimPatternFeatureData.

## Signature

```csharp
Feature FeatureAdvancedTableDrivenPattern()
```
## Parameters

None.

## Return Value

Feature

## Remarks

This method inserts a variable pattern feature, which uses a table to store the dimensions and values of the pattern instances.
Call this method after calling
IFeatureManager::InsertVaryInstanceOverride
to create an advanced variable pattern feature.