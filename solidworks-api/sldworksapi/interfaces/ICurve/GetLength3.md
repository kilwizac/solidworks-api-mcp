---
type: method
interface: ICurve
member: GetLength3
returns: System.Double
parameters:
  -
    name: StartParam
    type: System.Double
    description: Start parameter
  -
    name: EndParam
    type: System.Double
    description: End parameter
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - length
  - curve
  - see
  - also
  - icurve
  - getlength3
  - length3
  - start
  - param
  - double
  - end
---

# ICurve.GetLength3

Gets the length of a curve between the specified parameters.

## Signature

```csharp
System.Double GetLength3( 
   System.Double
StartParam
,
   System.Double
EndParam
)
```
## Parameters

- `StartParam` (System.Double): Start parameter
- `EndParam` (System.Double): End parameter

## Return Value

Length of the curve between the two parameters

## Remarks

This method returns the length of the holding (e.g., trimmed) curve and not the base curve. The now obsolete
ICurve::Length2
returned the length of the base curve.