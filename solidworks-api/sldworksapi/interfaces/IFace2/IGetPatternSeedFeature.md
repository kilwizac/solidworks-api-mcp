---
type: method
interface: IFace2
member: IGetPatternSeedFeature
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IFace2.GetPatternSeedFeature
  - IModelDoc2.EditSeedFeat
keywords:
  - pattern
  - seed
  - features
  - igetpatternseedfeature
  - iface2
  - face2
  - feature
---

# IFace2.IGetPatternSeedFeature

Gets the seed feature of a pattern.

## Signature

```csharp
Feature IGetPatternSeedFeature()
```
## Parameters

None.

## Return Value

Seed feature of the current face; if the face does not belong to a pattern, this method returns NULL

## See Also

- `IFace2.GetPatternSeedFeature`
- `IModelDoc2.EditSeedFeat`