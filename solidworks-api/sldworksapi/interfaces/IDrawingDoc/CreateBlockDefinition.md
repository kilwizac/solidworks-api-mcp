---
type: method
interface: IDrawingDoc
member: CreateBlockDefinition
returns: System.Object
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
    name: Segments
    type: System.Object
    description: 
  -
    name: Points
    type: System.Object
    description: 
  -
    name: Notes
    type: System.Object
    description: 
  -
    name: Dimensions
    type: System.Object
    description: 
  -
    name: Blocks
    type: System.Object
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
  - createblockdefinition
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
  - segments
  - object
  - points
  - notes
  - dimensions
  - blocks
---

# IDrawingDoc.CreateBlockDefinition

Obsolete. Superseded by ISketchManager::MakeSketchBlockFromFile, ISketchManager::MakeSketchBlockSelected, and ISketchManager::MakeSketchBlockFromSketch.

## Signature

```csharp
System.Object CreateBlockDefinition( 
   System.String
Name
,
   System.String
XRefFileName
,
   System.Boolean
Instance
,
   System.Object
Segments
,
   System.Object
Points
,
   System.Object
Notes
,
   System.Object
Dimensions
,
   System.Object
Blocks
)
```
## Parameters

- `Name` (System.String): 
- `XRefFileName` (System.String): 
- `Instance` (System.Boolean): 
- `Segments` (System.Object): 
- `Points` (System.Object): 
- `Notes` (System.Object): 
- `Dimensions` (System.Object): 
- `Blocks` (System.Object): 

## Return Value

Unknown.