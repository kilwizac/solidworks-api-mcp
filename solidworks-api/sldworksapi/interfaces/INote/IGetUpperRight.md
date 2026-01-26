---
type: method
interface: INote
member: IGetUpperRight
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetUpperRight
keywords:
  - note
  - see
  - also
  - inote
  - text
  - igetupperright
  - upper
  - right
  - double
---

# INote.IGetUpperRight

Gets the note's upper-right text point.

## Signature

```csharp
System.Double IGetUpperRight()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Format of retval is the following array of 3 doubles:
return value[0] = x coordinate of upper-right text point
return value[1] = y coordinate of upper-right text point
return value[2] = z coordinate of upper-right text point

## See Also

- `INote.GetUpperRight`