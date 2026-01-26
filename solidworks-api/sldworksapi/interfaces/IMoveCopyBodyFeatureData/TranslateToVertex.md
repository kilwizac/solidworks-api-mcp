---
type: property
interface: IMoveCopyBodyFeatureData
member: TranslateToVertex
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - translatetovertex
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - translate
  - vertex
  - object
  - modify
  - using
  - vb
  - net
  - vba
readonly: null
---

# IMoveCopyBodyFeatureData.TranslateToVertex

Gets or sets the entity to which to move the selected bodies.

## Signature

```csharp
System.Object TranslateToVertex {get; set;}
```
## Parameters

None.

## Return Value

Coordinate system , sketch point , or vertex to which to move the selected bodies

## Remarks

A
coordinate system, sketch point, or vertex must be selected from which to move the selected bodies.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Modify Move/Copy Body Using Vertex (C#) (Move_and_Copy_Body_Using_Vertex_Example_CSharp.htm)
- Modify Move/Copy Body Using Vertex (VB.NET) (Move_and_Copy_Body_Using_Vertex_Example_VBNET.htm)
- Modify Move/Copy Body Using Vertex (VBA) (Move_and_Copy_Body_using_Vertex_Example_VB.htm)