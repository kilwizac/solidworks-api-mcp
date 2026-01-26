---
type: method
interface: IBody2
member: AddProfileLine
returns: System.Object
parameters:
  -
    name: RootPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: Direction
    type: System.Object
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IAddProfileLine
keywords:
  - addprofileline
  - ibody2
  - body2
  - add
  - profile
  - line
  - root
  - point
  - object
  - direction
---

# IBody2.AddProfileLine

Creates a line profile curve and returns a pointer to that curve.

## Signature

```csharp
System.Object AddProfileLine( 
   System.Object
RootPoint
,
   System.Object
Direction
)
```
## Parameters

- `RootPoint` (System.Object): Array of 3 doubles (x,y,z)
- `Direction` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

Object for the line profile curve

## Remarks

You can use this method with
IBody2::CreateRevolutionSurface
to generate a cylindrical surface of revolution or with
IBody2::CreateExtrusionSurface
to generate a tabulated cylinder.

## See Also

- `IBody2.IAddProfileLine`