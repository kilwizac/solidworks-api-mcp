---
type: property
interface: IRuledSurfaceFeatureData
member: UseVector
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRuledSurfaceFeatureData.DirectionVector
keywords:
  - usevector
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - use
  - vector
  - boolean
readonly: null
---

# IRuledSurfaceFeatureData.UseVector

Gets or sets whether or not use a reference vector for this ruled-surface feature.

## Signature

```csharp
System.Boolean UseVector {get; set;}
```
## Parameters

None.

## Return Value

True to use a reference vector, false to not

## Remarks

This property is only available when
IRuledSurfaceFeatureData::Type
is set to
swRuledSurfaceType_Sweep.

## See Also

- `IRuledSurfaceFeatureData.DirectionVector`