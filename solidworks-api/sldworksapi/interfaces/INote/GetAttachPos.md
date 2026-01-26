---
type: method
interface: INote
member: GetAttachPos
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.IGetAttachPos
  - INote.IsAttached
  - INote.LockPosition
keywords:
  - note
  - see
  - also
  - inote
  - attachment
  - point
  - getattachpos
  - attach
  - pos
  - object
  - insert
  - autoballoons
  - vba
---

# INote.GetAttachPos

Gets the attachment point of this note.

## Signature

```csharp
System.Object GetAttachPos()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This is only meaningful if the note is attached.
Format of return information is the following array of doubles:
return value
[0] = x-coord of attachment point
return value
[1] = y-coord of attachment point
return value
[2] = z-coord of attachment point

## Examples

- Insert Autoballoons (VBA) (Insert_Autoballoons_Example_VB_AutoBalloon2_VB.htm)

## See Also

- `INote.IGetAttachPos`
- `INote.IsAttached`
- `INote.LockPosition`