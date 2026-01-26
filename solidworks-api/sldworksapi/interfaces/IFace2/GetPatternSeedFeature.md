---
type: method
interface: IFace2
member: GetPatternSeedFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IFace2.IGetPatternSeedFeature
  - IModelDoc2.EditSeedFeat
keywords:
  - pattern
  - seed
  - features
  - getpatternseedfeature
  - iface2
  - face2
  - feature
  - object
---

# IFace2.GetPatternSeedFeature

Gets the seed feature of a pattern.

## Signature

```csharp
System.Object GetPatternSeedFeature()
```
## Parameters

None.

## Return Value

Seed feature of the current face; if the face does not belong to a pattern, this method returns NULL

## See Also

- `IFace2.IGetPatternSeedFeature`
- `IModelDoc2.EditSeedFeat`