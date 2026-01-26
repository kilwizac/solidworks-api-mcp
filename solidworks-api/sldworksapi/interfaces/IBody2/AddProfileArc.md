---
type: method
interface: IBody2
member: AddProfileArc
returns: System.Object
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
  - IBody2.IAddProfileArc
keywords:
  - addprofilearc
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
---

# IBody2.AddProfileArc

Creates an arc profile curve and returns a pointer to that curve.

## Signature

```csharp
System.Object AddProfileArc( 
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

Object for the curve

## Remarks

This method always creates a full circle.

## See Also

- `IBody2.IAddProfileArc`