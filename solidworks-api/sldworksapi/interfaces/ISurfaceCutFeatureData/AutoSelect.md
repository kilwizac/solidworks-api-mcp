---
type: property
interface: ISurfaceCutFeatureData
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISurfaceCutFeatureData.GetFeatureScopeBodiesCount
  - ISurfaceCutFeatureData.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - autoselect
  - isurfacecutfeaturedata
  - surface
  - cut
  - data
  - auto
  - select
  - boolean
  - insert
  - vb
  - net
  - vba
readonly: null
---

# ISurfaceCutFeatureData.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the surface-cut feature to affect in a multibody part.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies for ISurfaceCutFeatureData::FeatureScopeBodies or ISurfaceCutFeatureData::ISetFeatureScopeBodies

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
This property is only available when
ISurfaceCutFeatureData::FeatureScope
is true.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Insert Surface-cut Feature (C#) (Insert_Surface-cut_Feature_Example_CSharp.htm)
- Insert Surface-cut Feature (VB.NET) (Insert_Surface-cut_Feature_Example_VBNET.htm)
- Insert Surface-cut Feature (VBA) (Insert_Surface-cut_Feature_Example_VB.htm)

## See Also

- `ISurfaceCutFeatureData.GetFeatureScopeBodiesCount`
- `ISurfaceCutFeatureData.IGetFeatureScopeBodies`