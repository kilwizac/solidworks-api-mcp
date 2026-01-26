---
type: method
interface: IDrawingDoc
member: MakeBlockDefinition
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - makeblockdefinition
  - idrawingdoc
  - drawing
  - doc
  - make
  - block
  - definition
  - name
  - string
  - ref
  - file
  - instance
  - boolean
---

# IDrawingDoc.MakeBlockDefinition

Obsolete. Superseded by ISkethcManager::MakeSketchBlockFromFile, ISketchManager::MakeSketchBlockSelected, and ISketchManager::MakeSketchBlockFromSketch.

## Signature

```csharp
BlockDefinition MakeBlockDefinition( 
   System.String
Name
,
   System.String
XRefFileName
,
   System.Boolean
Instance
)
```
## Parameters

- `Name` (System.String): 
- `XRefFileName` (System.String): 
- `Instance` (System.Boolean): 

## Return Value

Unknown.