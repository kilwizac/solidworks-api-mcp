---
type: method
interface: ISketch
member: InsertRouteLine
returns: System.Boolean
parameters:
  -
    name: ItemsToConnect
    type: System.Object
    description: Array of faces, edges, and vertices to which to connect the route line
  -
    name: Reverse
    type: System.Object
    description: Array of Booleans indicating whether to reverse the route line at the corresponding item to connect; true to reverse the direction of the route line, false to not
  -
    name: AlternatePath
    type: System.Object
    description: Array of Booleans indicating whether to display an alternate path at the corresponding item to connect; true to display another possible path for the route line, false to not
  -
    name: AlongXYZ
    type: System.Object
    description: Array of Booleans indicating whether to create a path parallel to the X, Y, and Z directions from the corresponding item to connect; true to use the X, Y, and Z directions, false to use the shortest route
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IAssemblyDoc.AutoExplode
keywords:
  - explode
  - lines
  - route
  - sketch
  - see
  - also
  - isketch
  - line
  - insertrouteline
  - insert
  - items
  - connect
  - object
  - reverse
  - alternate
  - path
  - along
  - xyz
  - boolean
  - vb
  - net
  - vba
---

# ISketch.InsertRouteLine

Inserts a route line in an explode line sketch or a 3D sketch to indicate component relationships.

## Signature

```csharp
System.Boolean InsertRouteLine( 
   System.Object
ItemsToConnect
,
   System.Object
Reverse
,
   System.Object
AlternatePath
,
   System.Object
AlongXYZ
)
```
## Parameters

- `ItemsToConnect` (System.Object): Array of faces, edges, and vertices to which to connect the route line
- `Reverse` (System.Object): Array of Booleans indicating whether to reverse the route line at the corresponding item to connect; true to reverse the direction of the route line, false to not
- `AlternatePath` (System.Object): Array of Booleans indicating whether to display an alternate path at the corresponding item to connect; true to display another possible path for the route line, false to not
- `AlongXYZ` (System.Object): Array of Booleans indicating whether to create a path parallel to the X, Y, and Z directions from the corresponding item to connect; true to use the X, Y, and Z directions, false to use the shortest route

## Return Value

True if a route line is inserted, false if not

## Remarks

You insert a route line in an
explode line sketch
.

## Examples

- Insert Explode Line Sketch and Route Line (VB.NET) (Insert_Exploded_Line_Sketch_and_Route_Line_Example_VBNET.htm)
- Insert Explode Line Sketch and Route Line (VBA) (Insert_Exploded_Line_Sketch_and_Route_Line_Example_VB.htm)
- Insert Explode Line Sketch and Route Line (C#) (Insert_Exploded_Line_Sketch_and_Route_Line_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AutoExplode`