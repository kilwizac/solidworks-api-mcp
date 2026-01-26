---
type: method
interface: IDetailCircle
member: SetParameters
returns: System.Boolean
parameters:
  -
    name: XPosition
    type: System.Double
    description: x location of the detail circle
  -
    name: YPosition
    type: System.Double
    description: y location of the detail circle
  -
    name: Radius
    type: System.Double
    description: Size of the radius of the detail circle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - setparameters
  - idetailcircle
  - detail
  - circle
  - parameters
  - position
  - double
  - radius
  - boolean
---

# IDetailCircle.SetParameters

Sets the location and size of this detail circle.

## Signature

```csharp
System.Boolean SetParameters( 
   System.Double
XPosition
,
   System.Double
YPosition
,
   System.Double
Radius
)
```
## Parameters

- `XPosition` (System.Double): x location of the detail circle
- `YPosition` (System.Double): y location of the detail circle
- `Radius` (System.Double): Size of the radius of the detail circle

## Return Value

True if the detail circle is created at the specified location and at the specified size, false if not

## Remarks

Use
IModelDoc2::EditRebuild3
to update the drawing, including the detail circle.