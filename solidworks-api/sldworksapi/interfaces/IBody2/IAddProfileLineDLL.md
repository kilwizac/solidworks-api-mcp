---
type: method
interface: IBody2
member: IAddProfileLineDLL
returns: Curve
parameters:
  -
    name: RootPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
  -
    name: Direction
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - iaddprofilelinedll
  - ibody2
  - body2
  - add
  - profile
  - line
  - dll
  - root
  - point
  - double
  - direction
  - curve
---

# IBody2.IAddProfileLineDLL

Adds a profile line.

## Signature

```csharp
Curve IAddProfileLineDLL( 
   ref System.Double
RootPoint
,
   ref System.Double
Direction
)
```
## Parameters

- `RootPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z)
- `Direction` (System.Double): Pointer to an array of 3 doubles (x,y,z)

## Return Value

Pointer to the profile line curve