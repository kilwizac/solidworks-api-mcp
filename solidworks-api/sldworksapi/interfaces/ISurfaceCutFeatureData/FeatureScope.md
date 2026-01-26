---
type: property
interface: ISurfaceCutFeatureData
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceCutFeatureData.AutoSelect
  - ISurfaceCutFeatureData.FeatureScopeBodies
  - ISurfaceCutFeatureData.GetFeatureScopeBodiesCount
  - ISurfaceCutFeatureData.IGetFeatureScopeBodies
  - ISurfaceCutFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescope
  - isurfacecutfeaturedata
  - surface
  - cut
  - data
  - boolean
  - insert
  - vb
  - net
  - vba
readonly: null
---

# ISurfaceCutFeatureData.FeatureScope

Gets or sets whether to use scope for the surface-cut feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

When: true, only the specified bodies in a multibody part are affected by the surface-cut feature false, all of the bodies in a multibody part are affected by the surface-cut feature

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Insert Surface-cut Feature (C#) (Insert_Surface-cut_Feature_Example_CSharp.htm)
- Insert Surface-cut Feature (VB.NET) (Insert_Surface-cut_Feature_Example_VBNET.htm)
- Insert Surface-cut Feature (VBA) (Insert_Surface-cut_Feature_Example_VB.htm)

## See Also

- `ISurfaceCutFeatureData.AutoSelect`
- `ISurfaceCutFeatureData.FeatureScopeBodies`
- `ISurfaceCutFeatureData.GetFeatureScopeBodiesCount`
- `ISurfaceCutFeatureData.IGetFeatureScopeBodies`
- `ISurfaceCutFeatureData.ISetFeatureScopeBodies`