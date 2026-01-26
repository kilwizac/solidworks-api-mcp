---
type: property
interface: ITriadManipulator
member: Origin
returns: MathPoint
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ITriadManipulator.UpdatePosition
  - ITriadManipulator.XAxis
  - ITriadManipulator.YAxis
  - ITriadManipulator.ZAxis
keywords:
  - origin
  - itriadmanipulator
  - triad
  - manipulator
  - math
  - point
readonly: null
---

# ITriadManipulator.Origin

Gets or sets the origin for this triad manipulator.

## Signature

```csharp
MathPoint Origin {get; set;}
```
## Parameters

None.

## Return Value

IMathPoint

## Remarks

To update the position of the manipulator, call
ITriadManipulator::UpdatePosition
. Moving the triad manipulator to the location set by this property is done by the
handler
.

## Examples

- ITriadManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITriadManipulator)

## See Also

- `ITriadManipulator.UpdatePosition`
- `ITriadManipulator.XAxis`
- `ITriadManipulator.YAxis`
- `ITriadManipulator.ZAxis`