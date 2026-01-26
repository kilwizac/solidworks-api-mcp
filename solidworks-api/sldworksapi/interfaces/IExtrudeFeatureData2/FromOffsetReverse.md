---
type: property
interface: IExtrudeFeatureData2
member: FromOffsetReverse
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.FromOffsetDistance
  - IExtrudeFeatureData2.GetReverseOffset
  - IExtrudeFeatureData2.GetTranslateSurface
  - IExtrudeFeatureData2.SetReverseOffset
  - IExtrudeFeatureData2.SetTranslateSurface
keywords:
  - fromoffsetreverse
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - offset
  - reverse
  - boolean
  - create
  - extruded
  - thin
  - vba
readonly: null
---

# IExtrudeFeatureData2.FromOffsetReverse

Gets or sets whether the offset is reverse for this extrusion if IExtrudeFeatureData2::FromType is swExtrudeFrom_Offset.

## Signature

```csharp
System.Boolean FromOffsetReverse {get; set;}
```
## Parameters

None.

## Return Value

True if offset reverse, false if not

## Examples

- Create Extruded Thin Feature (VBA) (Create_Extruded_Thin_Feature_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2.FromOffsetDistance`
- `IExtrudeFeatureData2.GetReverseOffset`
- `IExtrudeFeatureData2.GetTranslateSurface`
- `IExtrudeFeatureData2.SetReverseOffset`
- `IExtrudeFeatureData2.SetTranslateSurface`