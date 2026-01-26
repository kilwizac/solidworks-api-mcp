---
type: method
interface: IFeatureManager
member: InsertDerivedPattern
returns: Feature
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IDerivedPatternFeatureData
keywords:
  - insertderivedpattern
  - ifeaturemanager
  - feature
  - manager
  - insert
  - derived
  - pattern
---

# IFeatureManager.InsertDerivedPattern

Obsolete. Superseded by IFeatureManager::InsertDerivedPattern2.

## Signature

```csharp
Feature InsertDerivedPattern()
```
## Parameters

None.

## Return Value

Derived pattern feature

## Remarks

Use
IModelDocExtension::SelectByID2
to select the components, which must be ordered:
seed component
= 1
pattern feature = 2

## See Also

- `IDerivedPatternFeatureData`