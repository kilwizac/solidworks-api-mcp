---
type: property
interface: ITriadManipulator
member: YAxis
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
  - ITriadManipulator.ZAxis
keywords:
  - yaxis
  - itriadmanipulator
  - triad
  - manipulator
  - axis
  - math
  - vector
readonly: null
---

# ITriadManipulator.YAxis

Gets or sets the y axis for this triad manipulator.

## Signature

```csharp
MathVector YAxis {get; set;}
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
- `ITriadManipulator.ZAxis`