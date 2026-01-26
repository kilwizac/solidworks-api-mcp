---
type: method
interface: IFeatureManager
member: InsertDerivedPattern2
returns: Feature
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertderivedpattern2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - derived
  - pattern2
---

# IFeatureManager.InsertDerivedPattern2

Obsolete. See IFeatureManager::CreateFeature and the Remarks in IDerivedPatternFeatureData.

## Signature

```csharp
Feature InsertDerivedPattern2()
```
## Parameters

None.

## Return Value

Derived pattern feature

## Remarks

Use
IModelDocExtension::SelectByID2
to select the seed components and pattern feature in any order.
seed component
= 1
pattern feature = 2
N
OTE
: A derived pattern feature is also called a pattern driven pattern feature.