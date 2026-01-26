---
type: method
interface: IMagneticLine
member: RemoveNote
returns: System.Boolean
parameters:
  -
    name: Note
    type: Note
    description: INote to detach from this magnetic line
  -
    name: Location
    type: MathPoint
    description: IMathPoint where to move the note specified by Note
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMagneticLine.AddNote
  - IMagneticLine.GetNotes
  - IMagneticLine.IGetNotes
keywords:
  - removenote
  - imagneticline
  - magnetic
  - line
  - remove
  - note
  - location
  - math
  - point
  - boolean
  - insert
  - vb
  - net
  - vba
---

# IMagneticLine.RemoveNote

Detaches the specified note from this magnetic line and moves it to the specified location.

## Signature

```csharp
System.Boolean RemoveNote( 
   Note
Note
,
   MathPoint
Location
)
```
## Parameters

- `Note` (Note): INote to detach from this magnetic line
- `Location` (MathPoint): IMathPoint where to move the note specified by Note

## Return Value

True if successful, false if not

## Examples

- Insert Magnetic Line (C#) (Insert_Magnetic_Line_Example_CSharp.htm)
- Insert Magnetic Line (VB.NET) (Insert_Magnetic_Line_Example_VBNET.htm)
- Insert Magnetic Line (VBA) (Insert_Magnetic_Line_Example_VB.htm)

## See Also

- `IMagneticLine.AddNote`
- `IMagneticLine.GetNotes`
- `IMagneticLine.IGetNotes`