---
type: method
interface: IModeler
member: SetInitKnitGapWidth
returns: System.Boolean
parameters:
  -
    name: InitGapWidth
    type: System.Double
    description: Desired knitting gap width for body knitting; valid range is from 1e-8 to 0.1 meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.GetInitKnitGapWidth
keywords:
  - knit
  - bodies
  - sew
  - see
  - also
  - ibody2
  - setinitknitgapwidth
  - imodeler
  - modeler
  - init
  - gap
  - width
  - double
  - boolean
---

# IModeler.SetInitKnitGapWidth

Sets the initial gap bound width for sewing a body. Call this method before calling any calls that attempt to knit a body; for example, IBody2::CreateBodyFromSurfaces.

## Signature

```csharp
System.Boolean SetInitKnitGapWidth( 
   System.Double
InitGapWidth
)
```
## Parameters

- `InitGapWidth` (System.Double): Desired knitting gap width for body knitting; valid range is from 1e-8 to 0.1 meters

## Return Value

True if successfully set, false if not

## Remarks

This initial gap width bound is adjusted during the knitting operation in an attempt to successfully knit a body. Upon completion of the knitting operation, the value is reset to the default value.

## See Also

- `IModeler.GetInitKnitGapWidth`