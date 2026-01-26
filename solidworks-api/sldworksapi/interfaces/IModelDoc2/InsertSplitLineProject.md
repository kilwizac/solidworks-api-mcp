---
type: method
interface: IModelDoc2
member: InsertSplitLineProject
returns: void
parameters:
  -
    name: IsDirectional
    type: System.Boolean
    description: Whether to project in one direction: 0 projects in both directions 1 projects in one direction
  -
    name: FlipDir
    type: System.Boolean
    description: Whether to project along the normal to the sketch plane; valid only when isDirectional = 1: 0 projects in a direction opposite to the normal of the sketch plane 1 projects along the normal of the sketch plane
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IFeatureManager.InsertSplitLineIntersect
  - IModelDoc2.InsertSplitLineSil
  - ISplitLineFeatureData
keywords:
  - face
  - see
  - also
  - iface2
  - split
  - lines
  - insertsplitlineproject
  - imodeldoc2
  - model
  - doc2
  - insert
  - line
  - project
  - directional
  - boolean
  - flip
  - dir
  - void
  - create
  - projection
  - feature
  - vba
  - vb
  - net
---

# IModelDoc2.InsertSplitLineProject

Splits a face by projecting sketch lines onto the face.

## Signature

```csharp
void InsertSplitLineProject( 
   System.Boolean
IsDirectional
,
   System.Boolean
FlipDir
)
```
## Parameters

- `IsDirectional` (System.Boolean): Whether to project in one direction: 0 projects in both directions 1 projects in one direction
- `FlipDir` (System.Boolean): Whether to project along the normal to the sketch plane; valid only when isDirectional = 1: 0 projects in a direction opposite to the normal of the sketch plane 1 projects along the normal of the sketch plane

## Return Value

Unknown.

## Remarks

The sketch to project must be selected using
IModelDocExtension::SelectByID2
with a mark value of 4.
The faces to split must be selected using IModelDocExtension::SelectByID2 with mark values of 1.

## Examples

- Create Projection Split Line Feature (VBA) (Create_Projection_Split_Line_Example_VB.htm)
- Create Projection Split Line Feature (VB.NET) (Create_Projection_Split_Line_Example_VBNET.htm)
- Create Projection Split Line Feature (C#) (Create_Projection_Split_Line_Example_CSharp.htm)

## See Also

- `IFeatureManager.InsertSplitLineIntersect`
- `IModelDoc2.InsertSplitLineSil`
- `ISplitLineFeatureData`