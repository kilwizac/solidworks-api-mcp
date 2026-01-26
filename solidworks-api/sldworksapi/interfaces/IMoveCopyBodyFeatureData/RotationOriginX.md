---
type: property
interface: IMoveCopyBodyFeatureData
member: RotationOriginX
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.RotationOriginY
  - IMoveCopyBodyFeatureData.RotationOriginZ
keywords:
  - rotate
  - bodies
  - rotationoriginx
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

# IMoveCopyBodyFeatureData.RotationOriginX

Gets or sets the x coordinate for the origin about which to rotate the selected bodies.

## Signature

```csharp
System.Double RotationOriginX {get; set;}
```
## Parameters

None.

## Return Value

x coordinate

## Remarks

IMoveCopyBodyFeatureData::TransformReferenceEntity
must be NULL.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveCopyBodyFeatureData.RotationOriginY`
- `IMoveCopyBodyFeatureData.RotationOriginZ`