---
type: property
interface: IPlaneManipulator
member: Origin
returns: MathPoint
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - origin
  - iplanemanipulator
  - plane
  - manipulator
  - math
  - point
readonly: null
---

# IPlaneManipulator.Origin

Gets or sets the origin of the plane.

## Signature

```csharp
MathPoint Origin {get; set;}
```
## Parameters

None.

## Return Value

Origin

## Remarks

If a plane with a manipulator is already displayed, then do not set a new
normal-to vector
or origin for that plane.