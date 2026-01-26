---
type: property
interface: ICalloutLengthVariable
member: TolerancePrecision
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutLengthVariable.Precision
keywords:
  - toleranceprecision
  - icalloutlengthvariable
  - callout
  - length
  - variable
  - tolerance
  - precision
  - int32
  - hole
  - variables
  - vb
  - net
  - vba
readonly: null
---

# ICalloutLengthVariable.TolerancePrecision

Gets or sets number of digits after the decimal point to display the primary tolerance value for the length variable in a hole callout.

## Signature

```csharp
System.Int32 TolerancePrecision {get; set;}
```
## Parameters

None.

## Return Value

Number of digits after the decimal point to display the primary tolerance value

## Remarks

Call
IDisplayDimension::SetPrecision3
to set the dual tolerance value for a display dimension for a hole callout.

## Examples

- Get and Set Hole Callout Variables (C#) (Get_and_Set_Hole_Callout_Variables_Example_CSharp.htm)
- Get and Set Hole Callout Variables (VB.NET) (Get_and_Set_Hole_Callout_Variables_Example_VBNET.htm)
- Get and Set Hole Callout Variables (VBA) (Get_and_Set_Hole_Callout_Variables_Example_VB.htm)

## See Also

- `ICalloutLengthVariable.Precision`