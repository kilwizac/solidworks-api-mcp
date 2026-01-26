---
type: method
interface: IModelDoc2
member: CreateLine2
returns: System.Object
parameters:
  -
    name: P1x
    type: System.Double
    description: X value of the line start point
  -
    name: P1y
    type: System.Double
    description: Y value of the line start point
  -
    name: P1z
    type: System.Double
    description: Z value of the line start point
  -
    name: P2x
    type: System.Double
    description: X value of the line end point
  -
    name: P2y
    type: System.Double
    description: Y value of the line end point
  -
    name: P2z
    type: System.Double
    description: Z value of the line end point
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ICreateLine2
keywords:
  - createline2
  - imodeldoc2
  - model
  - doc2
  - create
  - line2
  - p1x
  - double
  - p1y
  - p1z
  - p2x
  - p2y
  - p2z
  - object
  - calculate
  - closest
  - distance
  - between
  - faces
  - vba
  - components
  - section
  - view
  - specified
  - location
  - find
  - outside
  - edges
  - face
---

# IModelDoc2.CreateLine2

Obsolete. Superseded by SketchManager::CreateLine.

## Signature

```csharp
System.Object CreateLine2( 
   System.Double
P1x
,
   System.Double
P1y
,
   System.Double
P1z
,
   System.Double
P2x
,
   System.Double
P2y
,
   System.Double
P2z
)
```
## Parameters

- `P1x` (System.Double): X value of the line start point
- `P1y` (System.Double): Y value of the line start point
- `P1z` (System.Double): Z value of the line start point
- `P2x` (System.Double): X value of the line end point
- `P2y` (System.Double): Y value of the line end point
- `P2z` (System.Double): Z value of the line end point

## Return Value

Newly created sketch line

## Remarks

If a sketch is not active, then the line is not created and NULL is returned. You can check for an active sketch using
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
.
For COM applications, the underlying
ISketchLine
object can be obtained using QueryInterface on the
ISketchSegment
object returned. C++ Dispatch applications can define a new ISketchLine or ISketchSegment object that uses this Dispatch pointer. Visual Basic applications interpret the pointer for you automatically so you can use the returned object to call ISketchSegment or ISketchLine functions.
IModelDoc2::SetAddToDB
and
IModelDoc2::SetDisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database. IModelDoc2::SetAddToDB also avoids inferencing.
When this method is used with a drawing document, this method creates the line relative to the active drawing view,
IDrawingDoc::ActiveDrawingView
or
IDrawingDoc::IActiveDrawingView
.

## Examples

- Calculate Closest Distance Between Faces (VBA) (Calculate_Closest_Distance_Between_Faces_Example_VB.htm)
- Calculate Closest Distance Between Model Components (VBA) (Calculate_Closest_Distance_Between_Model_Components_Example_VB.htm)
- Create Section View at Specified Location (VBA) (Create_Section_View_at_Specified_Location_Example_VB.htm)
- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)

## See Also

- `IModelDoc2.ICreateLine2`