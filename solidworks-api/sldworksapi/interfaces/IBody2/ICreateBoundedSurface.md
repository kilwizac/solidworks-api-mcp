---
type: method
interface: IBody2
member: ICreateBoundedSurface
returns: void
parameters:
  -
    name: UOpt
    type: System.Boolean
    description: True if U parameter range is given in uvData, false for the entire U parameter range
  -
    name: VOpt
    type: System.Boolean
    description: True if V parameter range is given in uvData, false for the entire V parameter range
  -
    name: UvParams
    type: System.Double
    description: Array of 4 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreateBoundedSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - icreateboundedsurface
  - ibody2
  - body2
  - create
  - bounded
  - opt
  - boolean
  - uv
  - params
  - double
  - void
---

# IBody2.ICreateBoundedSurface

Creates a bounded surface from an independent base surface.

## Signature

```csharp
void ICreateBoundedSurface( 
   System.Boolean
UOpt
,
   System.Boolean
VOpt
,
   ref System.Double
UvParams
)
```
## Parameters

- `UOpt` (System.Boolean): True if U parameter range is given in uvData, false for the entire U parameter range
- `VOpt` (System.Boolean): True if V parameter range is given in uvData, false for the entire V parameter range
- `UvParams` (System.Double): Array of 4 doubles (see Remarks )

## Return Value

Unknown.

## Remarks

Before you use this method, you must call one of the base surface creation methods, such as
IBody2::ICreateBsplineSurface
.
The UOpt and VOpt arguments allow the application to supply parameter range information so that a bounded surface can be made up from part of the base surface. If UOpt and VOpt are both set to false, then SOLIDWORKS uses the entire parameter ranges. This method fails for surfaces with infinite parameter ranges.
UvParams contains 4 doubles describing the UV parameter ranges.
U parameter range
uvData[0]
and
uvData[1]
;
UvData[0]
must be less than
uvData[1]
V parameter range
uvData[2]
and
uvData[3]
;
UvData[2]
must be less than
uvData[3]
To construct a solid body from bounded surfaces, call
IPartDoc::ICreateNewBody2
first, which arranges for a placeholder for this bounded surface.

## See Also

- `IBody2.CreateBoundedSurface`