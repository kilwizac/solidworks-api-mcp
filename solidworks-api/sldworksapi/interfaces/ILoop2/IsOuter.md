---
type: method
interface: ILoop2
member: IsOuter
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - isouter
  - iloop2
  - loop2
  - outer
  - boolean
  - determine
  - type
  - face
  - vba
  - find
  - outside
  - edges
  - loops
  - fill
  - holes
  - part
  - vb
  - net
  - select
  - all
---

# ILoop2.IsOuter

Indicates whether the loop is the outermost loop on the face.

## Signature

```csharp
System.Boolean IsOuter()
```
## Parameters

None.

## Return Value

True if the loop is the outermost loop, false if not

## Remarks

Some situations exist where no clear outer loop is defined. For example, the cylindrical face of an extruded circle has two loops that could be considered outer loops.

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Get Loops (VBA) (Get_Loops_Example_VB.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)