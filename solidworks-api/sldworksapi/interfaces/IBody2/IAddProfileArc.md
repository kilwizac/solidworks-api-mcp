---
type: method
interface: IBody2
member: IAddProfileArc
returns: Curve
parameters:
  -
    name: Center
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: Axis
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: Radius
    type: System.Double
    description: Arc radius
  -
    name: StartPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: EndPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.AddProfileArc
keywords:
  - iaddprofilearc
  - ibody2
  - body2
  - add
  - profile
  - arc
  - center
  - object
  - axis
  - radius
  - double
  - start
  - point
  - end
  - curve
  - create
  - imported
  - surface
  - body
  - sketch
---

# IBody2.IAddProfileArc

Creates an arc profile curve and returns a pointer to that curve.

## Signature

```csharp
Curve IAddProfileArc( 
   System.Object
Center
,
   System.Object
Axis
,
   System.Double
Radius
,
   System.Object
StartPoint
,
   System.Object
EndPoint
)
```
## Parameters

- `Center` (System.Object): Array of 3 doubles (x,y,z)
- `Axis` (System.Object): Array of 3 doubles (x,y,z)
- `Radius` (System.Double): Arc radius
- `StartPoint` (System.Object): Array of 3 doubles (x,y,z)
- `EndPoint` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

ICurve

## Remarks

This method always creates a full circle.

## Examples

- Create Imported Surface Body from Sketch (C#) (Create_Imported_Surface_Body_from_Sketch_Example_CSharp.htm)

## See Also

- `IBody2.AddProfileArc`