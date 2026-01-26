---
type: method
interface: IDrawingDoc
member: ICreateCustomSymbol
returns: CustomSymbol
parameters:
  -
    name: SegmentCount
    type: System.Int32
    description: 
  -
    name: Segments
    type: SketchSegment
    description: 
  -
    name: PointCount
    type: System.Int32
    description: 
  -
    name: Points
    type: SketchPoint
    description: 
  -
    name: NoteCount
    type: System.Int32
    description: 
  -
    name: Notes
    type: Note
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - icreatecustomsymbol
  - idrawingdoc
  - drawing
  - doc
  - create
  - custom
  - symbol
  - segment
  - count
  - int32
  - segments
  - sketch
  - point
  - points
  - note
  - notes
---

# IDrawingDoc.ICreateCustomSymbol

Obsolete. Superseded by ISkethcManager::MakeSketchBlockFromFile, ISketchManager::MakeSketchBlockSelected, and ISketchManager::MakeSketchBlockFromSketch.

## Signature

```csharp
CustomSymbol ICreateCustomSymbol( 
   System.Int32
SegmentCount
,
   ref SketchSegment
Segments
,
   System.Int32
PointCount
,
   ref SketchPoint
Points
,
   System.Int32
NoteCount
,
   ref Note
Notes
)
```
## Parameters

- `SegmentCount` (System.Int32): 
- `Segments` (SketchSegment): 
- `PointCount` (System.Int32): 
- `Points` (SketchPoint): 
- `NoteCount` (System.Int32): 
- `Notes` (Note): 

## Return Value

Unknown.