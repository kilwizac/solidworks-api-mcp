---
type: method
interface: ISurfaceCutFeatureData
member: IGetFeatureScopeBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceCutFeatureData.AutoSelect
  - ISurfaceCutFeatureData.FeatureScope
  - ISurfaceCutFeatureData.FeatureScopeBodies
  - ISurfaceCutFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - igetfeaturescopebodies
  - isurfacecutfeaturedata
  - surface
  - cut
  - data
  - bodies
  - count
  - int32
  - body2
---

# ISurfaceCutFeatureData.IGetFeatureScopeBodies

Gets the solid bodies that the surface-cut feature affects in a multibody part.

## Signature

```csharp
Body2 IGetFeatureScopeBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect

## Return Value

in-process, unmanaged C++: Pointer to an array of solid bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
Before calling this method, call
ISurfaceCutFeatureData::GetFeatureScopeBodiesCount
to get Count.

## See Also

- `ISurfaceCutFeatureData.AutoSelect`
- `ISurfaceCutFeatureData.FeatureScope`
- `ISurfaceCutFeatureData.FeatureScopeBodies`
- `ISurfaceCutFeatureData.ISetFeatureScopeBodies`