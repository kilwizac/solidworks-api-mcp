---
type: method
interface: IDrawingDoc
member: InsertRevisionSymbol
returns: Note
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate at which to insert revision symbol note
  -
    name: Y
    type: System.Double
    description: Y coordinate at which to insert revision symbol note
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateCompoundNote
  - IDrawingDoc.CreateText2
  - IDrawingDoc.ICreateCompoundNote
  - IDrawingDoc.ICreateText2
  - IDrawingDoc.InsertNewNote2
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - notes
  - note
  - inote
  - revision
  - symbol
  - symbols
  - insertrevisionsymbol
  - drawing
  - doc
  - insert
  - double
---

# IDrawingDoc.InsertRevisionSymbol

Inserts a revision symbol note in this drawing.

## Signature

```csharp
Note InsertRevisionSymbol( 
   System.Double
X
,
   System.Double
Y
)
```
## Parameters

- `X` (System.Double): X coordinate at which to insert revision symbol note
- `Y` (System.Double): Y coordinate at which to insert revision symbol note

## Return Value

Pointer to the newly created INote object

## Remarks

To attach the revision symbol to entities in the drawing, the end-user must interactively preselect those entities. The revision symbol is then inserted with leaders to those selected entities. If there are no preselected entities, the symbol is free-standing.

## See Also

- `IDrawingDoc.CreateCompoundNote`
- `IDrawingDoc.CreateText2`
- `IDrawingDoc.ICreateCompoundNote`
- `IDrawingDoc.ICreateText2`
- `IDrawingDoc.InsertNewNote2`