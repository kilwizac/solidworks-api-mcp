---
type: property
interface: ITriadManipulator
member: ZAxis
returns: MathVector
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ITriadManipulator.Origin
  - ITriadManipulator.UpdatePosition
  - ITriadManipulator.XAxis
  - ITriadManipulator.YAxis
keywords:
  - zaxis
  - itriadmanipulator
  - triad
  - manipulator
  - axis
  - math
  - vector
readonly: null
---

# ITriadManipulator.ZAxis

Gets or sets the z axis for this triad manipulator.

## Signature

```csharp
MathVector ZAxis {get; set;}
```
## Parameters

None.

## Return Value

IMathVector

## Remarks

To update the position of the manipulator, call
ITriadManipulator::UpdatePosition
. Moving the triad manipulator to the location set by this property is done by the
handler
.

## See Also

- `ITriadManipulator.Origin`
- `ITriadManipulator.UpdatePosition`
- `ITriadManipulator.XAxis`
- `ITriadManipulator.YAxis`