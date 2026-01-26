---
type: method
interface: ITriadManipulator
member: UpdatePosition
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ITriadManipulator.DoNotShow
keywords:
  - updateposition
  - itriadmanipulator
  - triad
  - manipulator
  - update
  - position
  - boolean
---

# ITriadManipulator.UpdatePosition

Updates the position of this triad manipulator.

## Signature

```csharp
System.Boolean UpdatePosition()
```
## Parameters

None.

## Return Value

True if the position of the triad manipulator is updated, false if not

## Remarks

After setting any of these properties, call this method to update the position of the triad manipulator:
ITriadManipulator::Origin
ITriadManipulator::XAxis
ITriadManipulator::YAxis
ITriadManipulator::ZAxis

## See Also

- `ITriadManipulator.DoNotShow`