---
type: property
interface: IFillSurfaceFeatureData
member: ReverseSurface
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reversesurface
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - reverse
  - boolean
readonly: null
---

# IFillSurfaceFeatureData.ReverseSurface

Gets or sets direction of the surface patch.

## Signature

```csharp
System.Boolean ReverseSurface {get; set;}
```
## Parameters

None.

## Return Value

True reverses the direction of the surface patch, false does not EndOLEPropertyRow

## Remarks

This property is dynamic and is only available when:
All boundary curves are coplanar
No constraint points exist
No interior constraints
Fill surface is nonplanar