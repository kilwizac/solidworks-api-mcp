---
type: method
interface: IModeler
member: ICreateLine
returns: Curve
parameters:
  -
    name: RootPoint
    type: System.Double
    description: Array containing 3 doubles (x, y, z) for the start point of the line
  -
    name: Direction
    type: System.Double
    description: Array containing 3 doubles (x, y, z) for the end point of the line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateEllipse
  - IModeler.ICreateEllipse
keywords:
  - lines
  - create
  - icreateline
  - imodeler
  - modeler
  - line
  - root
  - point
  - double
  - direction
  - curve
---

# IModeler.ICreateLine

Creates a line.

## Signature

```csharp
Curve ICreateLine( 
   ref System.Double
RootPoint
,
   ref System.Double
Direction
)
```
## Parameters

- `RootPoint` (System.Double): Array containing 3 doubles (x, y, z) for the start point of the line
- `Direction` (System.Double): Array containing 3 doubles (x, y, z) for the end point of the line

## Return Value

Newly created line

## Remarks

If your application uses
ISurface::CreateTrimmedSheet4
or
ISurface::ICreateTrimmedSheet4
, then your application must also use
ICurve::CreateTrimmedCurve2
for the curves created by
IModeler::CreateArc
or
IModeler::ICreateArc
and
IModeler::CreateLine
or IModeler::ICreateLine.

## See Also

- `IModeler.CreateEllipse`
- `IModeler.ICreateEllipse`