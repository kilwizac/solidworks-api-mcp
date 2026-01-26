---
type: property
interface: IPartingSurfaceFeatureData
member: PartingLines
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingSurfaceFeatureData.GetPartingLinesCount
  - IPartingSurfaceFeatureData.GetPartingLinesType
  - IPartingSurfaceFeatureData.IGetPartingLines
  - IPartingSurfaceFeatureData.ISetPartingLines
keywords:
  - partinglines
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - lines
  - object
readonly: null
---

# IPartingSurfaceFeatureData.PartingLines

Gets or sets the entities for the parting lines for this parting surface feature.

## Signature

```csharp
System.Object PartingLines {get; set;}
```
## Parameters

None.

## Return Value

Array of edges or parting-line features to use as parting lines

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingSurfaceFeatureData.GetPartingLinesCount`
- `IPartingSurfaceFeatureData.GetPartingLinesType`
- `IPartingSurfaceFeatureData.IGetPartingLines`
- `IPartingSurfaceFeatureData.ISetPartingLines`