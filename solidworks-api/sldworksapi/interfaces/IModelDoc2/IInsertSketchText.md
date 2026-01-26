---
type: method
interface: IModelDoc2
member: IInsertSketchText
returns: SketchText
parameters:
  -
    name: Ptx
    type: System.Double
    description: X coordinate of text
  -
    name: Pty
    type: System.Double
    description: Y coordinate of text
  -
    name: Ptz
    type: System.Double
    description: Z coordinate of text
  -
    name: Text
    type: System.String
    description: Text to insert (see Remarks )
  -
    name: Alignment
    type: System.Int32
    description: Alignment: 0 = Left 1 = Center 2 = Right 3 = Fully justified (see Remarks )
  -
    name: FlipDirection
    type: System.Int32
    description: 1 to flip text vertically about the selected entity, 0 to not (see Remarks )
  -
    name: HorizontalMirror
    type: System.Int32
    description: 1 to flip text horizontally, 0 to not
  -
    name: WidthFactor
    type: System.Int32
    description: 6 <= Percentage by which to evenly widen each character in the text block < = 1667
  -
    name: SpaceBetweenChars
    type: System.Int32
    description: 1 <= Percentage of space between each character in the text block <= 10000; valid only if Alignment != 3
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.DissolveSketchText
keywords:
  - sketch
  - see
  - also
  - isketch
  - text
  - iinsertsketchtext
  - imodeldoc2
  - model
  - doc2
  - insert
  - ptx
  - double
  - pty
  - ptz
  - string
  - alignment
  - int32
  - flip
  - direction
  - horizontal
  - mirror
  - width
  - factor
  - space
  - between
  - chars
---

# IModelDoc2.IInsertSketchText

Obsolete. Superseded by IModelDoc2::InsertSketchText.

## Signature

```csharp
SketchText IInsertSketchText( 
   System.Double
Ptx
,
   System.Double
Pty
,
   System.Double
Ptz
,
   System.String
Text
,
   System.Int32
Alignment
,
   System.Int32
FlipDirection
,
   System.Int32
HorizontalMirror
,
   System.Int32
WidthFactor
,
   System.Int32
SpaceBetweenChars
)
```
## Parameters

- `Ptx` (System.Double): X coordinate of text
- `Pty` (System.Double): Y coordinate of text
- `Ptz` (System.Double): Z coordinate of text
- `Text` (System.String): Text to insert (see Remarks )
- `Alignment` (System.Int32): Alignment: 0 = Left 1 = Center 2 = Right 3 = Fully justified (see Remarks )
- `FlipDirection` (System.Int32): 1 to flip text vertically about the selected entity, 0 to not (see Remarks )
- `HorizontalMirror` (System.Int32): 1 to flip text horizontally, 0 to not
- `WidthFactor` (System.Int32): 6 <= Percentage by which to evenly widen each character in the text block < = 1667
- `SpaceBetweenChars` (System.Int32): 1 <= Percentage of space between each character in the text block <= 10000; valid only if Alignment != 3

## Return Value

Sketch text

## Remarks

Alignment and FlipDirection are valid only when a curve, edge, or sketch segment is selected. Text appears along the selected entity. If an entity is not selected, Text appears horizontally starting at the origin.
Select
the curve, edge, or sketch segment with Mark = 1.
See the SOLIDWORKS Design user
-interface help > Sketching > Sketch Entities > Sketch Text > SketchText PropertyManager
topic for more information about this functionality.

## See Also

- `IModelDoc2.DissolveSketchText`