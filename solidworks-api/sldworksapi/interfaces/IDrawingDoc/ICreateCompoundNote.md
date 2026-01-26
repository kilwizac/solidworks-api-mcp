---
type: method
interface: IDrawingDoc
member: ICreateCompoundNote
returns: Note
parameters:
  -
    name: Height
    type: System.Double
    description: Note height in meters
  -
    name: X
    type: System.Double
    description: x location of note in meters
  -
    name: Y
    type: System.Double
    description: y location of note in meters
  -
    name: Z
    type: System.Double
    description: z location of note in meters
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateCompoundNote
keywords:
  - icreatecompoundnote
  - idrawingdoc
  - drawing
  - doc
  - create
  - compound
  - note
  - height
  - double
---

# IDrawingDoc.ICreateCompoundNote

Obsolete for documents created in SOLIDWORKS 2016 and later. Creates and returns a compound note.

## Signature

```csharp
Note ICreateCompoundNote( 
   System.Double
Height
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Height` (System.Double): Note height in meters
- `X` (System.Double): x location of note in meters
- `Y` (System.Double): y location of note in meters
- `Z` (System.Double): z location of note in meters

## Return Value

Pointer to the newly created compound note

## Remarks

A compound note is a note that can contain multiple text strings and sketch geometry.
Compound notes are equivalent to a user-defined symbol. After creating a compound note, you can use the other compound note methods to add text and sketch geometry to the object.
This object appears to the end-user as though it were one item. If the user selects the compound note and drags it, all of the entities and text move together.
Because a compound note can have multiple pieces of text, many of the compound note methods require that you specify the index value of the text. For example, the first piece of text added to the compound note using
INote::AddText
has index number 1, the second text added has index number 2, and so on.
SOLIDWORKS adds the note to the view of the current selection, so you must make a selection before you call this method.

## See Also

- `IDrawingDoc.CreateCompoundNote`