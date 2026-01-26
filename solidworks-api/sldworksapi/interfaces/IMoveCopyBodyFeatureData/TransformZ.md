---
type: property
interface: IMoveCopyBodyFeatureData
member: TransformZ
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.TransformX
  - IMoveCopyBodyFeatureData.TransformY
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - rotate
  - transformz
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - transform
  - double
  - setting
  - transforms
  - vba
readonly: null
---

# IMoveCopyBodyFeatureData.TransformZ

Gets the z coordinate for either moving or rotating the selected bodies.

## Signature

```csharp
System.Double TransformZ {get; set;}
```
## Parameters

None.

## Return Value

Meters for moving or radians for rotating

## Remarks

Use
IMoveCopyBodyFeatureData::TransformType
to get or set the transform type before setting this property.
IMoveCopyBodyFeatureData::TransformReferenceEntity
must be:
NULL if moving the selected bodies
- or -
a vertex if rotating the selected bodies

## Examples

- Move and Copy Body By Setting Transforms (VBA) (Move_and_Copy_Body_by_Setting_Transforms_Example_VB.htm)

## See Also

- `IMoveCopyBodyFeatureData.TransformX`
- `IMoveCopyBodyFeatureData.TransformY`