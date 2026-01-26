---
type: method
interface: ICoEdge
member: IGetCurveParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurveParams
  - ICurve
  - IEdge.GetCurveParams2
  - IEdge.IGetCurveParams
keywords:
  - igetcurveparams
  - icoedge
  - co
  - edge
  - curve
  - params
  - double
  - data
  - name
---

# ICoEdge.IGetCurveParams

Gets the curve parameters.

## Signature

```csharp
System.Double IGetCurveParams()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value format is an array of 10 doubles:
retval[0]  X startpoint
retval[1]  Y startpoint
retval[2]  Z startpoint
retval[3]  X endpoint
retval[4]  Y endpoint
retval[5]  Z endpoint
retval[6]  startParam
retval[7]  endParam
retval[8]  sense (Not used)
retval[9]  curve type (Not used)

## Examples

- Get Edge Data By Name (C++) (Get_Edge_Data_By_Name_Example_CPlusPlus_COM.htm)

## See Also

- `ICoEdge.GetCurveParams`
- `ICurve`
- `IEdge.GetCurveParams2`
- `IEdge.IGetCurveParams`