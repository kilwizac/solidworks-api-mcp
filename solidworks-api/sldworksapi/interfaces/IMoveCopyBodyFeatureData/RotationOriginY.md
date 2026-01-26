---
type: property
interface: IMoveCopyBodyFeatureData
member: RotationOriginY
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
  - IMoveCopyBodyFeatureData.RotationOriginZ
keywords:
  - rotate
  - bodies
  - rotationoriginy
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

# IMoveCopyBodyFeatureData.RotationOriginY

Gets or sets the y coordinate for the origin about which to rotate the selected bodies.

## Signature

```csharp
System.Double RotationOriginY {get; set;}
```
## Parameters

None.

## Return Value

y coordinate

## Remarks

IMoveCopyBodyFeatureData::TransformReferenceEntity
must be NULL.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveCopyBodyFeatureData.RotationOriginX`
- `IMoveCopyBodyFeatureData.RotationOriginZ`