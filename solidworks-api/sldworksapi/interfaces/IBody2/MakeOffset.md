---
type: method
interface: IBody2
member: MakeOffset
returns: Body2
parameters:
  -
    name: Distance
    type: System.Double
    description: Distance by which to offset the selected surface body
  -
    name: Direction
    type: System.Boolean
    description: True to offset the selected surface body in the opposite direction, false to offset the surface body along the normal
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - temporary
  - bodies
  - offset
  - surface
  - see
  - also
  - isurface
  - makeoffset
  - ibody2
  - body2
  - make
  - distance
  - double
  - direction
  - boolean
  - create
  - offsetting
  - body
  - vb
  - net
  - vba
---

# IBody2.MakeOffset

Creates a new temporary body by offsetting the selected surface body by the specified distance and in the specified direction.

## Signature

```csharp
Body2 MakeOffset( 
   System.Double
Distance
,
   System.Boolean
Direction
)
```
## Parameters

- `Distance` (System.Double): Distance by which to offset the selected surface body
- `Direction` (System.Boolean): True to offset the selected surface body in the opposite direction, false to offset the surface body along the normal

## Return Value

Pointer to the newly created body

## Remarks

This method only supports surface bodies.

## Examples

- Create Temporary Bodies by Offsetting Surface Body (C#) (Create_Temporary_Bodies_by_Offsetting_Surface_Body_Example_CSharp.htm)
- Create Temporary Bodies by Offsetting Surface Body (VB.NET) (Create_Temporary_Bodies_by_Offsetting_Surface_Body_Example_VBNET.htm)
- Create Temporary Bodies By Offsetting a Surface Body (VBA) (Create_Temporary_Bodies_by_Offsetting_Surface_Body_Example_VB.htm)