---
type: property
interface: ISimpleHoleFeatureData2
member: TranslateSurface
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.ReverseOffset
  - ISimpleHoleFeatureData2.SurfaceOffset
keywords:
  - translatesurface
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - translate
  - surface
  - boolean
readonly: null
---

# ISimpleHoleFeatureData2.TranslateSurface

Gets or sets whether to translate the surface of this simple hole.

## Signature

```csharp
System.Boolean TranslateSurface {get; set;}
```
## Parameters

None.

## Return Value

True to translate the surface of this simple hole, false to not

## Remarks

To use a true offset, this property should be false.

## See Also

- `ISimpleHoleFeatureData2.ReverseOffset`
- `ISimpleHoleFeatureData2.SurfaceOffset`