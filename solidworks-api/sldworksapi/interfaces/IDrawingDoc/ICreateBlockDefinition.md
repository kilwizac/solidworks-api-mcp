---
type: method
interface: IDrawingDoc
member: ICreateBlockDefinition
returns: BlockDefinition
parameters:
  -
    name: Name
    type: System.String
    description: 
  -
    name: XRefFileName
    type: System.String
    description: 
  -
    name: Instance
    type: System.Boolean
    description: 
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
  -
    name: DimensionCount
    type: System.Int32
    description: 
  -
    name: Dimensions
    type: DisplayDimension
    description: 
  -
    name: BlockCount
    type: System.Int32
    description: 
  -
    name: Blocks
    type: BlockInstance
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
  - icreateblockdefinition
  - idrawingdoc
  - drawing
  - doc
  - create
  - block
  - definition
  - name
  - string
  - ref
  - file
  - instance
  - boolean
  - segment
  - count
  - int32
  - segments
  - sketch
  - point
  - points
  - note
  - notes
  - dimension
  - dimensions
  - display
  - blocks
---

# IDrawingDoc.ICreateBlockDefinition

Obsolete. Superseded by ISketchManager::MakeSketchBlockFromFile, ISketchManager::MakeSketchBlockSelected, and ISketchManager::MakeSketchBlockFromSketch.

## Signature

```csharp
BlockDefinition ICreateBlockDefinition( 
   System.String
Name
,
   System.String
XRefFileName
,
   System.Boolean
Instance
,
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
,
   System.Int32
DimensionCount
,
   ref DisplayDimension
Dimensions
,
   System.Int32
BlockCount
,
   ref BlockInstance
Blocks
)
```
## Parameters

- `Name` (System.String): 
- `XRefFileName` (System.String): 
- `Instance` (System.Boolean): 
- `SegmentCount` (System.Int32): 
- `Segments` (SketchSegment): 
- `PointCount` (System.Int32): 
- `Points` (SketchPoint): 
- `NoteCount` (System.Int32): 
- `Notes` (Note): 
- `DimensionCount` (System.Int32): 
- `Dimensions` (DisplayDimension): 
- `BlockCount` (System.Int32): 
- `Blocks` (BlockInstance): 

## Return Value

Unknown.