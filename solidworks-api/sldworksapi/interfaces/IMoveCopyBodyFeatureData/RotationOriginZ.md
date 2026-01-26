---
type: property
interface: IMoveCopyBodyFeatureData
member: RotationOriginZ
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.RotationOriginX
  - IMoveCopyBodyFeatureData.RotationOriginY
keywords:
  - rotate
  - bodies
  - rotationoriginz
  - imovecopybodyfeaturedata
  - move
  - copy
  - body
  - feature
  - data
  - rotation
  - origin
  - double
readonly: null
---

# IMoveCopyBodyFeatureData.RotationOriginZ

Gets or sets the z coordinate for the origin about which to rotate the selected bodies.

## Signature

```csharp
System.Double RotationOriginZ {get; set;}
```
## Parameters

None.

## Return Value

z coordinate

## Remarks

IMoveCopyBodyFeatureData::TransformReferenceEntity
must be NULL.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveCopyBodyFeatureData.RotationOriginX`
- `IMoveCopyBodyFeatureData.RotationOriginY`