---
type: method
interface: INote
member: IGetAttachPos
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetAttachPos
  - INote.IsAttached
  - INote.LockPosition
keywords:
  - note
  - see
  - also
  - inote
  - attachment
  - point
  - igetattachpos
  - attach
  - pos
  - double
---

# INote.IGetAttachPos

Gets the attachment point of this note.

## Signature

```csharp
System.Double IGetAttachPos()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This is only meaningful if the note is attached.
Format of return information is the following array of doubles:
return value
[0] = x-coord of attachment point
return value
[1] = y-coord of attachment point
return value
[2] = z-coord of attachment point

## See Also

- `INote.GetAttachPos`
- `INote.IsAttached`
- `INote.LockPosition`