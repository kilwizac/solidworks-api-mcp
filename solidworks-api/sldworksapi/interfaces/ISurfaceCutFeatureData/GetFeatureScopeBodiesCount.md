---
type: method
interface: ISurfaceCutFeatureData
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceCutFeatureData.AutoSelect
  - ISurfaceCutFeatureData.FeatureScopeBodies
  - ISurfaceCutFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - getfeaturescopebodiescount
  - isurfacecutfeaturedata
  - surface
  - cut
  - data
  - bodies
  - count
  - int32
  - insert
  - vb
  - net
  - vba
---

# ISurfaceCutFeatureData.GetFeatureScopeBodiesCount

Gets the number of bodies affected by this surface-cut feature.

## Signature

```csharp
System.Int32 GetFeatureScopeBodiesCount()
```
## Parameters

None.

## Return Value

Number of bodies affected by this surface-cut feature

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
Call this method before calling
ISurfaceCutFeatureData::IGetFeatureScopeBodies
to determine the size of the array for that method.
If
ISurfaceCutFeatureData::FeatureScope
is false, then this method's return value is 0.

## Examples

- Insert Surface-cut Feature (C#) (Insert_Surface-cut_Feature_Example_CSharp.htm)
- Insert Surface-cut Feature (VB.NET) (Insert_Surface-cut_Feature_Example_VBNET.htm)
- Insert Surface-cut Feature (VBA) (Insert_Surface-cut_Feature_Example_VB.htm)

## See Also

- `ISurfaceCutFeatureData.AutoSelect`
- `ISurfaceCutFeatureData.FeatureScopeBodies`
- `ISurfaceCutFeatureData.ISetFeatureScopeBodies`