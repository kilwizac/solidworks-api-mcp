---
type: method
interface: IMagneticLine
member: AddNote
returns: System.Boolean
parameters:
  -
    name: Note
    type: Note
    description: INote to attach to this magnetic line
  -
    name: Position
    type: System.Double
    description: 0.0 <= Attachment position on magnetic line <= 1.0; valid only if IMagneticLine::EqualSpacing is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMagneticLine.GetNotes
  - IMagneticLine.IGetNotes
  - IMagneticLine.RemoveNote
keywords:
  - addnote
  - imagneticline
  - magnetic
  - line
  - add
  - note
  - position
  - double
  - boolean
  - insert
  - vb
  - net
  - vba
---

# IMagneticLine.AddNote

Attaches to this magnetic line the specified note at the specified position.

## Signature

```csharp
System.Boolean AddNote( 
   Note
Note
,
   System.Double
Position
)
```
## Parameters

- `Note` (Note): INote to attach to this magnetic line
- `Position` (System.Double): 0.0 <= Attachment position on magnetic line <= 1.0; valid only if IMagneticLine::EqualSpacing is false

## Return Value

True if successful, false if not (see Remarks )

## Remarks

All notes attached to a magnetic line must be from the same view.

## Examples

- Insert Magnetic Line (C#) (Insert_Magnetic_Line_Example_CSharp.htm)
- Insert Magnetic Line (VB.NET) (Insert_Magnetic_Line_Example_VBNET.htm)
- Insert Magnetic Line (VBA) (Insert_Magnetic_Line_Example_VB.htm)

## See Also

- `IMagneticLine.GetNotes`
- `IMagneticLine.IGetNotes`
- `IMagneticLine.RemoveNote`